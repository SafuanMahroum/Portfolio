function openPopup(url) {

    const musiquefond = document.getElementById('musiquefond');
    if (musiquefond) {
        musiquefond.pause();
    }

    window.open(url, 'popup', 'width=800,height=600');
    return false;
}