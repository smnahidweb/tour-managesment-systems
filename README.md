#  TourNest - Client (Frontend)

<img src="https://i.ibb.co/wh2b00D4/tourlogo.png" width="100%" alt="Tour Logo"/>


This is the client-side of the **TourNest Travel Booking System**, built with React, Tailwind CSS, and Firebase. It enables travelers to explore and book tours and lets tour owners manage listings efficiently.

---

##  Live URL

 [Live Client](https://tour-booking-system-fa219.web.app/)

---

##  Purpose

TourNest’s frontend provides a seamless and professional UI for users to interact with the platform—whether they’re booking tours, writing reviews, or managing their packages.

---

##  Tech Stack
- **React.js** – Core UI library
- **React Router** – Application routing
- **Tailwind CSS** – Utility-first styling
- **@tailwindcss/vite** – Tailwind + Vite integration
- **Framer Motion** – Animations
- **Swiper.js** – Review/testimonial carousel
- **AOS (Animate on Scroll)** – Scroll-based animations
- **Firebase Authentication** – User login/signup
- **Axios** – API requests
- **Lottie-react** – Lottie animations
- **Lucide-react** – Icon set
- **React CountUp** – Number animations
- **React Icons** – Popular icon packs
- **React DOM** – React DOM rendering
- **Recharts** – Chart visualization
- **React Intersection Observer** – Visibility detection (e.g. autoplay triggers)
- **SweetAlert2** – Alert modals

---

---

##  Features

-  Explore all tours with filtering
- CRUD Operation like add packages,delete,update
-  View individual tour details
-  Book a tour (requires login)
-  Leave reviews
-  Authenticated routes for dashboard
-  Light/Dark theme toggle
- Fully responsive UI
- Auto slider for reviews (pause on hover)

---

## NPM Packages Used

| Package           | Purpose                        |
|------------------|--------------------------------|
| react            | Core UI library                |
| react-router-dom | SPA routing                    |
| tailwindcss      | Utility-first styling          |
| framer-motion    | Animation library              |
| swiper           | Sliders/carousels              |
| react-icons      | Icon library                   |
| react-toastify   | Toast notification             |
| firebase         | Authentication                 |

---   
## 📡 API Endpoints  
**Base URL:** `https://tour-management-systems-server.vercel.app/`

---

### 📦 Packages

| Method | Endpoint        | Description                  |
|--------|-----------------|------------------------------|
| GET    | `/packages`     | Get all tour packages         |
| GET    | `/packages/:id` | Get a tour package by ID      |
| POST   | `/packages`     | Add a new tour package        |
| PATCH  | `/packages/:id` | Update a tour package by ID   |
| DELETE | `/packages/:id` | Delete a tour package by ID   |

---

### 👤 Users

| Method | Endpoint        | Description                  |
|--------|-----------------|------------------------------|
| GET    | `/users`        | Get all users                |
| GET    | `/users/:email` | Get user info by email       |
| POST   | `/users`        | Register or save a new user  |
| PATCH  | `/users/:id`    | Update user info or role     |

---

### 📄 Bookings

| Method | Endpoint          | Description                    |
|--------|-------------------|--------------------------------|
| GET    | `/bookings`       | Get all bookings               |
| GET    | `/bookings/:email`| Get bookings of a specific user|
| POST   | `/bookings`       | Create a new booking           |
| DELETE | `/bookings/:id`   | Cancel or delete a booking     |

---

### 🔐 Authentication

| Method | Endpoint | Description              |
|--------|----------|--------------------------|
| POST   | `/jwt`   | Get access token (JWT)   |


##  Installation

```bash
# Navigate to the client folder
cd client

# Install dependencies
npm install

# Run the development server
npm run dev

## 👤 Author

**S M Nahid Hasan**  
[Student of Programming Hero]()
[BinaryWave Academy (YouTube)](https://youtu.be/EJYIh55cGwg?si=sXvEi-ZLNzR0neZ-)  
[GitHub](https://github.com/smnahidweb)

---


 **Thank you for exploring the TreePlant!**
