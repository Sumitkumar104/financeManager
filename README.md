# **Personal Finance Manager**

A application(Backend Implementation) to help users manage their personal finances, including tracking income, expenses, and savings goals. Users can categorize transactions, set savings goals, and generate reports to understand spending patterns.

---

## **Features**
- **User Management**: Registration and login system with JWT-based authentication.
- **Transaction Management**: Add, view, update, and delete financial transactions.
- **Category Management**: Create and manage custom categories for transactions.
- **Savings Goals**: Set and track savings goals with a target amount and date.
- **Reports**: Generate monthly and yearly reports with visualizations (e.g., pie charts, bar graphs).
- **Data Persistence**: Uses an in-memory database for the backend and React for the frontend.

---

## **Tech Stack**
- **Backend**: Node.js, Express.js, In-memory database
- **Frontend**: React.js, Axios, Chart.js (Pending)
- **Authentication**: JWT
- **Testing**: Jest for backend

--- 

## ** Asumption**
- For simplicity, an in-memory database is used. In a production environment, this would be replaced with a persistent  database (e.g., Firebase Firestore, MongoDB).
- Basic email-password authentication is implemented without advanced validation or password recovery mechanisms.
- Reports are generated using dummy percentage calculations in the backend.

---

## **Setup Instructions**

### **1. Backend Setup**

#### **Go to Backend Directory:**

```bash
cd backend
npm install
npm start

```

## **port**
- backend will run at port 8000

#### **Pre-requisites**
- Node.js installed on your system.

backend/
├── src/
│   ├── controllers/  # Business logic
│   ├── models/       # Data structures
│   ├── routes/       # API endpoints
│   ├── utils/        # Utility functions
│   ├── index.js      # Entry point
├── tests/            # Jest test cases


## **Sample API Requests**

1. Register User

- POST /api/users/register
Content-Type: application/json
Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}

2. Login User

- POST /api/users/login
Content-Type: application/json
Body:
{
  "email": "john.doe@example.com",
  "password": "password123"
}

3. Add Transaction

- POST /api/transactions
Authorization: Bearer <JWT Token>
Content-Type: application/json
Body:
{
  "amount": 100,
  "date": "2025-01-01",
  "category": "Food",
  "description": "Dinner at a restaurant"
}
