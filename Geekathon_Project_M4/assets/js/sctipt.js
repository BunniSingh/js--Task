// let apiKey = 'AIzaSyCYHoDEeJA9EtmL9YY8SJbckxkK1J8VM0o'; //google key
// let apiKey = 'b80c69b2c13c284e2817f5d41dc7108b';
let apiKey = '3e5b795d085fea5f0aeb45fbbef401a3';
let searchInputElement = document.getElementById('searchInput');

let searchButton = document.getElementById('searchBtn');
let searchResultElement = document.getElementById('searchResults');


searchButton.addEventListener('click', function (e) {
    console.log('Search  button clicked')
    e.preventDefault();
    let query = searchInputElement.value;
    searchResultElement.innerHTML = '';
    let getdata = async function () {
        // Fetch data from the API using async/await syntax
        try {
            let response = await fetch(`https://api.serpstack.com/search?access_key=${apiKey}&type=web&query=${encodeURIComponent(query)}`);
            let data = await response.json();
            console.log(data);
            data.organic_results.forEach(element => {
                console.log(element);
                let newDiv = document.createElement('div');
                newDiv.className = 'result'
                newDiv.innerHTML = `
                <h3><a href="${element.url}" target="_blank">${element.title}</a></h3>
                <p class="displayed_url">${element.displayed_url}</p>
                <p class="snippet">${element.snippet}</p>
                <a href="${element.url}" target="_blank" class="domain">${element.domain}</a>
                `

                searchResultElement.appendChild(newDiv);
            });
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    getdata();
});