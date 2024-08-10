let hour = document.querySelector('#hour');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let milliseconds = document.querySelector('#milliseconds');

let timer = null;
let startTime = 0;
let stopTime = 0;
let isRunning = false;


function start(){
    if(!isRunning){
        startTime = Date.now() - stopTime;
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        stopTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    stopTime = 0;
    startTime = 0;
    isRunning = false;
    hour.innerText = '00';
    minutes.innerText = '00';
    seconds.innerText = '00';
    milliseconds.innerText = '00';

}

function updateTime(){
    let currentTime = Date.now() - startTime;
    let h = Math.floor(currentTime / 3600000).toString().padStart(2, '0');
    let m = Math.floor((currentTime % 3600000) / 60000).toString().padStart(2, '0');
    let s = Math.floor((currentTime % 60000) / 1000).toString().padStart(2, '0');
    let ms = Math.floor(currentTime % 1000 / 10).toString().padStart(2, '0');
    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    milliseconds.innerText = ms;

}

