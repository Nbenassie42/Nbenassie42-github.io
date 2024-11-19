const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

next.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});