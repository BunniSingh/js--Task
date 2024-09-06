import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY

import { API_KEY } from "./secrat.js";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let input_field = document.getElementById('search-input');
let results = document.getElementById('results');
let error = document.getElementById('error');
let btn = document.getElementById('btn');
let clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    results.innerHTML = '';
    error.textContent = '';
    input_field.value = '';
});

error.style.display = 'none';

async function searchGimini() {
    if(input_field.value === '') {
        error.innerText = 'Please enter a search input!!!';
        error.style.display = 'block';
        error.style.color = 'red';
        error.style.textAlign = 'center';
        setTimeout(() => {
            error.style.display = 'none';
        },2000)
        return;
    }
    const prompt = input_field.value;
    try {
        results.innerHTML = "";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        console.log(response);
        const text = response.text();
        console.log(typeof text);
        results.innerText = text.replaceAll('*', '');;
        input_field.value = '';
    } catch (error) {
        let errResponse = error;
        error.textContent = errResponse;
    }

}

btn.addEventListener('click', searchGimini);