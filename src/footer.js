document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        event.target.email.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}