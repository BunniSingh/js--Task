let searchInputElement = document.getElementById('searchInput');

let searchButton = document.getElementById('searchBtn');
let searchResultElement = document.getElementById('searchResults');
let apiKey = 'AIzaSyCYHoDEeJA9EtmL9YY8SJbckxkK1J8VM0o'; //google key
const cx = 'YOUR_CX';
const query = searchInputElement.value.trim();
const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}`;



searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    let query = searchInputElement.value;
    searchResultElement.innerHTML = '';
    let getdata = async function () {
        // Fetch data from the API using async/await syntax
        try {
            let response = await fetch(`http://api.serpstack.com/search?access_key=${apiKey}&type=web&query=${encodeURIComponent(query)}`);
            let data = await response.json();
            console.log(data);
            // data.organic_results.forEach(element => {
            //     console.log(element);
            //     let newDiv = document.createElement('div');
            //     newDiv.className = 'result'
            //     newDiv.innerHTML = `<h3>${element.title}</h3>
            //     <a href="${element.url}" target="_blank">${element.domain}</a>`;
            //     <p>${element.snippet}</p>
            //     searchResultElement.appendChild(newDiv);
            // });
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    getdata();
});