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