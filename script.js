const slides = document.querySelectorAll('.slide');
let current = 0;
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const newArrivals = document.querySelector('.new-arrivals');

prevButton?.addEventListener('click', () => {
  newArrivals.scrollBy({ left: -400, behavior: 'smooth' });
});

nextButton?.addEventListener('click', () => {
  newArrivals.scrollBy({ left: 400, behavior: 'smooth' });
});

document.getElementById('customise-link').addEventListener('click', function(event) {
  event.preventDefault();
  const popup = document.getElementById('coming-soon-popup');
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
  }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const bookNowButton = document.querySelector('.book-now-button'); // Adjust the selector as needed

    bookNowButton.addEventListener('click', function() {
        overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    // Optional: Close overlay when clicking outside of the content
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
