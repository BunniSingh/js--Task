// 

let resultsContainer = document.getElementById('searchResult');
let searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async function(){
    resultsContainer.innerHTML = '';
    let query = document.querySelector('#searchInput');
    if(!query.value) return;
    let response = await fetch(`https://api.coingecko.com/api/v3/search?query='${query.value}'&`)
    let data = await response.json();
    console.log(data);
});
