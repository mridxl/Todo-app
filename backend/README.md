# Todo App Backend - API Endpoints

This document outlines the basic API endpoints for the Todo App backend.

## Base URL
The base URL for all API endpoints is:
`http://localhost:8080`

## Endpoints Overview

### 1. Get All Todos
- **Method:** `GET`
- **Endpoint:** `/todos`
- **Description:** Fetches all Todo items.

### 2. Create a New Todo
- **Method:** `POST`
- **Endpoint:** `/new`
- **Body:**
  ```json
  {
    "description": "Your todo description"
  }
  ```
- **Description:** Creates a new Todo item and sends it back with the response.

### 3. Update Todo Completion Status
- **Method:** `PUT`
- **Endpoint:** `/completed`
- **Body:**
  ```json
  {
    "_id": "todo_id",
    "completed": "true/false"
  }
  ```
- **Description:** Toggles the completion status of a Todo item.

### 4. Delete a Todo
- **Method:** `DELETE`
- **Endpoint:** `/delete`
- **Body:**
  ```json
  {
    "_id": "todo_id"
  }
  ```
- **Description:** Deletes a Todo item by ID.
