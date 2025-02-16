document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        document.getElementById('hoverSound').play();
    });
});

document.querySelectorAll('input[type="submit"]').forEach(button => {
    button.addEventListener('mouseover', () => {
        document.getElementById('hoverSound').play();
    });
});