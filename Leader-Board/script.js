let data = [];
let fName = document.querySelector('#firstName');
let lName = document.querySelector('#lastName');
let pCountry = document.querySelector('#country');
let pScore = document.querySelector('#score');
let btn = document.querySelector('#btn');
let worn = document.querySelector(".alert");
let sectionContainer = document.querySelector('.section2');


function activeData(){
    let section = document.querySelectorAll('.details');
    section.forEach(function(item , index){
        item.addEventListener('click', (event) => {
            // console.log(event);
            // console.log(event.target.className);
            // console.log(event.target.className === "remove");
            if(event.target.className === "remove" || event.target.className === "fa-solid fa-trash-can"){
                data.splice(index, 1);
                updateDataUi();
            }
            if(event.target.className === "decrease"){
                if(data[index].score > 5){
                    let getScore = parseInt(data[index].score);
                    getScore -= 5;
                    data[index].score = getScore;
                    updateDataUi();
                }
            }
            if(event.target.className === "increase"){
                let getScore = parseInt(data[index].score);
                getScore += 5;
                data[index].score = getScore;
                updateDataUi();
            }
        });
    });
}
// activeData();

let curr_date = new Date().toDateString();
function updateDataUi(){
    data.sort(function(a,b){
        return b.score - a.score;
    })

    let showData = '';
    data.forEach(function(data){
        showData += `<div class="details">
            <div class="name">
                <p id="playerName">${data.firstName} ${data.lastName}</p>
                <p class="date">${curr_date}</p>
            </div>
            <p class="countryName">${data.country}</p>
            <p class="playerScore">${data.score}</p>
            <button class="remove"><i class="fa-solid fa-trash-can"></i></button>
            <button class="decrease">-5</button>
            <button class="increase">+5</button>
        </div>`

    })
    sectionContainer.innerHTML = showData;
    activeData();
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(fName.value === '' || lName.value === '' || pScore.value === '' || pCountry.value === ''){
        worn.innerText = `All fields are required`
        return;
    }
    else{
        worn.innerText = '';
        let playerObj = {
            firstName: fName.value,
            lastName: lName.value,
            country: pCountry.value,
            score: parseInt(pScore.value)
        }
        data.push(playerObj);
        // console.log(data);
        // console.log(playerObj);
        updateDataUi();
        
        fName.value = "";
        lName.value = "";
        pCountry.value = "";
        pScore.value = "";
    }
});

