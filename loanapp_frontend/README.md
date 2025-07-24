# Loan Management System Frontend

This is the frontend for the Loan Management System, built with React.

## Features
- User registration and login forms
- Role selection (CUSTOMER, LOAN_OFFICER)
- Stylish, professional UI with custom CSS
- Password visibility toggle
- Toast notifications for feedback
- Integration with backend REST APIs

## Technologies Used
- React 18
- JavaScript (ES6+)
- react-toastify
- Axios
- CSS Modules

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/gh-harini-j/LMS3.git
   cd LMS3/loanapp_frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   The app will run at `http://localhost:3000`.

### Configuration
- The frontend expects the backend API to be running at `http://localhost:8080`.
- You can update API URLs in the source code if needed.

## Project Structure
```
loanapp_frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── auth/
│   │       ├── Login.js
│   │       └── Signup.js
│   ├── App.js
│   ├── App.css
│   └── ...
├── package.json
```

## Usage
- Register a new user via the signup form.
- Login with your credentials.
- Role-based features will be available after login.

## License
This project is licensed under the MIT License.
