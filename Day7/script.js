document.addEventListener('keydown', function(event) {
    // Create an array to hold pressed modifier keys
    const modifiers = [];

    // Check for modifier keys and add them to the array
    if (event.ctrlKey && event.key !== 'Control') modifiers.push('Ctrl');
    if (event.altKey && event.key !== 'Alt') modifiers.push('Alt');
    if (event.shiftKey && event.key !== 'Shift') modifiers.push('Shift');
    if (event.metaKey && event.key !== 'Meta') modifiers.push('Meta'); // for Mac command key

    // Determine the key description using if-else
    console.log(modifiers);
    let keyDescription;
    if (modifiers.length > 0) {
        keyDescription = `${modifiers.join(' + ')} + ${event.key}`;
        
    } else {
        keyDescription = `Key: ${event.key}`;
    }

    // Remove the redundant modifier key description
    // if (modifiers.includes(event.key)) {
    //     keyDescription = `Key: ${event.key}`;
    // }

    // Update the display with key and keycode information
    document.getElementById('keyName').textContent = keyDescription;
    document.getElementById('keyCode').textContent = `KeyCode: ${event.keyCode}`;
});
