// Бургер меню
let hamburger = document.querySelector('.menu__hamburger');

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
});

// Модальное окно

let btn = document.querySelector('.menu__button'),
    modal = document.querySelector('.modal'),
    filter = document.querySelector('.modal__filter')
    close = document.querySelector('.modal__close');
   
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
        filter.style.display = 'block';
    });

    close.addEventListener('click', function(){
        modal.style.display = 'none';
        filter.style.display = 'none';
    })
