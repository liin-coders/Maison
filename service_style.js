// Smooth shrinking hero text on scroll
const heroSection = document.getElementById('hero-section');
const heroText = document.getElementById('hero-text');
const heroSub = document.getElementById('hero-sub');
const heroDesc = document.getElementById('hero-desc');

window.addEventListener('scroll', () => {
    if (!heroSection || !heroText) return;

    const rect = heroSection.getBoundingClientRect();
    const totalScrollable = heroSection.offsetHeight - window.innerHeight;

    if (totalScrollable <= 0) return;

    // Calculate scroll ratio (0 = top, 1 = scrolled through hero)
    let progress = -rect.top / totalScrollable;
    progress = Math.min(Math.max(progress, 0), 1);

    // Scale down brand title smoothly from 1.0 down to 0.38
    const scale = 1 - (progress * 0.62);
    // Translate upwards as scroll proceeds
    const translateY = progress * -40;
    // Fade sub elements
    const opacity = 1 - (progress * 2.2);

    heroText.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    if (heroSub) heroSub.style.opacity = opacity > 0 ? opacity : 0;
    if (heroDesc) heroDesc.style.opacity = opacity > 0 ? opacity : 0;
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        menu.classList.add('hidden');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

// Modal Open / Close Helpers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

// Form Submission Handlers
function handleFormSubmit(e) {
    e.preventDefault();
    showToast("Thank you! Your message has been sent to our concierge.");
    e.target.reset();
}

function handleModalSubmit(e, modalId) {
    e.preventDefault();
    closeModal(modalId);
    showToast("Your request has been received! MAISON team will contact you shortly.");
    e.target.reset();
}

// Toast Notification System
function showToast(msg) {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (toast && toastMsg) {
        toastMsg.innerText = msg;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
    }

}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});