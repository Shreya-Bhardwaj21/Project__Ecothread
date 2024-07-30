function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const locationFilter = document.getElementById('locationFilter').value;
    const clothingTypeFilter = document.getElementById('clothingTypeFilter').value;
    const sustainabilityScoreFilter = document.getElementById('sustainabilityScoreFilter').value;

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h2').textContent.toLowerCase();
        const location = card.getAttribute('data-location');
        const clothingType = card.getAttribute('data-clothing-type');
        const sustainabilityScore = card.getAttribute('data-sustainability-score');

        const matchesSearch = productName.includes(searchInput);
        const matchesLocation = locationFilter === "" || location === locationFilter;
        const matchesClothingType = clothingTypeFilter === "" || clothingType === clothingTypeFilter;
        const matchesSustainabilityScore = sustainabilityScoreFilter === "" || sustainabilityScore === sustainabilityScoreFilter;

        if (matchesSearch && matchesLocation && matchesClothingType && matchesSustainabilityScore) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}