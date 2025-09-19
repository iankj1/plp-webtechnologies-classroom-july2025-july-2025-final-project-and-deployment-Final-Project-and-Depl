// Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (!name || !email || !message) {
      formMsg.textContent = "⚠️ Please fill in all fields.";
      formMsg.style.color = "red";
    } else {
      formMsg.textContent = "✅ Message sent successfully!";
      formMsg.style.color = "green";
      contactForm.reset();
    }
  });
}

// Fade-in on Scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
