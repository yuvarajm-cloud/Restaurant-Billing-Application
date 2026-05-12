// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Display invoice
function displayInvoice() {
    const cart = getCart();
    
    if (cart.length === 0) {
        document.querySelector('.invoice-container').innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h2>No items in cart</h2>
                <p>Please add items to cart before generating invoice.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 1rem;">Go to Menu</a>
            </div>
        `;
        return;
    }

    // Set date and time
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    const timeStr = now.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    const dateEl = document.getElementById('invoiceDate');
    const timeEl = document.getElementById('invoiceTime');
    
    if (dateEl) dateEl.textContent = dateStr;
    if (timeEl) timeEl.textContent = timeStr;

    // Display invoice items
    const invoiceItemsBody = document.getElementById('invoiceItemsBody');
    if (invoiceItemsBody) {
        invoiceItemsBody.innerHTML = '';

        cart.forEach(item => {
            const row = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            
            const qtyCell = document.createElement('td');
            qtyCell.textContent = item.quantity;
            
            const priceCell = document.createElement('td');
            priceCell.textContent = `₹${item.price.toFixed(2)}`;
            
            const totalCell = document.createElement('td');
            totalCell.textContent = `₹${(item.price * item.quantity).toFixed(2)}`;

            row.appendChild(nameCell);
            row.appendChild(qtyCell);
            row.appendChild(priceCell);
            row.appendChild(totalCell);

            invoiceItemsBody.appendChild(row);
        });
    }

    // Calculate and display totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const subtotalEl = document.getElementById('invoiceSubtotal');
    const totalEl = document.getElementById('invoiceTotal');
    
    if (subtotalEl) {
        subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    }
    if (totalEl) {
        totalEl.textContent = `₹${subtotal.toFixed(2)}`;
    }
}

// Clear cart after invoice (optional - you can remove this if you want to keep cart)
function clearCart() {
    // Uncomment the line below if you want to clear cart after viewing invoice
    // localStorage.removeItem('cart');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayInvoice();
    clearCart();
});

