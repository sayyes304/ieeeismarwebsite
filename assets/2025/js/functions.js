window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile menu and dropdown handling
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Dropdown toggle for mobile
    const dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            if (window.innerWidth <= 768) {
                event.preventDefault(); // Prevent default link action
                this.parentElement.classList.toggle("active");

                // Close other open dropdowns
                document.querySelectorAll(".dropdown").forEach((otherDropdown) => {
                    if (otherDropdown !== this.parentElement) {
                        otherDropdown.classList.remove("active");
                    }
                });
            }
        });
    });
});
