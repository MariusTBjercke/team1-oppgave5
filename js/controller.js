function playSound(sound, buttonContainer, pauseBtn) {

    sound.play();

    sound.addEventListener('play', function() { 
        buttonContainer.classList.add("animate-text");
        buttonContainer.appendChild(pauseBtn);
        pauseBtn.addEventListener("click", function() {
            sound.pause();
        });
    });

    sound.addEventListener('pause', function() {
        buttonContainer.classList.remove("animate-text");
        // Check if pause button has parent - if so, remove
        if (pauseBtn.parentNode) {
            buttonContainer.removeChild(pauseBtn);
        }
    });

}