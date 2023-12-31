// JavaScript for handling navigation menu

// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each link to highlight the active one
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove the 'active' class from all links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});

// JavaScript for handling a simple alert when the page loads
window.addEventListener('load', function () {
    alert('Welcome to My Website!');
});
/* Existing styles */

/* Contact form styles */
#contact {
    display: grid; /* or flex */
    /* Additional grid/flex styles */
}

#contact form div {
    margin-bottom: 10px;
}

#contact form input, #contact form textarea {
    width: 100%; /* Use proportional units like % or em */
    /* Dynamic styling */
}

#contact form button:hover {
    /* Hover effect */
}
