let currentIndex = 0;

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].clientWidth;
    carouselInner.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function prevSlide() {
    if (window.innerWidth < 769) {
        const items = document.querySelectorAll('.carousel-item');
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1;
        }
        updateCarousel();
    }
}

function nextSlide() {
    if (window.innerWidth < 769) {
        const items = document.querySelectorAll('.carousel-item');
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }
}

function resetCarousel() {
    if (window.innerWidth > 768) {
        currentIndex = 0;
        updateCarousel();
    }
}

window.addEventListener('resize', () => {
    updateCarousel();
    resetCarousel();
});
updateCarousel();



