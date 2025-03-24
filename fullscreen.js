function openFullscreen(image) {
    const fullscreenView = document.getElementById('fullscreen-view');
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = image.src;
    fullscreenView.style.display = 'flex';
    setTimeout(() => fullscreenView.classList.add('show'), 10);
}

function closeFullscreen() {
    const fullscreenView = document.getElementById('fullscreen-view');
    fullscreenView.classList.remove('show');
    setTimeout(() => fullscreenView.style.display = 'none', 300);
}

document.getElementById('fullscreen-view').addEventListener('click', function(event) {
    if (event.target === this) {
        closeFullscreen();
    }
});
