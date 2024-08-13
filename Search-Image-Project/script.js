let apiKey = "1ua80DNy17ior1b3xWtSGsXtgduxTroDeIins3yQ4mc";
let inputSearch = document.querySelector("#searchInput");
let btn = document.querySelector("#btnSearch");
let imageContainer = document.querySelector("#imageContainer");
let showmore = document.querySelector("#showmore");

let searchQuery = "";
let page = 1;

async function getDeta() {
    if( inputSearch.value.trim() === "" && page === 1) {
        alert("Please enter a search query");
        return;
    }
    if (inputSearch.value.trim() !== "") {
        searchQuery = inputSearch.value;
    }

    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(searchQuery)}&client_id=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    displayImages(data.results);
    page++;

    if (data.total_pages > 1 && page <= data.total_pages) {
        showmore.style.display = "block";
    } else {
        showmore.style.display = "none";
    }

    inputSearch.value = "";
}

function displayImages(images) {
    if (page === 1) {
        imageContainer.innerText = "";
    }

    images.forEach(image => {
        let div = document.createElement("div");
        div.classList.add("image-div");

        let img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = image.alt_description || "Unsplash Image";

        let imgurl = document.createElement("a");
        imgurl.href = image.links.html;
        imgurl.innerText = image.alt_description || "View on Unsplash";
        imgurl.target = "_blank";

        div.appendChild(img);
        div.appendChild(imgurl);
        imageContainer.appendChild(div);
    });
}

btn.addEventListener('click', () => {
    page = 1;
    getDeta();
});

showmore.addEventListener('click', () => {
    getDeta();
});
