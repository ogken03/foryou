function growYesButton() {
    let yesButton = document.querySelector('.yes');
    let scale = 1;

    function animate() {
        scale += 0.1; 
        yesButton.style.transform = `scale(${scale})`;
        requestAnimationFrame(animate);
    }

    if (!yesButton.dataset.running) {
        yesButton.dataset.running = "true"; 
        animate();
    }
}



function yesClicked() {
    document.body.innerHTML = `
        <h1>Yay! 🎉</h1>
        <div class="container">
            <img src="images/good.jpg" class="gif" alt="Happy Gif">
        </div>
        <p class="message">You made the right choice! ❤️</p>
    `;
}

