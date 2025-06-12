function toggleMenu(btn) {
  var nav = btn.parentElement.querySelector('.main-nav');
  btn.classList.toggle('active');
  nav.classList.toggle('open');
  // Optional: close menu when clicking a link
  nav.querySelectorAll('a').forEach(function(link) {
    link.onclick = function() {
      btn.classList.remove('active');
      nav.classList.remove('open');
    }
  });
}
function closeMenu(btn) {
  var nav = btn.closest('.main-nav');
  var header = nav.parentElement;
  var hamburger = header.querySelector('.hamburger');
  nav.classList.remove('open');
  if (hamburger) hamburger.classList.remove('active');
}