function registerUser() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (name && email && password) {
        // Simulate a registration process
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email)) {
            alert('Email already registered.');
            return;
        }
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
}