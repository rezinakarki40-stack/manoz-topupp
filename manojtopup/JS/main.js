// Future backend & animation ready
console.log("Manoz Dai Website Loaded");

// Simple fade-in animation for all sections, cards, and price boxes
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section, .card, .price-box");
    sections.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "all 0.6s ease-out";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 200); // staggered animation
    });
});