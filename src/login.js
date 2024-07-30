function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        // alert('Login successful!');
        window.location.href = 'profile.html'; // Redirect to profile page
    } else {
        alert('Invalid email or password.');
    }
}