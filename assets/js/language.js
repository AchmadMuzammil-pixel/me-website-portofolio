// ===== MULTI LANGUAGE SUPPORT =====
document.addEventListener('DOMContentLoaded', function () {
    const langToggle = document.getElementById('languageToggle');
    const langLabel = document.getElementById('langLabel');
    let currentLang = localStorage.getItem('language') || 'en';

    // ===== TRANSLATIONS =====
    const translations = {
        en: {
            // Navbar
            navHome: 'Home',
            navAbout: 'About',
            navSkills: 'Skills',
            navExperience: 'Experience',
            navPortfolio: 'Portfolio',
            navCertificates: 'Certificates',  // ← TAMBAHKAN INI
            navContact: 'Contact',
            // Hero
            heroBadge: 'Welcome to my Portfolio',
            heroHello: "Hello, I'm",
            heroDesc: 'Informatics Engineering graduate skilled in administration, data management, and providing efficient, structured operational support. Ready to deliver accurate, reliable, and efficient assistance as a Virtual Assistant.',
            heroCv: 'Download CV',
            heroContact: 'Hire Me',
            scrollText: 'Scroll',
            badgeVA: 'Virtual Assistant',
            badgeExcel: 'Excel Expert',

            // About
            aboutBadge: 'ABOUT ME',
            aboutTitle: 'Virtual Assistant & Data Management Specialist',
            aboutDesc: 'Passionate about administration, data management, and providing efficient operational support to help businesses run smoothly.',
            aboutHi: "Hi, I'm Achmad Muzammil 👋",
            aboutText: 'An Informatics Engineering graduate skilled in administration, data management, and providing efficient, structured operational support. Experienced in database management, data validation and entry, documentation, web research, and ensuring accurate information flow. Accustomed to working with precision, discipline, and strong communication while effectively managing multiple tasks to meet deadlines.',
            aboutName: 'Name',
            aboutEducation: 'Education',
            eduText: 'Bachelor of Informatics Engineering',
            aboutLocation: 'Location',
            locationText: 'Wongsorejo, Banyuwangi, East Java',
            expBadge: 'Years Experience',
            statProjects: 'Projects',  // EN
            navCertificates: 'Certificates',
            statCertificates: 'Certificates',
            statSkills: 'Tech Skills',
            statExperience: 'Years Experience',

            // Skills
            skillsBadge: 'MY EXPERTISE',
            skillsTitle: 'Skills & Technologies',
            skillsDesc: 'Specialized skills developed through academic projects, professional experience, and continuous learning to provide comprehensive virtual assistance.',
            skillDataTitle: 'Data Management',
            skillAdminTitle: 'Administrative Support',
            skillWebTitle: 'Web Development',
            skillBackendTitle: 'Backend Development',
            skillResearchTitle: 'Research & Analysis',
            skillToolsTitle: 'Tools & Version Control',
            skillDashboard: 'Dashboard',
            skillReporting: 'Reporting',
            skillCleaning: 'Data Cleaning',
            skillDoc: 'Documentation',
            skillEmail: 'Email Management',
            skillEntry: 'Data Entry',
            skillOffice: 'Microsoft Office',
            skillCalendar: 'Calendar Management',
            skillWebResearch: 'Web Research',
            skillDataAnalysis: 'Data Analysis',
            skillProblemSolving: 'Problem Solving',
            skillCustomerService: 'Customer Service',

            // Experience
            expBadge: 'WORK EXPERIENCE',
            expTitle: 'Professional Journey',
            expDesc: 'My professional experience in customer service, editorial, and administrative roles.',

            // Portfolio
            portfolioBadge: 'MY PROJECTS',
            portfolioTitle: 'Featured Portfolio',
            portfolioDesc: 'Here are some of my recent projects that showcase my skills and expertise.',
            filterAll: 'All',
            filterWeb: 'Web',
            filterData: 'Data',
            tagWeb: 'Web Development',
            tagData: 'Data Management',

            // Certificates
            certBadge: 'CERTIFICATES',
            certTitle: 'Certifications & Awards',
            certDesc: 'Professional certifications and achievements that validate my skills and expertise.',

            // Contact
            contactBadge: 'GET IN TOUCH',
            contactTitle: "Let's Work Together",
            contactDesc: 'Have a project in mind or need virtual assistance? Feel free to reach out!',
            contactInfoTitle: 'Contact Information',
            contactInfoDesc: "I'm always open to new opportunities, collaborations, or just a friendly chat. Let's connect and discuss how I can help your business!",
            contactEmailLabel: 'Email',
            contactPhoneLabel: 'Phone',
            contactLocationLabel: 'Location',
            contactHoursLabel: 'Working Hours',
            contactHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
            formName: 'Full Name',
            formEmail: 'Email Address',
            formSubject: 'Subject',
            formMessage: 'Message',
            formSend: 'Send Message',

            // Footer
            footerDesc: 'Virtual Assistant & Data Management Specialist providing efficient, accurate, and reliable operational support for your business.',
            footerQuickLinks: 'Quick Links',
            footerServices: 'Services',
            footerNewsletter: 'Newsletter',
            footerNewsletterDesc: 'Subscribe to get updates on my latest projects.',
            footerRights: 'All rights reserved.',
            footerMade: 'Made with ❤️ in Banyuwangi',
            serviceVA: 'Virtual Assistant',
            serviceData: 'Data Entry',
            serviceExcel: 'Excel Management',
            serviceResearch: 'Web Research',
            serviceAdmin: 'Administrative Support',
        },
        id: {
            // Navbar
            navHome: 'Beranda',
            navAbout: 'Tentang',
            navSkills: 'Keahlian',
            navExperience: 'Pengalaman',
            navPortfolio: 'Portofolio',
            navCertificates: 'Sertifikat',  // ← TAMBAHKAN INI
            navContact: 'Kontak',

            // Hero
            heroBadge: 'Selamat Datang di Portofolio Saya',
            heroHello: 'Halo, Saya',
            heroDesc: 'Lulusan Teknik Informatika yang terampil dalam administrasi, manajemen data, dan memberikan dukungan operasional yang efisien dan terstruktur. Siap memberikan bantuan yang akurat, andal, dan efisien sebagai Asisten Virtual.',
            heroCv: 'Download CV',
            heroContact: 'Hubungi Saya',
            scrollText: 'Gulir',
            badgeVA: 'Asisten Virtual',
            badgeExcel: 'Ahli Excel',

            // About
            aboutBadge: 'TENTANG SAYA',
            aboutTitle: 'Asisten Virtual & Spesialis Manajemen Data',
            aboutDesc: 'Bergairah tentang administrasi, manajemen data, dan memberikan dukungan operasional yang efisien untuk membantu bisnis berjalan dengan lancar.',
            aboutHi: 'Halo, Saya Achmad Muzammil 👋',
            aboutText: 'Lulusan Teknik Informatika yang terampil dalam administrasi, manajemen data, dan memberikan dukungan operasional yang efisien dan terstruktur. Berpengalaman dalam manajemen database, validasi dan entri data, dokumentasi, riset web, dan memastikan aliran informasi yang akurat. Terbiasa bekerja dengan presisi, disiplin, dan komunikasi yang kuat sambil mengelola banyak tugas secara efektif untuk memenuhi tenggat waktu.',
            aboutName: 'Nama',
            aboutEducation: 'Pendidikan',
            eduText: 'Sarjana Teknik Informatika',
            aboutLocation: 'Lokasi',
            locationText: 'Wongsorejo, Banyuwangi, Jawa Timur',
            expBadge: 'Pengalaman',
            navCertificates: 'Sertifikat',
            statProjects: 'Proyek',    // ID
            statCertificates: 'Sertifikat',
            statSkills: 'Keahlian',
            statExperience: 'Tahun Pengalaman',

            // Skills
            skillsBadge: 'KEAHLIAN SAYA',
            skillsTitle: 'Keahlian & Teknologi',
            skillsDesc: 'Keahlian khusus yang dikembangkan melalui proyek akademik, pengalaman profesional, dan pembelajaran berkelanjutan untuk memberikan bantuan virtual yang komprehensif.',
            skillDataTitle: 'Manajemen Data',
            skillAdminTitle: 'Dukungan Administratif',
            skillWebTitle: 'Pengembangan Web',
            skillBackendTitle: 'Pengembangan Backend',
            skillResearchTitle: 'Riset & Analisis',
            skillToolsTitle: 'Alat & Version Control',
            skillDashboard: 'Dashboard',
            skillReporting: 'Pelaporan',
            skillCleaning: 'Pembersihan Data',
            skillDoc: 'Dokumentasi',
            skillEmail: 'Manajemen Email',
            skillEntry: 'Entri Data',
            skillOffice: 'Microsoft Office',
            skillCalendar: 'Manajemen Kalender',
            skillWebResearch: 'Riset Web',
            skillDataAnalysis: 'Analisis Data',
            skillProblemSolving: 'Pemecahan Masalah',
            skillCustomerService: 'Layanan Pelanggan',

            // Experience
            expBadge: 'PENGALAMAN KERJA',
            expTitle: 'Perjalanan Profesional',
            expDesc: 'Pengalaman profesional saya dalam layanan pelanggan, editorial, dan peran administratif.',

            // Portfolio
            portfolioBadge: 'PROYEK SAYA',
            portfolioTitle: 'Portofolio Unggulan',
            portfolioDesc: 'Berikut adalah beberapa proyek terbaru saya yang menunjukkan keahlian dan pengalaman saya.',
            filterAll: 'Semua',
            filterWeb: 'Web',
            filterData: 'Data',
            tagWeb: 'Pengembangan Web',
            tagData: 'Manajemen Data',

            // Certificates
            certBadge: 'SERTIFIKAT',
            certTitle: 'Sertifikasi & Penghargaan',
            certDesc: 'Sertifikasi profesional dan pencapaian yang memvalidasi keahlian dan pengalaman saya.',

            // Contact
            contactBadge: 'HUBUNGI SAYA',
            contactTitle: 'Mari Bekerja Sama',
            contactDesc: 'Ada proyek dalam pikiran atau butuh bantuan virtual? Jangan ragu untuk menghubungi!',
            contactInfoTitle: 'Informasi Kontak',
            contactInfoDesc: 'Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar obrolan ramah. Mari terhubung dan diskusikan bagaimana saya dapat membantu bisnis Anda!',
            contactEmailLabel: 'Email',
            contactPhoneLabel: 'Telepon',
            contactLocationLabel: 'Lokasi',
            contactHoursLabel: 'Jam Kerja',
            contactHours: 'Sen - Jum: 09:00 - 18:00',
            formName: 'Nama Lengkap',
            formEmail: 'Alamat Email',
            formSubject: 'Subjek',
            formMessage: 'Pesan',
            formSend: 'Kirim Pesan',

            // Footer
            footerDesc: 'Asisten Virtual & Spesialis Manajemen Data yang memberikan dukungan operasional yang efisien, akurat, dan andal untuk bisnis Anda.',
            footerQuickLinks: 'Tautan Cepat',
            footerServices: 'Layanan',
            footerNewsletter: 'Buletin',
            footerNewsletterDesc: 'Berlangganan untuk mendapatkan pembaruan tentang proyek terbaru saya.',
            footerRights: 'Hak Cipta Dilindungi.',
            footerMade: 'Dibuat dengan ❤️ di Banyuwangi',
            serviceVA: 'Asisten Virtual',
            serviceData: 'Entri Data',
            serviceExcel: 'Manajemen Excel',
            serviceResearch: 'Riset Web',
            serviceAdmin: 'Dukungan Administratif',
        }
    };

    // ===== APPLY LANGUAGE =====
    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        if (langLabel) {
            langLabel.textContent = lang.toUpperCase();
        }

        localStorage.setItem('language', lang);
        currentLang = lang;
        updateTypingText(lang);
    }

    // ===== UPDATE TYPING TEXT =====
    function updateTypingText(lang) {
        const typingStrings = {
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

        const strings = typingStrings[lang] || typingStrings.en;
        const typedElement = document.querySelector('#typing');

        if (typedElement && typeof Typed !== 'undefined') {
            if (window.typedInstance) {
                window.typedInstance.destroy();
            }

            window.typedInstance = new Typed('#typing', {
                strings: strings,
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true,
            });
        }
    }

    // ===== TOGGLE LANGUAGE =====
    if (langToggle) {
        langToggle.addEventListener('click', function () {
            const newLang = currentLang === 'en' ? 'id' : 'en';
            applyLanguage(newLang);
        });
    }

    // ===== INITIALIZE =====
    applyLanguage(currentLang);
});