let btn = document.getElementById('toggleMode');
let body = document.querySelector('#container');
let messege = document.querySelector('#message');
let circle = document.querySelector("#circle");

let slider = document.querySelector('#btn');

circle.addEventListener('click', function(e){
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        messege.textContent = 'Dark Mode OFF';
        circle.classList.remove("moveRight");
        circle.classList.add("moveLeft");
    } else {
        circle.classList.remove("moveLeft");
        circle.classList.add("moveRight");
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        messege.textContent = 'Dark Mode ON';
    }
 });