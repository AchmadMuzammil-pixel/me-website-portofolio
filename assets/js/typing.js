// ===== TYPING ANIMATION =====
document.addEventListener('DOMContentLoaded', function () {
    const typedElement = document.querySelector('#typing');

    if (typedElement && typeof Typed !== 'undefined') {
        const currentLang = localStorage.getItem('language') || 'en';

        const strings = {
            en: [
                'Virtual Assistant 👨‍💻',
                'Data Entry Specialist 📊',
                'Excel Expert 📋',
                'Web Researcher 🔍',
                'Administrative Support 📝'
            ],
            id: [
                'Asisten Virtual 👨‍💻',
                'Spesialis Entri Data 📊',
                'Ahli Excel 📋',
                'Peneliti Web 🔍',
                'Dukungan Administratif 📝'
            ]
        };

        const selectedStrings = strings[currentLang] || strings.en;

        window.typedInstance = new Typed('#typing', {
            strings: selectedStrings,
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
        });
    }
});