function growYesButton() {
    let yesButton = document.querySelector('.yes');
    let scale = 1; // Local scale variable to prevent conflicts

    function animate() {
        scale += 0.1; // Gradual increment for smooth animation
        yesButton.style.transform = `scale(${scale})`;
        requestAnimationFrame(animate);
    }

    if (!yesButton.dataset.running) { // Prevent multiple animations
        yesButton.dataset.running = "true"; 
        animate(); // Start the animation
    }
}



function yesClicked() {
    let audio = document.querySelector("audio");

    if (audio.paused) {
        audio.muted = false;  // Unmute
        audio.play().then(() => {
            console.log("Audio playing!");
        }).catch(error => console.log("Error playing audio:", error));
    }

    document.body.innerHTML = `
        <h1>Yay! 🎉</h1>
        <div class="container">
            <img src="images/good.jpg" class="gif" alt="Happy Gif">
        </div>
        <p class="message">You made the right choice! ❤️</p>
    `;
}

<script>
    var audio = new Audio('https://github.com/ogken03/foryou/blob/main/images/song.mp3?raw=true');
    audio.play();
</script>