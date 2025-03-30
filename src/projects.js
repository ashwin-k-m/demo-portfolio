//project toggle//
function toggleCards(rowId) {
    if (rowId === 'row1') {
        document.getElementById('project1-1').classList.toggle('expanded');
        document.getElementById('project1-1').classList.toggle('minimized');
        document.getElementById('project1-2').classList.toggle('expanded');
        document.getElementById('project1-2').classList.toggle('minimized');
        
        // Update content visibility
        const p1Content = document.querySelector('#project1-1 p:not(button)');
        const p2Content = document.querySelector('#project1-2 p:not(button)');
        if (document.getElementById('project1-1').classList.contains('minimized')) {
            document.querySelector('#project1-1 h2').classList.replace('text-2xl', 'text-xl');
            document.querySelector('#project1-2 h2').classList.replace('text-xl', 'text-2xl');
            document.querySelector('#project1-1 p').classList.add('hidden');
            document.querySelector('#project1-2 p').classList.remove('hidden');
            document.querySelector('#project1-1 button').classList.add('hidden');
            document.querySelector('#project1-2 button').classList.remove('hidden');
        } else {
            document.querySelector('#project1-1 h2').classList.replace('text-xl', 'text-2xl');
            document.querySelector('#project1-2 h2').classList.replace('text-2xl', 'text-xl');
            document.querySelector('#project1-1 p').classList.remove('hidden');
            document.querySelector('#project1-2 p').classList.add('hidden');
            document.querySelector('#project1-1 button').classList.remove('hidden');
            document.querySelector('#project1-2 button').classList.add('hidden');
        }
    } else if (rowId === 'row2') {
        document.getElementById('project2-1').classList.toggle('expanded');
        document.getElementById('project2-1').classList.toggle('minimized');
        document.getElementById('project2-2').classList.toggle('expanded');
        document.getElementById('project2-2').classList.toggle('minimized');
        
        // Update content visibility
        if (document.getElementById('project2-1').classList.contains('expanded')) {
            document.querySelector('#project2-1 h2').classList.replace('text-xl', 'text-2xl');
            document.querySelector('#project2-2 h2').classList.replace('text-2xl', 'text-xl');
            document.querySelector('#project2-1 p').classList.remove('hidden');
            document.querySelector('#project2-2 p').classList.add('hidden');
            document.querySelector('#project2-1 button').classList.remove('hidden');
            document.querySelector('#project2-2 button').classList.add('hidden');
        } else {
            document.querySelector('#project2-1 h2').classList.replace('text-2xl', 'text-xl');
            document.querySelector('#project2-2 h2').classList.replace('text-xl', 'text-2xl');
            document.querySelector('#project2-1 p').classList.add('hidden');
            document.querySelector('#project2-2 p').classList.remove('hidden');
            document.querySelector('#project2-1 button').classList.add('hidden');
            document.querySelector('#project2-2 button').classList.remove('hidden');
        }
    }
}

//certificates//

document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active', 'next', 'prev', 'hidden');
            
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex + 1) % carouselItems.length) {
                item.classList.add('next');
            } else if (index === (currentIndex - 1 + carouselItems.length) % carouselItems.length) {
                item.classList.add('prev');
            } else {
                item.classList.add('hidden');
            }
        });

        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.remove('opacity-30');
                indicator.classList.add('opacity-100');
            } else {
                indicator.classList.remove('opacity-100');
                indicator.classList.add('opacity-30');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateCarousel();
        });
    });

    // Auto-rotate every 5 seconds
    let interval = setInterval(nextSlide, 5000);

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => clearInterval(interval));
    carouselContainer.addEventListener('mouseleave', () => interval = setInterval(nextSlide, 5000));
});
