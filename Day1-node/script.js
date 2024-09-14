

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function findDuplicate(arr) {
    for(let i = 0; i < arr.length; i++) {
        if( i < arr.length - 1 && arr[i] == arr[i + 1]){
            return arr[i];
        }
    }
    return 'No duplicates in the array';
}


console.log(findDuplicate(arr));


// const imgs = document.getElementById("imgs");
// const leftBtn = document.getElementById("left");
// const rightBtn = document.getElementById("right");

// const img = document.querySelectorAll("#imgs img");

// let idx = 0;

// let interval = setInterval(run, 2000);

// function run() {
//   idx++;
//   changeImage();
// }

// function changeImage() {
//   if (idx > img.length - 1) {
//     idx = 0;
//   } else if (idx < 0) {
//     idx = img.length - 1;
//   }

//   imgs.style.transform = `translateX(${-idx * 500}px)`;
// }

// function resetInterval() {
//   clearInterval(interval);
//   interval = setInterval(run, 2000);
// }

// rightBtn.addEventListener("click", () => {
//   idx++;
//   changeImage();
//   resetInterval();
// });

// leftBtn.addEventListener("click", () => {
//   idx--;
//   changeImage();
//   resetInterval();
// });
