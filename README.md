📝 To-Do App
A simple and intuitive To-Do app that allows users to add, delete, mark as completed and/or important, and categorize tasks for better task management. The app also provides a built-in weather feature that displays the current temperature at the user's location.

🚀 Tech Stack:
Frontend: React.js, Next.js
Backend: Node.js, Express.js, REST APIs, MongoDB (Mongoose)
Authentication: JWT Tokens
Additional Features: OpenWeather API, Dark/Light Mode Toggle

✨ Features

✅ Task Management:
Add tasks with date & time
Mark tasks as completed or important
Delete specific tasks

✅ Sidebar Sections:
📋 All Tasks – View all tasks
📅 Today – View tasks due today
⭐ Important – View only important tasks
🗓️ Planned – View future tasks
✅ Completed – View finished tasks

✅ User Authentication:
Simple JWT-based authentication
Secure login and signup

✅ Weather Integration:
Uses OpenWeather API to display the current temperature and weather data
Requires location access for accurate weather data

✅ Theming:
Light & Dark Mode toggle for a better user experience

🛠️ Installation & Setup
1️⃣ Clone the Repository
git clone [https://github.com/AdityaSingh7905/QuadB-assignment]
cd todo-app

2️⃣ Install Dependencies
Backend (Node.js, Express, MongoDB)
cd backend
npm install

Frontend (React.js, Next.js)
cd frontend
npm install

3️⃣ Environment Variables
Create a .env file in the backend directory and add:
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Create a .env.local file in the frontend and add:
NEXT_PUBLIC_OPENWEATHERMAP_API_URL=your_openweather_api_key


4️⃣ Start the Application
Run the Backend
cd backend
npm start

Run the Frontend
cd frontend
npm run dev
Now, open your browser and visit http://localhost:3000 🚀

### Deployment:
Frontend: Vercel [https://quad-b-assignment-alpha.vercel.app/auth/login]
Database: MongoDB Atlas

## 🔗 API Endpoints  
### 🛡️ Authentication API  
| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login    | Login and get JWT token |

### ✅ To-Do API  
| Method  | Endpoint         | Description               |
|---------|-----------------|---------------------------|
| POST  | /api/todos    | Add a new To-Do task     |
| GET   | /api/todos    | Fetch all To-Do tasks    |
| DELETE| /api/todos/:id | Delete a specific To-Do task |

