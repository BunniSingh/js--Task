let keyName = document.getElementById("keyName");
let keyCode = document.getElementById("keyCode");
let h1 = document.getElementsByTagName('h1');
// console.log(keyName, keyCode);
window.addEventListener("keydown", function(e) {
    keyName.innerText = e.key;
    keyCode.innerText = e.keyCode;
    h1[0].innerText = "You pressed"
});