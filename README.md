# 🌍 Wonderlust – Major Project

**Wonderlust** is a travel-themed web application developed as a **Major Project** by [patil2303](https://github.com/patil2303).  
It is built using **Node.js, Express.js, EJS, and MongoDB** (customize if different).  

The project provides a responsive and user-friendly platform to explore destinations, manage data, and showcase full-stack development skills.

---

## 🚀 Features

- 🌐 Server-side rendered pages with **EJS**
- 🗂️ **CRUD operations** for destinations and users
- 👤 User authentication (login/register)
- 🖼️ Photo galleries and media support
- ⚡ Organized project structure with MVC pattern
- 🛠️ Custom middleware for logging, validation, and authentication
- ☁️ Cloud-ready configuration (MongoDB Atlas / AWS / Firebase)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Frontend**: EJS, HTML, CSS, JavaScript  
- **Database**: MongoDB (Mongoose ODM)  
- **Other Tools**: Middleware, Nodemon, Cloud services  

---

## ⚙️ Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/patil2303/Major-Project.git
   cd Major-Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file or update `cloudConfig.js` with your database credentials:

   ```env
   DB_URI=your_mongodb_connection_string
   PORT=3000
   SESSION_SECRET=your_secret_key
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open in your browser:

   ```
   http://localhost:3000
   ```

---

## 📂 Project Structure Explained

The project follows an **MVC (Model–View–Controller)** architecture with additional utilities and configuration files.  
Here’s a detailed breakdown:

```
Major-Project/
├── controllers/       
├── models/            
├── routes/            
├── views/             
├── public/            
├── scripts/           
├── utils/             
├── Middleware.js      
├── cloudConfig.js     
├── schema.js          
├── app.js             
├── package.json       
└── README.md          
```

### **1. controllers/**
Handles **business logic** and connects routes to models.  
Keeps route files clean and modular.

- `userController.js` → Manages signup, login, profile  
- `destinationController.js` → Handles CRUD for travel spots  
- `authController.js` → Authentication logic  

---

### **2. models/**
Defines the **database schema** and structure.  

- `User.js` → User data (name, email, password)  
- `Destination.js` → Destinations (title, images, description)  
- `Review.js` → Reviews/ratings  

---

### **3. routes/**
Defines **application endpoints (APIs)**.  

- `userRoutes.js` → `/login`, `/signup`, `/profile`  
- `destinationRoutes.js` → `/destinations`, `/destinations/:id`  
- `index.js` → Combines all routes  

---

### **4. views/**
Contains **EJS templates** for frontend pages.  

- `home.ejs` → Landing page  
- `destination.ejs` → Destination details  
- `login.ejs` → User login  

---

### **5. public/**
Stores **static files** (directly served by Express).  

- `css/` → Stylesheets  
- `js/` → Client-side JavaScript  
- `images/` → Destination images  
- `fonts/` → Custom fonts  

---

### **6. scripts/**
Utility or setup scripts.  

- `seed.js` → Populate DB with dummy data  
- `dbBackup.js` → Backup database  

---

### **7. utils/**
Reusable **helper functions**.  

- `validators.js` → Input validation  
- `logger.js` → Custom logging  
- `emailService.js` → Send emails  

---

### **8. Middleware.js**
Custom middleware functions.  

- Authentication check  
- Error handling  
- Request logging  

---

### **9. cloudConfig.js**
Stores **cloud/database configuration**.  
Keeps sensitive information separate from code.  

---

### **10. schema.js**
Defines **database schema setup**.  
Useful for validation or relationships in MongoDB/Mongoose.  

---

### **11. app.js**
Main **entry point** of the application.  

- Initialize Express app  
- Configure middleware  
- Set up routes  
- Connect to database  
- Start the server  

---

### **12. package.json**
Project metadata & dependency list.  

- Dependencies (express, ejs, mongoose, etc.)  
- Scripts (`start`, `dev`)  
- Project info  

---

### **13. README.md**
Documentation file (you’re reading it now).  
Explains setup, usage, and contribution guidelines.  

---

## 🖥️ Usage

1. Run the server → `npm start`  
2. Access home page at `http://localhost:3000`  
3. Browse destinations, login, or manage data depending on implemented features  

---

## 📜 Scripts

From `package.json`:

- `npm start` → Start server in production  
- `npm run dev` → Start with auto-restart (nodemon)  
- `npm test` → Run tests (if implemented)  

---

## 🤝 Contributing

Contributions are welcome!  
To contribute:

1. Fork the repo  
2. Create a branch: `git checkout -b feature/YourFeature`  
3. Commit changes: `git commit -m "Added feature"`  
4. Push branch: `git push origin feature/YourFeature`  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute with attribution.  

---

## 📧 Contact

👤 **Developer**: Shreyas Patil  
🔗 **GitHub**: [patil2303](https://github.com/patil2303)  
📩 **Email**: shreyaspatil1408@gmail.com  

---
