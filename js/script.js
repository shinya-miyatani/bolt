var humberger = document.querySelector('.hamburger-btn');
var btn = document.querySelector('.contact-btn');

humberger.addEventListener('click', function() {
  this.classList.toggle('is-active');
  btn.classList.toggle('is-active');
});
