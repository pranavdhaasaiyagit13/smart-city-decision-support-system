Smart City Decision Support System

A full-stack web application that helps users choose a city based on career goals, budget, lifestyle, weather preferences, transportation needs, and safety priorities.

✨ Features

🎯 Personalized City Recommendation

Primary goal: IT, Finance, or Higher Education

User profile: Male or Female

Budget: Low, Medium, or High

Weather preference: Pleasant, Moderate, or Hot

Returns the best-matching city, score, explanation, score breakdown, city profile, and alternatives

⚖️ City Comparison

Compare two cities across Technology, Finance, Education, Affordability, Weather, Public Transportation, and Women Safety

Shows factor-wise scores and the overall winner

🏙️ City Profiles

Career, education, affordability, weather, transportation, and safety information

📊 Weighted Scoring

Recommendations are generated using preference-based weighted scoring implemented in the backend

🖥️ Application

Home

Introduces the platform and provides navigation to city recommendation and city comparison.



Recommendation

Users enter their preferences and receive a personalized city recommendation.



City Comparison

Users select two cities and compare them across the available factors.



Comparison Results

Displays factor-by-factor results and the overall better-performing city.



🧠 How It Works

React Frontend
      │
      │ HTTP requests
      ▼
Express / Node.js Backend
      │
      ├── /recommend → Weighted city scoring → Recommendation
      │
      └── /compare   → Factor comparison → Overall winner

Recommendation Flow

User selects preferences.

React sends the preferences to the backend.

The backend evaluates the available cities.

Preference-specific weights are applied.

Cities are scored and ranked.

The best match and alternatives are returned.

React displays the result and score breakdown.

Comparison Flow

User selects two cities.

React sends both city names to the backend.

The backend compares their factor scores.

The overall scores are calculated.

React displays the comparison and winner.

🛠️ Tech Stack

Frontend

React 19

Vite 8

React Router

JavaScript

Backend

Node.js

Express.js

CORS

dotenv

MySQL2 dependency

Nodemon for development

The current recommendation logic uses the city dataset and scoring logic implemented in the backend. MySQL2 is included as a dependency; this README does not assume an active MySQL database connection unless one is configured.

📂 Project Structure

smart-city/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── ...
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── docs/
│   └── screenshots/
│       ├── home.png
│       ├── recommendation.png
│       ├── comparison.png
│       └── comparison-results.png
│
└── README.md

Adjust the structure if your actual filenames/folders differ.

🚀 Getting Started

Prerequisites

Node.js

npm

Check installation:

node -v
npm -v

1. Clone the repository

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_REPOSITORY_NAME>

2. Start the Backend

cd backend
npm install
node index.js

Backend:

http://localhost:5000

For development with automatic restarts:

npx nodemon index.js

3. Start the Frontend

Open a second terminal:

cd frontend
npm install
npm run dev

Vite will display the local development URL, normally:

http://localhost:5173

Keep both frontend and backend running while using recommendation or comparison.

🔌 API Endpoints

GET /

Basic backend test route.

GET http://localhost:5000/

POST /recommend

Generates a personalized city recommendation.

Example request:

{
  "goal": "IT",
  "gender": "Female",
  "budget": "Medium",
  "weather": "Pleasant"
}

POST /compare

Compares two selected cities.

Example request:

{
  "city1": "Ahmedabad",
  "city2": "Kolkata"
}

📊 Recommendation Logic

The backend uses a weighted scoring model. Factors include:

Technology

Finance

Education

Affordability

Weather

Public Transportation

Women Safety

Weights vary according to the selected preferences and user profile. Cities are ranked using the resulting scores, with the highest-scoring city returned as the primary recommendation.

🛡️ Women Safety

Women Safety is represented as a separate factor in the city dataset. The backend derives a safety score from crime-rate-related data and uses it in recommendation and comparison calculations.

🔮 Future Improvements

Live city data integration

MySQL/database integration

User authentication

More cities and richer datasets

Interactive charts and visualizations

Real-time weather and transportation data

Saved recommendations

Cloud deployment

Improved mobile responsiveness

More advanced recommendation algorithms

📌 Project Highlights

Full-stack JavaScript application

React interactive frontend

Node.js + Express REST API

Preference-based recommendation system

Weighted scoring algorithm

City-to-city comparison

Multiple decision factors

Separate frontend and backend architecture

👨‍💻 Author

Pranav Dhaasaiya
