let search = document.querySelector("#search");

search.addEventListener('keyup', function(event){
    // fun();
    debouncefun();
})

let count = 0;
function fun() {
    console.log(search.value,  ++count)
}

function debounc(func, delay){
    let timer = null;
    return function(){
       if(timer)clearTimeout(timer);
        timer = setTimeout(func, delay);
    }
}

let debouncefun = debounc(fun , 1000)