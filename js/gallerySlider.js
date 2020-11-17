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
