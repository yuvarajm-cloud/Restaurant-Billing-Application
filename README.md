# 🍽️ PMY Restaurant Billing System

### A Responsive Restaurant POS, Billing & Digital Payment Web Application

<p align="center">
  <strong>Menu Management • Cart • Billing • Invoice • QR Payments • QR Scanner</strong>
</p>

<p align="center">
  A lightweight browser-based restaurant billing solution built with HTML, CSS and JavaScript.
</p>

---

## 🚀 Project Overview

**PMY Restaurant Billing System** is a responsive web application designed to simplify restaurant ordering and billing operations.

The system provides a complete workflow from **browsing menu items → adding items to cart → managing quantities → generating invoices → displaying payment QR codes → scanning customer QR codes**.

It also includes a dedicated **Menu Management module** that allows restaurant staff to add, edit and delete menu items without modifying the source code.

The application uses **LocalStorage for client-side persistence**, making it possible to run the project without a backend or database.

---

## ✨ Why This Project Stands Out

This project goes beyond a basic restaurant website.

It demonstrates practical implementation of:

* 🛒 Shopping cart state management
* 🍛 Dynamic menu rendering
* ✏️ CRUD-based menu management
* 💳 QR-based payment workflow
* 📷 Camera-based QR code scanning
* 💾 Persistent browser storage
* 📱 Responsive web design
* 🐳 Docker + Nginx deployment
* ⚡ Client-side application architecture

---

# 🖥️ Application Preview

> 📸 **Recommended:** Add screenshots/GIFs of the actual application here.

### 🍽️ Restaurant Menu

```text
┌─────────────────────────────────────────────┐
│              PMY RESTAURANT                 │
│                                             │
│  Menu          Manage Menu          Cart 🛒 │
├─────────────────────────────────────────────┤
│                                             │
│           OUR MENU                          │
│                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │  IDLY   │  │  DOSA   │  │  VADA   │     │
│  │  Image  │  │  Image  │  │  Image  │     │
│  │  ₹30    │  │  ₹10    │  │  ₹5     │     │
│  └─────────┘  └─────────┘  └─────────┘     │
│                                             │
│              SCAN TO PAY 📱                │
└─────────────────────────────────────────────┘
```

---

# 🎯 Core Features

## 🍛 Dynamic Menu

Menu items are dynamically loaded and rendered using JavaScript.

Each item contains:

* Food name
* Price
* Food image
* Add-to-cart interaction

Default menu:

| Item   | Price |
| ------ | ----: |
| Idly   |   ₹30 |
| Dosa   |   ₹10 |
| Vada   |    ₹5 |
| Poori  |   ₹20 |
| Pongal |   ₹40 |
| Juice  |   ₹20 |
| Coffee |   ₹10 |
| Tea    |   ₹10 |

---

## 🛒 Smart Shopping Cart

The cart provides a complete ordering workflow.

### Supported operations

* Add items
* Increase quantity
* Decrease quantity
* Remove items
* Calculate subtotal
* Display total quantity
* Persist cart state
* Proceed to billing

The cart badge is automatically updated across the application.

---

# 🧾 Invoice Generation

The application generates a digital invoice from the current cart.

Invoice information includes:

* Restaurant information
* Invoice date
* Invoice time
* Ordered items
* Quantity
* Unit price
* Item total
* Subtotal
* Final total

### Example workflow

```text
Select Food
     ↓
Add to Cart
     ↓
Adjust Quantity
     ↓
Review Cart
     ↓
Generate Invoice
     ↓
Display Payment QR
```

---

# 💳 QR Payment Integration

The system supports displaying a restaurant payment QR code directly inside the application.

The QR code can be configured through the **Manage Menu** interface.

### Payment workflow

```text
Customer Order
      ↓
      Cart
      ↓
    Invoice
      ↓
  Scan QR Code
      ↓
   Make Payment
```

The configured QR code is stored using LocalStorage and can be reused throughout the application.

---

# 📷 QR Code Scanner

The project also includes a camera-based QR scanner using the **HTML5 QR Code** library.

The scanner:

* Opens the device camera
* Uses the rear camera on supported mobile devices
* Detects QR codes
* Reads decoded QR information
* Displays scan results
* Handles camera initialization errors

This makes the application suitable for experimenting with real-world QR payment workflows.

---

# ⚙️ Menu Management

The **Manage Menu** module provides CRUD functionality.

### Create

Add a new restaurant menu item.

### Read

View existing menu items.

### Update

Edit:

* Food name
* Price
* Image

### Delete

Remove unwanted menu items.

