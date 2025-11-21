document.addEventListener('DOMContentLoaded', () => {
    console.log('Adil Project Store Loaded');

    const header = document.getElementById('main-header');
    
    // Scroll Effect logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.height = '40px'; // Shrink header
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.height = '48px'; // Original height
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });
});