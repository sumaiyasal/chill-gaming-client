# 🎮 Chill Game Reviews – A Calm Gaming Community 🌿

Welcome to **Chill Game Reviews**, a full-stack web application where users can explore and contribute reviews for relaxing, indie, and cozy video games. Built as part of Programming Hero Assignment 10, this project emphasizes clean UI/UX, secure user interactions, and modern frontend-backend integration.

## 🌐 Live Site

👉 [chill-game-aa1c3.web.app](https://chill-game-aa1c3.web.app)

---

## ✨ Key Features

- 🔍 Browse a curated list of chill games
- ✍️ Authenticated users can add, update, and delete reviews
- 🔐 Protected routes using Firebase JWT tokens
- 📄 Detailed game pages with ratings and descriptions
- 📱 Responsive layout for mobile and desktop

---

## 🛠 Tech Stack

**Client Side:**
- React
- React Router DOM
- Tailwind CSS / DaisyUI
- Firebase Authentication
- Axios or Fetch API

**Server Side (connected via REST API):**
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- CORS and middleware protection

---

## 📂 Project Structure

src/
├── components/ # Shared UI components (Navbar, Footer, etc.)
├── pages/ # All page-level components (Home, Add, Login, etc.)
├── routes/ # Route definitions and PrivateRoute logic
├── App.jsx # Main routing logic
└── main.jsx # App entry point

---

## 🧪 How to Run Locally

### 1. Clone the Repo
```bash
git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-sumaiyasal.git
cd b10-a10-client-side-sumaiyasal

npm install
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
npm run dev

