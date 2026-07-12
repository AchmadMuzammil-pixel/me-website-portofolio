// ===== NAVBAR FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li a');
    const body = document.body;

    // Pastikan elemen ada
    if (!navbar || !hamburger || !menu) return;

    // ===== SCROLL EFFECT =====
    let lastScroll = 0;
    let isScrolling = false;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;

        // Update active menu link - with throttle
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateActiveLink();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // ===== HAMBURGER MENU =====
    let isMenuOpen = false;

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            this.classList.add('active');
            menu.classList.add('active');
            body.style.overflow = 'hidden';
        } else {
            this.classList.remove('active');
            menu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // ===== CLOSE MENU ON LINK CLICK =====
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;

            isMenuOpen = false;
            hamburger.classList.remove('active');
            menu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // ===== CLOSE MENU ON CLICK OUTSIDE =====
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target) && menu.classList.contains('active')) {
            isMenuOpen = false;
            hamburger.classList.remove('active');
            menu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // ===== UPDATE ACTIVE LINK =====
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== UPDATE ACTIVE LINK ON LOAD =====
    setTimeout(updateActiveLink, 100);
});