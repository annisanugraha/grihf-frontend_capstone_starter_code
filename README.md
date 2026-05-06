# Medical Appointment Booking App

## Project Name
**YourHealth - Medical Appointment Booking System**

## Description
A full-stack React application for booking medical appointments online. Users can search for doctors, book appointments, manage their profile, and access instant consultations.

## Tech Stack
- **Frontend**: React (Vite), React Router DOM, Bootstrap 5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens)

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. **Install dependencies**
```bash
npm install
cd server && npm install && cd ..
```

3. **Configure environment**
Edit `server/db.js` and paste your MongoDB password.

4. **Run the app**
```bash
# Terminal 1 - Backend
cd server && node index

# Terminal 2 - Frontend
npm run dev
```

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

## Project Structure
```
medical_app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Sign_Up/
│   │   ├── Login/
│   │   ├── FindDoctorSearch/
│   │   ├── DoctorCard/
│   │   ├── AppointmentForm/
│   │   ├── Notification/
│   │   ├── GiveReviews/
│   │   ├── ProfileCard/
│   │   └── InstantConsultation/
│   ├── App.jsx
│   └── main.jsx
├── server/
│   ├── index.js
│   └── db.js
└── package.json
```

## Author
Your Name
