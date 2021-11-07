const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerElement = $('#header');
const imgSlides = $$('.slider-container img');
const sliderArrowBtnPrev = $('.slider-container__arrows--prev');
const sliderArrowBtnNext = $('.slider-container__arrows--next');

// // Scroll Header
function scrollHeader() {
    const x = this.pageYOffset;
    if (x < 80) {
        headerElement.classList.add('active');
    } else {
        headerElement.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollHeader);

// // Slider images
let slideNumber = 0; // current index slider
const numberOfSlides = imgSlides.length;
// Slider images NEXT button
sliderArrowBtnNext.addEventListener('click', () => {
    imgSlides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    imgSlides[slideNumber].classList.add('active');
})

// Slider images PREV button
sliderArrowBtnPrev.addEventListener('click', () => {
    imgSlides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = (numberOfSlides - 1);
    }

    imgSlides[slideNumber].classList.add('active');
})

// Autoplay slider
let playSlider;

let repeater = () => {
    playSlider = setInterval(() => {
        imgSlides.forEach((slide) => {
            slide.classList.remove('active')
        })
    
        slideNumber++;
    
        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }
    
        imgSlides[slideNumber].classList.add('active');
    }, 7000)
}
repeater();