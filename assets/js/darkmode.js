// ===== DARK MODE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
    const darkModeBtn = document.getElementById('darkMode');

    if (!darkModeBtn) return;

    const html = document.documentElement;
    const icon = darkModeBtn.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    darkModeBtn.addEventListener('click', function () {
        html.classList.toggle('dark');

        if (icon) {
            if (html.classList.contains('dark')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        }

        if (window.AOS) {
            AOS.refresh();
        }
    });
});