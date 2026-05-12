// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count badge
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadges = document.querySelectorAll('#cartCount');
    cartBadges.forEach(badge => {
        badge.textContent = totalItems;
    });
}

// Display cart items
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    const cart = getCart();
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem;">Your cart is empty. Add items from the menu!</p>';
        updateCartSummary();
        return;
    }

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'cart-item-info';

        const imageDiv = document.createElement('div');
        imageDiv.className = 'cart-item-image';
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            imageDiv.appendChild(img);
        } else {
            imageDiv.textContent = item.name.charAt(0).toUpperCase();
        }

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'cart-item-details';
        
        const nameH4 = document.createElement('h4');
        nameH4.textContent = item.name;
        
        const priceP = document.createElement('p');
        priceP.textContent = `₹${item.price} each`;

        detailsDiv.appendChild(nameH4);
        detailsDiv.appendChild(priceP);

        infoDiv.appendChild(imageDiv);
        infoDiv.appendChild(detailsDiv);

        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'cart-item-controls';

        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'quantity-controls';

        const decreaseBtn = document.createElement('button');
        decreaseBtn.className = 'quantity-btn';
        decreaseBtn.textContent = '-';
        decreaseBtn.onclick = () => updateQuantity(item.id, -1);

        const quantityDisplay = document.createElement('span');
        quantityDisplay.className = 'quantity-display';
        quantityDisplay.textContent = item.quantity;

        const increaseBtn = document.createElement('button');
        increaseBtn.className = 'quantity-btn';
        increaseBtn.textContent = '+';
        increaseBtn.onclick = () => updateQuantity(item.id, 1);

        quantityDiv.appendChild(decreaseBtn);
        quantityDiv.appendChild(quantityDisplay);
        quantityDiv.appendChild(increaseBtn);

        const totalDiv = document.createElement('div');
        totalDiv.className = 'cart-item-total';
        totalDiv.textContent = `₹${(item.price * item.quantity).toFixed(2)}`;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromCart(item.id);

        controlsDiv.appendChild(quantityDiv);
        controlsDiv.appendChild(totalDiv);
        controlsDiv.appendChild(removeBtn);

        cartItemDiv.appendChild(infoDiv);
        cartItemDiv.appendChild(controlsDiv);

        cartItems.appendChild(cartItemDiv);
    });

    updateCartSummary();
}

// Update item quantity
function updateQuantity(itemId, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === itemId);
    
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== itemId);
    }

    saveCart(cart);
    displayCart();
}

// Remove item from cart
function removeFromCart(itemId) {
    if (!confirm('Remove this item from cart?')) {
        return;
    }

    let cart = getCart();
    cart = cart.filter(i => i.id !== itemId);
    saveCart(cart);
    displayCart();
}

// Update cart summary
function updateCartSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');

    if (subtotalEl) {
        subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    }
    if (totalEl) {
        totalEl.textContent = `₹${subtotal.toFixed(2)}`;
    }
}

// Proceed to invoice
function proceedToInvoice() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty. Add items before proceeding to invoice.');
        return;
    }
    window.location.href = 'invoice.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();

    const proceedBtn = document.getElementById('proceedToInvoice');
    if (proceedBtn) {
        proceedBtn.addEventListener('click', proceedToInvoice);
    }
});

