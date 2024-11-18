window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const opacity = Math.min(scrollPosition / maxScroll, 1);
    document.body.style.setProperty('--scroll-opacity', opacity);
});