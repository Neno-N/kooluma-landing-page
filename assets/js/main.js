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

