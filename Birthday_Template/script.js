function playMusic() {
    const music = document.getElementById('party-music');
    music.play();
}

function stopMusic() {
    const music = document.getElementById('party-music');
    music.pause();
    music.currentTime = 0; // Reset the music to the beginning
}

function startFlashes() {
    document.body.classList.add('flash');
    flashBackground();
}

function stopFlashes() {
    document.body.classList.remove('flash');
    clearTimeout(flashTimeout);
    document.body.style.backgroundColor = '#000'; // Reset to original background color
}

let flashTimeout;
function flashBackground() {
    const colors = ['#ff408c', '#00ffcc', '#ffa500', '#ff00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    flashTimeout = setTimeout(flashBackground, 500);
}
