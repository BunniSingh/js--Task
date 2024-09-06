import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAbJ_3ezxSwjHDgFPiK5wLas0jR7R-8bvw";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let form = document.getElementById("form");
let searchMode = document.getElementById("options");
let loder = document.querySelector('.hidden');


// get Google data from api 
async function getGoogleData(query) {
  //   console.log("Your search inside Google", query);
  let resultContainer = document.getElementById("result-container");
  resultContainer.classList.remove('animate__fadeIn');
  let apiKey = "3e5b795d085fea5f0aeb45fbbef401a3";
  resultContainer.innerHTML = "";
  loder.style.display = 'block';
  try {
    let response = await fetch(
      `https://api.serpstack.com/search?access_key=${apiKey}&type=web&query=${encodeURIComponent(
        query
      )}`
    );
    let data = await response.json();
    loder.style.display = 'none';
    resultContainer.classList.add('animate__fadeIn');
    data.organic_results.forEach((element) => {
      console.log(element);
      let newDiv = document.createElement("div");
      newDiv.className = "result";
      newDiv.innerHTML = `
                <h3><a href="${element.url}" target="_blank">${element.title}</a></h3>
                <p class="displayed_url">${element.displayed_url}</p>
                <p class="snippet">${element.snippet}</p>
                <a href="${element.url}" target="_blank" class="domain">${element.domain}</a>
                `;

      resultContainer.appendChild(newDiv);
    });
    document.getElementById("searchInput").value = '';
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}


// get Gemini data from api 
async function getGeminiData(query) {
  let resultContainer = document.getElementById("result-container");
  resultContainer.classList.remove('animate__fadeIn');
  resultContainer.innerHTML = "";
  loder.style.display = 'block';
  try {
    const result = await model.generateContent(query);
    const response = await result.response;
    loder.style.display = 'none';
    resultContainer.classList.add('animate__fadeIn');
    const text = response.text();
    resultContainer.innerText = text.replaceAll("*", "");
    document.getElementById("searchInput").value = '';
  } catch (error) {
    let errResponse = error;
    error.textContent = errResponse;
  }
}


// get Wikipedia data from api
async function getWikipediaData(query) {
  let resultContainer = document.getElementById("result-container");
  resultContainer.classList.remove('animate__fadeIn');
  resultContainer.innerHTML = "";
  loder.style.display = 'block';
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();
  loder.style.display = 'none';
  resultContainer.classList.add('animate__fadeIn');
  data.query.search.forEach((result) => {
    const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

    resultContainer.innerHTML += `<div class="result">
        <h3 class="result-title">
          <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h3>
        <p class="snippet">${result.snippet}</p>
        <a href="${url}" class="domain" target="_blank" rel="noopener">${url}</a>
      </div>`;
  });
  document.getElementById("searchInput").value = "";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userquery = document.getElementById("searchInput").value;
  if (userquery.length === 0) {
    alert("Please enter a search query");
    return;
  }
  if (searchMode.value === "google") {
    getGoogleData(userquery);
  }
  if (searchMode.value === "gemini") {
    getGeminiData(userquery);
  }
  if (searchMode.value === "wikipedia") {
    getWikipediaData(userquery);
  }
});
