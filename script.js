const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const tabs = document.querySelectorAll('.tab');
const productCards = document.querySelectorAll('.product-card');
const toast = document.getElementById('toast');
const toastText = toast.querySelector('span');
const backToTop = document.getElementById('backToTop');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    productCards.forEach(card => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

let toastTimer;
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    toastText.textContent = `اتضاف "${button.dataset.product}" لقائمة طلبك (تجريبي)`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  });
});

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 450);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('year').textContent = new Date().getFullYear();
