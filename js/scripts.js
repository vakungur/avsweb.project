// Бургер меню
let hamburger = document.querySelector('.menu__hamburger');
console.log(hamburger);

if(hamburger) {

    hamburger.addEventListener('click', function(event) {
        event.target.closest('.menu').classList.toggle('menu--active');
    });
}

// Слайдер

let slides = document.querySelectorAll('.slider__img'), 
    currentSlide = 0,
    slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].className = 'slider__img';
    currentSlide = (currentSlide + 1)% slides.length;
    slides[currentSlide].className = 'slider__img--showing';
}