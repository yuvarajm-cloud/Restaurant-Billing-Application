# PMY Restaurant - Billing Website

A complete restaurant billing system with menu management, shopping cart, invoice generation, and QR code payment integration.

## Features

- ✅ Menu Display with Images
- ✅ Click Image to Add to Cart
- ✅ Shopping Cart with Quantity Management
- ✅ Invoice Generation
- ✅ Payment QR Code Display
- ✅ QR Code Scanner (for customer payments)
- ✅ Full CRUD Menu Management
- ✅ Mobile Responsive Design
- ✅ Local Storage (data persists)

## How to Use

1. Open `index.html` in a web browser
2. Or use `start-server-and-open.bat` to run with local server
3. Click menu items to add to cart
4. View cart and proceed to invoice
5. Customers can scan QR code to pay

## Deploy Online

See `DEPLOY.md` or open `netlify-deploy.html` for deployment instructions.

**Quick Deploy:**
1. Go to https://app.netlify.com/drop
2. Drag and drop this entire folder
3. Get your live link!

## Menu Items

- Idly - ₹30
- Dosa - ₹10
- Vada - ₹5
- Poori - ₹20
- Pongal - ₹40
- Juice - ₹20
- Coffee - ₹10
- Tea - ₹10

## Setup Payment QR Code

1. Place your QR code image in the `images` folder
2. Go to "Manage Menu" page
3. Scroll to "Payment QR Code Settings"
4. Enter image path (e.g., `images/yourqrcode.jpg`)
5. Click "Save QR Code"

## Files Structure

- `index.html` - Main menu page
- `manage-menu.html` - Menu management (CRUD)
- `cart.html` - Shopping cart page
- `invoice.html` - Invoice display
- `styles.css` - All styling
- `script.js` - Main functionality
- `images/` - Menu and QR code images

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Free to use for your restaurant.


