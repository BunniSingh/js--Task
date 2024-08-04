let input_field = document.querySelector('#text-area');
let color_input = document.querySelector('#color');
let btn = document.querySelector('#btn');

let container = document.querySelector('.notes-container');



// console.log(input_field, color_input, btn, container);
function removeNote(){
    
    let closeBtns = document.querySelectorAll('.close-btn');
    closeBtns.forEach((ele)=>{
        ele.addEventListener('click', (e) =>{
            ele.parentElement.remove();
        })
    })
}

function addNote(note, color){
    let div1 = document.createElement('div');
    div1.classList.add('note-container');
    div1.innerHTML = `<p class="text-note">${note}</p> <button class="close-btn">X</button>`;
    container.appendChild(div1);
    div1.style.backgroundColor = `${color}`;
    if(container.children.length > 1){
        document.querySelector('#note-feed').style.display = 'none';
    }else{
        document.querySelector('#note-feed').style.display = 'block';
    }
    input_field.value = "";
    
}

btn.addEventListener('click', (event) => {
    if(input_field.value === ""){
        alert("Please enter a note");
        return;
    }
    addNote(input_field.value, color_input.value);
    removeNote();
}); 

