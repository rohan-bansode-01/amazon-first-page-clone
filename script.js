// Fade-in animation for product boxes
const boxes = document.querySelectorAll(".shop-box div");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        let pos = box.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            box.style.opacity = "1";
            box.style.transform = "scale(1)";
        }
    });
});

// Back to top button
document.querySelector(".back").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
