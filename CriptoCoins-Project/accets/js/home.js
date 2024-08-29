let cardsContainer = document.querySelector(".cards-container");


async function getDataFromApi(){
    try {
        let response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        let data = await response.json();
        displayCards(data.coins);
        // console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getDataFromApi()

function displayCards(data){
    cardsContainer.innerHTML = "";
    data.forEach(card_items => {
        cardsContainer.innerHTML += `
            <div class="card">
                <img src="${card_items.item.small}" alt="card-icons">
                <div class="card-info">
                    <h2>${card_items.item.slug} (${card_items.item.symbol})</h2>
                    <p>₹ ${card_items.item.data.price_change_percentage_24h.inr.toFixed(4)}</p>
                </div>
            </div>
        `
    })

    let cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            window.location.href = `details.html?id=${data[index].item.id}`
        });
    });
}