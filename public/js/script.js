function toggleMenu() {
  const menuIcon = document.getElementById("menuBtn");
  const menu = document.getElementById("sideMenu");
  menuIcon.classList.toggle("change");
  menu.classList.toggle("open");
}

function navigateToSection(event) {
  event.preventDefault();  // Prevent the default anchor behavior

  const targetId = event.target.getAttribute("href");  // Get the href value
  const targetSection = document.querySelector(targetId);  // Find the target section by ID

  if (targetSection) {
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Close the menu after clicking
    toggleMenu();
  }
}
