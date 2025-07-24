# Loan Management System Backend

This is the backend for the Loan Management System, built with Spring Boot.

## Features
- User registration and login (with roles: CUSTOMER, LOAN_OFFICER)
- Secure authentication
- Loan application management
- EMI payment tracking
- Penalty calculation
- RESTful API endpoints

## Technologies Used
- Java 23
- Spring Boot 3
- Spring Data JPA
- Spring Security
- MySQL
- Lombok

## Getting Started

### Prerequisites
- Java 17 or higher
- Maven
- MySQL database

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/gh-harini-j/LMS3.git
   cd LMS3/loanapp_backend
   ```
2. Configure your database in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/loan_db
   spring.datasource.username=your_db_user
   spring.datasource.password=your_db_password
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Build and run the backend:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

### API Endpoints
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login with username and password
- Other endpoints for loan and EMI management

### Testing APIs
Use Postman or any API client to test endpoints. Example payload for registration:
```json
{
  "userName": "testuser",
  "email": "testuser@example.com",
  "password": "testpass",
  "role": "CUSTOMER"
}
```

## Project Structure
```
loanapp_backend/
├── src/main/java/com/lti/loanapp/
│   ├── controller/
│   ├── entity/
│   ├── repository/
│   ├── service/
│   └── config/
├── src/main/resources/
│   └── application.properties
├── pom.xml
```

## License
This project is licensed under the MIT License.
