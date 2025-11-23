document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const status = document.getElementById('formStatus');

    if (name.length < 2 || message.length < 10 || !email.includes('@')) {
      status.textContent = "Please fill out all fields correctly.";
      status.style.color = "red";
    } else {
      status.textContent = "Thanks! Your message has been sent.";
      status.style.color = "green";
      form.reset();
    }
  });
});
