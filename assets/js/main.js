// Navigation
// Select the logo element
const nav = document.querySelector('nav');

// Function to adjust the logo size
function adjustNavigation() {
    if (window.scrollY > 25) { 
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Add scroll event listener
window.addEventListener('scroll', adjustNavigation);

//Accordion code
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            console.log('Something was clicked');
            document.querySelectorAll(".accordion").forEach(item => {
                item.classList.remove('active');
            })
            accordion.classList.toggle('active')
        });
    });
});

//Burger menu
const burgerBtn = document.querySelector('.burger-btn');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const navItem = document.querySelectorAll('.nav-item');

burgerBtn.addEventListener("click", ()=>{
    nav.classList.toggle('show-menu');
    header.classList.toggle('menu-open');
    main.classList.toggle('menu-open');
    footer.classList.toggle('menu-open');
})
navItem.forEach(item => {
    item.addEventListener("click", ()=>{
        console.log('clicked')
        nav.classList.remove('show-menu');
        header.classList.remove('menu-open');
        main.classList.remove('menu-open');
        footer.classList.remove('menu-open');
    })
})

// Select all elements with the "reveal" class
const revealElements = document.querySelectorAll('.reveal');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the element is in view
            entry.target.classList.add('visible');
            // Optionally unobserve the element to improve performance
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe each reveal element
revealElements.forEach(el => observer.observe(el));

