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

// SLIDER
const sliderImages = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId;

// SLIDER - ADVANCE
function nextSlide() {
    slideIndex++;
    showSlides();
}

// SLIDER - DISPLAY
function showSlides() {
    if (slideIndex < 0) {
        slideIndex = sliderImages.length - 1;
    }

    if (slideIndex >= sliderImages.length) {
        slideIndex = 0;
    }

    sliderImages.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// SLIDER - SLIDING
function startSlider() {
    intervalId = setInterval(nextSlide, 3000);
}

// SLIDER - PAUSE
sliderImages.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
        clearInterval(intervalId);
    });

    slide.addEventListener("mouseleave", () => {
        startSlider();
    });
});

// SLIDER - DISPLAY FIRST
showSlides();
startSlider();