/* ===== BEST KENYA COLLEGE - MAIN SCRIPT ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. MOBILE NAVIGATION ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  /* ---------- 2. HOMEPAGE SLIDESHOW ---------- */
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);
  }

  /* ---------- 3. BACK TO TOP ---------- */
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('show', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }

  /* ---------- 4. FAQ ACCORDION ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('open');
    });
  });

  /* ---------- 5. GALLERY LIGHTBOX ---------- */
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.querySelector('.lightbox-close');
  if (galleryItems.length && lightbox) {
    galleryItems.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      });
    });
    lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  /* ---------- 6. COURSE SEARCH ---------- */
  const searchInput = document.getElementById('courseSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const term = searchInput.value.toLowerCase();
      document.querySelectorAll('.course-row').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(term) ? '' : 'none';
      });
    });
  }

  /* ---------- 7. ADMISSION FORM VALIDATION ---------- */
  const admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', e => {
      e.preventDefault();
      const msg = document.getElementById('admissionMsg');
      const name = document.getElementById('fullName').value.trim();
      const gender = document.getElementById('gender').value;
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const course = document.getElementById('course').value;
      const intake = document.getElementById('intake').value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9+\-\s]{9,15}$/;

      if (!name || !gender || !email || !phone || !course || !intake) {
        msg.innerHTML = '<div class="error-msg">❌ Please fill in all fields.</div>';
        return;
      }
      if (!emailPattern.test(email)) {
        msg.innerHTML = '<div class="error-msg">❌ Please enter a valid email address.</div>';
        return;
      }
      if (!phonePattern.test(phone)) {
        msg.innerHTML = '<div class="error-msg">❌ Please enter a valid phone number.</div>';
        return;
      }
      msg.innerHTML = `<div class="success-msg">✅ Thank you, <strong>${name}</strong>! Your enquiry for <strong>${course}</strong> (${intake} intake) has been received. Our admissions team will contact you soon.</div>`;
      admissionForm.reset();
    });
  }

  /* ---------- 8. CONTACT FORM VALIDATION ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const msg = document.getElementById('contactMsg');
      const name = document.getElementById('cName').value.trim();
      const email = document.getElementById('cEmail').value.trim();
      const phone = document.getElementById('cPhone').value.trim();
      const subject = document.getElementById('cSubject').value.trim();
      const message = document.getElementById('cMessage').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !phone || !subject || !message) {
        msg.innerHTML = '<div class="error-msg">❌ All fields are required.</div>';
        return;
      }
      if (!emailPattern.test(email)) {
        msg.innerHTML = '<div class="error-msg">❌ Invalid email address.</div>';
        return;
      }
      msg.innerHTML = `<div class="success-msg">✅ Thank you, <strong>${name}</strong>! Your message has been validated successfully. (Note: this is a static demo — no data is sent.)</div>`;
      contactForm.reset();
    });
  }

  /* ---------- 9. WELCOME NOTIFICATION ---------- */
  if (document.body.dataset.page === 'home') {
    setTimeout(() => {
      const note = document.createElement('div');
      note.textContent = '👋 Welcome to Best Kenya College! Explore our courses.';
      note.style.cssText = 'position:fixed;bottom:20px;left:20px;background:#0b3d91;color:#fff;padding:1rem 1.5rem;border-radius:10px;z-index:1500;box-shadow:0 6px 18px rgba(0,0,0,.3);font-family:Poppins,sans-serif;animation:fadeIn .6s';
      document.body.appendChild(note);
      setTimeout(() => note.remove(), 5000);
    }, 1500);
  }
});