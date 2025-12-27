# Vehicle E-Commerce Platform

This is a full-stack Vehicle E-Commerce web application built using the MERN stack.
Users can browse vehicles, add them to cart, place orders, and view their order history.
Admins can manage vehicles, upload images, and manage orders.

## Features
- User authentication (Sign up / Sign in)
- Role-based access (User & Admin)
- View vehicles with price & details
- Add to cart with notification
- Place orders
- View order history
- Admin can add vehicles with images
- Responsive design (mobile & desktop)

## Tech Stack
Frontend:
- React
- CSS

Backend:
- Node.js
- Express.js

Database:
- MongoDB (Mongoose)

Authentication:
- JWT

## Environment Variables
PORT=3912
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

## How to Run Project
Backend:
npm install
npm start

Frontend:
npm install
npm run dev

## Roles
Admin:
- Add vehicles
- Manage orders

User:
- Browse vehicles
- Add to cart
- Place orders
- View order history

## Learning Outcomes
- Learned MERN stack integration
- Implemented JWT authentication
- Used MongoDB populate
- Role-based access control
- Real-world e-commerce flow

## Branches

- **main**: Contains the final, stable version of the project. This branch is used for deployment and live version of the app.

- **developer**: Contains ongoing development work, new features, and experiments. Developers can use this branch for testing and adding functionality before merging into main.
