document.addEventListener('DOMContentLoaded', function() {
    // Animate contact cards on scroll
    const contactCards = document.querySelectorAll('.contact-card');
    
    const animateOnScroll = () => {
        contactCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 150);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        contactForm.classList.add('opacity-50', 'pointer-events-none');
        
        setTimeout(() => {
            formSuccess.classList.remove('hidden');
            contactForm.reset();
            
            setTimeout(() => {
                contactForm.classList.remove('opacity-50', 'pointer-events-none');
                formSuccess.classList.add('hidden');
            }, 3000);
        }, 1500);
    });
    
    // Input field animations
    const inputFields = document.querySelectorAll('.input-field');
    inputFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentNode.querySelector('.input-label').classList.add('text-blue-600');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.querySelector('.input-label').classList.remove('text-blue-600');
            }
        });
    });
});