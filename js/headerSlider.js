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
