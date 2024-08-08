let container = document.querySelector(".container");
let emojiContainer = document.querySelector(".feedback-rating");
let btn = document.getElementById("btn");
let feedback_Container = document.querySelector(".feedback-container");
let selectRating = document.querySelector("#selectRating");

let emojiObj = {
    Happy: "😊",
    Natural: "😑",
    Unhappy: "😔"
}


let fleg = false;
document.querySelectorAll('.rating').forEach((box)=>{
    box.addEventListener('click', function(e){
        fleg = true;
        removebg();
        showRating(box.id, box);
    })
})

function showRating(rating , box){
    box.classList.add("bg-color");
    btn.addEventListener("click", ()=>{
        // console.log(fleg);
    if(fleg){
        container.style.display = 'none';
        feedback_Container.style.display = 'flex';
        selectRating.innerText = `${rating} ${emojiObj[rating]}`
        box.classList.remove("bg-color");
        setTimeout(()=>{
            container.style.display = 'flex';
            feedback_Container.style.display = 'none';
            location.reload()
        },4_000);
    }else{
        alert("Please choose an any rating first👇");
    }
    });
}

function removebg(){
    document.querySelectorAll('.rating').forEach((box)=>{
        box.classList.remove("bg-color");
    })
}