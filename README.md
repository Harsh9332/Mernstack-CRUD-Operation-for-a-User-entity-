# Demo MERN Project

A full-stack CRUD app using MongoDB, Express, React, and Node.js.

✅ Key Features

📥 Add new users with Name, Email, and DOB
📋 View all users in a table/list format
✏️ Edit existing user information
🗑️ Delete users
📅 Automatically calculate and display Age from DOB

# Folder Structure Overview
| Layer    | Technology              |
| -------- | ----------------------- |
| Frontend | React.js, CSS           |
| Backend  | Node.js, Express.js     |
| Database | MongoDB (with Mongoose) |
| Tools    | Git, GitHub, VS Code    |

# Folder Structure Overview
DEMO PROJECT/
├── backend/          # Node.js + Express + MongoDB
│   ├── models/       # Mongoose schema
│   ├── routes/       # Express routes
│   └── server.js     # Entry point for backend
├── frontend/         # React app
│   ├── public/
│   └── src/
│       ├── components/  # All React components
│       ├── App.js
│       ├── index.js
│       └── api.js       # Axios API calls
├── .gitignore
├── README.md
└── package.json


## Project Structure
- `backend/` — Node.js + Express + MongoDB
- `frontend/` — React.js

## Setup
1. Run `npm install` in both `backend` and `frontend`
2. Start backend: `npm run dev`
3. Start frontend: `npm run start` in `frontend` folder
