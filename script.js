// script.js — handles slideshow and contact toast

document.addEventListener('DOMContentLoaded', () => {
  // --- Slideshow (if exists) ---
  const slides = Array.from(document.querySelectorAll('.slideshow .slide'));
  if (slides.length) {
    let idx = 0;
    slides.forEach((s, i) => { if (i !== 0) s.classList.remove('active'); else s.classList.add('active'); });
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 6000); // 6 seconds
  }

  // --- Contact form toast handling (if exists) ---
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('name') || {}).value || '';
      const email = (document.getElementById('email') || {}).value || '';
      const message = (document.getElementById('message') || {}).value || '';
      if (!name.trim() || !email.trim() || !message.trim()) {
        showToast('Harap isi semua field!');
        return;
      }
      // Formalitas: not sending email, just show toast and reset
      showToast('Pesan berhasil dikirim!');
      form.reset();
    });
  }

  // toast util
  function showToast(msg){
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(()=> t.classList.remove('show'), 3000);
  }
});
