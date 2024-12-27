document.addEventListener("DOMContentLoaded", () => {
    const arabicButton = document.getElementById("arabic-btn");
    const englishButton = document.getElementById("english-btn");

    // Function to switch language
    function switchLanguage(language) {
        const englishElements = document.querySelectorAll(".english, [data-lang*='-en']");
        const arabicElements = document.querySelectorAll(".arabic, [data-lang*='-ar']");

        if (language === "arabic") {
            englishElements.forEach((element) => (element.style.display = "none"));
            arabicElements.forEach((element) => (element.style.display = "block"));
            document.body.setAttribute("dir", "rtl");

            // Highlight the active button
            arabicButton.classList.add("active");
            englishButton.classList.remove("active");
        } else if (language === "english") {
            englishElements.forEach((element) => (element.style.display = "block"));
            arabicElements.forEach((element) => (element.style.display = "none"));
            document.body.setAttribute("dir", "ltr");

            // Highlight the active button
            englishButton.classList.add("active");
            arabicButton.classList.remove("active");
        }
    }

    // Event listeners for buttons
    arabicButton.addEventListener("click", () => switchLanguage("arabic"));
    englishButton.addEventListener("click", () => switchLanguage("english"));

    // Set default language
    const defaultLanguage = "arabic"; // Change to "english" if needed
    switchLanguage(defaultLanguage);

    // Toggle the navigation menu
    const menuButton = document.getElementById("menu-btn");
    menuButton.addEventListener("click", function () {
        const navMenu = document.querySelector("nav ul");
        navMenu.classList.toggle("show");

        // Update aria-expanded for accessibility
        const isExpanded = navMenu.classList.contains("show");
        this.setAttribute("aria-expanded", isExpanded);
    });
});
document.documentElement.setAttribute("dir", language === "arabic" ? "rtl" : "ltr");
