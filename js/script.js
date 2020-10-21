document.querySelector('.burger-menu-wrapper').onclick = function(){
    document.querySelector('.burger-menu').classList.toggle('burger-menu--active');
    document.querySelector('.menu__list').classList.toggle('menu__list--active');
    document.querySelector('.header__body').classList.toggle('header__body--active');
}
 document.querySelector('.menu__link--active').onclick = function(){
    document.querySelector('.sub-menu__list').classList.toggle('sub-menu__list--active');
    document.querySelector('.header__menu-arrow').classList.toggle('header__menu-arrow--active');

 }
 /* Header-slider*/
let slideIndex = 1;
showSlides(slideIndex);
autoSlider();
document.getElementById('header-slider__btn-next').onclick = function () {
    plusSlide()
};
function plusSlide() {
    showSlides(slideIndex += 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("header-slider__item");
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
    let i;
    let slides = document.getElementsByClassName("header-slider__item");
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

 /* Header-slider-end*/

    /*slider-gallery*/
let gallerySlideIndex = 1;
let btnNext = document.getElementById('slider-gallery__next');
let btnPrev = document.getElementById('slider-gallery__prev');
btnNext.onclick = function () {
    plusSlideGallery()
};
btnPrev.onclick = function () {
    minusSlideGallery()
};
showSlidesGallery(gallerySlideIndex);


function plusSlideGallery() {
    showSlidesGallery(gallerySlideIndex += 1);
}

function minusSlideGallery() {
    showSlidesGallery(gallerySlideIndex -= 1);
}

function currentSlideGallery(n) {
    showSlidesGallery(gallerySlideIndex = n);
}

function showSlidesGallery(n) {
    let i;
    let slides = document.getElementsByClassName("slider-gallery__item");
    let slidesLength = slides.length

    if (n > slides.length) {
        gallerySlideIndex = 1
    }
    if (n < 1) {
        gallerySlideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider-gallery__item--active');
    }

    slides[gallerySlideIndex - 1].classList.add('slider-gallery__item--active');
    slides[gallerySlideIndex - 0].classList.add('slider-gallery__item--active');
    slides[gallerySlideIndex + 1].classList.add('slider-gallery__item--active');
    slides[gallerySlideIndex + 2].classList.add('slider-gallery__item--active');
    slides[gallerySlideIndex + 3].classList.add('slider-gallery__item--active');
    slides[gallerySlideIndex + 4].classList.add('slider-gallery__item--active');

    if(slides[slidesLength-1].classList.contains('slider-gallery__item--active')){
        btnNext.classList.add('active');

    }
    if(slides[slidesLength-7].classList.contains('slider-gallery__item--active')){
        btnNext.classList.remove('active');
    }

    if(slides[0].classList.contains('slider-gallery__item--active')){
        btnPrev.classList.add('active');

    }
    if(slides[6].classList.contains('slider-gallery__item--active')){
        btnPrev.classList.remove('active');
    }
}
