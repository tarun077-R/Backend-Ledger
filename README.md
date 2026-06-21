# Banking Ledger Management System 💰

A backend application built using Node.js, Express.js, and MongoDB for managing financial transactions, income records, and expenses securely.

---

## Features 🚀

### Authentication

* User Registration
* User Login & Logout
* JWT Authentication
* Protected Routes
* Secure Password Hashing using bcrypt

### Ledger Management

* Create Ledger Entries
* View All Transactions
* Update Transactions
* Delete Transactions
* Track Income and Expenses
* User-specific Financial Records

### Security

* JWT Token Verification
* Password Encryption
* Protected API Endpoints
* Middleware-based Authentication

---

## Tech Stack 🛠️

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Development Tools

* Nodemon
* Postman

---

## Project Structure

```bash
src/
│
├── controllers/
│
├── models/
│
├── routes/
│
├── middleware/
│
├── config/
│
└── server.js
```

---

## Installation ⚙️

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Backend-Ledger.git
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

### Start Server

```bash
npm run dev
```

---

## API Endpoints 📡

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### Ledger

```http
GET    /api/ledger
POST   /api/ledger
PUT    /api/ledger/:id
DELETE /api/ledger/:id
GET    /api/ledger/:id
```

---

## Workflow 🔄

1. User creates an account.
2. User logs in and receives a JWT token.
3. Authenticated users can manage ledger records.
4. Users can add income and expense transactions.
5. Transactions are securely stored in MongoDB.
6. Users can update or delete their records anytime.

---

## Learning Outcomes 📚

* REST API Development
* Authentication & Authorization
* MongoDB Data Modeling
* Express Middleware
* CRUD Operations
* Backend Project Structure
* Secure API Design

---

## Author 👨‍💻

**Tarun Rawat**

* BCA Final Year Student
* MERN Stack Developer

GitHub:
https://github.com/tarun077-R

---

## License

This project is created for learning, portfolio, and educational purposes.
