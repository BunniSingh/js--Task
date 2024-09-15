let input = document.getElementById('length');
let checkUppercase = document.getElementById('include-uppercase');
let checkLowercase = document.getElementById('include-lowercase');
let checkNumber = document.getElementById('include-numbers');
let checkSymbol = document.getElementById('include-symbols');

function generatePassword() {
    //validate input
    if(input.value < 8 || input.value > 30){
        alert('Length should be between 8 and 30 characters');
        return;
    }

    //apply checks
    let hasUppercase = checkUppercase.checked;
    let hasLowercase = checkLowercase.checked;
    let hasNumber = checkNumber.checked;
    let hasSymbol = checkSymbol.checked;

    // check All checkboxes
    if(!hasLowercase && !hasUppercase && !hasNumber && !hasSymbol){
        alert('Please select at least one character type');
        return;
    } 
    
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = uppercase.toLowerCase();
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    
    let res = '';
    if(hasUppercase){
        res += uppercase;
    }
    if(hasLowercase){
        res += lowercase;
    }
    if(hasNumber){
        res += numbers;
    }
    if(hasSymbol){
        res += symbols;
    }
    //set password
    let length = input.value;
    let password = '';
    for(let i = 0; i < length; i++){
        let idx = Math.floor(Math.random() * res.length);
        password += res.charAt(idx);
    }
    document.getElementById('password').innerText = password;
}

function copyPassword(){
    let password = document.getElementById('password').innerText;
    if(password.length == ''){
        alert('No password to copy');
        return;
    }
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
}