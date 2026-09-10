// Smooth Scroll menuju Panel Materi dari Peta Pembelajaran
function scrollToPanel(panelIndex) {
    const targetPanel = document.getElementById(`panel-${panelIndex}`);
    const navCards = document.querySelectorAll('.nav-card');
    
    // Highlight tombol kartu peta yang aktif
    navCards.forEach((card, idx) => {
        if (idx === panelIndex - 1) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    if (targetPanel) {
        targetPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Buka-tutup Sub-Materi Interaktif (Tombol & Panah)
function toggleSubContent(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        if (targetElement.classList.contains('active')) {
            targetElement.classList.remove('active');
        } else {
            targetElement.classList.add('active');
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// Toggle Accordion Penutup
function toggleAccordion(accId) {
    const accContent = document.getElementById(accId);
    if (accContent) {
        accContent.classList.toggle('active');
    }
}

// Kontrol Modal Daftar Pustaka
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

// Tutup modal jika klik di luar kotak modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
};
