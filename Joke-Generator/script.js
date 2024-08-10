
import {jokeKey} from "./secret.js"
let resultContainer = document.getElementById('jokeContainer');
async function getJoke(jokes) {
    try{
        let response = await fetch(jokeKey);
        let joke = await response.json();
        resultContainer.innerText = joke.jokeContent;
    }catch(e){
        console.error('Error:', e);
        return;
    }
}
getJoke()
document.getElementById("getJokeBtn").addEventListener('click', getJoke)
