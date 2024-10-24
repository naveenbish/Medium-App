# Backend API for Blog and User Authentication

This project provides a backend API for managing users and blogs, including authentication with JWT and blog CRUD operations.

## Getting Started

### 1. Install Dependencies
To install the required dependencies, run:
```bash
npm install
```

### 2. Run the Development Server
To start the development server, run:
```bash
npm run dev
```

### 3. Deploy the Application
To deploy the application, run:
```bash
npm run deploy
```

## API Endpoints

### Base URLs:
- **Cloudflare URL:** `https://honobackennd.bishtnitin003.workers.dev`
- **Localhost URL:** `http://localhost:8787`

### API Version
All APIs start with the following base path:
```
/api/v1
```

## User APIs

### 1. **Sign Up**
- **Endpoint:** `POST /user/signup`
- **Logic:** Creates a new user if the email doesn't already exist and returns a JWT token.
- **Required Parameters:**
  - `email` (string)
  - `password` (string)
  - `name` (string)
- **Validations:**
  1. Checks if the email already exists. If it does, returns "User already exists."
  2. Input validation using Zod for email, password, and name. If validation fails, returns `411` (Input Incorrect).
- **Response:** JWT token.

### 2. **Sign In**
- **Endpoint:** `POST /user/signin`
- **Logic:** Authenticates the user by checking email and password, and returns a JWT token.
- **Required Parameters:**
  - `email` (string)
  - `password` (string)
- **Validations:**
  1. Checks if the input is valid using Zod for email and password. If validation fails, returns `411` (Input Incorrect).
  2. Checks if the user exists and matches the password. If not, returns "User does not exist."
- **Response:** JWT token.

---

## Blog APIs

### 1. **Create Blog**
- **Endpoint:** `POST /`
- **Logic:** Creates a new blog post.
- **Required Parameters:**
  - `title` (string)
  - `content` (string)
  - `authorId` (string)
- **Validations:**
  1. Input validation using Zod for `title` and `content`. If validation fails, returns `411` (Input Incorrect).
- **Response:** `blogId` (string).

### 2. **Update Blog**
- **Endpoint:** `PUT /`
- **Logic:** Updates an existing blog post.
- **Required Parameters:**
  - `id` (string)
  - `title` (string)
  - `content` (string)
  - `authorId` (string)
- **Validations:**
  1. Input validation using Zod for `title`, `content`, and `id`. If validation fails, returns `411` (Input Incorrect).
- **Response:** `blogId` (string).

### 3. **Get All Blogs (Bulk)**
- **Endpoint:** `GET /bulk`
- **Logic:** Returns a list of blogs. **Todo:** Add pagination for infinite scrolling (10 blogs at a time).
- **Required Parameters:** None
- **Response:** List of blogs with `content`, `title`, `id`, and author name.

### 4. **Get Blog by ID**
- **Endpoint:** `GET /bulk/:id`
- **Logic:** Returns the content of a specific blog when the user clicks to read it.
- **Required Parameters:** `blogId`
- **Response:** Blog data for the specified `blogId`.

---

## Middleware for Blog APIs
The following middleware is applied to all Blog APIs for authorization.

### Logic:
- Retrieves the JWT token from the request (either from the body or `Authorization` header).
- Verifies the token and checks the user’s identity.
- If verification passes, the user is authorized to access the API. Otherwise, returns "Unauthorized access."

### Conditions:
1. If no user ID is present, the middleware returns "Unauthorized" or "You are not logged in."
