// Highlight active navigation link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// One-click email copy button
const copyBtn = document.getElementById("copyEmailBtn");

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const email = copyBtn.getAttribute("data-email");
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      copyBtn.style.borderColor = "#1F8466";
      copyBtn.style.color = "#1F8466";

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.borderColor = "";
        copyBtn.style.color = "";
      }, 2000);
    });
  });
}