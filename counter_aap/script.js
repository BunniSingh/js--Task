let decreasing = document.getElementById('decrease');
let inputval = document.getElementById('counter');
let increasing = document.getElementById('increase');

let counter = 1;
inputval.value = counter;
decreasing.addEventListener('click', () =>{
    if(counter > 1){
        counter--;
        inputval.value = counter;
    }
});
increasing.addEventListener('click', () => {
    counter++;
    inputval.value = counter;
});

inputval.addEventListener('keyup', (e) => {
    if (!isNaN(e.target.value)) {
        // setTimeout(() => { 
        //     counter = parseInt(inputval.value); 
        //     console.log(counter); 
        // }, 0);
        counter = parseInt(inputval.value);
    }else{
        e.preventDefault();
        alert('Please enter Valid Number');
    }
})