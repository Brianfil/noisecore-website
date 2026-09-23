const slides = document.querySelectorAll(".deals-slide");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
const dotsContainer = document.getElementById("dealsDots");

let currentSlide = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = "flex";
      slide.classList.add("fade-in");
    } else {
      slide.style.display = "none";
      slide.classList.remove("fade-in");
    }
  });

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentSlide) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlides();
    });
    dotsContainer.appendChild(dot);
  });
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});

createDots();
updateSlides();