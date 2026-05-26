
# ☕ Urban Brew Café

Urban Brew Café is a premium and responsive café website built using React.js, Tailwind CSS, Node.js, Express.js, and MySQL.

This project includes a modern animated homepage, menu section, opening hours, special offer section, and a table booking form connected with a MySQL database.


## 🌟 Features

- Premium café landing page

- Responsive website design

- Animated hero section

- Modern navbar and footer

- Menu section

- Opening hours section

- Special offer banner

- Table booking form

- Backend API integration

- MySQL database storage

- Production build completed


## 🛠️ Technologies Used

### Frontend

- React.js

- Vite

- Tailwind CSS

- Framer Motion


### Backend

- Node.js

- Express.js

- MySQL

- CORS


### Database

- MySQL Workbench

## 📁 Project Structure

FUTURE_FS_03/
│
├── client/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   ├── server/
│   │   ├── node_modules/
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── server.js
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── About.css
│   │   │   ├── About.jsx
│   │   │   ├── Contact.css
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Menu.css
│   │   │   ├── Menu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── OfferBanner.jsx
│   │   │   ├── OpeningHours.jsx
│   │   │   ├── Stats.jsx
│   │   │   └── Testimonials.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
│   └── README.md

## 🚀 How to Run This Project

## IMPORTANT NOTE

This project has two parts:

1. **Frontend** inside the `client` folder

2. **Backend** inside the `server` folder

So you must run frontend and backend in **two separate terminals**.

## 2️⃣ Run Frontend

Open terminal and go to client folder:

cd client

Install dependencies:

npm install

-> Run frontend:

npm run dev

Frontend will run on:

http://localhost:5173



## 3️⃣ Run Backend

Open a new terminal and go to server folder:

cd server

Install backend dependencies:

npm install

-> Run backend server:

node server.js

Backend will run on:

http://localhost:5000

## 4️⃣ MySQL Database Setup

Open MySQL Workbench and run:

```sql
CREATE DATABASE urbanbrew;
USE urbanbrew;
```

Create table:

```sql
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  date VARCHAR(50),
  time VARCHAR(50),
  guests VARCHAR(50)
);


## 5️⃣ Build Frontend for Production

Go to client folder:

```
cd client


Run build command:

npm run build

If build is successful, you will see output like:

vite building client environment for production...
✓ built successfully

## ⚠️ Important Notes

- Run frontend from the `client` folder only.

- Run backend from the `server` folder only.

- MySQL server must be running before starting backend.

- Database name should be `urbanbrew`.

- Table name should be `contacts`.

- Backend runs on port `5000`.

- Frontend runs on port `5173`.

- If booking data is not saving, check backend terminal for errors.

- If `npm run build` shows missing script, make sure you are inside the `client` folder.

## 📌 Project Status

- Frontend completed

- Backend completed

- MySQL database connected

- Table booking form working

- Production build successful

- Ready for GitHub submission

## 🎯 Project Pitch

### **Who is the business?**

**Urban Brew Café** is a modern coffee shop that offers **handcrafted coffee, tasty snacks, refreshing drinks, desserts, and a premium café experience** for customers.

### **What problem does the website solve?**

This website solves the problem of customers not having a **quick and easy way to explore the café online**. Customers can view the **menu items, opening hours, special offers, and book a table easily** through the website.

### **How does the website help attract customers?**

The website gives Urban Brew Café a **professional online presence**. It highlights the café’s **premium design, menu, offers, and booking option**, which helps attract more visitors, improve customer engagement, and make the café more accessible to new customers.
## 👨‍💻 Developer

SIDDARTH K

## 📄 License

This project is created for internship learning and submission purposes.
