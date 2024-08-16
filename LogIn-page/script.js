

let arr = JSON.parse(localStorage.getItem('userData')) || [];
function storDetaInLocalStorage() {
    let name = document.forms['myForm']['name'].value;
    let email = document.forms['myForm']['email'].value;
    let password = document.forms['myForm']['password'].value;
    let confirmPassword = document.forms['myForm']['confirm-password'].value;
    let checkBox = document.getElementById("terms");
    let data = {
        id: new Date().getTime(),
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
    arr.push(data);
    localStorage.setItem('userData', JSON.stringify(arr));

    // Reset form fields
    document.forms['myForm']['name'].value = '';
    document.forms['myForm']['email'].value = '';
    document.forms['myForm']['password'].value = '';
    document.forms['myForm']['confirm-password'].value = '';
    document.getElementById("terms").checked = false;
}


function checkEmail(email) {
    let result = arr.some((data) => {
        return data.email === email;
    })
    return !result;
}
checkEmail();
function validateForm() {
    let name = document.forms['myForm']['name'].value;
    let email = document.forms['myForm']['email'].value;
    let password = document.forms['myForm']['password'].value;
    let confirmPassword = document.forms['myForm']['confirm-password'].value;
    let checkBox = document.getElementById("terms");

    if (name === '' || email === '' || password === '' || confirmPassword === '' || !checkBox.checked) {
        alert('Please fill all required fields and agree to terms and conditions');
        return false;
    }

    // let namePattern = /^[a-zA-Z]+$/;
    // if (!namePattern.test(name)) {
    //     alert('Please enter a valid name');
    //     return false;
    // }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    } else {
        if (checkEmail(email)) {
            storDetaInLocalStorage();
            alert('Form submitted successfully');
            return true;
        } else {
            alert('User already exists');
            return false;
        }
    }
}

document.getElementById('btn').addEventListener('click', (e) => {
    // e.preventDefault();
    validateForm();
})