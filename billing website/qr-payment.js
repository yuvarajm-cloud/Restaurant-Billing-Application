// Get payment QR code from localStorage
function getPaymentQRCode() {
    // Default QR code if not set
    const defaultQR = 'images/02c51b17277eed4b073ce8c5b00ccdb5.jpg';
    return localStorage.getItem('paymentQRCode') || defaultQR;
}

// Save payment QR code to localStorage
function savePaymentQRCode(qrCodePath) {
    localStorage.setItem('paymentQRCode', qrCodePath);
}

// Display payment QR code on page
function displayPaymentQRCode() {
    const qrCode = getPaymentQRCode();
    
    // Invoice page
    const invoiceQRImage = document.getElementById('paymentQRImage');
    const invoiceQRMessage = document.getElementById('qrCodeMessage');
    if (invoiceQRImage && invoiceQRMessage) {
        if (qrCode) {
            invoiceQRImage.src = qrCode;
            invoiceQRImage.style.display = 'block';
            invoiceQRMessage.textContent = 'Scan this QR code to make payment';
            invoiceQRMessage.style.color = '#27ae60';
        } else {
            invoiceQRImage.style.display = 'none';
            invoiceQRMessage.textContent = 'QR code not set. Please set it in Manage Menu.';
            invoiceQRMessage.style.color = '#7f8c8d';
        }
    }
    
    // Cart page
    const cartQRImage = document.getElementById('paymentQRImageCart');
    const cartQRMessage = document.getElementById('qrCodeMessageCart');
    if (cartQRImage && cartQRMessage) {
        if (qrCode) {
            cartQRImage.src = qrCode;
            cartQRImage.style.display = 'block';
            cartQRMessage.textContent = 'Scan to pay';
            cartQRMessage.style.color = '#27ae60';
        } else {
            cartQRImage.style.display = 'none';
            cartQRMessage.textContent = 'Set QR code in Manage Menu';
            cartQRMessage.style.color = '#7f8c8d';
        }
    }
    
    // Index page (inline cart)
    const inlineQRImage = document.getElementById('paymentQRImageInline');
    const inlineQRMessage = document.getElementById('qrCodeMessageInline');
    if (inlineQRImage && inlineQRMessage) {
        if (qrCode) {
            inlineQRImage.src = qrCode;
            inlineQRImage.style.display = 'block';
            inlineQRMessage.textContent = 'Scan to pay';
            inlineQRMessage.style.color = '#27ae60';
        } else {
            inlineQRImage.style.display = 'none';
            inlineQRMessage.textContent = 'Set QR code in Manage Menu';
            inlineQRMessage.style.color = '#7f8c8d';
        }
    }
    
    // Manage menu preview
    const previewQRImage = document.getElementById('qrPreviewImage');
    const noQRMessage = document.getElementById('noQRMessage');
    if (previewQRImage && noQRMessage) {
        if (qrCode) {
            previewQRImage.src = qrCode;
            previewQRImage.style.display = 'block';
            noQRMessage.style.display = 'none';
        } else {
            previewQRImage.style.display = 'none';
            noQRMessage.style.display = 'block';
        }
    }
    
    // Below menu section (index page)
    const belowMenuQRImage = document.getElementById('paymentQRBelowMenu');
    const belowMenuQRMessage = document.getElementById('qrMessageBelowMenu');
    const viewInvoiceBtn = document.getElementById('viewInvoiceBtn');
    if (belowMenuQRImage && belowMenuQRMessage) {
        if (qrCode) {
            belowMenuQRImage.src = qrCode;
            belowMenuQRImage.style.display = 'block';
            belowMenuQRMessage.textContent = 'Scan this QR code to make payment';
            belowMenuQRMessage.style.color = '#27ae60';
            if (viewInvoiceBtn) {
                viewInvoiceBtn.style.display = 'inline-block';
            }
        } else {
            belowMenuQRImage.style.display = 'none';
            belowMenuQRMessage.textContent = 'Set QR code in Manage Menu';
            belowMenuQRMessage.style.color = '#7f8c8d';
            if (viewInvoiceBtn) {
                viewInvoiceBtn.style.display = 'none';
            }
        }
    }
}

// Initialize QR code display on page load
document.addEventListener('DOMContentLoaded', () => {
    displayPaymentQRCode();
});

// Export function
window.displayPaymentQRCode = displayPaymentQRCode;
window.getPaymentQRCode = getPaymentQRCode;
window.savePaymentQRCode = savePaymentQRCode;

