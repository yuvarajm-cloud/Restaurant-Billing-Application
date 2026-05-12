// Get menu items from localStorage
function getMenuItems() {
    const items = localStorage.getItem('menuItems');
    return items ? JSON.parse(items) : [];
}

// Save menu items to localStorage
function saveMenuItems(items) {
    localStorage.setItem('menuItems', JSON.stringify(items));
}

// Display menu items in manage menu page
function displayMenuItems() {
    const menuItemsList = document.getElementById('menuItemsList');
    if (!menuItemsList) return;

    const menuItems = getMenuItems();
    menuItemsList.innerHTML = '';

    if (menuItems.length === 0) {
        menuItemsList.innerHTML = '<p>No menu items. Add your first item!</p>';
        return;
    }

    menuItems.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'menu-item-row';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'menu-item-row-info';

        const imageDiv = document.createElement('div');
        imageDiv.className = 'menu-item-row-image';
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
        detailsDiv.className = 'menu-item-row-details';
        
        const nameH4 = document.createElement('h4');
        nameH4.textContent = item.name;
        
        const priceP = document.createElement('p');
        priceP.textContent = `₹${item.price}`;

        detailsDiv.appendChild(nameH4);
        detailsDiv.appendChild(priceP);

        infoDiv.appendChild(imageDiv);
        infoDiv.appendChild(detailsDiv);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'menu-item-row-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-secondary';
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editMenuItem(item.id);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteMenuItem(item.id);

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        itemRow.appendChild(infoDiv);
        itemRow.appendChild(actionsDiv);

        menuItemsList.appendChild(itemRow);
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    const itemId = document.getElementById('itemId').value;
    const name = document.getElementById('itemName').value.trim();
    const price = parseFloat(document.getElementById('itemPrice').value);
    const image = document.getElementById('itemImage').value.trim();

    if (!name || price < 0) {
        alert('Please fill in all required fields correctly.');
        return;
    }

    let menuItems = getMenuItems();

    if (itemId) {
        // Update existing item
        const index = menuItems.findIndex(i => i.id === parseInt(itemId));
        if (index !== -1) {
            menuItems[index] = {
                ...menuItems[index],
                name,
                price,
                image
            };
        }
    } else {
        // Add new item
        const newId = menuItems.length > 0 
            ? Math.max(...menuItems.map(i => i.id)) + 1 
            : 1;
        menuItems.push({
            id: newId,
            name,
            price,
            image
        });
    }

    saveMenuItems(menuItems);
    displayMenuItems();
    resetForm();
    showNotification(itemId ? 'Menu item updated!' : 'Menu item added!');
}

// Edit menu item
function editMenuItem(itemId) {
    const menuItems = getMenuItems();
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    document.getElementById('itemId').value = item.id;
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemPrice').value = item.price;
    document.getElementById('itemImage').value = item.image || '';

    document.getElementById('formTitle').textContent = 'Edit Menu Item';
    document.getElementById('submitBtn').textContent = 'Update Item';
    document.getElementById('cancelBtn').style.display = 'inline-block';

    // Scroll to form
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

// Delete menu item
function deleteMenuItem(itemId) {
    if (!confirm('Are you sure you want to delete this menu item?')) {
        return;
    }

    let menuItems = getMenuItems();
    menuItems = menuItems.filter(i => i.id !== itemId);
    saveMenuItems(menuItems);
    displayMenuItems();
    showNotification('Menu item deleted!');
}

// Reset form
function resetForm() {
    document.getElementById('menuForm').reset();
    document.getElementById('itemId').value = '';
    document.getElementById('formTitle').textContent = 'Add New Menu Item';
    document.getElementById('submitBtn').textContent = 'Add Item';
    document.getElementById('cancelBtn').style.display = 'none';
}

// Show notification
function showNotification(message) {
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

// Handle QR code save
function handleSaveQRCode() {
    const qrCodeInput = document.getElementById('paymentQRCode');
    if (!qrCodeInput) return;
    
    const qrCodePath = qrCodeInput.value.trim();
    if (!qrCodePath) {
        alert('Please enter a QR code image path or URL');
        return;
    }
    
    if (typeof savePaymentQRCode === 'function') {
        savePaymentQRCode(qrCodePath);
        showNotification('Payment QR code saved successfully!');
        
        // Update preview
        if (typeof displayPaymentQRCode === 'function') {
            displayPaymentQRCode();
        }
        
        // Clear input
        qrCodeInput.value = '';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems();

    const form = document.getElementById('menuForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', resetForm);
    }
    
    // QR code save button
    const saveQRBtn = document.getElementById('saveQRCodeBtn');
    if (saveQRBtn) {
        saveQRBtn.addEventListener('click', handleSaveQRCode);
    }
    
    // Load and display current QR code
    if (typeof displayPaymentQRCode === 'function') {
        displayPaymentQRCode();
    }
});