```text
              MENU MANAGEMENT

                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
      CREATE      EDIT      DELETE
        │          │          │
        └──────────┼──────────┘
                   ↓
             LocalStorage
                   ↓
              Menu Display
```

---

# 💾 Client-Side Data Persistence

The application uses the browser's **LocalStorage API** to maintain application state.

Stored information includes:

```text
menuItems
cart
paymentQRCode
```

This allows the application to retain data even after refreshing the browser.

### Architecture

```text
             Browser
                │
        ┌───────┴────────┐
        ↓                ↓
       UI            JavaScript
                         │
                         ↓
                   LocalStorage
                         │
              ┌──────────┼──────────┐
              ↓          ↓          ↓
            Menu        Cart       QR Code
```

---

# 📱 Responsive Design

The interface is designed for multiple screen sizes.

```text
Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile
```

Responsive behaviour is implemented using CSS media queries and flexible layouts.

The QR scanning functionality also makes the application particularly useful on mobile devices.

---

# 🐳 Docker Support

The project includes a Docker configuration using **Nginx**.

### Docker architecture

```text
Source Code
     ↓
Docker Image
     ↓
Nginx Web Server
     ↓
Restaurant Billing Application
```

### Dockerfile

```dockerfile
FROM nginx:latest
COPY . /usr/share/nginx/html
```

This allows the static application to be served using a production-style web server rather than relying only on opening HTML files directly.

---

# 🧰 Technology Stack

## Frontend

| Technology           | Usage                          |
| -------------------- | ------------------------------ |
| **HTML5**            | Application structure          |
| **CSS3**             | UI, layout & responsive design |
| **JavaScript**       | Application logic              |
| **LocalStorage API** | Client-side persistence        |
| **HTML5 QR Code**    | QR scanning                    |

## Deployment

| Technology       | Usage                    |
| ---------------- | ------------------------ |
| **Docker**       | Containerization         |
| **Nginx**        | Static web server        |
| **Netlify**      | Static deployment option |
| **Vercel**       | Static deployment option |
| **GitHub Pages** | Static deployment option |

---

# 🗂️ Project Structure

```text
billing-web-main/
│
├── billing website/
│   │
│   ├── index.html
│   ├── cart.html
│   ├── invoice.html
│   ├── manage-menu.html
│   │
│   ├── script.js
│   ├── cart.js
│   ├── cart-inline.js
│   ├── invoice.js
│   ├── manage-menu.js
│   │
│   ├── qr-payment.js
│   ├── qr-scanner.js
│   │
│   ├── styles.css
│   │
│   ├── Dockerfile
│   │
│   ├── images/
│   │   └── food images
│   │
│   ├── start-server.bat
│   ├── start-server-and-open.bat
│   ├── open-in-chrome.bat
│   ├── open-in-chrome.ps1
│   │
│   └── DEPLOY.md
│
└── README.md
```

---

# 🔄 Complete User Journey

```text
                    ┌──────────────┐
                    │  Restaurant  │
                    │     Menu     │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Select Items  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │     Cart     │
                    │   Quantity   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Invoice    │
                    │  Calculation │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  QR Payment  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ QR Scanner   │
                    └──────────────┘
```

---

# 🧠 Engineering Concepts Demonstrated

This project demonstrates hands-on understanding of:

### JavaScript

* DOM manipulation
* Event listeners
* Dynamic HTML generation
* Array operations
* Object manipulation
* Form handling
* State management
* LocalStorage API
* Date/time handling
* Client-side validation

### Web Development

* Responsive layouts
* Component-style UI patterns
* Navigation
* Modal interfaces
* Dynamic menus
* Shopping cart architecture
* Invoice generation
* Payment workflow

### DevOps / Deployment

