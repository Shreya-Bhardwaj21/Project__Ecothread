function loadProfile() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (user) {
        document.getElementById('profileName').textContent = 'Name: ' + user.name;
        document.getElementById('profileEmail').textContent = 'Email: ' + user.email;
        
        // Load user purchases
        const purchases = JSON.parse(localStorage.getItem('userPurchases')) || [];
        const purchaseHistory = document.getElementById('purchaseHistory');
        purchaseHistory.innerHTML = '';
        purchases.forEach(purchase => {
            purchaseHistory.innerHTML += `<li>${purchase}</li>`;
        });

        // Load user reviews
        const reviews = JSON.parse(localStorage.getItem('userReviews')) || [];
        const reviewsList = document.getElementById('reviewsList');
        reviewsList.innerHTML = '';
        reviews.forEach(review => {
            reviewsList.innerHTML += `<li>${review}</li>`;
        });

        // Load favorite brands
        const favoriteBrands = JSON.parse(localStorage.getItem('userFavoriteBrands')) || [];
        const favoriteBrandsList = document.getElementById('favoriteBrands');
        favoriteBrandsList.innerHTML = '';
        favoriteBrands.forEach(brand => {
            favoriteBrandsList.innerHTML += `<li>${brand}</li>`;
        });
    } else {
        // alert('Please log in first.');
        window.location.href = 'login.html';
    }
}

function addReview() {
    const reviewText = document.getElementById('reviewText').value;
    if (reviewText) {
        let reviews = JSON.parse(localStorage.getItem('userReviews')) || [];
        reviews.push(reviewText);
        localStorage.setItem('userReviews', JSON.stringify(reviews));
        document.getElementById('reviewText').value = '';
        loadProfile();
    } else {
        alert('Please write a review.');
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    // alert('Logged out successfully!');
    window.location.href = 'login.html';
}

window.onload = loadProfile;