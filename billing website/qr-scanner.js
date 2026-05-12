let html5QrcodeScanner = null;

// Initialize QR Scanner
function initQRScanner() {
    const qrModal = document.getElementById('qrModal');
    const openQRButtons = document.querySelectorAll('#openQRScanner, #openQRScannerInvoice');
    const closeBtn = document.querySelector('.close');

    // Open QR scanner
    openQRButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                openQRScanner();
            });
        }
    });

    // Close QR scanner
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeQRScanner();
        });
    }

    // Close on modal background click
    if (qrModal) {
        qrModal.addEventListener('click', (e) => {
            if (e.target === qrModal) {
                closeQRScanner();
            }
        });
    }
}

// Open QR Scanner
function openQRScanner() {
    const qrModal = document.getElementById('qrModal');
    const qrReader = document.getElementById('qr-reader');
    const qrResult = document.getElementById('qr-result');

    if (!qrModal || !qrReader) return;

    qrModal.style.display = 'block';
    qrResult.innerHTML = '';

    // Check if Html5Qrcode is available
    if (typeof Html5Qrcode === 'undefined') {
        qrResult.innerHTML = '<p style="color: red;">QR Scanner library not loaded. Please check your internet connection.</p>';
        return;
    }

    html5QrcodeScanner = new Html5Qrcode("qr-reader");

    html5QrcodeScanner.start(
        { facingMode: "environment" }, // Use back camera on mobile
        {
            fps: 10,
            qrbox: { width: 250, height: 250 }
        },
        (decodedText, decodedResult) => {
            // Success callback
            handleQRCodeSuccess(decodedText);
        },
        (errorMessage) => {
            // Error callback - ignore for continuous scanning
        }
    ).catch((err) => {
        // Handle initialization error
        qrResult.innerHTML = `<p style="color: red;">Error starting camera: ${err}</p>`;
    });
}

// Handle successful QR code scan
function handleQRCodeSuccess(decodedText) {
    const qrResult = document.getElementById('qr-result');
    
    if (qrResult) {
        qrResult.innerHTML = `
            <p style="color: green; font-weight: bold;">QR Code Scanned Successfully!</p>
            <p><strong>Payment Details:</strong></p>
            <p style="word-break: break-all;">${decodedText}</p>
            <button class="btn btn-primary" onclick="closeQRScanner()" style="margin-top: 1rem;">Close</button>
        `;
    }

    // Stop scanning after successful scan
    if (html5QrcodeScanner) {
        html5QrcodeScanner.stop().then(() => {
            console.log('QR Scanner stopped');
        }).catch((err) => {
            console.error('Error stopping scanner:', err);
        });
    }
}

// Close QR Scanner
function closeQRScanner() {
    const qrModal = document.getElementById('qrModal');
    
    if (html5QrcodeScanner) {
        html5QrcodeScanner.stop().then(() => {
            html5QrcodeScanner.clear();
            html5QrcodeScanner = null;
        }).catch((err) => {
            console.error('Error stopping scanner:', err);
        });
    }

    if (qrModal) {
        qrModal.style.display = 'none';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initQRScanner();
});

