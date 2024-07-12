let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
}

navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

function updateActiveNav() {
    let scrollPosition = window.scrollY;

    sections.forEach(sec => {
        let secTop = sec.offsetTop - 150;
        let secHeight = sec.offsetHeight;
        let secId = sec.getAttribute('id');

        if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {         
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector(`header nav a[href="#${secId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}


window.onscroll = () => {
    updateActiveNav();
}


window.onload = () => {
    updateActiveNav();
}


function showAlert() {
    var result = confirm('You are leaving the site. Do you want to continue?');
    if (result == false)
        event.preventDefault();
}


function showAlert_logout() {
    var result = confirm('Are you sure you want to log out?');
    if (result == false) 
        event.preventDefault(); 
}


ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-box', { origin: 'right' });
ScrollReveal().reveal('.timeline-items, .hobbies-item', { origin: 'left' });
ScrollReveal().reveal('.social', { origin: 'bottom' });