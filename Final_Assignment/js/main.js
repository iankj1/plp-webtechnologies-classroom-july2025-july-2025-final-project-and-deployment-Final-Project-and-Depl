// small utilities
document.getElementById('year')?.textContent = new Date().getFullYear();

// toggle mobile nav
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if(navToggle && mainNav){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.style.display = expanded ? 'none' : 'block';
  });
}

// basic contact form validation + UX
const form = document.getElementById('contactForm');
if(form){
  const feedback = document.getElementById('formFeedback');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let errors = [];

    if(!name.value || name.value.trim().length < 2) errors.push('Name too short');
    if(!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) errors.push('Enter a valid email');
    if(!message.value || message.value.trim().length < 10) errors.push('Message too short');

    if(errors.length){
      feedback.textContent = errors.join('. ');
      feedback.style.color = 'crimson';
      return;
    }

    // Simulate async send and show success (no backend in this assignment)
    feedback.textContent = 'Message sent — thanks! (demo only)';
    feedback.style.color = 'green';
    form.reset();
  });
}

// on-scroll reveal (very small, no lib)
const revealOnScroll = () => {
  const els = document.querySelectorAll('.card, .features h2');
  const winH = window.innerHeight;
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < winH - 80) el.style.opacity = 1, el.style.transform = 'none';
    else { el.style.opacity = 0; el.style.transform = 'translateY(20px)'; }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
