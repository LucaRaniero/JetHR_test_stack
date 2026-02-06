# JetHR Test Stack

A full-stack application featuring a Django backend and a Vue.js frontend, orchestrated via Docker Compose.

## Technlogy Stack

*   **Backend**: Django 5, Django Rest Framework (DRF), PostgreSQL, Boto3.
*   **Frontend**: Vue 3, Vite, Pinia, Axios.
*   **Infrastructure**: Docker Compose.

## Prerequisites

Ensure you have the following installed on your machine:

*   [Docker](https://www.docker.com/)
*   [Docker Compose](https://docs.docker.com/compose/)
*   [Git](https://git-scm.com/)

## Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd JetHR_test_stack
    ```

2.  **Environment Variables**:
    Create a `.env` file in the root directory (if not already present) with the necessary configuration variables for Django and PostgreSQL.

3.  **Start the Application**:
    Build and start the containers using Docker Compose:
    ```bash
    docker-compose up --build
    ```

## Project Structure

*   `backend/`: Contains the Django project source code.
*   `frontend/`: Contains the Vue.js project source code.
*   `docker-compose.yml`: Defines the services, networks, and volumes for the Docker application.

## Access

Once the containers are running, you can access the application at:

*   **Frontend**: [http://localhost:8080](http://localhost:8080)
*   **Backend API**: [http://localhost:8000](http://localhost:8000)
