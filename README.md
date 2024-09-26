# Storage Management System

## Overview

The **Storage Management System** is a web application designed to help users manage product storage with role-based access control. The application allows users with different roles (e.g., Admin, Manager, and User) to add, view, and manage products in storage. The system is built using a modern tech stack including **Node.js**, **MongoDB**, and **React.js**.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Containerization**: Docker & Docker Compose

## Features

- **Role-Based Access Control (RBAC)**: Different roles for users such as Admin, Manager, and User.
  - **Admin**: Can add, update, and delete products.
  - **Manager**: Can add and update products.
  - **User**: Can only view products.
- **Product Management**: Add, view, update, and delete products with details such as name, quantity, and price.
- **Authentication & Authorization**: Users are authenticated using JSON Web Tokens (JWT) and role-based access is enforced.
- **Responsive UI**: Frontend is built with React.js to provide an intuitive and user-friendly experience.

## Project Structure

```bash
project-root/
├── backend/                 # Node.js backend with Express
│   ├── Dockerfile           # Docker configuration for backend
│   ├── package.json         # Node.js dependencies
│   ├── src/                 # Source code
│   │   ├── controllers/     # Controllers for handling API requests
│   │   ├── models/          # Mongoose models for MongoDB
│   │   ├── routes/          # API routes
│   │   └── app.js           # Main Express app configuration
├── frontend/                # React frontend
│   ├── Dockerfile           # Docker configuration for frontend
│   ├── package.json         # React dependencies
│   ├── public/              # Public assets
│   ├── src/                 # React components
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Application pages (Home, Products, etc.)
│   │   └── App.js           # Main React application
├── docker-compose.yml       # Docker Compose configuration
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
