// Search functionality for products
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.getAttribute('data-product-name').toLowerCase();
        if (productName.includes(searchInput)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to display product details
function showProductDetails(productName) {
    // In a real application, you would fetch product details from a server
    // Here we are just simulating with alert for demonstration
    alert(`Displaying details for product: ${productName}`);
    
    // Example details
    const productDetails = {
        'Eco-Friendly Sofa': {
            name: 'Eco-Friendly Sofa',
            price: '$799.99',
            materials: ['Recycled Polyester Fabric', 'Eco-Friendly Foam'],
            methods: ['Sustainable Manufacturing', 'Low Energy Usage']
        }
        // Add more product details as needed
    };

    const product = productDetails[productName];
    if (product) {
        alert(`Product: ${product.name}\nPrice: ${product.price}\nMaterials: ${product.materials.join(', ')}\nMethods: ${product.methods.join(', ')}`);
    }
}