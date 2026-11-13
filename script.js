const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuBtn.textContent =
        navbar.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display =
        window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});