🏙️ Smart City — Find Your Perfect City

Smart City is a full-stack web app that recommends the best Indian city for you based on your career goals, budget, weather preference, and (for female users) safety priorities. It also lets you compare any two cities head-to-head across multiple factors.

## ✨ Features

- **🚀 Personalized Recommendations** — Get a ranked match based on:
  - 🎯 Primary goal (IT / Finance / Higher Education)
  - 👤 User profile (Male / Female)
  - 💰 Budget (Low / Medium / High)
  - 🌤️ Weather preference (Pleasant / Moderate / Hot)
- **👩 Women Safety Index** — Automatically factored in for female users, calculated from crime-rate data and normalized on a 0–10 scale.
- **📊 Score Breakdown** — See exactly how each factor (goal, affordability, transport, weather, safety) contributed to the final score.
- **💡 "Why This City?"** — Human-readable explanations for the recommendation.
- **🌆 Alternatives** — View the next best-ranked cities alongside your top match.
- **⚖️ City Comparison** — Compare any two cities side-by-side across technology, finance, education, affordability, weather, transportation, and women safety, with an overall winner.

## 📸 Screenshots

**Home**
![Home page](./screenshots/home.png)

**Find Your City (Recommendation)**
![Recommendation page](./screenshots/recommendation.png)

**Compare Cities**
![Compare Cities page](./screenshots/comparison-empty.png)

**Comparison Result**
![Comparison result — city cards](./screenshots/comparison-result-1.png)
![Comparison result — table and overall winner](./screenshots/comparison-result-2.png)

## 🧱 Tech Stack

| Layer     | Technology                                    |
|-----------|------------------------------------------------|
| Frontend  | React 19, React Router DOM 7, Vite 8           |
| Backend   | Node.js, Express 5                             |
| Middleware| CORS, express.json, dotenv                     |
| Database  | None currently — `mysql2` is installed as a dependency but not yet used; all data is an in-memory dataset |
| Dev Tools | nodemon (backend), ESLint (frontend)           |

## 📁 Project Structure

```
smart-city/
├── backend/
│   ├── index.js                # Express server, city dataset, scoring logic, API routes
│   └── package.json
└── frontend/
    ├── src/
    │   ├── assets/
    │   │   └── cities/         # City images (Pune, Bengaluru, Gurugram, Noida, Delhi, etc.)
    │   ├── pages/
    │   │   ├── Home.jsx         # Landing page
    │   │   ├── Recommendation.jsx # City recommendation flow
    │   │   └── Comparison.jsx     # City comparison flow
    │   └── App.jsx              # Routes + top nav (Home / Recommendation / Compare Cities)
    └── package.json
```

> Adjust the paths above to match your actual repo layout if it differs.

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.18+ (recommended for Express 5 / Vite 8)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/smart-city.git
cd smart-city
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Run the server:

```bash
node index.js
# or, for auto-restart on file changes:
npx nodemon index.js
```

The backend will run at **http://localhost:5000**.

### 3. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at the port Vite prints in your terminal (typically `http://localhost:5173`).

Other available frontend scripts:
```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

> ⚠️ Make sure the backend is running on port `5000` before using the frontend, since the API calls are hardcoded to `http://localhost:5000`.

## 🔌 API Reference

### `POST /recommend`

Returns the best-matched city along with a full ranking and score breakdown.

**Request body**
```json
{
  "goal": "IT",
  "gender": "Female",
  "budget": "Medium",
  "weather": "Pleasant"
}
```

**Response** (truncated)
```json
{
  "city": "Bengaluru",
  "score": 87,
  "message": "Bengaluru is the best match based on your preferences.",
  "whyThisCity": ["..."],
  "scoreBreakdown": { "goal": 31.5, "affordability": 10, "transport": 8, "weather": 10, "womenSafety": 6.75 },
  "details": { "tech": 10, "finance": 7, "education": 9, "cost": 5, "weather": 10, "transport": 8, "womenSafety": 7.3, "crimeRateWomen": 120 },
  "rankings": [ /* all 10 cities, sorted by score */ ]
}
```

### `POST /compare`

Compares two cities factor-by-factor and returns an overall winner.

**Request body**
```json
{
  "city1": "Mumbai",
  "city2": "Chennai"
}
```

**Response** (truncated)
```json
{
  "city1": { "name": "Mumbai", "tech": 8, "finance": 10, "...": "..." },
  "city2": { "name": "Chennai", "tech": 8, "finance": 7, "...": "..." },
  "comparison": { "tech": { "city1": 8, "city2": 8, "winner": "Tie" }, "...": "..." },
  "overall": { "city1Score": 57.7, "city2Score": 64.3, "winner": "Chennai" }
}
```

## 🧮 How Scoring Works

Each city has base attributes (tech, finance, education, cost, weather, transport) and a computed **Women Safety Index**, normalized from crime-rate data across all cities.

**For male users:**
| Factor         | Weight |
|-----------------|-------:|
| Goal            | 45%    |
| Affordability   | 25%    |
| Transportation  | 15%    |
| Weather         | 15%    |

**For female users:**
| Factor         | Weight |
|-----------------|-------:|
| Goal            | 35%    |
| Affordability   | 20%    |
| Women Safety    | 25%    |
| Transportation  | 10%    |
| Weather         | 10%    |

The city with the highest weighted score is returned as the top recommendation, with the next two highest returned as alternatives.

## 🗺️ Cities Covered

Bengaluru, Hyderabad, Chennai, Pune, Mumbai, Delhi, Noida, Gurugram, Ahmedabad, Kolkata

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

Built with ❤️ to help people make smarter decisions about where to live, work, and build their future.



  
