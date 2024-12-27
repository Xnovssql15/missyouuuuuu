document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const revealDiv = document.getElementById('reveal');
    const hideButton = document.getElementById('hideButton');
    const prankMusic = document.getElementById('prankMusic');

    revealButton.addEventListener('click', () => {
        document.getElementById('message').classList.add('hidden');
        revealDiv.classList.remove('hidden');
        prankMusic.play(); // Play music when the button is clicked
    });

    hideButton.addEventListener('click', () => {
        revealDiv.classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
        prankMusic.pause(); // Pause music when the prank is closed
        prankMusic.currentTime = 0; // Reset music to start
    });
});
