# RoboCamp - AI & Robotics Summer Workshop Landing Page

A high-performance, accessible, secure, and responsive full-stack landing page for the **AI & Robotics Summer Workshop** (designed for children ages 8–14). Built with a decoupled client-server architecture using React (Vite), Node.js, Express, and MongoDB.

---

## 🌟 Key Features

* **Decoupled Architecture**: Clean division of concerns with React (Vite) frontend and Node/Express backend.
* **Modern Aesthetic & Animations**: Clean design featuring dark mode, glassmorphism, responsive grid components, custom floating animations, and dynamic micro-interactions.
* **Celebration Effects**: Built-in visual canvas confetti fireworks triggered upon successful spot reservation.
* **Advanced Form Validation**: Responsive validation powered by React Hook Form, matching name patterns, strict email logic, and 10-digit mobile number rules.
* **API Validation & Error Handling**: Staged validators in the Express router capture syntax errors or duplicate registrations (e.g. duplicate email index), returning appropriate HTTP status alerts.
* **Robust Security Middlwares**: Integrates Helmet (header security), CORS (controlled origin access), and Express Rate Limit (spam mitigation).
* **High Accessibility (A11y)**:
  * WAI-ARIA compliant accordion patterns for FAQ answers.
  * Inputs linked to label descriptors with helper labels and dynamic `aria-invalid` states.
  * Visual focus highlights (`focus-visible:ring-2`) enabling standard keyboard navigation.

---


## 🛠️ Technology Stack

| Layer | Technologies | Key Packages |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS 3 | `lucide-react`, `react-hook-form`, `canvas-confetti` |
| **Backend** | Node.js, Express | `cors`, `helmet`, `express-rate-limit`, `morgan`, `dotenv` |
| **Database** | MongoDB | `mongoose` (ODM) |

---

## 📁 Project Structure

```text
ai-robotics-workshop/
├── client/                     # Frontend Project (Vite + React)
│   ├── public/                 # Public assets (Vite icons, etc.)
│   ├── src/
│   │   ├── assets/             # Visual image resources (Hero illustrations)
│   │   ├── components/         # Reusable React components
│   │   │   ├── FAQ.jsx         # Accessible accordion FAQ
│   │   │   ├── Footer.jsx      # Bottom footer navigation & info
│   │   │   ├── Hero.jsx        # Landing page Hero section
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Navbar.jsx      # Sticky navbar with Theme toggle
│   │   │   ├── RegistrationForm.jsx # spot reservation & validation
│   │   │   ├── SuccessModal.jsx # Celebration popup
│   │   │   ├── Toast.jsx       # Floating notifications
│   │   │   └── WorkshopDetails.jsx
│   │   ├── context/            # React global context providers
│   │   │   └── ThemeContext.jsx # Light/Dark mode state management
│   │   ├── data/               # Static text contents (FAQ, outcomes)
│   │   ├── services/           # Axios API Client configurations
│   │   │   └── api.js
│   │   ├── utils/              # Utility helpers
│   │   │   └── scroll.js       # DRY smooth scroll helper
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── server/                     # Backend API (Node + Express)
│   ├── controllers/            # Controller business logic
│   │   └── enquiryController.js
│   ├── models/                 # Database Mongoose Schemas
│   │   └── Enquiry.js
│   ├── routes/                 # Endpoint routing rules
│   │   └── enquiry.js
│   ├── index.js                # Server entry point
│   └── package.json
│
├── .gitignore                  # Git tracking exclusions
└── README.md                   # Main documentation
```

---

## ⚙️ Environment Configuration

### Backend Config (`server/.env`)
Create a file named `.env` inside the `server/` directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ai-robotics-workshop
NODE_ENV=development
```

### Frontend Config (`client/.env` - Optional)
To point directly to a specific backend server, create a `.env` in the `client/` directory:
```env
VITE_API_URL=http://localhost:5000
```

---

## 🚀 Installation & Local Run

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **MongoDB** service running locally (default: `mongodb://127.0.0.1:27017`)

### Setup Instructions

1. **Clone project repository**:
   ```bash
   git clone <repository-url>
   cd ai-robotics-workshop
   ```

2. **Run Backend Server**:
   ```bash
   cd server
   npm install
   npm run dev
   ```
   *Server will start listening on [http://localhost:5000](http://localhost:5000)*

3. **Run Frontend Application**:
   Open a separate shell terminal inside the workspace:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   *Frontend dev server will launch at [http://localhost:3000](http://localhost:3000)*

---

## 🌐 API Documentation

### 1. Health Status check
* **URL**: `/api/health`
* **Method**: `GET`
* **Access**: Public
* **Response (200 OK)**:
  ```json
  {
    "status": "OK",
    "message": "Server is running smoothly"
  }
  ```

### 2. Submit Workshop Enquiry / spot reservation
* **URL**: `/api/enquiry`
* **Method**: `POST`
* **Access**: Public
* **Payload Format (JSON)**:
  ```json
  {
    "name": "Alex Mercer",
    "email": "alex.mercer@gmail.com",
    "phone": "9876543210"
  }
  ```
* **Payload Rules**:
  * `name`: Required, 2-50 characters, only letters, spaces, hyphens, and apostrophes.
  * `email`: Required, valid email string format. Unique constraint.
  * `phone`: Required, exactly 10 digits.

* **Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Registration Successful"
  }
  ```

* **Response (400 Bad Request - Validation Error)**:
  ```json
  {
    "success": false,
    "message": "Validation Failed",
    "errors": [
      {
        "field": "phone",
        "msg": "Phone number must be exactly 10 digits"
      }
    ]
  }
  ```

* **Response (400 Bad Request - Duplicate Email Registration)**:
  ```json
  {
    "success": false,
    "message": "This email is already registered."
  }
  ```

* **Response (500 Internal Error)**:
  ```json
  {
    "success": false,
    "message": "Server Error. Please try again later."
  }
  ```

---

## 🌐 Production Deployment Guide

### Express Server (Render)
1. In Render Dashboard, select **New > Web Service**.
2. Connect your GitHub repository.
3. Configure the following parameters:
   * **Root Directory**: `server`
   * **Build Command**: `npm install`
   * **Start Command**: `npm start`
4. In the **Environment** settings tab, add variables:
   * `NODE_ENV` = `production`
   * `PORT` = `5000`
   * `MONGO_URI` = *Your MongoDB Atlas connection URI string*
   * `CLIENT_URL` = *Your deployed Vercel frontend URL*

### React App (Vercel)
1. In Vercel, select **Add New > Project**.
2. Connect the repository.
3. Set the configuration parameters:
   * **Framework Preset**: `Vite`
   * **Root Directory**: `client`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Add the Environment Variable:
   * `VITE_API_URL` = *Your deployed Render backend API URL without trailing slash*