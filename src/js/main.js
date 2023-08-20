const toggleButton = document.querySelector("#btn-mobile");
const navbarLinks = document.querySelector("#menu-mobile");
const navbar = document.querySelector("header");




window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("fixed", "bg-[#1a1a1a]", "shadow-md", "w-full", "transition","duration-100"  );
  } else {
    navbar.classList.remove("fixed", "bg-[#1a1a1a]", "shadow-md");
  }
});

toggleButton.addEventListener("click", () => {
  if (toggleButton.textContent === "☰") {
    navbarLinks.classList.remove("hidden");
    toggleButton.textContent = "✖";
  } else {
    navbarLinks.classList.add("hidden");
    toggleButton.textContent = "☰";
  }
});

const menuLinks = document.querySelectorAll('#menu-mobile a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.add('hidden');
        toggleButton.textContent = '☰';
    });
});
