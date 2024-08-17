let data = JSON.parse(localStorage.getItem('userData'));
// console.log(data);

let btn = document.getElementById('btn');

function validationCheck() {
    let email = document.forms['myForm']['email'];
    let password = document.forms['myForm']['password'];
    let term = document.forms['myForm']['terms'];

    if (email.value == "" || password.value == "" || term.checked == false) {
        alert("All fields are required");
        return false;
    }

    let check = data.some((item) => {
        return  item.email == email.value && item.password == password.value;
    })
    console.log(check);
    if(check){
        alert("Login Successful");
        localStorage.setItem('isLoggedIn', true);
        // window.location.href = "dashboard.html";
        email.value = "";
        password.value = "";
        term.checked = false;
        return true;
    }else{
        alert("Invalid email or password");
        return false;
    }
}



btn.addEventListener('click', validationCheck);