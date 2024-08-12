let burger = document.getElementById('burger');
let fries = document.getElementById('friese');
let drink = document.getElementById('drink');
let inform_user = document.querySelector('.inform');
let orderNumber = document.querySelector('#number');
let btn = document.getElementById('button');
let imageContainer = document.getElementById('imageContainer');

let message =  document.getElementById('message');
function takeOrder(food) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Your order has been placed, ${food.join(', ')} is on its way.`);
        }, 2000);
    });
}

btn.addEventListener('click', async function (e) {
    e.preventDefault();
    message.innerText = "";
    imageContainer.style.display = 'none';
    inform_user.style.display = 'block';
    inform_user.style.color = 'black';

    // Collect selected items
    let selectedItems = [];
    let images = [];

    if (burger.checked) {
        selectedItems.push(burger.id);
        images.push('./order_img/burger.avif'); // Image file path for burger
    }
    if (fries.checked) {
        selectedItems.push(fries.id);
        images.push('./order_img/friese.jpg'); // Image file path for fries
    }
    if (drink.checked) {
        selectedItems.push(drink.id);
        images.push('./order_img/drink.jpg'); // Image file path for drink
    }

    if (selectedItems.length === 0) {
        inform_user.innerText = 'Please select at least one item.';
        inform_user.style.color = 'red';
        setTimeout(() => {
            inform_user.style.display = 'none';
        }, 2000);
        return;
    }

    // Display order number and message
    orderNumber.innerText = randomOrderNumber();
    inform_user.innerText = `Your order for ${selectedItems.join(' and ')} has been placed!!!`;

    // Wait for order to be prepared
    let food = await takeOrder(selectedItems);
    inform_user.innerText = food;

    // Display images based on selected items
    setTimeout(() => {
        displayImages(images);
    }, 4000);

    setTimeout(() => {
        message.innerText = `Enjoy your ${selectedItems.join(' and ')}, Thank you for your order`;
    },5000)

    setTimeout(() => {
        inform_user.style.display = 'none';
    }, 3000);
});

function displayImages(images) {
    imageContainer.innerHTML = ''; // Clear previous images
    images.forEach(src => {
        imageContainer.style.display = 'block';
        let img = document.createElement('img');
        img.src = src;
        img.alt = src.split('.')[0];
        img.style.width = '200px'; 
        img.style.height = '250px';
        img.style.margin = '10px';
        imageContainer.appendChild(img);
    });


}

function randomOrderNumber() {
    let random = "1234567890";
    let num = "";
    for (let i = 0; i < 3; i++) {
        let idx = Math.floor(Math.random() * random.length);
        num += random.charAt(idx);
    }
    return num;
}
