const boutonmusique = document.getElementById('boutonmusique');
const musiquefond = document.getElementById('musiquefond');
const audioIcon = document.getElementById('audioIcon');

boutonmusique.addEventListener('click', () => {
    if (musiquefond.paused) {
        musiquefond.play();
        audioIcon.src = 'images/soundon.svg';
        audioIcon.alt = 'Desactiver musique';
    } else {
        musiquefond.pause();
        audioIcon.src = 'images/soundoff.svg';
        audioIcon.alt = 'Activer musique';
    }
});