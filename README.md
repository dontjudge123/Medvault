🩺 MedVault – Modern EHR (Electronic Health Records) Platform

MedVault is a full-stack web application designed to simplify the secure storage, retrieval, and visualization of patient health records using the FHIR standard. Built with Node.js, Express, MongoDB, and a sleek HTML/CSS frontend, it enables healthcare providers and patients to manage data with ease.


🔧 Features

- 🔐 Secure storage of patient records using MongoDB
- 📥 Create and fetch FHIR-compliant patient data
- 📊 Data visualization with D3.js (gender-based distribution)
- 💡 Clean, animated frontend UI with modern gradients
- 🚀 Lightweight Express.js REST API backend


 🧱 Tech Stack

- Frontend: HTML, CSS, Vanilla JS, D3.js  
- Backend: Node.js, Express.js  
- Database: MongoDB (via Mongoose)  
- Data Format: FHIR (Fast Healthcare Interoperability Resources)


Folder Structure

```bash
MedVault/
├── backend/              # Backend server (Node.js + Express)
│   ├── app.js            # Entry point for the server
│   ├── config.js         # MongoDB connection URI
│   ├── models/
│   │   └── Patient.js    # Mongoose model for FHIR Patient
│   └── routes/
│       └── patients.js   # API routes for patient data
├── frontend/             # Frontend pages (HTML/CSS/JS)
│   ├── index.html        # Landing page
│   ├── login.html        # Login UI
│   ├── register.html     # Registration UI
│   └── styles/           # Custom stylesheets (optional)
└── README.md             # This file

Base API Url :http://localhost:5000/api/patients
| Method | Endpoint | Description                             |
| ------ | -------- | --------------------------------------- |
| `GET`  | `/`      | Fetch all patients                      |
| `POST` | `/`      | Create a new patient (FHIR JSON format) |

Getting Started
1. Clone the Repository :
git clone https://github.com/dontjudge123/MedVault.git
cd MedVault

2.Set Up Backend
cd backend
npm install

3.Update config.js with your MongoDB URI:

module.exports = {
  mongoURI: 'mongodb://localhost:27017/medvault'  // or use Atlas
};

4.Start the server:
node app.js

Thankyou. Recommendations and suggestions are respected.


