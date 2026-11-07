const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
  }));
}
document.querySelector('#year').textContent = new Date().getFullYear();
const emailContact = document.querySelector('#email-contact');
if (emailContact) {
  emailContact.addEventListener('click', () => {
    const chars = [97,114,116,104,117,114,46,98,114,97,99,107,64,115,101,116,46,100,101];
    window.location.href = 'mailto:' + String.fromCharCode(...chars);
  });
}