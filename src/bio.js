document.addEventListener('DOMContentLoaded', function() {
    // Team card animations
    const teamCards = document.querySelectorAll('.team-card');
    
    const animateTeamCards = () => {
        teamCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            }
        });
    };
    
    window.addEventListener('scroll', animateTeamCards);
    animateTeamCards(); // Run once on load
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Animate skill bars when skills tab is shown
    const skillsTabBtn = document.querySelector('[data-tab="skills"]');
    skillsTabBtn.addEventListener('click', () => {
        // This triggers the CSS transition on the skill bars
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.style.width = bar.style.width; // Reset to trigger animation
        });
    });
    
    // Fade-in animations for sections
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const checkFadeElements = () => {
        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', checkFadeElements);
    checkFadeElements(); // Run once on load
});