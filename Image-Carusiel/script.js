let imgs = document.querySelector('.image-carousel').children;
console.log(imgs);

let counter = 0;
Array.from(imgs).forEach((ele, idx) => {
    ele.style.top = `${idx * 100}%`;
})

function autoSlide(){
    setInterval(()=>{
        counter++;
        if(counter >= imgs.length) counter = 0;
        slideImage();
    }, 3000);
}

autoSlide();
function getNextOrPrivious(n){
    counter += n;
    if(counter >= imgs.length) counter = 0;
    if(counter < 0) counter = imgs.length - 1;
    slideImage();
}
function slideImage(){
    Array.from(imgs).forEach((ele) =>{
        ele.style.transition = 'all 0.5s ease-in-out';
        ele.style.transform = `translateY(-${counter * 100}%)`;
    })
}
