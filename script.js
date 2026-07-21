/* ==========================================================================
   1. MOBILE NAV TOGGLE
   ========================================================================== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ==========================================================================
   2. FEATURED DASHBOARD CAROUSEL
   ========================================================================== */
const carousel = document.getElementById('carousel');
const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
const dotsWrap = document.getElementById('carouselDots');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

let currentSlide = 0;

function buildDots() {
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dots__dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Dashboard ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
}

function goToSlide(index) {
  slides[currentSlide].classList.remove('is-active');
  dotsWrap.children[currentSlide].classList.remove('is-active');

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add('is-active');
  dotsWrap.children[currentSlide].classList.add('is-active');
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

buildDots();

/* ==========================================================================
   3. PROJECT FILTER
   ========================================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});
