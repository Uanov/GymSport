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
