console.log(document);
let container = document.querySelectorAll('.container');

console.log(container);
let newElement = document.createElement('div');
newElement.setAttribute('class', 'create-container');


newElement.innerText = "This is a dinamically Created Element";

container.forEach(ele => {
    ele.appendChild(newElement);
})

