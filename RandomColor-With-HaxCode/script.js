
let createEle = "";
for(let i=0; i < 100; i++){
    createEle += `<div class="bgColor"></div>`
}



// Select the notification element and text span
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');

// Function to show notification
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.remove('hidden');
    notification.classList.add('visible');

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('visible');
        notification.classList.add('hidden');
    }, 3000);
}

function generateColor(){
    let container = document.querySelector('.container');
    container.innerHTML = createEle;
    let bgContainer = document.querySelectorAll('.bgColor');
    let haxCode = document.querySelector('.hexCode');
    
    bgContainer.forEach(function(ele){
        let color = '#' + Math.floor(Math.random()*16777215).toString(16);
        ele.style.backgroundColor = color;
        ele.textContent = color;
        ele.addEventListener('click', (e) =>{
            // Get the text content of the clicked box
            const textToCopy = e.target.innerText;

            // Use the Clipboard API to write the text to the clipboard
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // Notify the user that the text has been copied
                    showNotification(`Copied: "${textToCopy}"`);
                })
                .catch(err => {
                    // Handle errors if the text could not be copied
                    console.error('Failed to copy text: ', err);
                });
        })
    });
}
generateColor();