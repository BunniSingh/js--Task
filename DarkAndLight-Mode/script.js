let btn = document.getElementById('toggleMode');
let body = document.querySelector('#container');
let messege = document.querySelector('#message');
let circle = document.querySelector("#circle");

let slider = document.querySelector('#btn');

circle.addEventListener('click', function(e){
    lightandDarkMode()
 });


 function lightandDarkMode(){
     circle.style.backgroundColor = '#fff';
    if (body.classList.contains('light-mode')) {
        circle.classList.remove("moveLeft");
        circle.classList.add("moveRight");
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        messege.textContent = 'Dark Mode ON';
        circle.style.backgroundColor = '#84cf2f';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        messege.textContent = 'Dark Mode OFF';
        circle.classList.remove("moveRight");
        circle.classList.add("moveLeft");
    }
 }

 lightandDarkMode();