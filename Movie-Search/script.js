let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
let moviesContainer = document.getElementById("movies-container");

let movieDetailsContainer = document.getElementById("movies-details-container");

let apiKey = "234fe3b6";
let page = 1;

let check = true;
let searchQuery;

let count = 0;
async function getMovies(searchQuery = 'fire') {
  console.log("function is called ", searchInput.value + " " + ++count);
//   if (check) {
//     searchQuery = "fire";
//     check = false;
//   } else {
//     searchQuery = searchInput.value;
//   }

  let response = await fetch(
    `https://www.omdbapi.com/?&apikey=${apiKey}&s=${searchQuery}&page=${page}`
  );
  let data = await response.json();

  if (data.Search) {
    displayMovies(data.Search);
  } else {
    movieDetailsContainer.innerHTML = "<p>No movies found.</p>";
  }
}

function closeDetailsTab() {
  moviesContainer.classList.add('animate__fadeInDownBig')
  movieDetailsContainer.style.display = "none";
  movieDetailsContainer.innerHTML = "";
}
function showMovieDetails(movieData) {
  moviesContainer.classList.remove('animate__fadeInDownBig')
  movieDetailsContainer.style.display = "block";
  movieDetailsContainer.innerHTML = "";
  let movieDiv = document.createElement("div");
  movieDiv.className = "movie-details";
  
  movieDiv.innerHTML = `
        <div class="movie-poster">
            <img src="${
              movieData.Poster !== "N/A"
                ? movieData.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }" alt="${movieData.Title}"/>
        </div>
        <div class="movie-info">
        <h2>Title:  ${movieData.Title}(<b>${movieData.Year}</b>)</h2>
        <p><b>Genre:</b> ${movieData.Genre}</p>
        <p><b>Released Date:</b> ${movieData.Released}</p>
        <p><b>Country:</b> ${movieData.Country}</p>
        <p><b>Ratings:</b> ${movieData.Ratings[0].Value}</p>
        <p><b>Language:</b> ${movieData.Language}</p>
        <p><b>Director:</b> ${movieData.Director}</p>
        <p><b>Runtime:</b> ${movieData.Runtime}</p>
        <p><b>Actors:</b> ${movieData.Actors}</p>
        <button id="details-btn" onclick="closeDetailsTab()">Close</button>
        </div>
        `;
  movieDetailsContainer.appendChild(movieDiv);
}
async function getMovieDetails(imdbID) {
  let response = await fetch(
    `https://www.omdbapi.com/?&apikey=${apiKey}&i=${imdbID}`
  );
  let movieData = await response.json();
  console.log(movieData);
  if (movieData) {
    showMovieDetails(movieData);
  } else {
    moviesContainer.innerHTML = "<p>No movie found.</p>";
  }
}
function displayMovies(movies) {
  moviesContainer.innerHTML = "";
  if (movies && movies.length > 0) {
    movies.forEach((movie) => {
      let movieDiv = document.createElement("div");
      movieDiv.className = "movie-card";
      movieDiv.innerHTML = `
                <div class="movie-poster">
                    <img src="${
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x450?text=No+Image"
                    }" alt="${movie.Title}"/>
                </div>
                <div class="movie-info">
                    <h4>${movie.Title}</h4>
                    <p>${movie.Year}</p>
                    <button id="details-btn" onclick="getMovieDetails('${
                      movie.imdbID
                    }')">Read more</button>
                </div>`;
      moviesContainer.appendChild(movieDiv);
    });
  } else {
    moviesContainer.innerHTML = "<p>No movies available to display.</p>";
  }
}

function throttle(func, delay) {
    let lastCall = 0;
    return function() {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        searchBtn.disabled = true;  // Disable the button
        func(searchInput.value).then(() => {
            searchBtn.disabled = false;  // Re-enable the button after the API call
        });
    };
}

searchInput.addEventListener("input", () => {
  check = true;
});
getMovies();
let throttledGetMovies = throttle(getMovies, 2000);
searchBtn.addEventListener("click", throttledGetMovies);
// searchBtn.addEventListener('click', getMovies);
