let searchText = 13;
let getNumberOfPhone = 12;
async function getPhones() {
  let responce = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  let data = await responce.json();
  phoneCards(data.data);
}

async function getDetails(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  let data = await res.json();
  showDetailsUI(data.data);
}


function closeWindow(){
    let showContainer = document.getElementById("details-container");
    showContainer.style.display = "none";
    showContainer.innerHTML = "";
    // let detailCard = document.querySelector('.details-card');
    // detailCard.removeClass("animate__backInDown")
    // detailCard.addClassList("animate__backOutDown");
     
}

function showDetailsUI(details) {
  let showContainer = document.getElementById("details-container");
  showContainer.style.display = "block";
  let div = document.createElement("div");
  div.className = "details-card animate__animated animate__backInDown";
  div.innerHTML = `
        <div class="details-img">
            <img src="${details.image}" alt="${details.name}">
        </div>
        <div class="details-info">
            <h2>${details.name}</h2>
            <p id ="brand">Brand: ${details.brand}</p>
            <p id ="specification">
                <span class = "style">Storage: </span>${
                  details.mainFeatures.storage
                } 
                <br>
                <span class = "style">Display Size: </span> ${
                  details.mainFeatures.displaySize
                }
                <br>
                <span class = "style">ChipSet: </span> ${
                  details.mainFeatures.chipSet
                }
                <br>
                <span class = "style">Memory: </span> ${
                  details.mainFeatures.memory
                }
                <br>
                <span class = "style">Sensors: </span> ${details.mainFeatures.sensors.join(
                  ","
                )}

                <br>
                <span class = "style">Release Date: </span> ${details.releaseDate}
            
            </p>
            <div class="btn">
                <button id="close-btn" onclick="closeWindow()">Close</button>
            </div>
        </div>
        `;
  showContainer.appendChild(div);
}
function phoneCards(phones) {
  // console.log(phones);
  let container = document.getElementById("phone-list");
  container.innerHTML = "";
  phones = phones.slice(0, getNumberOfPhone);
  phones.forEach((phone) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <div class="card-img">
                <img src="${phone.image}" alt="${phone.name}">
            </div>
            <div class="card-info">
                <h2>${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-button">
                    <button id="showDetails" onclick="getDetails('${phone.slug}')">Show Details</button>
                </div>
            </div> 
        `;
    container.appendChild(card);
  });

  if (phones.length > 10) {
    let showmor = document.getElementById("showMore-btn");
    showmor.style.display = "flex";
  }
}

let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  let searchInput = document.getElementById("search-input");
  if (!searchInput.value) {
    alert("Please enter a search text");
    let container = document.getElementById("phone-list");
    searchText = 13;
    container.innerHTML = "";
    getPhones();
    return;
  }
  searchText = searchInput.value;
  getPhones();
});

getPhones();


document.getElementById('showMore').addEventListener("click", () =>{
    let container = document.getElementById("phone-list");
    container.innerHTML = "";
    getNumberOfPhone += 6;
    getPhones();
});