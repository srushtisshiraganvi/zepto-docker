# 🛒 Zepto – Online Grocery Store Clone  

Zepto is a **simple web-based grocery store clone** built using **HTML, CSS, and JavaScript**, packaged as a **WAR file** and deployed on **Apache Tomcat (Dockerized)**.  

---

## 🚀 Features  
 Responsive layout with categories (Fruits, Vegetables, Dairy, Snacks, etc.).  
 Interactive “Add” buttons that toggle green when clicked.
 Login popup for mobile number or email. 
 Footer with quick navigation links.  
 Deployed via **Tomcat 9** inside a Docker container.  

---

## 🐳 Docker Setup  

### 1️⃣ Build the Docker image
```bash
docker build -t zepto_image .
```

### 2️⃣ Run the container
```bash
docker run -d -p 8080:8080 --name zepto_container zepto_image
```

### 3️⃣ Access the app
Open your browser and go to:  
👉 [http://localhost:8080](http://localhost:8080)

---

## 🧾 Docker Compose (Alternative)

You can also use `docker-compose` for easier setup:  

```bash
docker-compose up -d
```

To stop it:
```bash
docker-compose down
```

---

## 💻 Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript  
- **Backend Server:** Apache Tomcat 9 (JDK 17)  
- **Containerization:** Docker & Docker Compose  

---

## 📸 Screenshots  

```
### 🏠 Home Page
![Home Page](./https://github.com/srushtisshiraganvi/zepto-docker/blob/main/Screenshot%202025-11-01%20201538.png)
```

---

## 📦 Deployment Summary

| Step | Description |
|------|--------------|
| **1** | Build WAR file using your IDE or Maven |
| **2** | Copy WAR file into Docker image |
| **3** | Run container exposing port 8080 |
| **4** | Access app from localhost or server IP |

