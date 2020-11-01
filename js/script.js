let page = document.location.pathname
if (page === '/index.html' || page !== '/about.html') {
    document.querySelector('.burger-menu-wrapper').onclick = function () {
        document.querySelector('.burger-menu').classList.toggle('burger-menu--active');
        document.querySelector('.menu__list').classList.toggle('menu__list--active');
        document.querySelector('.header__body').classList.toggle('header__body--active');
        document.querySelector('.header-slider').classList.toggle('header-slider--hidden');

    }
    document.querySelector('.menu__link--active').onclick = function () {
        document.querySelector('.sub-menu__list').classList.toggle('sub-menu__list--active');
        document.querySelector('.header-slider').classList.toggle('header__menu-arrow--active');

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

    /*Slider-gallery*/

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
        for (i = -1; i < 5; i++) {
            slides[gallerySlideIndex + i].classList.add('slider-gallery__item--active');
        }
        if (slides[slidesLength - 1].classList.contains('slider-gallery__item--active')) {
            btnNext.classList.add('active');

        }
        if (slides[slidesLength - 7].classList.contains('slider-gallery__item--active')) {
            btnNext.classList.remove('active');
        }

        if (slides[0].classList.contains('slider-gallery__item--active')) {
            btnPrev.classList.add('active');

        }
        if (slides[6].classList.contains('slider-gallery__item--active')) {
            btnPrev.classList.remove('active');
        }
    }

    /*Slider trainers*/

    let slideIndexTrainers = 1;
    let btnNextTrainers = document.getElementById('slider-trainers__next');
    let btnPrevTrainers = document.getElementById('slider-trainers__prev');
    btnNextTrainers.onclick = function () {
        plusSlideTrainers()
    };
    btnPrevTrainers.onclick = function () {
        minusSlideTrainers()
    };
    showSlidesTrainers(slideIndexTrainers);


    function plusSlideTrainers() {
        showSlidesTrainers(slideIndexTrainers += 1);
    }

    function minusSlideTrainers() {
        showSlidesTrainers(slideIndexTrainers -= 1);
    }

    function showSlidesTrainers(n) {
        let i;
        let slides = document.getElementsByClassName("slider-trainers__item");
        let slidesLength = slides.length

        if (n > slides.length) {
            slideIndexTrainers = 1
        }
        if (n < 1) {
            slideIndexTrainers = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('slider-trainers__item--active');
        }

        slides[slideIndexTrainers - 1].classList.add('slider-trainers__item--active');
        slides[slideIndexTrainers - 0].classList.add('slider-trainers__item--active');


        if (slides[slidesLength - 1].classList.contains('slider-trainers__item--active')) {
            btnNextTrainers.classList.add('slider-trainers__btn--active');

        }
        if (slides[slidesLength - 3].classList.contains('slider-trainers__item--active')) {
            btnNextTrainers.classList.remove('slider-trainers__btn--active');
        }

        if (slides[0].classList.contains('slider-trainers__item--active')) {
            btnPrevTrainers.classList.add('slider-trainers__btn--active');

        }
        if (slides[2].classList.contains('slider-trainers__item--active')) {
            btnPrevTrainers.classList.remove('slider-trainers__btn--active');
        }

        let trainersBorder = document.getElementsByClassName("slider-trainers__border");
        for (i = 0; i < 5; i++) {
            if (slides[i].classList.contains('slider-trainers__item--active') && slides[i + 1].classList.contains('slider-trainers__item--active')) {
                trainersBorder[i].classList.add('slider-trainers__border--active')
            } else {
                trainersBorder[i].classList.remove('slider-trainers__border--active')
            }
        }
    }
}

if (page === '/about.html') {
    document.querySelector('.burger-menu-wrapper').onclick = function () {
        document.querySelector('.burger-menu').classList.toggle('burger-menu--active');
        document.querySelector('.menu__list').classList.toggle('menu__list--active');
        document.querySelector('.header__body').classList.toggle('header__body--active');
    }
    document.querySelector('.menu__link--active').onclick = function () {
        document.querySelector('.sub-menu__list').classList.toggle('sub-menu__list--active');

    }

    /*Slider-gallery*/

    let gallerySlideIndex = 1;
    let btnNext = document.getElementById('about-slider-gallery__next');
    let btnPrev = document.getElementById('about-slider-gallery__prev');
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
        for (i = -1; i < 5; i++) {
            slides[gallerySlideIndex + i].classList.add('slider-gallery__item--active');
        }
        if (slides[slidesLength - 1].classList.contains('slider-gallery__item--active')) {
            btnNext.classList.add('active');

        }
        if (slides[slidesLength - 7].classList.contains('slider-gallery__item--active')) {
            btnNext.classList.remove('active');
        }

        if (slides[0].classList.contains('slider-gallery__item--active')) {
            btnPrev.classList.add('active');

        }
        if (slides[6].classList.contains('slider-gallery__item--active')) {
            btnPrev.classList.remove('active');
        }
    }
}



