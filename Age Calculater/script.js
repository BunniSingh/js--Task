let result = document.querySelector(".result");
let dob = document.getElementById("dob");
let btn = document.getElementById("submit");
let getAge = 0;
dob.addEventListener("input", function(event){
    event.preventDefault();
    let dobYear = new Date(event.target.value).getFullYear();

    let currentYear = new Date().getFullYear();
    let age = currentYear - dobYear;
    if(age <= 0){
        getAge = alert("Please Enter Valid Input");
    }else{
        getAge = age;
    }
    
});
console.log(getAge);
btn.addEventListener("click", function(event){
    event.preventDefault();
    if(dob.value){
        result.innerText = `You are ${getAge} years old🌞`;
    }else{
        result.innerText = "Please Enter Your Date of Birth ���";
    }
    
});
