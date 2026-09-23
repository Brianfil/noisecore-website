const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active"); // disappear when scrolling up
    }
});
}, {
    threshold: 0.1
});

reveals.forEach((reveal) => {
observer.observe(reveal);
});