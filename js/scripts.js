// Бургер меню
let hamburger = document.querySelector('.menu__hamburger');
console.log(hamburger);

if(hamburger) {

    hamburger.addEventListener('click', function(event) {
        event.target.closest('.menu').classList.toggle('menu--active');
    });
}

// Слайдер
$('.carousel').owlCarousel({
    loop:true,
    margin: 0,
    dots: true,
    nav:true,
    items: 1,
    navText: [],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})