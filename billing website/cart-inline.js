// Display cart items on index page
function displayCartInline() {
    const cartItemsInline = document.getElementById('cartItemsInline');
    const cartSection = document.getElementById('cartSection');
    if (!cartItemsInline || !cartSection) return;

    const cart = getCart();
    
    // Always show cart section
    cartSection.style.display = 'block';
    cartItemsInline.innerHTML = '';
    
    // Show empty message if cart is empty
    if (cart.length === 0) {
        cartItemsInline.innerHTML = '<p style="text-align: center; padding: 2rem; color: #7f8c8d;">Your cart is empty. Add items from the menu above!</p>';
        updateCartSummaryInline();
        return;
    }

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item-inline';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'cart-item-info-inline';

        const imageDiv = document.createElement('div');
        imageDiv.className = 'cart-item-image-inline';
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
        detailsDiv.className = 'cart-item-details-inline';
        
        const nameH4 = document.createElement('h4');
        nameH4.textContent = item.name;
        
        const priceP = document.createElement('p');
        priceP.textContent = `₹${item.price} each`;

        detailsDiv.appendChild(nameH4);
        detailsDiv.appendChild(priceP);

        infoDiv.appendChild(imageDiv);
        infoDiv.appendChild(detailsDiv);

        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'cart-item-controls-inline';

        const quantityDiv = document.createElement('div');
        quantityDiv.className = 'quantity-controls';

        const decreaseBtn = document.createElement('button');
        decreaseBtn.className = 'quantity-btn';
        decreaseBtn.textContent = '-';
        decreaseBtn.onclick = () => updateQuantityInline(item.id, -1);

        const quantityDisplay = document.createElement('span');
        quantityDisplay.className = 'quantity-display';
        quantityDisplay.textContent = item.quantity;

        const increaseBtn = document.createElement('button');
        increaseBtn.className = 'quantity-btn';
        increaseBtn.textContent = '+';
        increaseBtn.onclick = () => updateQuantityInline(item.id, 1);

        quantityDiv.appendChild(decreaseBtn);
        quantityDiv.appendChild(quantityDisplay);
        quantityDiv.appendChild(increaseBtn);

        const totalDiv = document.createElement('div');
        totalDiv.className = 'cart-item-total-inline';
        totalDiv.textContent = `₹${(item.price * item.quantity).toFixed(2)}`;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromCartInline(item.id);

        controlsDiv.appendChild(quantityDiv);
        controlsDiv.appendChild(totalDiv);
        controlsDiv.appendChild(removeBtn);

        cartItemDiv.appendChild(infoDiv);
        cartItemDiv.appendChild(controlsDiv);

        cartItemsInline.appendChild(cartItemDiv);
    });

    updateCartSummaryInline();
}

// Update item quantity
function updateQuantityInline(itemId, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === itemId);
    
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== itemId);
    }

    saveCart(cart);
    displayCartInline();
    displayMenu(); // Refresh menu to update cart count
}

// Remove item from cart
function removeFromCartInline(itemId) {
    if (!confirm('Remove this item from cart?')) {
        return;
    }

    let cart = getCart();
    cart = cart.filter(i => i.id !== itemId);
    saveCart(cart);
    displayCartInline();
    displayMenu(); // Refresh menu to update cart count
}

// Update cart summary
function updateCartSummaryInline() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const subtotalEl = document.getElementById('subtotalInline');
    const totalEl = document.getElementById('totalInline');
    const proceedBtn = document.querySelector('.cart-actions-inline .btn-primary');

    if (subtotalEl) {
        subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    }
    if (totalEl) {
        totalEl.textContent = `₹${subtotal.toFixed(2)}`;
    }
    
    // Disable proceed button if cart is empty
    if (proceedBtn) {
        if (cart.length === 0) {
            proceedBtn.disabled = true;
            proceedBtn.style.opacity = '0.6';
            proceedBtn.style.cursor = 'not-allowed';
            proceedBtn.onclick = (e) => {
                e.preventDefault();
                alert('Your cart is empty. Please add items before proceeding to invoice.');
            };
        } else {
            proceedBtn.disabled = false;
            proceedBtn.style.opacity = '1';
            proceedBtn.style.cursor = 'pointer';
            proceedBtn.onclick = () => {
                window.location.href = 'invoice.html';
            };
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCartInline();
    
    // Setup QR scanner button
    const qrBtn = document.getElementById('openQRScannerInline');
    if (qrBtn) {
        qrBtn.addEventListener('click', () => {
            if (typeof openQRScanner === 'function') {
                openQRScanner();
            }
        });
    }
    
    // Listen for storage changes to update cart
    window.addEventListener('storage', () => {
        displayCartInline();
    });
    
    // Listen for custom cart update event
    window.addEventListener('cartUpdated', () => {
        displayCartInline();
    });
});

// Export function to be called from script.js
window.displayCartInline = displayCartInline;

