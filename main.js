
//! Navbar Code 

var navbarlinks = document.querySelectorAll(".navlink");

function available() {
    navbarlinks.forEach((it) => {
        it.classList.remove("active");
    });
    this.classList.add("active");
}

navbarlinks.forEach((it) => it.addEventListener('click', available));

//! Scrolling Animation Code 

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1600,
    delay: 400
});
ScrollReveal().reveal('.navbar,.aboutimg-box');
ScrollReveal().reveal('.details-box');
ScrollReveal().reveal('.subHeading,  .heading, .scroll-down');
ScrollReveal().reveal('.social-icons,.person-detail, .person-img, .service-box, .img-box, .text-box, .testi-container, .contact-container', { delay: 400, origin: 'bottom' });


