function filterBrands() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('brand-card');
    
    for (let i = 0; i < cards.length; i++) {
        const brandName = cards[i].getAttribute('data-brand-name').toLowerCase();
        if (brandName.includes(filter)) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}