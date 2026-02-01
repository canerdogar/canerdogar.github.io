document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.getElementById("lang-toggle");
    if (!langButton) return;

    // Get the current URL path
    let currentPath = window.location.pathname;

    // Determine if we are in English mode
    let isEnglish = currentPath.startsWith("/en/");

    // Update button text based on current language
    langButton.textContent = isEnglish ? "TR" : "EN";

    // Define the behavior when the button is clicked
    langButton.addEventListener("click", function () {
    let newPath;

    if (isEnglish) {
        // Switch to Turkish by removing "/en" from the path
        newPath = currentPath.replace("/en/", "/");
    } else {
        // Switch to English by adding "/en" before the filename
        newPath = "/en" + currentPath;
    }

    // Redirect to the new path
    window.location.href = newPath;
    });
    // Function to check if screen is mobile
    function isMobile() {
        return window.innerWidth < 768; // Matches Tailwind's "md" breakpoint
    }

    // Function to toggle menu visibility
    function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("h-48");
    }

    // Function to close menu when a link is clicked
    function closeMenu() {
        if (isMobile()) {
            document.getElementById("menu").classList.remove("h-48");
        }
    }

    // Event listeners
    document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            document.getElementById("menu").classList.remove("h-48");
        }
    });
});
  