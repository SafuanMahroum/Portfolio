
document.querySelectorAll('article div a').forEach(link => {
    link.addEventListener('click', () => {
        const musiquefond = document.getElementById('musiquefond');
        const audioIcon = document.getElementById('audioIcon');
        if (musiquefond) {
            musiquefond.pause();
            audioIcon.src = 'images/audiooff.svg';
            audioIcon.alt = 'Activer musique';
        }
    });
});
