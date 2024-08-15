let apiKey = 'xvoOXzCXrOuJJKKMcRNjIAyfBu-0cYsLOaxpKwR8zT8';
let imgContainer = document.querySelector('#container');
let ready = false;
async function getImages(){
    ready = true;
    let response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=20`);
    let data = await response.json();
    data.forEach(image => {
        let img = document.createElement('img');
        img.src = image.urls.small;
        imgContainer.appendChild(img);
    });
    ready = false;
}


window.addEventListener('scroll', () => {
    if( !ready && window.scrollY + window.innerHeight + 100 >= document.body.offsetHeight ){
        getImages();
    }   
})

getImages();