let fNameH = document.getElementById('fName');
let lNameH = document.getElementById('lName');
let countryH = document.getElementById('country');
let phoneNumberH = document.getElementById('phoneNumber');
let stateH = document.getElementById('state');
let cityH = document.getElementById('city');
let villageH = document.getElementById('village');

let userObj = JSON.parse(localStorage.getItem('userDetails'));
window.addEventListener('load', () => {
    if(userObj){
        fNameH.innerText = userObj.firstName;
        lNameH.innerText = userObj.lastName;
        countryH.innerText = userObj.country;
        phoneNumberH.innerText = userObj.phoneNumber;
        stateH.innerText = userObj.state;
        cityH.innerText = userObj.city;
        villageH.innerText = userObj.village;
    }else{
        alert('No saved details found. Please enter your details.');
        getDetails();
    }
})

function getDetails(){
    let firstName = prompt('Enter your first name');
    let lastName = prompt('Enter your last name');
    let country = prompt('Enter your country');
    let phoneNumber = prompt('Enter your phone number');
    let state = prompt('Enter your state');
    let city = prompt('Enter your city');
    let village = prompt('Enter your village');

    let userDetails = {
        firstName: firstName,
        lastName: lastName,
        country: country,
        phoneNumber: phoneNumber,
        state: state,
        city: city,
        village: village
    }

    let obj = JSON.stringify(userDetails);
    localStorage.setItem('userDetails', obj);


    fNameH.innerText = userDetails.firstName;
    lNameH.innerText = userDetails.lastName;
    countryH.innerText = userDetails.country;
    phoneNumberH.innerText = userDetails.phoneNumber;
    stateH.innerText = userDetails.state;
    cityH.innerText = userDetails.city;
    villageH.innerText = userDetails.village;
    alert('Your details have been successfully saved!');

}

getDetails();