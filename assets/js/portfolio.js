// ===== PORTFOLIO - LOAD MORE SIMPLE =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Portfolio JS Loaded');

    // ===== ELEMENTS =====
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const projectCount = document.getElementById('projectCount');
    const allItems = document.querySelectorAll('.portfolio-item');
    
    console.log('📦 Total items:', allItems.length);
    console.log('🔘 Load More button:', loadMoreBtn ? 'FOUND ✅' : 'NOT FOUND ❌');

    // ===== CONFIG =====
    const SHOW_INITIAL = 6;
    const LOAD_EACH = 3;
    let visibleCount = SHOW_INITIAL;
    let isLoaded = false;

    // ===== FUNGSI UPDATE COUNT =====
    function updateCount() {
        const total = allItems.length;
        const visible = document.querySelectorAll('.portfolio-item:not(.hidden-portfolio):not([style*="display: none"])').length;
        
        if (projectCount) {
            projectCount.textContent = `Showing ${visible} of ${total} projects`;
        }
        
        // Cek apakah semua sudah tampil
        if (visible >= total) {
            if (loadMoreBtn) {
                loadMoreBtn.disabled = true;
                loadMoreBtn.textContent = '✅ All Projects Loaded';
                loadMoreBtn.style.opacity = '0.6';
                loadMoreBtn.style.cursor = 'not-allowed';
            }
        } else {
            if (loadMoreBtn) {
                loadMoreBtn.disabled = false;
                loadMoreBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Load More Projects';
                loadMoreBtn.style.opacity = '1';
                loadMoreBtn.style.cursor = 'pointer';
            }
        }
    }

    // ===== FUNGSI LOAD MORE =====
    function loadMore() {
        console.log('🔄 Load More clicked!');
        
        // Ambil item yang masih hidden
        const hiddenItems = document.querySelectorAll('.portfolio-item.hidden-portfolio:not(.visible)');
        console.log('📦 Hidden items:', hiddenItems.length);
        
        if (hiddenItems.length === 0) {
            updateCount();
            return;
        }
        
        let loaded = 0;
        const toLoad = Math.min(LOAD_EACH, hiddenItems.length);
        
        hiddenItems.forEach((item, index) => {
            if (loaded < toLoad) {
                setTimeout(() => {
                    item.style.display = 'block';
                    item.classList.add('visible');
                    loaded++;
                    
                    console.log(`✅ Showed item ${index + 1}`);
                    
                    if (loaded === toLoad || index === hiddenItems.length - 1) {
                        setTimeout(() => {
                            updateCount();
                            if (window.AOS) AOS.refresh();
                        }, 200);
                    }
                }, index * 150);
            }
        });
    }

    // ===== SETUP AWAL =====
    function init() {
        console.log('🚀 Initializing portfolio...');
        
        // Sembunyikan semua item di atas 6
        allItems.forEach((item, index) => {
            if (index >= SHOW_INITIAL) {
                if (!item.classList.contains('hidden-portfolio')) {
                    item.classList.add('hidden-portfolio');
                }
                item.style.display = 'none';
                item.classList.remove('visible');
            } else {
                item.classList.remove('hidden-portfolio');
                item.style.display = 'block';
            }
        });
        
        updateCount();
        console.log('✅ Portfolio initialized!');
    }

    // ===== EVENT LISTENER - CARA PALING AMAN =====
    if (loadMoreBtn) {
        console.log('🔗 Attaching click event...');
        
        // Hapus semua event listener lama
        const newBtn = loadMoreBtn.cloneNode(true);
        loadMoreBtn.parentNode.replaceChild(newBtn, loadMoreBtn);
        
        // Tambahkan event listener baru
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🎯 Button CLICKED!');
            loadMore();
        });
        
        console.log('✅ Event attached!');
    } else {
        console.error('❌ Load More button not found!');
    }

    // ===== FILTER (untuk menjaga kompatibilitas) =====
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            document.querySelectorAll('.portfolio-item').forEach(item => {
                const category = item.dataset.category;
                const isHidden = item.classList.contains('hidden-portfolio') && !item.classList.contains('visible');
                
                if (filter === 'all' || category === filter) {
                    if (!isHidden) {
                        item.style.display = 'block';
                    }
                } else {
                    item.style.display = 'none';
                }
            });
            
            setTimeout(updateCount, 200);
        });
    });

    // ===== PARALLAX =====
    document.querySelectorAll('.portfolio-item').forEach(item => {
        const img = item.querySelector('.portfolio-image img');
        if (!img) return;
        
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            img.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
        });
        
        item.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1) translate(0, 0)';
        });
    });

    // ===== JALANKAN =====
    init();
});