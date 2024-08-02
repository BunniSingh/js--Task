
window.addEventListener('keydown', (e) => {
    let arr = [];
    if(e.ctrlKey && e.key !== 'Control') arr.push('Ctrl');
    if(e.shiftKey && e.key !== 'Shift') arr.push('Shift');
    if(e.metaKey && e.key !== 'Meta') arr.push('Meta');
    if(e.altKey && e.key !== 'Alt') arr.push('Alt');

    let result;
    if(arr.length > 0) {
        result = arr.join('+') + ' + ' +  e.key;
    }else{
        result = e.key;
    }

     document.getElementById('keyName').textContent = result;
     document.getElementById('keyCode').textContent = e.keyCode;

     console.log(arr);
});