// console.log(document);
// let container = document.querySelectorAll('.container');

// console.log(container);
// let newElement = document.createElement('div');
// newElement.setAttribute('class', 'create-container');


// newElement.innerText = "This is a dinamically Created Element";

// container.forEach(ele => {
//     ele.appendChild(newElement);
// })


// let val = "foo";
// (function() {
//     console.log("This old " + val);
//     // let val = "bar";
//     console.log("This new " + val);
// })();

// console.log(y);
// y = 1;
// console.log(y);
// var y = 2;

// y = 3;
// console.log(y);
// var y;

// var val = 2;
// let val;
// console.log(val);

function foo() {
    console.log("Hello from foo" + y);
}
console.log("global foo" + y);
var y = 1;
foo();