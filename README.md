# Dockerized Vite React App

This repository contains a **Vite React App** that has been containerized using **Docker**. You can pull the Docker image and run it on your machine easily.

## 📂 Project Details
- **GitHub Repository**: [Mohitmatte/Dockerized-Node-Project](https://github.com/Mohitmatte/Dockerized-Node-Project)
- **Docker Hub Username**: `mohitmatte`
- **Docker Image Name**: `mohitmatte/my-vite-app`
- **Tech Stack**: React, Vite, Node.js, Docker

## 🚀 Getting Started

### 1️⃣ Pull the Docker Image
```sh
docker pull mohitmatte/my-vite-app
```

### 2️⃣ Run the Docker Container
```sh
docker run -p 3000:3000 mohitmatte/my-vite-app
```
Now, open **http://localhost:3000** in your browser to see the app running.

## 🛠 Development Mode (Without Docker)
If you want to develop locally without Docker:
```sh
git clone https://github.com/Mohitmatte/Dockerized-Node-Project.git
cd Dockerized-Node-Project
npm install
npm run dev
```

## 🏗 Folder Structure
```
Dockerized-Node-Project/
│── Dockerfile
│── package.json
│── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│── public/
│── README.md
```

## 📝 License
This project is **open-source** and available under the **MIT License**.

---
✅ **Maintainer**: [Mohitmatte](https://github.com/Mohitmatte)
