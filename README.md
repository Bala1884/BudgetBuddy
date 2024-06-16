# BudgetBuddy

BudgetBuddy is an expense tracker application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It helps users manage their finances by tracking their income and expenses.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Introduction
BudgetBuddy is designed to help users keep track of their spending and income. Users can add, edit, and delete transactions, and view their transaction history. The application lands directly on the home page where users can start managing their finances immediately.

## Features
- Add, edit, and delete income and expense transactions
- View transaction history
- Visual representation of expenses and income
- Responsive design

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- Mongoose (for MongoDB object modeling)
- Redux Toolkit (RTK) (for state management and HTTP requests)

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/Bala1884/BudgetBuddy.git
    cd BudgetBuddy
    ```

2. Install dependencies for both the server and client:
    ```sh
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your MongoDB URI and any other required environment variables:
    ```env
    MONGO_URI=your_mongodb_uri
    MONGODB_USERNAME=your_username
    MONGODB_PASSWORD=your_password
    PORT=5000
    ```

4. Run the development servers:
    ```sh
    # Start the server
    cd server
    npm run dev

    # Start the client
    cd ../client
    npm start
    ```

## Usage
Open your browser and navigate to `http://localhost:3000` to start using BudgetBuddy. You will land on the home page, where you can immediately begin tracking your expenses and income.

