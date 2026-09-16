// ======================================
// Portfolio Website - script.js
// ======================================

// ============================
// Sticky Navbar
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});

// ============================
// Scroll To Top Button
// ============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ============================
// Smooth Scrolling
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ============================
// Active Navigation
// ============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// ============================
// Navbar Shadow
// ============================

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 10) {
            navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
        } else {
            navbar.style.boxShadow = "none";
        }

    }

});

// ============================
// Current Year (Optional)
// ============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ============================
// Console Message
// ============================

console.log("Portfolio Website Loaded Successfully 🚀");