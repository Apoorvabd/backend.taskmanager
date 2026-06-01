# AI Task Manager Backend

Backend service for the AI Task Manager application built with Node.js, Express.js, and MongoDB.

## Features

* User Registration & Authentication
* JWT-Based Authorization
* Secure Password Hashing
* Task CRUD Operations
* Task Status Management
* AI-Powered Task Description Generation
* RESTful API Architecture
* MongoDB Database Integration
* Protected Routes & Middleware

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js
* AI Service Integration

---

## Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Models
   │
   ▼
MongoDB
```

---

## Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── aiController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── model/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── aiRoutes.js
│
└── server.js
```

---

## Core Functionalities

### Authentication

* User Registration
* User Login
* JWT Token Generation
* Protected API Access

### Task Management

* Create Task
* Update Task
* Delete Task
* Fetch User Tasks
* Task Status Tracking

### AI Integration

* Generate intelligent task descriptions
* Enhance task planning and organization

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Tasks

```http
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

### AI

```http
POST /api/ai/generate
```

---

## Environment Variables

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

AI_API_KEY=
```

---

## Running Locally

```bash
npm install
npm run dev
```

Server:

```text
http://localhost:5000
```

---

## Security Features

* Password Hashing
* JWT Authentication
* Route Protection
* Request Validation

---

## Author

Apoorv Chaturvedi

Built as part of the MERN Stack Developer Assessment.
