document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.querySelector('.banner').style.display = 'flex';
    });
    box.addEventListener('mouseleave', () => {
        box.querySelector('.banner').style.display = 'none';
    });
});