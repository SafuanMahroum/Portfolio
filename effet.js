function showExplosion(event) {
    const rect = event.target.getBoundingClientRect();
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.style.left = `${rect.left + window.scrollX}px`;
    explosion.style.top = `${rect.top + window.scrollY}px`;

    for (let i = 0; i < 3; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        explosion.appendChild(star);
    }

    document.body.appendChild(explosion);

    setTimeout(() => {
        document.body.removeChild(explosion);
    }, 1000);
}
