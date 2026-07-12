// ===== CERTIFICATES PDF VIEWER =====
document.addEventListener('DOMContentLoaded', function () {
    // ===== CREATE MODAL =====
    const modal = document.createElement('div');
    modal.className = 'pdf-modal';
    modal.id = 'pdfModal';
    modal.innerHTML = `
        <div class="pdf-modal-content">
            <button class="pdf-modal-close" id="pdfModalClose">
                <i class="fas fa-times"></i>
            </button>
            <div class="pdf-modal-loading" id="pdfLoading">
                <div class="loader"></div>
                <span>Loading PDF...</span>
            </div>
            <iframe class="pdf-modal-iframe" id="pdfIframe" src="" allow="autoplay"></iframe>
        </div>
    `;
    document.body.appendChild(modal);

    // ===== ELEMENTS =====
    const pdfModal = document.getElementById('pdfModal');
    const pdfIframe = document.getElementById('pdfIframe');
    const pdfLoading = document.getElementById('pdfLoading');
    const closeBtn = document.getElementById('pdfModalClose');

    // ===== OPEN PDF =====
    function openPDF(pdfUrl) {
        pdfModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        pdfLoading.style.display = 'flex';
        pdfIframe.style.display = 'none';

        setTimeout(() => {
            pdfIframe.src = pdfUrl;
            pdfIframe.onload = function () {
                pdfLoading.style.display = 'none';
                pdfIframe.style.display = 'block';
            };
        }, 400);
    }

    // ===== CLOSE PDF =====
    function closePDF() {
        pdfModal.classList.remove('active');
        document.body.style.overflow = '';

        setTimeout(() => {
            pdfIframe.src = '';
            pdfIframe.style.display = 'none';
            pdfLoading.style.display = 'flex';
        }, 400);
    }

    // ===== EVENT LISTENERS =====
    document.querySelectorAll('.cert-view-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const pdfUrl = this.getAttribute('data-pdf');
            if (pdfUrl) {
                openPDF(pdfUrl);
            }
        });
    });

    closeBtn.addEventListener('click', closePDF);

    pdfModal.addEventListener('click', function (e) {
        if (e.target === this) {
            closePDF();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && pdfModal.classList.contains('active')) {
            closePDF();
        }
    });
});