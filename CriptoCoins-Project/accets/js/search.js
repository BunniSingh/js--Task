// 

let resultsContainer = document.getElementById('searchResult');
let searchBtn = document.getElementById('searchBtn');
let loder = document.getElementById('loder');

function showCoinInfo(id){
    window.location.href = `./details.html?id=${id}`;
}

// Fetching Coin Data
searchBtn.addEventListener('click', async function(){
    resultsContainer.innerHTML = '';
    let query = document.querySelector('#searchInput');
    if(!query.value){
        resultsContainer.innerText = 'Enter valid Input!!!'
        resultsContainer.style.color = "red";
        resultsContainer.style.fontSize = "2rem";
        return;
    };
    loder.style.display = 'block';
    let response = await fetch(`https://api.coingecko.com/api/v3/search?query=${query.value}`)
    let data = await response.json();
    loder.style.display = 'none';
    data.coins.forEach(function(coin,idx) {
        resultsContainer.innerHTML += `
            <div class="coin-cards animate__animated animate__fadeInDown">
                <div class="coinHeading">
                    <span>${idx + 1}</span>
                    <img src="${coin.thumb}" alt="coin-img-logo">
                    <h2>${coin.name} <span class="bold">(${coin.symbol})</span></h2>
                </div>
             <button onclick="showCoinInfo('${coin.id}')" class="infoBtn">More Info</button>
         </div>
        `
    });
    query.value = '';
});
