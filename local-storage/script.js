
let textarea = document.getElementById('text');
let input = ""|| JSON.parse(localStorage.getItem('UserNote'));

textarea.value = input;

function showStatus(){
    let saveStatus = document.getElementById('status');
    saveStatus.style.display = 'block';
    setTimeout(() =>{
        saveStatus.style.display = 'none';
    },2_000);
}
textarea.addEventListener('keyup', function(e){
    showStatus();
    console.log(e.target.value);
    let data =  e.target.value;
    localStorage.setItem('UserNote', JSON.stringify(data));

});