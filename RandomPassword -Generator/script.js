

function createPassord(){
    let pass = "AbcD12453#%^*41584547";

    let newPassword = "";
    for (let i = 0; i < 10; i++) {
        let password = Math.floor(Math.random() * pass.length);
        newPassword += pass.charAt(password);
    }
    document.querySelector('.showPassword').innerText = newPassword;
}