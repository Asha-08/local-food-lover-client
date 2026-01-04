# Flavor Hub

**Live site URL:** (https://warm-meerkat-0c057b.netlify.app/)

This platform connects food enthusiasts who love exploring local
restaurants, street food, or home-cooked meals. Users can share their food
experiences, post reviews with photos, and discover what others are enjoying
nearby. It’s a community-driven platform that celebrates great food, honest opinions,
and local flavor.

## Features
- **Interactive UI:** Modern and visually appealing interface with responsive design for desktop and mobile devices.  
- **Popular Dishes Section:** Highlights best-selling or recommended dishes with images and descriptions. 
-**Add review section:** User can add their own review..
-**My Favorite section:** User can add review card on their favorite list.
-**Featured Review section:**  Latest featured review section depending on reviewrs rating. 

## Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Icons:** React Icons
- **Database:** MongoDB
- **Routing:** React Router
- **Backend:** Node.js, Express.js
- **Authentication:** Firebase Auth

# 🖥️ How to Run the Project Locally (Overview)

Flavor Hub follows a standard MERN-based structure with frontend and backend running separately. To run the project locally, follow the steps below.

## Step 1: Clone the Repository

Download the project from GitHub and open it in a code editor such as VS Code.

## Step 2: Install Dependencies

The project has two main parts:

Frontend (React)

Backend (Node.js & Express)

Install all required dependencies for both parts using a Node package manager.

## Step 3: Environment Configuration

Create environment configuration files for both frontend and backend.

Frontend Environment Variables

Firebase configuration keys

API base URL for backend communication

Backend Environment Variables

Server port

MongoDB database connection string

These variables are required for authentication and database connectivity.

## Step 4: Firebase Authentication Setup

Create a Firebase project

Enable Email & Password Authentication

Use Firebase credentials in the frontend environment file

Firebase is used to handle secure user login and registration.

## Step 5: Database Setup

Connect the backend to MongoDB (local or cloud)

Ensure reviews, users, and favorites collections are properly stored

MongoDB is used to manage reviews, favorite items, and user data.

## Step 6: Start the Application

Start the backend server first

Then start the frontend application

Once both are running, the website will be accessible from the browser.

## Step 7: Core Functionality

Users can explore food reviews shared by the community

Users can add their own reviews with images

Reviews can be added to a personal favorite list

Featured reviews are displayed based on reviewer ratings

## Step 8: Ready to Use

After completing the above steps, Flavor Hub will run locally with full functionality, responsive UI, and user authentication.
