
// Add smooth interactions and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to logo
    const logo = document.querySelector('.logo-circle');
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });

    // Add click effect to notification
    const notification = document.querySelector('.notification');
    notification.addEventListener('click', function() {
        // Simple notification effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // You can add email subscription logic here
        console.log('Notification clicked - Add email subscription logic');
    });

    // Add parallax effect to floating elements
    document.addEventListener('mousemove', function(e) {
        const elements = document.querySelectorAll('.floating-element');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        elements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const xPos = (x - 0.5) * speed * 20;
            const yPos = (y - 0.5) * speed * 20;
            
            element.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });

    // Add stagger animation to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.style.animationDelay = `${1.2 + (index * 0.1)}s`;
        link.classList.add('fade-in-up');
    });

    // Typing effect for coming soon text (optional enhancement)
    const comingSoonText = document.querySelector('.coming-soon');
    const originalText = comingSoonText.textContent;
    comingSoonText.textContent = '';
    
    setTimeout(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                comingSoonText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }, 1000);
});

// Add CSS class for stagger animation
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);
