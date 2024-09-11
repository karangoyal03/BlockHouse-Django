
# Next.js Application with Django API Integration

## Objective
This project demonstrates a basic dashboard that displays four types of charts: **Candlestick**, **Line Chart**, **Bar Chart**, and **Pie Chart**. The frontend is built with **Next.js**, and the data is fetched dynamically from a **Django API** backend. For demonstration purposes, the Django API provides hardcoded data for each chart.

---

## Prerequisites
Before starting, ensure that the following are installed:

- **Python** (>= 3.8)
- **Node.js** (>= 14.x) and **npm**
- **Docker Desktop** (Optional but recommended for containerization)
- **Django** (>= 3.x)
- **Next.js** (>= 12.x)

---

## Setup Instructions

### Step 1: Unzip the Project Folder
Unzip the provided project folder to your desired location.

---

### Step 2: Backend Setup (Django API)

1. **Navigate to the Backend Directory**

   Open a terminal and move to the `chartapi` directory, where the Django backend is located:

   ```bash
   cd chartapi
   ```

2. **Install the Required Dependencies**

   Ensure all required Python dependencies are installed by running:

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Django Development Server**

   Start the Django server using the following command:

   ```bash
   python manage.py runserver
   ```

   This will start the Django API on `http://127.0.0.1:8000/`, where your charts will fetch data from.

---

### Step 3: Frontend Setup (Next.js)

1. **Navigate to the Frontend Directory**

   Open another terminal and navigate to the `blockhouse` directory, which contains the Next.js frontend:

   ```bash
   cd blockhouse
   ```

2. **Install the Required Dependencies**

   Install all the necessary Node.js dependencies by running:

   ```bash
   npm install
   ```

3. **Run the Next.js Development Server**

   Start the Next.js frontend development server using:

   ```bash
   npm run dev
   ```

   By default, the frontend will be accessible at `http://localhost:3000/`. It will display the dashboard with the four charts, fetching data from the Django API.

---

### Step 4: Docker Setup (Optional)

If you prefer to run the application in Docker containers (optional but recommended for easier setup), follow these steps:

1. **Ensure Docker Desktop is Running**

   Before proceeding, ensure that **Docker Desktop** is installed and running on your machine.

2. **Navigate to the Project Root Directory**

   Navigate back to the root directory of the project where the `docker-compose.yml` file is located.

3. **Start the Docker Services**

   Run the following command to start the services in Docker:

   ```bash
   docker-compose up -d
   ```

   This will launch both the Django backend and the Next.js frontend in separate containers. The application will be accessible at `http://localhost:3000/` (Next.js frontend) and `http://127.0.0.1:8000/` (Django API backend).

---

## Notes

- Ensure that both the Django and Next.js servers are running simultaneously for the charts to render correctly.
- If you're using Docker, both services will automatically be started and connected to the appropriate ports.
- For development, it's recommended to use separate terminals to run both the Django backend and the Next.js frontend.

### Libraries or Tools Used:

1. **Next.js**: Used for building the frontend application. It provides server-side rendering and static site generation, making it a perfect choice for building a dynamic dashboard with real-time chart rendering.
   
2. **Django**: The backend framework used to serve the data for the charts. It handles API requests and returns hardcoded data for each chart in JSON format.
   
3. **Chart.js** (or similar): A JavaScript library to render the charts (Candlestick, Line Chart, Bar Chart, and Pie Chart) on the frontend. It integrates smoothly with React/Next.js for dynamic chart rendering.
   
4. **Docker** (Optional): Used for containerizing both the frontend and backend applications, providing an isolated and reproducible development environment. Docker Compose simplifies running both services in a single command.
   
5. **Node.js** & **npm**: Used for managing frontend dependencies and running the Next.js application.
   
6. **Python**: Used for running the Django API backend and managing backend dependencies.

---

### Brief Explanation of the Approach and Thought Process:

The main objective was to create a dashboard with four types of charts, fetching data from a backend API. The project is split into two main components: the **frontend** (Next.js) and the **backend** (Django API).

1. **Separation of Concerns**: The frontend and backend are clearly separated, making it easier to develop, debug, and scale each component independently. The frontend (Next.js) handles all the user interaction and chart rendering, while the backend (Django) manages the API that provides data for these charts.

2. **Frontend (Next.js)**: 
   - The choice of Next.js was driven by its ability to handle server-side rendering and SEO optimization. The dynamic chart rendering is done using Chart.js or a similar charting library.
   - The frontend fetches chart data from the Django API using Axios or Fetch and updates the charts dynamically.

3. **Backend (Django API)**: 
   - Django is a stable, well-documented Python framework suitable for creating RESTful APIs. The backend provides hardcoded chart data in JSON format. This data could easily be replaced by real-time data in future iterations.
   
4. **Containerization (Optional)**: Docker is used for containerizing both services, making it easier to run the entire application in isolated environments. This ensures that the setup and environment are consistent across different machines.