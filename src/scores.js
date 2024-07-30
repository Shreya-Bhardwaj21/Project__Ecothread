// Filter brands based on search input
function filterBrands() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.brand-card');

    cards.forEach(card => {
        const brandName = card.getAttribute('data-brand-name').toLowerCase();
        if (brandName.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Sort brands based on rating
function sortBrands() {
    const sortValue = document.getElementById('sortSelect').value;
    const grid = document.getElementById('brandGrid');
    const cards = Array.from(grid.getElementsByClassName('brand-card'));

    cards.sort((a, b) => {
        const ratingA = parseFloat(a.getAttribute('data-rating'));
        const ratingB = parseFloat(b.getAttribute('data-rating'));

        if (sortValue === 'asc') {
            return ratingA - ratingB;
        } else if (sortValue === 'desc') {
            return ratingB - ratingA;
        } else {
            return 0; // Default
        }
    });

    cards.forEach(card => grid.appendChild(card));
}