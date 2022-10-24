// Si se usa var y const el carousel no funciona
var slidePosition = 0;
var slides = document.getElementsByClassName('carousel__item');
var totalSlides = slides.length;

document.getElementById('carousel__button--next').addEventListener("click", function() {
    moveToNextSlide();
});
document.getElementById('carousel__button--prev').addEventListener("click", function() {
    moveToPrevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}