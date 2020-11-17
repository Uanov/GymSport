let blogSlideIndex = 1;
let blogSliderBtnPrev = document.getElementById('blog-slider-prev');

blogSliderBtnPrev.onclick = function () {
    blogSliderMinusSlide();
}

let blogSliderBtnNext = document.getElementById('blog-slider-next');

blogSliderBtnNext.onclick = function () {
    blogSliderPlusSlide();
}


showBlogSlides(blogSlideIndex);
autoSlider();

function blogSliderPlusSlide() {
    showBlogSlides(blogSlideIndex += 1);
}

function blogSliderMinusSlide() {
    showBlogSlides(blogSlideIndex -= 1);
}

document.getElementById('blog-slider-dots__item1').onclick = function () {
    currentBlogSlide(1);
}
document.getElementById('blog-slider-dots__item2').onclick = function () {
    currentBlogSlide(2);
}
document.getElementById('blog-slider-dots__item3').onclick = function () {
    currentBlogSlide(3);
}

function currentBlogSlide(n) {
    showBlogSlides(blogSlideIndex = n);
}

function showBlogSlides(n) {
    let i;
    let slides = document.getElementsByClassName("blog-slider-item");
    let dots = document.getElementsByClassName("blog-slider-dots__item");
    if (n > slides.length) {
        blogSlideIndex = 1
    }
    if (n < 1) {
        blogSlideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" blog-slider-dots__item--active", "");
    }
    slides[blogSlideIndex - 1].style.display = "block";
    dots[blogSlideIndex - 1].className += " blog-slider-dots__item--active";
}

function autoSlider() {
    let i;
    let slides = document.getElementsByClassName("blog-slider-item");
    let dots = document.getElementsByClassName("blog-slider-dots__item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    blogSlideIndex++;
    if (blogSlideIndex > slides.length) {
        blogSlideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" blog-slider-dots__item--active", "");
    }
    slides[blogSlideIndex - 1].style.display = "block";
    dots[blogSlideIndex - 1].className += " blog-slider-dots__item--active";
    setTimeout(autoSlider, 5000);
}
