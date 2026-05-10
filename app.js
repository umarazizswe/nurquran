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

    // Currency Switcher Logic
    const currencyBtns = document.querySelectorAll('.currency-btn');
    const priceAmounts = document.querySelectorAll('.plan-price .amount');
    const priceCurrencies = document.querySelectorAll('.plan-price .currency');

    const pricingData = {
        '$ USD': { symbol: '$', prices: [30, 40, 50, 60] },
        '£ GBP': { symbol: '£', prices: [25, 32, 42, 50] },
        '€ EUR': { symbol: '€', prices: [28, 38, 48, 58] },
        'C$ CAD': { symbol: 'C$', prices: [40, 55, 70, 85] },
        'A$ AUD': { symbol: 'A$', prices: [45, 60, 75, 90] }
    };

    currencyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active State
            currencyBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update Prices
            const currency = btn.innerText;
            const data = pricingData[currency];
            
            priceCurrencies.forEach(c => c.innerText = data.symbol);
            priceAmounts.forEach((amount, index) => {
                // Smooth transition for price change
                amount.style.opacity = '0';
                amount.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    amount.innerText = data.prices[index];
                    amount.style.opacity = '1';
                    amount.style.transform = 'translateY(0)';
                }, 200);
            });
        });
    });
});
