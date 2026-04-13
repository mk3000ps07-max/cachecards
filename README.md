📚 CacheCards – Flashcard Management System

🚀 Overview

CacheCards is a full-stack web application designed to help users create, manage, and study flashcards digitally.
It provides an intuitive and efficient way to organize learning content, making revision faster and more effective.

🎯 Features

➕ Create flashcards (Question & Answer)
📖 View all flashcards
✏️ Edit existing flashcards
❌ Delete flashcards
🎨 Interactive UI with flip animations
⚡ Fast and responsive performance
🌐 RESTful API integration


🛠️ Tech Stack

🔹 Frontend

* HTML
* CSS
* JavaScript

🔹 Backend

* Node.js
* Express.js

🔹 Database

* MongoDB Atlas

🔹 Tools & Libraries

* Mongoose (ODM)
* dotenv (Environment variables)
* nodemon (Development server)


🏗️ Project Architecture

CacheCards follows a 3-tier architecture:

```
Frontend (UI)
     ↓
REST API (HTTP Requests)
     ↓
Backend (Node.js + Express)
     ↓
Database (MongoDB)
```

---

📂 Project Structure

```
cachecards/
│
├── controllers/      # Business logic
├── models/           # Database schemas
├── routes/           # API routes
├── config/           # DB connection & configs
├── utils/            # Helper functions (error handling)
├── public/           # Frontend files (HTML, CSS, JS)
├── .env              # Environment variables
├── server.js         # Entry point
└── package.json      # Dependencies
```

---

🔗 API Endpoints

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| POST   | /cards     | Create a flashcard |
| GET    | /cards     | Get all flashcards |
| PUT    | /cards/:id | Update a flashcard |
| DELETE | /cards/:id | Delete a flashcard |

---

⚙️ Installation & Setup

1️⃣ Clone the Repository

bash
git clone https://github.com/mk3000ps07-max/cachecards.git 
cd cachecards


2️⃣ Install Dependencies

bash
npm install


3️⃣ Setup Environment Variables

Create a `.env` file in root:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string

4️⃣ Run the Application

bash
npm run dev

👉 Server will start at:

http://localhost:5000

🔄 How It Works (Flow)

1. User interacts with frontend UI
2. Frontend sends HTTP request to backend
3. Backend processes request using controllers
4. Data is stored/retrieved from MongoDB
5. Response is sent back to frontend
6. UI updates dynamically


⚠️ Challenges Faced

* Handling asynchronous operations using async/await
* Debugging API errors
* Fixing "Cannot set headers after they are sent" error
* Ensuring proper routing and response handling


🚧 Future Improvements

* 🔐 User Authentication (Login/Signup)
* 🏷️ Categories & Tags
* 🔍 Search functionality
* ⚛️ React.js frontend upgrade
* 📱 Mobile app version
* 🧠 Spaced repetition algorithm

📸 Screenshots (UI Images)

<img width="1912" height="1024" alt="image" src="https://github.com/user-attachments/assets/03a1fe30-0d1a-479c-8831-49a5d10f70a0" />
<img width="1915" height="1025" alt="image" src="https://github.com/user-attachments/assets/f25c8498-75e1-4e35-a139-c07667b59704" />


🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

📄 License

This project is licensed under the MIT License.


👨‍💻 Author

Manisha Kumari P

* GitHub: [https://github.com/mk3000ps07-max](https://github.com/mk3000ps07-max)
* LinkedIn: [https://www.linkedin.com/in/manisha-kumari-p-4b9172375?utm_source=share_via&utm_content=profile&utm_medium=member_android]

⭐ Acknowledgements

* Inspired by modern learning techniques
* Built as part of academic/project work



