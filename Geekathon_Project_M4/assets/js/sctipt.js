// let apiKey = 'AIzaSyCYHoDEeJA9EtmL9YY8SJbckxkK1J8VM0o';
let apiKey = 'b80c69b2c13c284e2817f5d41dc7108b';
let searchInputElement = document.getElementById('searchInput');

let searchButton = document.getElementById('searchBtn');
let searchResultElement = document.getElementById('searchResults');


searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    let query = searchInputElement.value;
    searchResultElement.innerHTML = '';
    let getdata = async function () {

        try {
            let response = await fetch(`http://api.serpstack.com/search?access_key=${apiKey}&type=web&query=${encodeURIComponent(query)}`);
            let data = await response.json();

            data.organic_results.forEach(element => {

                let newDiv = document.createElement('div');
                newDiv.innerHTML = `<h3>${element.title}</h3>
                <p>${element.snippet}</p>
                <a href="${element.url}" target="_blank">Visit Site:''</a>`;
                searchResultElement.appendChild(newDiv);
                console.log(element);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    getdata();
});