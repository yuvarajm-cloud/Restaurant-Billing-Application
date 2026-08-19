# 🍽️ PMY Restaurant Billing System

### Self-Learning Restaurant Billing & POS Web Application

<p align="center">
  <strong>Menu Management • Cart • Billing • Invoice • QR Payment • QR Scanner</strong>
</p>

<p align="center">
  A responsive restaurant billing application built as part of my self-learning journey in JavaScript and web development.
</p>

---

## 📌 About the Project

**PMY Restaurant Billing System** is a self-learning web application that I built to practice developing a more complete business-oriented web application using **HTML, CSS and JavaScript**.

The project simulates a simple restaurant billing workflow where users can:

```text
Browse Menu
    ↓
Select Food
    ↓
Add to Cart
    ↓
Manage Quantity
    ↓
Generate Invoice
    ↓
View Payment QR
    ↓
Scan QR Code
```

The project also includes a menu management interface where menu items can be added, edited and deleted.

---

# 🎯 Why I Built This

I built this project to understand how common business application features can be implemented using frontend technologies.

Instead of creating only static web pages, I wanted to practice building:

* Interactive interfaces
* Dynamic data rendering
* Cart functionality
* CRUD operations
* Invoice generation
* QR-code functionality
* Browser data persistence
* Responsive layouts
* Docker-based application serving

This project became a practical way for me to learn by building and experimenting.

---

# ✨ Features

## 🍛 Dynamic Restaurant Menu

The application displays restaurant menu items dynamically.

Each item contains:

* Food name
* Price
* Food image
* Add-to-cart functionality

---

## 🛒 Shopping Cart

Users can:

* Add food items
* Increase quantity
* Decrease quantity
* Remove items
* View total quantity
* View total price

The cart dynamically updates as users interact with it.

---

# 🧾 Invoice Generation

The application generates an invoice based on the current cart.

The invoice includes:

```text
Restaurant Information
        ↓
Invoice Date / Time
        ↓
Ordered Items
        ↓
Quantity
        ↓
Unit Price
        ↓
Item Total
        ↓
Final Total
```

This helped me practice dynamic calculations and generating UI content from JavaScript data.

---

# 💳 QR Payment

The application includes a QR payment workflow.

A payment QR code can be configured through the menu management interface and displayed to the user during the billing process.

```text
Order
 ↓
Cart
 ↓
Invoice
 ↓
Payment QR
 ↓
Customer Payment
```

This feature was implemented as a learning exercise to understand how QR-based workflows can be integrated into web applications.

---

# 📷 QR Code Scanner

The application also includes a camera-based QR scanner.

It can:

* Request camera access
* Use a supported device camera
* Detect QR codes
* Decode QR information
* Display the scanned result

This functionality helped me explore browser camera APIs and third-party QR scanning libraries.

---

# ⚙️ Menu Management

The project includes a dedicated menu management interface.

### Create

Add new menu items.

### Read

Display existing menu items.

### Update

Edit menu information.

### Delete

Remove menu items.

```text
                Menu Management
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
        CREATE       UPDATE       DELETE
          │            │            │
          └────────────┼────────────┘
                       ↓
                  LocalStorage
                       ↓
                  Menu Display
```

This was my practical introduction to **CRUD operations**.

---

# 💾 LocalStorage

The project uses browser **LocalStorage** for data persistence.

The application stores information such as:

```text
Menu Items
Cart
Payment QR Configuration
```

This helped me understand how browser-based applications can maintain state without a backend database.

---

# 🐳 Docker & Nginx

As part of my learning, I also experimented with containerizing the application.

The project includes a Docker configuration using **Nginx** to serve the static website.

```text
Application Files
       ↓
Docker Image
       ↓
Nginx Container
       ↓
Web Application
```

This gave me practical exposure to basic containerization and web-server concepts.

---

# 🧠 What I Learned

### HTML

* Page structure
* Forms
* Navigation
* Semantic elements
* Interactive components

### CSS

* Responsive layouts
* Flexbox
* Grid
* Media queries
* Cards
* Modals
* Mobile layouts

### JavaScript

* DOM manipulation
* Event handling
* Functions
* Arrays and objects
* Dynamic rendering
* State management
* CRUD operations
* LocalStorage
* Calculations
* Form handling

### Browser APIs

* LocalStorage
* Camera access
* QR scanning

### DevOps Basics

