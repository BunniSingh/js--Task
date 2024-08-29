let loder = document.getElementById('loder');
async function ShowDetailsOnUI(){
    let params = new URLSearchParams(window.location.search);
    let coinName = params.get('id');
    loder.style.display = 'block';
    let response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinName}`);
    let data = await response.json();
    let resultContainer = document.querySelector('.details-section');
    loder.style.display = 'none';
    resultContainer.innerHTML = `
        <div class="result-container animate__animated animate__zoomIn">
            <div class="img-logo">
                <img src="${data.image.large}" alt="coin-logo">
                <h4 class="bold">
                    Price History
                </h4>
            </div>
            <div class="coin-info">
                <h1 class="bold">${data.name} (${data.symbol})</h1>
                <div class="conversion-price">
                    <span>₹ ${data.market_data.current_price.inr}</span>
                    <span>$ ${data.market_data.current_price.usd}</span>
                    <span>€ ${data.market_data.current_price.eur}</span>
                    <span>£ ${data.market_data.current_price.gbp}</span>
                </div>
                <div class="description">
                    <h3>Description:</h3>
                    <p>${data.description.en}</p>
                    <h3 class="bold">Official Website: <a href="${data.links.homepage[0]}" target="_blank"> Click here</a></h3>
                </div>
            </div>
        </div>
    `
}

ShowDetailsOnUI();