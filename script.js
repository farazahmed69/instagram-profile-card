document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.instagram-card');
    const followBtn = document.querySelector('.follow-btn');
    const messageBtn = document.querySelector('.message-btn');
    const profilePic = document.querySelector('.profile-pic-container');
    const highlights = document.querySelectorAll('.highlight-circle');

    // Add 3D effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(20px)`;
        profilePic.style.transform = `translateZ(50px) rotateY(${xAxis * 0.5}deg) rotateX(${yAxis * 0.5}deg)`;
        followBtn.style.transform = `translateZ(40px) rotateY(${xAxis * 0.3}deg) rotateX(${yAxis * 0.3}deg)`;
    });

    // Reset transforms on mouse leave
    document.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
        profilePic.style.transform = 'translateZ(30px) rotateY(0deg) rotateX(0deg)';
        followBtn.style.transform = 'translateZ(40px) rotateY(0deg) rotateX(0deg)';
    });

    // Animate follow button
    followBtn.addEventListener('mouseenter', () => {
        followBtn.style.transform = 'translateZ(50px) scale(1.1)';
    });

    followBtn.addEventListener('mouseleave', () => {
        followBtn.style.transform = 'translateZ(40px) scale(1)';
    });

    // Animate stats on load
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        let current = 0;
        const increment = target / 30;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });

    // Add hover effect to highlights
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseenter', () => {
            highlight.style.transform = 'translateZ(30px) scale(1.1)';
        });

        highlight.addEventListener('mouseleave', () => {
            highlight.style.transform = 'translateZ(10px) scale(1)';
        });
    });
});
