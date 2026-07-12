// ===== CONTACT FORM FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('.submit-btn');

    // ===== FORM SUBMISSION =====
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        if (!name || !email || !subject || !message) {
            showStatus('Form tidak lengkap.', 'error');
            return;
        }

        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const subjectValue = subject.value.trim();
        const messageValue = message.value.trim();

        if (!nameValue || !emailValue || !subjectValue || !messageValue) {
            showStatus('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(emailValue)) {
            showStatus('Please enter a valid email address.', 'error');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        const formData = {
            name: nameValue,
            email: emailValue,
            subject: subjectValue,
            message: messageValue
        };

        try {
            // ===== GANTI ID INI DENGAN FORMSPREE ID ANDA =====
            // Daftar di https://formspree.io/ untuk mendapatkan ID gratis
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                showStatus('Message sent successfully! I\'ll get back to you soon. 🎉', 'success');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showStatus('Something went wrong. Please try again later.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    });

    function showStatus(message, type) {
        if (!status) return;
        status.textContent = message;
        status.className = type;
        status.style.display = 'block';

        clearTimeout(status._timeout);
        status._timeout = setTimeout(() => {
            status.style.display = 'none';
        }, 5000);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ===== NEWSLETTER FORM =====
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const input = this.querySelector('input');
            if (!input) return;

            const email = input.value.trim();

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const btn = this.querySelector('button');
            if (btn) {
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.style.background = '#2ed573';
            }

            setTimeout(() => {
                if (btn) {
                    btn.innerHTML = '<i class="fas fa-arrow-right"></i>';
                    btn.style.background = '';
                }
                input.value = '';
                alert('Thank you for subscribing! 🎉');
            }, 1500);
        });
    }
});