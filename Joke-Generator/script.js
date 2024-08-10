

let resultContainer = document.getElementById('jokeContainer');
async function getJoke(jokes) {
    try{
        let response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=093506482bcd69d0b27935e2952c');
        let joke = await response.json();
        resultContainer.innerText = joke.jokeContent;
    }catch(e){
        console.error('Error:', e);
        return;
    }
}
getJoke()
document.getElementById("getJokeBtn").addEventListener('click', getJoke)
