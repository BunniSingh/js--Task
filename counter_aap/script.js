let decreasing = document.getElementById('decrease');
let inputval = document.getElementById('counter');
let increasing = document.getElementById('increase');

console.log(decreasing, increasing, inputval);

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

inputval.addEventListener('keypress', (e) => {
    if (!isNaN(e.key)) {
        setTimeout(() => { 
            counter = parseInt(inputval.value, 10); 
            console.log(counter); 
        }, 0);
    }else{
        e.preventDefault();
        alert('Please enter Valid Number');
    }
})