function order(){
    let product = "Nike shoe";
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            let status = false ;
        if(status){
            resolve(`product ${product} is deleverd`);
        } else{
            reject("Product not available");
        }
        },2000)
    })
}

document.getElementById("btn").addEventListener("click", function(e){
    let status = document.getElementById("status");
    order().then((res)=>{
        console.log(res);
        status.innerText = res;
    }).catch((err)=>{
        console.log(err);
        status.innerText = err;
    })
})