document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image-container');
    const header = document.querySelector('header');

    // Simple scroll effect for header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.75rem 0';
            header.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1.25rem 0';
            header.style.boxShadow = 'none';
        }
    });

    // Entrance Animations
    const animateEntrance = () => {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'all 1s cubic-bezier(0.2, 0.8, 0.2, 1)';

        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.95)';
        heroImage.style.transition = 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
            
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1)';
        }, 100);
    };

    animateEntrance();
});
