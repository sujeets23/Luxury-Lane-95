// ===== Slideshow =====
const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);

// ===== New Arrivals Scroll Buttons =====
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const newArrivals = document.querySelector('.new-arrivals');

prevButton?.addEventListener('click', () => {
  newArrivals?.scrollBy({ left: -400, behavior: 'smooth' });
});

nextButton?.addEventListener('click', () => {
  newArrivals?.scrollBy({ left: 400, behavior: 'smooth' });
});

// ===== Customise Link Popup =====
document.getElementById('customise-link')?.addEventListener('click', function (event) {
  event.preventDefault();
  const popup = document.getElementById('coming-soon-popup');
  popup?.classList.add('show');
  setTimeout(() => {
    popup?.classList.remove('show');
  }, 2000);
});

// ===== Overlay Booking Popup =====
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');
  const bookNowButtons = document.querySelectorAll('.book-btn'); // Select all book-now buttons

  // Add event listeners to all "Book Now" buttons
  bookNowButtons.forEach(button => {
    button.addEventListener('click', function () {
      overlay.style.display = 'flex';
    });
  });

  // Close button inside overlay
  closeBtn?.addEventListener('click', function () {
    overlay.style.display = 'none';
  });

  // Close overlay when clicking outside the popup content
  overlay?.addEventListener('click', function (event) {
    if (event.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});

// ===== Booking Modal =====
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById('openModal');
  const modal = document.getElementById('bookingModal');
  const closeModalBtn = document.getElementById('closeModal');

  // Open modal on click of Book Now button
  openModalBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    modal?.classList.add('show');
  });

  // Close modal on click of Close button inside the modal
  closeModalBtn?.addEventListener('click', function () {
    modal?.classList.remove('show');
  });

  // Close modal when clicking outside the modal
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal?.classList.remove('show');
    }
  });
});
