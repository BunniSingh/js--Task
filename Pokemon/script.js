

async function fatchPokemon(NumberOfPokemon) {
    try {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${NumberOfPokemon}/`);
        let responce = await data.json();
        return responce;
    }
    catch (error) {
        console.log('Error:', error);
    }
}

let arr = [];
let colorobj = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    dark: "#8A8A8A",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
    steel: "#71797E"
  };


let searchInput = document.querySelector("#search");
let pokemonContainer = document.querySelector("#pokemonContainer");


function createPokemonCard(data){
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <div class="card-front">
        <div class="img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg" alt="${data.species.name}">
        </div>    
        <h2>${data.species.name}</h2>
        <div class="pok-type">
        </div>
        <div class="abilities">
            <div class="ab">
                <p class="head">Attack</p>
                <p class="type">${data.stats[1].base_stat}</p>
            </div> 
            <div class="ab">
                <p class="head">Defence</p>
                <p class="type">${data.stats[2].base_stat}</p>
            </div> 
            <div class="ab">
                <p class="head">Speed</p>
                <p class="type">${data.stats[5].base_stat}</p>
            </div> 
        </div>
    </div>
    <div class="card-back">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png"/>
         <h2 class="type">${data.species.name}</h2>
         <div class="back-data">
            <p>${data.abilities[0].ability.name}</p>
         </div>
    </div>
    `
    let poktype = div.querySelector('.pok-type');
    
    data.types.forEach(type => {
        let span = document.createElement('span');
        span.style.backgroundColor = colorobj[type.type.name];
        span.innerText = type.type.name;
        div.setAttribute(`data-${type.type.name}`,type.type.name);
        div.style.background= `radial-gradient(circle at 50% 0%, ${colorobj[type.type.name]} 36%, rgb(255, 255, 255) 36%)`;
        poktype.appendChild(span);

    });
    pokemonContainer.appendChild(div);
}

async function getPokemon() {
    for (let i = 1; i <= 500; i++) {
        let data = await fatchPokemon(i);
        arr.push(data);
        createPokemonCard(data);
    }
}

getPokemon();
function filterPokemon(value){
    let filter = arr.filter(pokemon => pokemon.species.name.toLowerCase().includes(value));
    pokemonContainer.innerHTML = '';
    filter.forEach(pokemon => createPokemonCard(pokemon));
}

function pokemonCotegory(value){
    let filter = arr.filter(pokemon => pokemon.types.some(type => type.type.name === value));
    pokemonContainer.innerHTML = '';
    filter.forEach(pokemon => createPokemonCard(pokemon));
}

searchInput.addEventListener('keyup', ()=>{
    filterPokemon(searchInput.value);
})


let getButton = document.querySelector("#getButton");
getButton.addEventListener('click', ()=>{
    let selectType = document.querySelector("#selectType");
    pokemonCotegory(selectType.value);
})