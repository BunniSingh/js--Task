let btn = document.querySelector("#btn");
let changeColor = document.querySelector("#color");
let colorCode = document.querySelector("#colorCode");
let changeSape = document.querySelector("#sape");
changeSape.id = "trangle"

btn.addEventListener("click", function(e){
    if(e.target.innerText === "CHANGE SAPE"){
        let sapeId = randomSapeChanger();
        changeSape.id = sapeId;
       
    }
    else{
        randomColorChanger();
    }
})

let sapeArr = ['square', 'trangle', 'hexagon', 'pentogon', 'rightPoint', 'heptagon', 'leftPoint', 'rabbet', 'leftAero', 'rightAero', 'leftChevron','rihtChevron', 'cross', 'frame', 'close', 'messege'];

function randomSapeChanger(){
    let randomidx = Math.floor(Math.random() * sapeArr.length);
    // console.log(randomidx);
    return sapeArr[randomidx];

}
randomSapeChanger()
function randomColorChanger(){
    // console.log(e.target.innerText);
        // let randomColor = Math.floor(Math.random() * 255);
        let random = Math.floor(Math.random() * 16777215);
        let randomColorCode = `#${random.toString(16)}`;
        changeColor.style.backgroundColor = randomColorCode;
        colorCode.innerText = randomColorCode;
}
randomColorChanger()