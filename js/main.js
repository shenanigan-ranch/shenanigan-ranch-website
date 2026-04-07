const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const yearTarget = document.getElementById('year');

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    const subject = encodeURIComponent('Shenanigan Ranch Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@shenaniganranch.com&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, '_blank', 'noopener');
  });
}
