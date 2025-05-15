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

### Steps

1. **Clone the repository**:

    ```bash
   git clone https://github.com/yourusername/chill-game.git
   cd chill-game
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configure Firebase**:

    - Set up Firebase for your project by visiting [Firebase Console](https://console.firebase.google.com/).
    - Initialize Firebase Hosting and Firestore (or another service for storing car data).
    - Add your Firebase credentials and configuration to your project.

4. **Run the project locally**:

    ```bash
    npm start
    ```

    - Open your browser to view the app running locally.

---

## 📤 **Deploying to Firebase Hosting**

To deploy the app to Firebase Hosting, follow these steps:

1. **Login to Firebase**:

    ```bash
    firebase login
    ```

2. **Deploy your project**:

    ```bash
    firebase deploy
    ```

Once deployed, your project will be live and accessible on the web.

---

## 🤝 **Contributing**

We welcome contributions from the community! If you'd like to contribute, follow these steps:

1. **Fork the repository** to your own GitHub account.
2. **Create a new branch**:

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Make your changes** and commit them:

    ```bash
    git commit -am 'Add new feature'
    ```

4. **Push your changes** to the repository:

    ```bash
    git push origin feature/your-feature
    ```

5. **Open a pull request** to have your changes reviewed and merged.

---






