# 🍽️ PMY Restaurant Billing System

### Self-Learning Restaurant Billing & POS Web Application

<p align="center">
  <strong>Menu Management • Cart • Billing • Invoice • QR Payment • QR Scanner</strong>
</p>

<p align="center">
  A hands-on project built to strengthen my JavaScript, browser API and basic DevOps knowledge.
</p>

---

# 📌 Overview

**PMY Restaurant Billing System** is a self-learning web application that I built to practice developing a business-oriented application using **HTML, CSS and JavaScript**.

The project simulates a simple restaurant billing workflow:

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

The application also includes a menu management interface where menu items can be added, edited and deleted.

---

# 🎯 Why I Built This

I wanted to move beyond static webpages and understand how different frontend concepts work together inside a practical application.

Through this project, I explored:

* Dynamic UI rendering
* JavaScript application logic
* Shopping cart functionality
* CRUD operations
* Invoice generation
* QR-code workflows
* Browser LocalStorage
* Camera-based QR scanning
* Responsive design
* Docker containerization
* Nginx web serving

This project is part of my **self-learning journey**, where I learn concepts by building practical applications.

---

# ✨ Features

## 🍛 Dynamic Restaurant Menu

The application displays menu items dynamically.

Each item can contain:

* Food name
* Price
* Food image
* Add-to-cart functionality

---

# 🛒 Shopping Cart

Users can:

* Add food items
* Increase quantity
* Decrease quantity
* Remove items
* View total quantity
* Calculate total price

The cart updates dynamically as users interact with the application.

---

# 🧾 Invoice Generation

The application generates an invoice based on the selected cart items.

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

# 💳 QR Payment Workflow

The application includes a QR payment workflow.

A payment QR code can be configured and displayed during the billing process.

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

This feature was implemented as a learning exercise to understand how QR-based workflows can be integrated into a web application.

---

# 📷 QR Code Scanner

The application also includes a camera-based QR scanner.

It can:

* Request camera access
* Access a supported device camera
* Detect QR codes
* Decode QR information
* Display the scanned result

This allowed me to explore browser camera functionality and QR scanning libraries.

---

# ⚙️ Menu Management

The project includes a menu management interface for practicing CRUD operations.

### Create

Add new menu items.

### Read

View existing menu items.

### Update

Edit menu information.

### Delete

Remove menu items.

```text
                 MENU MANAGEMENT
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
        CREATE        UPDATE        DELETE
          │             │             │
          └─────────────┼─────────────┘
                        ↓
                   LocalStorage
                        ↓
                   Menu Display
```

---

# 💾 LocalStorage

The project uses browser **LocalStorage** to persist client-side data.

Information such as:

```text
Menu Items
Cart
Payment QR Configuration
```

can be stored locally.

This helped me understand browser-based state persistence without a backend database.

---

# 🐳 Docker & Nginx

As part of my self-learning journey, I also experimented with containerizing the application.

The project includes a Docker configuration using **Nginx** to serve the static web application.

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

## HTML5

* Page structure
* Forms
* Navigation
* Semantic elements
* Interactive components

## CSS3

* Responsive layouts
* Flexbox
* CSS Grid
* Media queries
* Cards
* Forms
* Mobile layouts

## JavaScript

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

## Browser APIs

* LocalStorage
* Camera access
* QR scanning

## DevOps Basics

* Docker
* Docker images
* Containers
* Nginx
* Local web servers

---

# 🏗️ Application Architecture

```text
                     PMY RESTAURANT
                           │
              ┌────────────┴────────────┐
              │                         │
          CUSTOMER                    STAFF
              │                         │
              ↓                         ↓
        Restaurant Menu           Manage Menu
              │                         │
              ↓                         ↓
             Cart                   CRUD Items
              │                         │
              ↓                         ↓
           Invoice                LocalStorage
              │
              ↓
         Payment QR
              │
              ↓
         QR Scanner
```

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

# 🛠️ Technology Stack

| Technology        | Purpose                   |
| ----------------- | ------------------------- |
| **HTML5**         | Application structure     |
| **CSS3**          | Styling and responsive UI |
| **JavaScript**    | Application functionality |
| **LocalStorage**  | Client-side persistence   |
| **HTML5 QR Code** | QR scanning               |
| **Docker**        | Containerization          |
| **Nginx**         | Web server                |
| **Git**           | Version control           |
| **GitHub**        | Source code management    |

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

# ▶️ How to Run

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/billing-web-main.git
```

## 2. Open the Project

Navigate to:

```text
billing-web-main/
└── billing website/
```

### Windows

Run:

```text
start-server.bat
```

or:

```text
start-server-and-open.bat
```

The included scripts provide an easier way to launch the project locally.

---

# 🐳 Run with Docker

Navigate to the website directory:

```bash
cd "billing website"
```

Build the Docker image:

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

Add screenshots of the actual application here.

Recommended structure:

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

Example:

```markdown
## 📸 Screenshots

### 🍛 Restaurant Menu
![Restaurant Menu](screenshots/01-menu.png)

### 🛒 Shopping Cart
![Shopping Cart](screenshots/02-cart.png)

### 🧾 Invoice
![Invoice](screenshots/03-invoice.png)

### 💳 QR Payment
![QR Payment](screenshots/04-payment-qr.png)

### ⚙️ Menu Management
![Menu Management](screenshots/06-menu-management.png)
```

---

# 🧪 Challenges I Practiced

| Challenge                      | Concept Practiced           |
| ------------------------------ | --------------------------- |
| Dynamic menu rendering         | JavaScript DOM manipulation |
| Cart calculations              | JavaScript logic            |
| Maintaining cart state         | LocalStorage                |
| Managing menu items            | CRUD operations             |
| Generating invoices            | Dynamic UI generation       |
| QR functionality               | Browser APIs                |
| Camera scanning                | QR scanning library         |
| Containerizing the application | Docker                      |
| Serving the application        | Nginx                       |

---

# 🔮 Future Improvements

This project is currently a **client-side self-learning application**.

My future improvements would include:

## Backend

* Node.js
* Express.js
* REST APIs

## Database

* MongoDB
* PostgreSQL
* MySQL

## Authentication

* User login
* Admin authentication
* Role-based access control

## Restaurant Features

* Order management
* Kitchen order display
* Inventory management
* Table management
* Customer management
* Sales analytics

## Payments

* Razorpay integration
* Payment verification
* Transaction history
* Server-side payment validation

## Cloud & DevOps

* AWS deployment
* Docker
* CI/CD
* GitHub Actions
* Nginx reverse proxy
* Monitoring

---

# ⚠️ Project Scope

This is a **self-learning project** created to practice frontend development, JavaScript, browser APIs and basic DevOps concepts.

It is **not a production restaurant POS system**.

The current version uses LocalStorage and client-side logic. A production implementation would require:

* Secure backend
* Database
* Authentication
* Server-side validation
* Secure payment integration
* Payment verification

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
Cloud Computing
DevOps
Web Development
Linux
AWS
Azure
Docker
Kubernetes
```

---

## 🚀 Learning Through Building

> **Learn → Build → Debug → Improve → Understand**

I built this project to turn individual web development concepts into a practical application and gain hands-on experience with frontend development, browser APIs, CRUD functionality and containerization.

---

<p align="center">
  🍽️ <strong>PMY Restaurant Billing System</strong>
  <br>
  <sub>A self-learning project built through hands-on development.</sub>
</p>
