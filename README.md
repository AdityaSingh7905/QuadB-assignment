# 📋 To-Do App

A simple and intuitive To-Do app that allows users to efficiently manage their tasks with features like adding, deleting, marking as completed or important, and categorizing tasks. The app also integrates a weather feature that displays the current temperature at the user's location.

## 🚀 Tech Stack

- **Frontend:** React.js, Next.js  
- **Backend:** Node.js, Express.js, REST APIs, MongoDB (Mongoose)  
- **Authentication:** JWT Tokens  
- **Additional Features:** OpenWeather API, Dark/Light Mode Toggle  

## ✨ Features

### ✅ Task Management
- Add tasks with date & time
- Mark tasks as completed or important
- Delete specific tasks

### ✅ Sidebar Sections
- 📋 **All Tasks** – View all tasks
- 📅 **Today** – View tasks due today
- ⭐ **Important** – View only important tasks
- 🗓️ **Planned** – View future tasks
- ✅ **Completed** – View finished tasks

### ✅ User Authentication
- Simple JWT-based authentication
- Secure login and signup

### ✅ Weather Integration
- Uses **OpenWeather API** to display the current temperature and weather data
- Requires location access for accurate weather data

### ✅ Theming
- **Light & Dark Mode** toggle for a better user experience

---

## 🛠️ Installation & Setup

1. **Clone the Repository**
```bash
git clone https://github.com/AdityaSingh7905/QuadB-assignment
dd todo-app
```

2. **Install Dependencies**

**Backend (Node.js, Express, MongoDB)**
```bash
cd backend
npm install
```

**Frontend (React.js, Next.js)**
```bash
cd frontend
npm install
```

3. **Environment Variables**

Create a `.env` file in the **backend** directory and add:
```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Create a `.env.local` file in the **frontend** directory and add:
```
NEXT_PUBLIC_OPENWEATHERMAP_API_URL=your_openweather_api_key
```

4. **Start the Application**

**Run the Backend:**
```bash
cd backend
npm start
```

**Run the Frontend:**
```bash
cd frontend
npm run dev
```

Now, open your browser and visit [http://localhost:3000](http://localhost:3000) 🚀

---

## 🚀 Deployment

- **Frontend:** Vercel - [Quad-B Assignment Deployment](https://quad-b-assignment-alpha.vercel.app/auth/login)  
- **Database:** MongoDB Atlas

---

## 🔗 API Endpoints

### 🛡️ Authentication API
| Method | Endpoint | Description |
|---------|------------|----------------|
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | Login and get JWT token |

### ✅ To-Do API
| Method | Endpoint | Description |
|---------|------------|----------------|
| **POST** | `/api/todos` | Add a new To-Do task |
| **GET** | `/api/todos` | Fetch all To-Do tasks |
| **DELETE** | `/api/todos/:id` | Delete a specific To-Do task |

---

## 📞 Support
If you face any issues or have suggestions, feel free to open an issue or reach out via GitHub. Happy Coding! 😊

