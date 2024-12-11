let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function toggleMenu() {
    const navlinks = document.getElementById("navlinks");
    navlinks.classList.toggle("active");
}
