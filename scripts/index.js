let toggleButton = document.getElementsByClassName("toggle")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle("active");
})
