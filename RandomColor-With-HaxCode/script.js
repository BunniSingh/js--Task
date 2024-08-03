
let createEle = "";
for(let i=0; i < 100; i++){
    createEle += `<div class="bgColor"></div>`
}

console.log(createEle);

function generateColor(){
    let container = document.querySelector('.container');
    container.innerHTML = createEle;
    let bgContainer = document.querySelectorAll('.bgColor');
    let haxCode = document.querySelector('.hexCode');
    
    bgContainer.forEach(function(ele){
        let color = '#' + Math.floor(Math.random()*16777215).toString(16);
        ele.style.backgroundColor = color;
        ele.textContent = color;
    });
}
generateColor();