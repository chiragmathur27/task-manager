# task-manager

### Introduction
This is a basic task manager application built with React for the frontend, Fastify for the backend, and MongoDB for the database. The application allows users to create, read, update, and delete tasks.

### Technologies Used
Frontend: React
Backend: Fastify
Database: MongoDB
Others: Node.js, npm, axios

### Installation 
1) Clone the repository : 
2) Install backend dependencies: 
    cd fastify-server
    npm install
3) Install frontend dependencies: 
    cd fastify-client
    npm install

### Running the application
 - 1) Backend : 
    cd fastify-server
    npm start 
 - 2) Frontend :
    cd fastify-client
    npm run dev

# API Endpoints : 
Documentation : http://localhost:3000/documentation/

## API Endpoints

The Task Manager application provides the following API endpoints for managing tasks:

### Tasks

#### 1. Get All Tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Description:** Retrieves a list of all tasks.

#### 2. Get Task by ID

- **URL:** `/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieves a single task by its ID.
- **Parameters:**
  - `id` (path parameter): The ID of the task to retrieve.


#### 3. Create a New Task

- **URL:** `/tasks`
- **Method:** `POST`
- **Description:** Creates a new task.
- **Request Body:**
  - `name` (string): The name of the task.
  - `description` (string): A brief description of the task.
    ```json
    {
      "name": "Task Three",
      "description": "Description for Task Three",
    }
    ```

#### 4. Update a Task by ID

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Description:** Updates an existing task by its ID.
- **Parameters:**
  - `id` (path parameter): The ID of the task to update.
- **Request Body:**
  - `name` (string): The name of the task.
  - `description` (string): A brief description of the task.


#### 5. Delete a Task by ID

- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Description:** Deletes a task by its ID.
- **Parameters:**
  - `id` (path parameter): The ID of the task to delete.



