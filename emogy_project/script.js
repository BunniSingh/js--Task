let search_field = document.getElementById('searchInput');
let emojiContainer = document.getElementById('emoje-container');

function displayEmoji(search_query = "") {
    let filterList = emojiList.filter((ele) =>{
        if(search_field.length === 0) return true;
        if(ele.description.indexOf(search_query) !== -1){
            return true;
        }
    })

    emojiContainer.innerHTML = "";

    filterList.forEach((ele)=>{
        let new_row = document.createElement('tr');
        let new_emoji = document.createElement('td');
        let new_description = document.createElement('td');
        let new_aliases = document.createElement('td');

        new_emoji.textContent = ele.emoji;
        new_description.textContent = ele.description;
        new_aliases.textContent = ele.aliases.join(', ');

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_description);
        new_row.appendChild(new_aliases);

        emojiContainer.appendChild(new_row);
    })
}
    

window.addEventListener('load', displayEmoji());

search_field.addEventListener('keyup', (e) => {
    let input_value = e.target.value;
    // console.log(input_value);
    displayEmoji(input_value);
})