// Render Menu Cards
function renderMenu(categoryKey) {
    const grid = document.getElementById("menuGrid");
    const items = menuData[categoryKey] || menuData['starters'];

    grid.innerHTML = items.map(dish => `
        <article class="dish-card">
          <div class="dish-img-box">
            <img src="${dish.img}" alt="${dish.title}">
            <span class="dish-price-badge">${dish.price}</span>
          </div>
          <div class="dish-details">
            <h3 class="dish-title">${dish.title}</h3>
            <p class="dish-desc">${dish.desc}</p>
            <div class="ingredients-tags">
              ${dish.tags.map(tag => `<span class="ingredient-pill">${tag}</span>`).join('')}
            </div>
            <button class="dish-order-btn" onclick="openModal('${dish.title}', 'Added to your table order selection. Price: ${dish.price}')">Order To Table</button>
          </div>
        </article>
      `).join('');
}

// Switch Category Button Handler
function switchCategory(key, btn) {
    document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(key);
}

// Hero Auto Slider
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

function nextHeroSlide() {
    heroSlides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    heroSlides[currentHeroSlide].classList.add('active');
}
setInterval(nextHeroSlide, 5000);

// Blog Slider Logic
const blogTrack = document.getElementById('blogTrack');
const blogPrevBtn = document.getElementById('blogPrevBtn');
const blogNextBtn = document.getElementById('blogNextBtn');

let blogIndex = 0;
const totalBlogCards = document.querySelectorAll('.blog-card').length;

function updateBlogSlider() {
    // 50% shift per slide on larger screens
    const cardWidthPercentage = window.innerWidth <= 1024 ? 100 : 50;
    const gapOffset = window.innerWidth <= 1024 ? 0 : 15;
    blogTrack.style.transform = `translateX(-${blogIndex * (cardWidthPercentage)}%)`;
}

blogNextBtn.addEventListener('click', () => {
    const maxIndex = window.innerWidth <= 1024 ? totalBlogCards - 1 : totalBlogCards - 2;
    blogIndex = blogIndex >= maxIndex ? 0 : blogIndex + 1;
    updateBlogSlider();
});

blogPrevBtn.addEventListener('click', () => {
    const maxIndex = window.innerWidth <= 1024 ? totalBlogCards - 1 : totalBlogCards - 2;
    blogIndex = blogIndex <= 0 ? maxIndex : blogIndex - 1;
    updateBlogSlider();
});

// Auto Play Blog Carousel every 4 seconds
setInterval(() => {
    const maxIndex = window.innerWidth <= 1024 ? totalBlogCards - 1 : totalBlogCards - 2;
    blogIndex = blogIndex >= maxIndex ? 0 : blogIndex + 1;
    updateBlogSlider();
}, 4500);

// Header Scroll Glassmorphism Transition
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Modal Handlers
function openModal(title, text) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerText = text;
    document.getElementById('infoModal').classList.add('active');
}

function closeModal() {
    document.getElementById('infoModal').classList.remove('active');
}

// Form Reservation Handler
function handleReservation(e) {
    e.preventDefault();
    openModal("Reservation Request Received!", "Thank you for contacting MAISON Pathankot. Our reservation team will confirm your seating via SMS and email shortly.");
}

// Initialize Default Menu Category
renderMenu('starters');