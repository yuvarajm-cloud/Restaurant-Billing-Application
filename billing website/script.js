// Initialize default menu items if not exists
function initializeMenu() {
    const menuItems = localStorage.getItem('menuItems');
        const defaultMenu = [
            { id: 1, name: 'Idly', price: 30, image: 'images/073cb7168fbb1efe61f830d8f7dc1240.jpg' },
            { id: 2, name: 'Dosa', price: 10, image: 'images/6a26596d569a3e2dbaf851d14b517f08.jpg' },
            { id: 3, name: 'Vada', price: 5, image: 'images/6ece8d9a9ad234ea9813cd29397ae44f.jpg' },
            { id: 4, name: 'Poori', price: 20, image: 'images/95c58a20486f96a9ea1ae25f692e9ef5.jpg' },
            { id: 5, name: 'Pongal', price: 40, image: 'images/f69698a26bac4f460c86d7108532cfa2.jpg' },
            { id: 6, name: 'Juice', price: 20, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop&q=80' },
            { id: 7, name: 'Coffee', price: 10, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop&q=80' },
            { id: 8, name: 'Tea', price: 10, image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&q=80' }
        ];
    
    if (!menuItems) {
        localStorage.setItem('menuItems', JSON.stringify(defaultMenu));
    } else {
        // Force update with local images
        const existingItems = JSON.parse(menuItems);
        const updatedItems = existingItems.map(item => {
            const defaultItem = defaultMenu.find(d => d.name === item.name);
            if (defaultItem) {
                // Always update with local image paths
                return { ...item, image: defaultItem.image };
            }
            return item;
        });
        localStorage.setItem('menuItems', JSON.stringify(updatedItems));
    }
}

// Get menu items from localStorage
function getMenuItems() {
    const items = localStorage.getItem('menuItems');
    return items ? JSON.parse(items) : [];
}

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

// Add item to cart
function addToCart(itemId) {
    const menuItems = getMenuItems();
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    let cart = getCart();
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    saveCart(cart);
    showNotification(`${item.name} added to cart!`);
    
    // Trigger custom event for cart update
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    // Update inline cart if it exists
    if (typeof window.displayCartInline === 'function') {
        window.displayCartInline();
    }
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

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Display menu items on index page
function displayMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    const menuItems = getMenuItems();
    menuGrid.innerHTML = '';

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menu-item';
        
        const imageDiv = document.createElement('div');
        imageDiv.className = 'menu-item-image';
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            // Handle image loading errors
            img.onerror = function() {
                // Fallback: show first letter if image fails to load
                this.style.display = 'none';
                imageDiv.textContent = item.name.charAt(0).toUpperCase();
                imageDiv.style.display = 'flex';
                imageDiv.style.alignItems = 'center';
                imageDiv.style.justifyContent = 'center';
            };
            imageDiv.appendChild(img);
        } else {
            imageDiv.textContent = item.name.charAt(0).toUpperCase();
        }
        imageDiv.onclick = () => addToCart(item.id);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'menu-item-info';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'menu-item-name';
        nameDiv.textContent = item.name;
        
        const priceDiv = document.createElement('div');
        priceDiv.className = 'menu-item-price';
        priceDiv.textContent = `₹${item.price}`;

        infoDiv.appendChild(nameDiv);
        infoDiv.appendChild(priceDiv);
        
        menuItemDiv.appendChild(imageDiv);
        menuItemDiv.appendChild(infoDiv);
        
        menuGrid.appendChild(menuItemDiv);
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    updateCartCount();
    displayMenu();
    setupMobileMenu();
    
    // Display cart inline after a short delay to ensure cart-inline.js is loaded
    setTimeout(() => {
        if (typeof displayCartInline === 'function') {
            displayCartInline();
        }
    }, 100);
});

