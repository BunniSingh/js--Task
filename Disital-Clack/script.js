let hour_H = document.querySelector("#hour");
let minute_H = document.querySelector("#minute");
let second_H = document.querySelector("#second");
let meridian_H = document.querySelector("#meridian");

// console.log(hour_H, minute_H, second_H, meridian);


function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let meridian = hour >= 12? "PM" : "AM";
    hour = hour % 12 || 12;

    hour_H.innerText = hour < 10 ? "0" + hour : hour;
    minute_H.innerText = minute < 10? "0" + minute : minute;
    second_H.innerText = second < 10? "0" + second : second;

    meridian_H.innerText = meridian;
}

updateClock();


setInterval(()=>{
    updateClock();
 
}, 1000);