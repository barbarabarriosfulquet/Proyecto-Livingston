// NAVIGATION DISPLAY
const mobileNav = document.querySelector('.header__mobile__nav');
const desktopNav = document.querySelector('.header__desktop__nav');

function toggleMobileNav() {
    mobileNav.style.display = 'block';
    desktopNav.style.display = 'none';
}

function toggleDesktopNav() {
    mobileNav.style.display = 'none';
    desktopNav.style.display = 'block';
}

// NAVIGATION TOGGLE
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.querySelector(".header__mobile__nav__menu");

    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("menu-opened");
    });
});

// SLIDER MOBILE
const sliderMobileImages = document.querySelectorAll(".slider__mobile__images__img");
let slideMobileIndex = 0;
let intervalMobileId;

// SLIDER MOBILE - ADVANCE
function nextMobileSlide() {
    slideMobileIndex++;
    showMobileSlides();
}

// SLIDER MOBILE - DISPLAY
function showMobileSlides() {
    if (slideMobileIndex < 0) {
        slideMobileIndex = sliderMobileImages.length - 1;
    }

    if (slideMobileIndex >= sliderMobileImages.length) {
        slideMobileIndex = 0;
    }

    sliderMobileImages.forEach((slide, index) => {
        if (index === slideMobileIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// SLIDER MOBILE - SLIDING
function startMobileSlider() {
    intervalMobileId = setInterval(nextMobileSlide, 3000);
}

// SLIDER MOBILE - PAUSE
sliderMobileImages.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
        clearInterval(intervalMobileId);
    });

    slide.addEventListener("mouseleave", () => {
        startMobileSlider();
    });
});

// SLIDER MOBILE - DISPLAY FIRST
showMobileSlides();
startMobileSlider();

// SLIDER DESKTOP
const sliderDesktopImages = document.querySelectorAll(".slider__desktop__images__img");
let slideDesktopIndex = 0;
let intervalDesktopId;

// SLIDER DESKTOP - ADVANCE
function nextDesktopSlide() {
    slideDesktopIndex++;
    showDesktopSlides();
}

// SLIDER DESKTOP - DISPLAY
function showDesktopSlides() {
    if (slideDesktopIndex < 0) {
        slideDesktopIndex = sliderDesktopImages.length - 1;
    }

    if (slideDesktopIndex >= sliderDesktopImages.length) {
        slideDesktopIndex = 0;
    }

    sliderDesktopImages.forEach((slide, index) => {
        if (index === slideDesktopIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// SLIDER DESKTOP - SLIDING
function startDesktopSlider() {
    intervalDesktopId = setInterval(nextDesktopSlide, 3000);
}

// SLIDER DESKTOP - PAUSE
sliderDesktopImages.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
        clearInterval(intervalDesktopId);
    });

    slide.addEventListener("mouseleave", () => {
        startDesktopSlider();
    });
});

// SLIDER - DISPLAY FIRST
showDesktopSlides();
startDesktopSlider();