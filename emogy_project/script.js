let search_field = document.getElementById('searchInput');
let emojiContainer = document.getElementById('emoje-container');
let btnSearch = document.querySelector('#searchForm');

let copyAlertBox = document.querySelector(".copyAlert");
function displayEmoji(search_query = "") {
    let filterList = emojiList.filter((ele) =>{
        if(search_field.length === 0) return true;
        if(ele.description.indexOf(search_query) !== -1){
            return true;
        }
    })
    
    emojiContainer.innerHTML = "";
    let emojiHTML = filterList.map((ele) => `<div class="emojis">${ele.emoji}</div>`).join("");
    emojiContainer.innerHTML = emojiHTML;

    let emojiclick = document.querySelectorAll(".emojis");
    emojiclick.forEach((ele) => {
        ele.addEventListener('click', (e) => {
            copyEmoji(e.target.innerText);
        });
    });
}

function copyEmoji(emoji){
    navigator.clipboard.writeText(emoji);
    copyAlertBox.style.display = "block";
    copyAlertBox.innerText = `Copied: ${emoji}`;
    setTimeout(()=>{
        copyAlertBox.style.display = "none";
    },2_000);
}

window.addEventListener('load', () => {
    displayEmoji();
});

search_field.addEventListener('keyup', (e) => {
    let input_value = e.target.value.trim();
    // console.log(input_value);
    displayEmoji(input_value);
})

btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('click-btn') && e.target.id === 'all'){
        displayEmoji("");
    }
    else if (e.target.classList.contains('click-btn')) {
        displayEmoji(e.target.id);
    }
});


















// console.log(emojiContainer)
        // let new_row = document.createElement('tr');
        // let new_emoji = document.createElement('td');
        // let new_description = document.createElement('td');
        // let new_aliases = document.createElement('td');
        
        // new_emoji.textContent = ele.emoji;
        // new_description.textContent = ele.description;
        // new_aliases.textContent = ele.aliases.join(', ');
        
        // new_row.appendChild(new_emoji);
        // new_row.appendChild(new_description);
        // new_row.appendChild(new_aliases);
        
        // emojiContainer.appendChild(new_row);