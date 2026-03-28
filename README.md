# Mini User Management System

A full-stack web application for managing user accounts with role-based access control.

## Project Overview

This application allows users to sign up, log in, and manage their profiles. Admins can view and manage all users, including activating/deactivating accounts.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, JWT, bcrypt
- **Frontend**: React, React Router, Axios, React Toastify
- **Deployment**: Backend on Render/Railway, Frontend on Vercel/Netlify

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the `backend` folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `PORT`: Port for the backend server (default: 5000)

## API Documentation

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/logout` - Logout user

### User Management

- `GET /api/users` - Get all users (admin only)
- `PUT /api/users/:id/status` - Update user status (admin only)
- `PUT /api/users/profile` - Update own profile
- `PUT /api/users/password` - Change password

## Deployment

### Backend

Deploy to Render or Railway:
1. Connect your GitHub repo
2. Set environment variables
3. Deploy

### Frontend

Deploy to Vercel or Netlify:
1. Build the project: `npm run build`
2. Upload the `dist` folder

## Testing

Run backend tests:
```
cd backend
npm test
```

## Features

- User registration and login
- JWT-based authentication
- Role-based access control (admin/user)
- Password hashing with bcrypt
- User profile management
- Admin dashboard for user management
- Responsive UI

## License

MIT
