document.querySelector('.burger-menu-wrapper').onclick = function(){
    document.querySelector('.burger-menu').classList.toggle('burger-menu--active');
    document.querySelector('.menu__list').classList.toggle('menu__list--active');
    document.querySelector('.header__body').classList.toggle('header__body--active');
}
 document.querySelector('.menu__link--active').onclick = function(){
    document.querySelector('.sub-menu__list').classList.toggle('sub-menu__list--active');
    document.querySelector('.header__menu-arrow').classList.toggle('header__menu-arrow--active');

 }
 // Header-slider
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);
autoSlider();
document.getElementById('header-slider__btn-next').onclick = function () {
    plusSlide()
};
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("header-slider__item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('header-slider__item--active');
    }

    slides[slideIndex - 1].classList.add('header-slider__item--active');
}
/*Автоматически выпадающие слайды сверху*/
function autoSlider() {
    var i;
    var slides = document.getElementsByClassName("header-slider__item");
    for (i = 0; i < slides.length; i++) {

        slides[i].classList.remove('header-slider__item--active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].classList.add('header-slider__item--active');
    setTimeout(autoSlider, 12000);
};

 // Header-slider-end