// ===== SCROLL ANIMATIONS & BACK TO TOP =====
document.addEventListener('DOMContentLoaded', function () {
    // ===== INITIALIZE AOS =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 80,
            once: true,
            easing: 'ease-out-cubic',
        });
        console.log('AOS initialized'); // Debug
    } else {
        console.warn('AOS not loaded');
    }

    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        let countersAnimated = false;

        function animateCounters() {
            if (countersAnimated) return;

            const isVisible = Array.from(counters).some(counter => {
                const rect = counter.getBoundingClientRect();
                return rect.top < window.innerHeight && rect.bottom > 0;
            });

            if (isVisible) {
                countersAnimated = true;
                counters.forEach((counter, index) => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    if (isNaN(target)) return;

                    const duration = 2000;
                    const step = Math.max(1, Math.floor(target / (duration / 16)));
                    let current = 0;

                    const updateCounter = () => {
                        current += step;
                        if (current >= target) {
                            counter.textContent = target;
                            return;
                        }
                        counter.textContent = current;
                        requestAnimationFrame(updateCounter);
                    };

                    setTimeout(() => {
                        updateCounter();
                    }, index * 200);
                });
            }
        }

        let isThrottled = false;
        window.addEventListener('scroll', function () {
            if (!isThrottled) {
                window.requestAnimationFrame(() => {
                    animateCounters();
                    isThrottled = false;
                });
                isThrottled = true;
            }
        });

        window.addEventListener('load', function () {
            setTimeout(animateCounters, 500);
        });
    }
});