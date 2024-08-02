let input_field = document.getElementById('dob');
let days = document.getElementById('day');
let months = document.getElementById('month');
let years = document.getElementById('year');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    e.preventDefault();

    let dob = new Date(input_field.value);
    let curr_date = new Date();

    let diff = curr_date - dob;
    let diff_date = new Date(diff);
    let year = diff_date.getFullYear() - 1970;
    let month = diff_date.getMonth();
    let day = diff_date.getDate();
    // console.log(year);
    // console.log(month);
    // console.log(day);
    
    if(dob.toString() === "Invalid Date"){
        alert('Please Your "Date Of Birth" first👇');
        days.innerText = 0;
        months.innerText = 0;
        years.innerText = 0;
        return;
    }

    if (dob > curr_date){
        alert('Please select valid date');
        return;
    }else{
        years.innerText = year;
        months.innerText = month;
        days.innerText = day;
    }
});