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

```bash
npm install

```bash
npm start

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


