function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-fade, .scroll-slide-left');
  const windowHeight = window.innerHeight;

  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight * 0.85) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

const toggleContactBtn = document.getElementById('toggleContactBtn');
const contactTable = document.getElementById('contactTable');

toggleContactBtn.addEventListener('click', () => {
  if (contactTable.style.display === 'none') {
    contactTable.style.display = 'table';
  } else {
    contactTable.style.display = 'none';
  }
});