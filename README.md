# Todo App

A simple and efficient Todo application built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Add Todos**: Users can create new tasks with descriptions.
- **Complete Todos**: Users can mark tasks as completed.
- **Delete Todos**: Users can remove tasks from the list.
- **Optimistic UI Updates**: The frontend updates immediately to reflect changes, with server-side confirmation.

## Tech Stack

- **Frontend**: React, Axios, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS

## Demo 

<p align="center">
  <img src="https://i.imgur.com/fyozmUi.gif" alt="Project demo" height="450" />
</p>

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mridxl/Todo-app.git
    cd Todo-app
    ```

2. Install the dependencies for both the frontend and backend:

    ```bash
    # Install server dependencies
    cd backend
    npm install

    # Install client dependencies
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following:

    ```
    MONGO_URI = your-mongodb-uri
    PORT = 8080
    ```

4. Start the development server:

    ```bash
    # Start the backend server
    cd backend
    npm run dev

    # Start the frontend server
    cd ../frontend
    npm run dev
    ```

5. Visit the app at `http://localhost:5173` (default Vite port).

## Usage

- **Add a Todo**: Enter the task description in the input field and press `Enter` or click `Submit`.
- **Complete a Todo**: Click on a todo item to mark it as completed.
- **Delete a Todo**: Click the delete button next to a todo item to remove it.

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to fork the repository, make your changes, and submit a pull request.