* Docker
* Docker images
* Containers
* Nginx
* Local web servers

---

# 🏗️ Application Architecture

```text
                    PMY Restaurant
                          │
             ┌────────────┴────────────┐
             │                         │
          Customer                  Staff
             │                         │
             ↓                         ↓
        Restaurant Menu          Manage Menu
             │                         │
             ↓                         ↓
           Cart                    CRUD Items
             │                         │
             ↓                         ↓
          Invoice                 LocalStorage
             │
             ↓
        Payment QR
             │
             ↓
        QR Scanner
```

---

# 📂 Project Structure

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

# 🛠️ Technologies Used

| Technology    | Purpose                   |
| ------------- | ------------------------- |
| HTML5         | Application structure     |
| CSS3          | Styling and responsive UI |
| JavaScript    | Application functionality |
| LocalStorage  | Client-side persistence   |
| HTML5 QR Code | QR scanning               |
| Docker        | Containerization          |
| Nginx         | Web server                |
| Git           | Version control           |
| GitHub        | Source code management    |

---

# 🔄 Complete Application Flow

```text
                    ┌───────────────┐
                    │ Restaurant UI │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │     Menu      │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │      Cart     │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │    Invoice    │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │  Payment QR   │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │  QR Scanner   │
                    └───────────────┘
```

---

# ▶️ How to Run

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/billing-web-main.git
```

### Open the project

```text
billing-web-main/
└── billing website/
```

You can use the included:

```text
start-server.bat
```

or:

```text
start-server-and-open.bat
```

to launch the application on Windows.

---

# 🐳 Run Using Docker

Navigate to the project directory:

```bash
cd "billing website"
```

Build the image:

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

# 📱 Responsive Design

The application was designed to work across:

```text
Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile
```

Responsive CSS techniques were used to adapt the interface to different screen sizes.

---

# 📸 Screenshots

> Add screenshots of the actual application here.

Recommended:

```text
screenshots/
│
├── menu.png
├── cart.png
├── invoice.png
├── payment-qr.png
├── qr-scanner.png
├── manage-menu.png
└── mobile.png
```

Example:

```markdown
## 📸 Screenshots

### 🍛 Restaurant Menu
![Restaurant Menu](screenshots/menu.png)

### 🛒 Shopping Cart
![Shopping Cart](screenshots/cart.png)

### 🧾 Invoice
![Invoice](screenshots/invoice.png)

### 💳 QR Payment
![QR Payment](screenshots/payment-qr.png)

### ⚙️ Menu Management
![Menu Management](screenshots/manage-menu.png)
```

---

# 🔮 Future Improvements

This project is currently a **client-side self-learning application**.

Possible future improvements include:

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB
* PostgreSQL
* MySQL

### Authentication

* User login
* Admin authentication
* Role-based access control

### Restaurant Features

* Order management
* Kitchen order display
* Inventory management
* Table management
* Customer management
* Sales reports

### Payments

* Razorpay integration
* Payment verification
* Transaction history
* Server-side payment validation

### Cloud & DevOps

* AWS deployment
* Docker
* CI/CD
* GitHub Actions
* Nginx reverse proxy
* Monitoring

---

# ⚠️ Project Scope

This is a **self-learning project** created to practice frontend development, JavaScript, browser APIs and basic deployment concepts.

It is **not a production restaurant POS system**.

The current version uses LocalStorage and client-side logic. A production implementation would require a secure backend, database, authentication and server-side payment verification.

---

# 💼 Skills Practiced

```text
HTML5
CSS3
JavaScript
Responsive Web Design
DOM Manipulation
State Management
CRUD Operations
LocalStorage
Invoice Generation
QR Integration
Camera APIs
Docker
Nginx
Git
GitHub
```

---

# 👨‍💻 Developer

### Yuvaraj M

**B.Sc. Computer Science**

Building practical projects as part of my continuous self-learning journey in:

```text
Front-end Development
Web design
```

---

## ⭐ Learning Through Building

> I use self-learning projects to turn concepts into practical applications and understand how different technologies work together.

This project helped me move beyond basic HTML/CSS exercises and experiment with application logic, state management, browser APIs, CRUD functionality and containerized deployment.

---

<p align="center">
  🍽️ <strong>PMY Restaurant Billing System</strong>
  <br>
  <sub>A self-learning project built through hands-on development.</sub>
</p>
