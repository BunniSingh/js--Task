// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box');

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

// Add a click event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Get the text content of the clicked box
        const textToCopy = box.textContent;

        // Use the Clipboard API to write the text to the clipboard
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Show a custom notification
                showNotification(`Copied: "${textToCopy}"`);
            })
            .catch(err => {
                // Handle errors if the text could not be copied
                console.error('Failed to copy text: ', err);
            });
    });
});
