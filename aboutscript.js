// Toggle Mobile Menu Drawer
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.className = 'fa-solid fa-bars-staggered text-xl';
    } else {
        icon.className = 'fa-solid fa-xmark text-xl';
    }
}

// Artisan Switcher Data & Logic
const artisans = {
    chef: {
        role: 'Executive Chef & Visionary',
        name: 'Antoine De La Croix',
        bio: '"Precision is not an act; it is our second nature."',
        img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000'
    },
    sommelier: {
        role: 'Master Sommelier & Wine Curator',
        name: 'Evelyn Laurent',
        bio: '"A great wine does not just accompany a dish; it elevates its soul."',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000'
    },
    pastry: {
        role: 'Head Pastry Architect',
        name: 'Marcello Neri',
        bio: '"Dessert is the final lasting memory of a sensory journey."',
        img: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1000'
    }
};

function switchArtisan(key) {
    const artisan = artisans[key];
    if (!artisan) return;

    // Update Image & Text
    document.getElementById('artisanImage').src = artisan.img;
    document.getElementById('artisanRole').innerText = artisan.role;
    document.getElementById('artisanName').innerText = artisan.name;
    document.getElementById('artisanBio').innerText = artisan.bio;

    // Highlight Active Tab
    ['chef', 'sommelier', 'pastry'].forEach(item => {
        const tab = document.getElementById(`artisanTab-${item}`);
        if (item === key) {
            tab.className = "p-4 rounded-2xl bg-white/80 border border-emerald-900/20 cursor-pointer hover:border-gold transition-all duration-300 shadow-sm flex items-center justify-between group";
        } else {
            tab.className = "p-4 rounded-2xl bg-white/40 border border-stone-200 cursor-pointer hover:border-gold transition-all duration-300 flex items-center justify-between group";
        }
    });
}

// Reservation Modal Controls
function openReservationModal() {
    const modal = document.getElementById('reservationModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeReservationModal() {
    const modal = document.getElementById('reservationModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('modalMessage').classList.add('hidden');
}

function handleReservationSubmit(e) {
    e.preventDefault();
    const msg = document.getElementById('modalMessage');
    msg.classList.remove('hidden');
    setTimeout(() => {
        closeReservationModal();
    }, 2500);
}

// Header Background Blur Shift on Scroll
window.addEventListener('scroll', () => {
    const header = id = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.add('py-4');
        header.classList.remove('py-2');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})