* Docker containerization
* Nginx web serving
* Static website deployment
* Local development servers
* Git/GitHub workflow

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/billing-web-main.git
```

```bash
cd billing-web-main
```

---

## 2. Open the Project

Navigate to:

```text
billing website/
```

Then run:

```text
start-server-and-open.bat
```

The application will start using the included local server setup.

---

## 3. Manual Method

You can also open:

```text
index.html
```

directly in a modern browser.

For development, using a local HTTP server is recommended.

---

# 🐳 Run with Docker

From the `billing website` directory:

```bash
docker build -t pmy-restaurant .
```

Run the container:

```bash
docker run -d -p 8080:80 --name pmy-restaurant pmy-restaurant
```

Open:

```text
http://localhost:8080
```

---

# 🌐 Deployment

Because this is a client-side web application, it can be deployed using services such as:

* GitHub Pages
* Netlify
* Vercel
* Firebase Hosting
* Docker + Nginx

For production-style deployment, the included Docker configuration can be used with an Nginx container.

---

# 🔐 Important Security Note

This project is currently a **client-side demonstration application**.

Menu data, cart information and QR configuration are stored in browser LocalStorage.

For a production restaurant POS system, the architecture should be upgraded to include:

* Secure backend APIs
* Database storage
* Authentication
* Role-based authorization
* Server-side validation
* Secure payment gateway integration
* HTTPS
* Audit logs
* Encrypted sensitive information
* Real payment verification

The QR scanner in this project demonstrates QR-code reading and should not be treated as proof of successful payment without server-side payment verification.

---

# 🔮 Future Roadmap

## Phase 1

* [x] Digital menu
* [x] Shopping cart
* [x] Invoice generation
* [x] Menu CRUD
* [x] QR payment display
* [x] QR scanner
* [x] LocalStorage persistence
* [x] Responsive UI
* [x] Docker support

## Phase 2

* [ ] Node.js backend
* [ ] REST API
* [ ] MongoDB/PostgreSQL
* [ ] User authentication
* [ ] Admin roles
* [ ] Order database
* [ ] Inventory tracking

## Phase 3

* [ ] Razorpay/Stripe integration
* [ ] Payment verification
* [ ] Order status tracking
* [ ] Kitchen order management
* [ ] Sales analytics
* [ ] Customer management
* [ ] Cloud deployment
* [ ] CI/CD pipeline

---

# ☁️ Possible Cloud Architecture

A future production version could be deployed using AWS:

```text
                    Internet
                       │
                       ▼
                CloudFront / CDN
                       │
                       ▼
                 Load Balancer
                       │
                       ▼
              ┌─────────────────┐
              │   Web / API     │
              │      Server     │
              └────────┬────────┘
                       │
              ┌────────┴────────┐
              ↓                 ↓
          Database          Object Storage
              │                 │
              ↓                 ↓
          Orders/Data       Food Images
```

This would transform the current browser-based project into a scalable restaurant management platform.

---

# 📸 Recommended GitHub Screenshots

For the strongest recruiter presentation, add screenshots in this order:

### 01 • Menu Dashboard

Show the complete restaurant menu.

### 02 • Cart

Show multiple items and quantity controls.

### 03 • Invoice

Show the generated billing interface.

### 04 • QR Payment

Show the payment QR section.

### 05 • QR Scanner

Show the camera scanning interface.

### 06 • Menu Management

Show the CRUD interface.

### 07 • Mobile View

Show the responsive design on a narrow screen.

Recommended folder:

```text
screenshots/
│
├── 01-menu.png
├── 02-cart.png
├── 03-invoice.png
├── 04-payment-qr.png
├── 05-qr-scanner.png
├── 06-menu-management.png
└── 07-mobile.png
```

Then add:

```markdown
## 📸 Screenshots

### 🍽️ Menu
![Restaurant Menu](screenshots/01-menu.png)

### 🛒 Cart
![Shopping Cart](screenshots/02-cart.png)

### 🧾 Invoice
![Invoice](screenshots/03-invoice.png)

### 💳 QR Payment
![QR Payment](screenshots/04-payment-qr.png)

### ⚙️ Menu Management
![Menu Management](screenshots/06-menu-management.png)
```

---

# 💼 Project Value

### What this project demonstrates to recruiters

> **Built a responsive restaurant billing web application with dynamic menu management, shopping cart functionality, invoice generation, QR-based payment workflow and camera-based QR scanning. Implemented client-side state persistence using LocalStorage and containerized the application with Docker and Nginx for deployment.**

### Key technical areas

```text
Frontend Development
        +
JavaScript Application Logic
        +
CRUD Operations
        +
State Management
        +
Payment Workflow
        +
QR Technology
        +
Responsive Design
        +
Docker
        +
Nginx
```

---

# 👨‍💻 Developer

### Yuvaraj M

**B.Sc. Computer Science**

Focused on building practical applications across:

* ☁️ Cloud Computing
* ⚙️ DevOps
* 🐳 Docker
* ☸️ Kubernetes
* 🐧 Linux
* 🌐 Web Development
* ☁️ AWS
* 🔷 Azure

---

## ⭐ If you find this project useful

Give the repository a ⭐ and feel free to explore the code.

---

<p align="center">
  <strong>🍽️ PMY Restaurant Billing System</strong>
  <br>
  <sub>From menu selection to digital billing and QR payment.</sub>
</p>

