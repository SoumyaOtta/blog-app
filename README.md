# 📝 Blog App

A full-featured MERN stack blog application with user and admin roles. Admins can create, edit, and delete blog posts, while regular users can view and read content. The backend is fully RESTful and tested using Postman.

---

## 🚀 Features

- 🔐 User authentication with JWT
- 👥 Role-based access (User / Admin)
- 📝 Admin can create, edit, and delete posts
- 📖 Public can view and browse posts
- 🧭 Protected routes and authorization
- ⚙️ RESTful API tested with Postman

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- CSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js

**Testing:**
- Postman (for API testing)

---

🔒 API Endpoints (Sample)
POST /api/auth/register – Register a new user

POST /api/auth/login – Login user

GET /api/posts – Get all posts

POST /api/posts – Create post (admin only)

PUT /api/posts/:id – Edit post (admin only)

DELETE /api/posts/:id – Delete post (admin only)

All protected routes require a valid JWT token in headers.
