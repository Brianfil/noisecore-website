const slides = document.querySelectorAll('.products-slide');
const dots = document.querySelectorAll('.products-dots .dot');
const prevBtn = document.querySelector('.products-nav.prev');
const nextBtn = document.querySelector('.products-nav.next');

let currentSlide = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
});

dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
});
}

nextBtn.addEventListener('click', () => {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
currentSlide = (currentSlide - 1 + slides.length) % slides.length;
showSlide(currentSlide);
});

dots.forEach((dot, i) => {
dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
});
});

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-product-filter');

    // Highlight selected button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show only matching cards (strict match)
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (cardCategory === selectedCategory || selectedCategory === 'all') {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});