let cart = [];
        let cartTotal = 0;

        function addToCart(product, price, image) {
            cart.push({ product, price, image });
            cartTotal += price;
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cartItems');
            const cartTotalElement = document.getElementById('cartTotal');
            
            cartItems.innerHTML = '';
            cart.forEach((item, index) => {
                cartItems.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.product}">
                        <div>
                            <h3>${item.product}</h3>
                            <p>Price: $${item.price.toFixed(2)}</p>
                            <button onclick="removeFromCart(${index})">Remove</button>
                        </div>
                    </div>
                `;
            });
            
            cartTotalElement.textContent = cartTotal.toFixed(2);
        }

        function removeFromCart(index) {
            cartTotal -= cart[index].price;
            cart.splice(index, 1);
            updateCart();
        }

        function proceedToCheckout() {
            document.getElementById('checkoutSection').style.display = 'block';
        }

        function completePurchase() {
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;

            if (!name || !address || !cardNumber || !expiryDate) {
                alert('Please fill in all the fields.');
                return;
            }

            // Example of completing purchase (In a real application, this would involve sending data to a server)
            alert('Purchase complete!\nThank you for your order.');

            // Clear the cart
            cart = [];
            cartTotal = 0;
            updateCart();
            document.getElementById('checkoutSection').style.display = 'none';
        }