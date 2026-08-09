const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// ======================================================
// CITY DATA
// ======================================================

const cities = [

  {
    name: "Bengaluru",
    tech: 10,
    finance: 7,
    education: 9,
    cost: 5,
    weather: 10,
    transport: 8,
    crimeRateWomen: 120.0
  },

  {
    name: "Hyderabad",
    tech: 9,
    finance: 7,
    education: 8,
    cost: 8,
    weather: 6,
    transport: 8,
    crimeRateWomen: 101.5
  },

  {
    name: "Chennai",
    tech: 8,
    finance: 7,
    education: 9,
    cost: 8,
    weather: 5,
    transport: 10,
    crimeRateWomen: 17.3
  },

  {
    name: "Pune",
    tech: 9,
    finance: 7,
    education: 9,
    cost: 7,
    weather: 8,
    transport: 8,
    crimeRateWomen: 51.5
  },

  {
    name: "Mumbai",
    tech: 8,
    finance: 10,
    education: 9,
    cost: 3,
    weather: 6,
    transport: 10,
    crimeRateWomen: 70.7
  },

  {
    name: "Delhi",
    tech: 7,
    finance: 9,
    education: 10,
    cost: 6,
    weather: 6,
    transport: 10,
    crimeRateWomen: 176.4
  },

  {
    name: "Noida",
    tech: 9,
    finance: 7,
    education: 8,
    cost: 7,
    weather: 6,
    transport: 8,
    crimeRateWomen: 176.4
  },

  {
    name: "Gurugram",
    tech: 9,
    finance: 9,
    education: 8,
    cost: 6,
    weather: 6,
    transport: 8,
    crimeRateWomen: 176.4
  },

  {
    name: "Ahmedabad",
    tech: 7,
    finance: 8,
    education: 8,
    cost: 8,
    weather: 5,
    transport: 7,
    crimeRateWomen: 47.7
  },

  {
    name: "Kolkata",
    tech: 6,
    finance: 8,
    education: 9,
    cost: 8,
    weather: 5,
    transport: 10,
    crimeRateWomen: 25.7
  }

];


// ======================================================
// WOMEN SAFETY INDEX
// ======================================================

const womenCrimeRates = cities.map(
  (city) => city.crimeRateWomen
);

const minCrimeRate = Math.min(...womenCrimeRates);
const maxCrimeRate = Math.max(...womenCrimeRates);

cities.forEach((city) => {

  city.womenSafety = Number(
    (
      10 -
      (
        (city.crimeRateWomen - minCrimeRate) /
        (maxCrimeRate - minCrimeRate)
      ) * 9
    ).toFixed(1)
  );

});


// ======================================================
// TEST ROUTE
// ======================================================

app.get("/", (req, res) => {

  res.send("Smart City Backend Running...");

});


// ======================================================
// RECOMMENDATION API
// ======================================================

app.post("/recommend", (req, res) => {

  const {
    goal,
    gender,
    budget,
    weather
  } = req.body;


  // ----------------------------------------------------
  // VALIDATION
  // ----------------------------------------------------

  if (!goal || !gender || !budget || !weather) {

    return res.status(400).json({

      message: "Please select all preferences."

    });

  }


  // ----------------------------------------------------
  // CALCULATE SCORE FOR EACH CITY
  // ----------------------------------------------------

  const results = cities.map((city) => {

    let goalScore = 0;
    let affordabilityScore = 0;
    let weatherScore = 0;
    let womenSafetyScore = 0;

    // Transportation is an automatic city criterion
    const transportScore = city.transport;


    // ==================================================
    // GOAL SCORE
    // ==================================================

    if (goal === "IT") {

      goalScore = city.tech;

    }

    else if (goal === "Finance") {

      goalScore = city.finance;

    }

    else if (goal === "Higher Education") {

      goalScore = city.education;

    }


    // ==================================================
    // AFFORDABILITY SCORE
    // ==================================================

    if (budget === "Low") {

      affordabilityScore = city.cost;

    }

    else if (budget === "Medium") {

      affordabilityScore = city.cost;

    }

    else if (budget === "High") {

      affordabilityScore = 5;

    }


    // ==================================================
    // WEATHER SCORE
    // ==================================================

    if (weather === "Pleasant") {

      weatherScore = city.weather;

    }

    else if (weather === "Moderate") {

      weatherScore =
        10 - Math.abs(city.weather - 7);

    }

    else if (weather === "Hot") {

      weatherScore =
        10 - city.weather + 1;

    }


    // ==================================================
    // FEMALE → WOMEN SAFETY AUTOMATICALLY INCLUDED
    // ==================================================

    if (gender === "Female") {

      womenSafetyScore = city.womenSafety;

    }


    // ==================================================
    // FINAL WEIGHTED SCORE
    // ==================================================

    let finalScore;


    if (gender === "Female") {

      // Female:
      // Goal           = 35%
      // Affordability  = 20%
      // Women Safety   = 25%
      // Transportation = 10%
      // Weather        = 10%

      finalScore =
        (goalScore * 0.35 * 10) +
        (affordabilityScore * 0.20 * 10) +
        (womenSafetyScore * 0.25 * 10) +
        (transportScore * 0.10 * 10) +
        (weatherScore * 0.10 * 10);

    }

    else {

      // Male:
      // Goal           = 45%
      // Affordability  = 25%
      // Transportation = 15%
      // Weather        = 15%

      finalScore =
        (goalScore * 0.45 * 10) +
        (affordabilityScore * 0.25 * 10) +
        (transportScore * 0.15 * 10) +
        (weatherScore * 0.15 * 10);

    }


    // ==================================================
    // RETURN CITY RESULT
    // ==================================================

    return {

      city: city.name,

      score: Math.round(finalScore),


      // ------------------------------------------------
      // SCORE BREAKDOWN
      // ------------------------------------------------

      scoreBreakdown: {

        goal: Number(
          (
            goalScore *
            (gender === "Female" ? 3.5 : 4.5)
          ).toFixed(1)
        ),

        affordability: Number(
          (
            affordabilityScore *
            (gender === "Female" ? 2 : 2.5)
          ).toFixed(1)
        ),

        transport: Number(
          (
            transportScore *
            (gender === "Female" ? 1 : 1.5)
          ).toFixed(1)
        ),

        weather: Number(
          (
            weatherScore *
            (gender === "Female" ? 1 : 1.5)
          ).toFixed(1)
        ),

        womenSafety:
          gender === "Female"
            ? Number(
                (womenSafetyScore * 2.5).toFixed(1)
              )
            : 0

      },


      // ------------------------------------------------
      // CITY DETAILS
      // ------------------------------------------------

      details: {

        tech: city.tech,

        finance: city.finance,

        education: city.education,

        cost: city.cost,

        weather: city.weather,

        transport: city.transport,

        womenSafety:
          gender === "Female"
            ? city.womenSafety
            : null,

        crimeRateWomen:
          gender === "Female"
            ? city.crimeRateWomen
            : null

      }

    };

  });


  // ======================================================
  // SORT RESULTS
  // ======================================================

  results.sort(
    (a, b) => b.score - a.score
  );


  // ======================================================
  // WINNER
  // ======================================================

  const winner = results[0];


  // ======================================================
  // WHY THIS CITY?
  // ======================================================

  const whyThisCity = [];


  // ------------------------------------------------------
  // GOAL EXPLANATION
  // ------------------------------------------------------

  if (goal === "IT" && winner.details.tech >= 9) {

    whyThisCity.push(
      "Excellent technology opportunities for an IT-focused career."
    );

  }

  else if (
    goal === "Finance" &&
    winner.details.finance >= 9
  ) {

    whyThisCity.push(
      "Strong finance opportunities for a finance-focused career."
    );

  }

  else if (
    goal === "Higher Education" &&
    winner.details.education >= 9
  ) {

    whyThisCity.push(
      "Strong education ecosystem for higher education opportunities."
    );

  }


  // ------------------------------------------------------
  // AFFORDABILITY EXPLANATION
  // ------------------------------------------------------

  if (
    budget === "Low" &&
    winner.details.cost >= 8
  ) {

    whyThisCity.push(
      "Good affordability for users with a lower budget."
    );

  }

  else if (
    budget === "Medium" &&
    winner.details.cost >= 7
  ) {

    whyThisCity.push(
      "Offers a reasonable balance between opportunities and affordability."
    );

  }

  else if (budget === "High") {

    whyThisCity.push(
      "The city's affordability has a lower impact because a higher budget was selected."
    );

  }


  // ------------------------------------------------------
  // TRANSPORTATION EXPLANATION
  // ------------------------------------------------------

  if (winner.details.transport >= 9) {

    whyThisCity.push(
      "Strong public transportation connectivity, including major urban transit options."
    );

  }

  else if (winner.details.transport >= 8) {

    whyThisCity.push(
      "Good public transportation connectivity for daily commuting."
    );

  }


  // ------------------------------------------------------
  // WEATHER EXPLANATION
  // ------------------------------------------------------

  if (
    weather === "Pleasant" &&
    winner.details.weather >= 8
  ) {

    whyThisCity.push(
      "Weather conditions closely match your preference for pleasant weather."
    );

  }

  else if (
    weather === "Moderate" &&
    winner.details.weather >= 6
  ) {

    whyThisCity.push(
      "The city's weather is reasonably aligned with your preference."
    );

  }

  else if (
    weather === "Hot" &&
    winner.details.weather <= 5
  ) {

    whyThisCity.push(
      "The city has relatively warmer weather compared with the other evaluated cities."
    );

  }


  // ------------------------------------------------------
  // WOMEN SAFETY EXPLANATION
  // ------------------------------------------------------

  if (gender === "Female") {

    if (winner.details.womenSafety >= 8) {

      whyThisCity.push(
        "The Women Safety Index contributed positively to the recommendation."
      );

    }

    else if (winner.details.womenSafety >= 6) {

      whyThisCity.push(
        "The Women Safety Index was included as an important part of the recommendation."
      );

    }

  }


  // ------------------------------------------------------
  // FALLBACK
  // ------------------------------------------------------

  if (whyThisCity.length === 0) {

    whyThisCity.push(
      "This city achieved the highest overall weighted score based on your preferences."
    );

  }


  // ======================================================
  // SEND RESPONSE
  // ======================================================

  res.json({

    city: winner.city,

    score: winner.score,

    message:
      `${winner.city} is the best match based on your preferences.`,

    whyThisCity: whyThisCity,

    details: winner.details,

    scoreBreakdown: winner.scoreBreakdown,

    rankings: results

  });

});


// ======================================================
// CITY COMPARISON API
// ======================================================

app.post("/compare", (req, res) => {

  const {
    city1,
    city2
  } = req.body;


  // ----------------------------------------------------
  // VALIDATION
  // ----------------------------------------------------

  if (!city1 || !city2) {

    return res.status(400).json({

      message: "Please select two cities."

    });

  }


  if (city1 === city2) {

    return res.status(400).json({

      message:
        "Please select two different cities."

    });

  }


  // ----------------------------------------------------
  // FIND CITIES
  // ----------------------------------------------------

  const firstCity = cities.find(
    (city) => city.name === city1
  );

  const secondCity = cities.find(
    (city) => city.name === city2
  );


  if (!firstCity || !secondCity) {

    return res.status(404).json({

      message: "City not found."

    });

  }


  // ======================================================
  // CATEGORY COMPARISON
  // ======================================================

  const comparison = {

    tech: {

      city1: firstCity.tech,

      city2: secondCity.tech,

      winner:
        firstCity.tech > secondCity.tech
          ? firstCity.name
          : secondCity.tech > firstCity.tech
          ? secondCity.name
          : "Tie"

    },


    finance: {

      city1: firstCity.finance,

      city2: secondCity.finance,

      winner:
        firstCity.finance > secondCity.finance
          ? firstCity.name
          : secondCity.finance > firstCity.finance
          ? secondCity.name
          : "Tie"

    },


    education: {

      city1: firstCity.education,

      city2: secondCity.education,

      winner:
        firstCity.education > secondCity.education
          ? firstCity.name
          : secondCity.education > firstCity.education
          ? secondCity.name
          : "Tie"

    },


    affordability: {

      city1: firstCity.cost,

      city2: secondCity.cost,

      winner:
        firstCity.cost > secondCity.cost
          ? firstCity.name
          : secondCity.cost > firstCity.cost
          ? secondCity.name
          : "Tie"

    },


    weather: {

      city1: firstCity.weather,

      city2: secondCity.weather,

      winner:
        firstCity.weather > secondCity.weather
          ? firstCity.name
          : secondCity.weather > firstCity.weather
          ? secondCity.name
          : "Tie"

    },


    transport: {

      city1: firstCity.transport,

      city2: secondCity.transport,

      winner:
        firstCity.transport > secondCity.transport
          ? firstCity.name
          : secondCity.transport > firstCity.transport
          ? secondCity.name
          : "Tie"

    },


    womenSafety: {

      city1: firstCity.womenSafety,

      city2: secondCity.womenSafety,

      winner:
        firstCity.womenSafety > secondCity.womenSafety
          ? firstCity.name
          : secondCity.womenSafety > firstCity.womenSafety
          ? secondCity.name
          : "Tie"

    }

  };


  // ======================================================
  // OVERALL COMPARISON
  // ======================================================

  const firstTotal =
    firstCity.tech +
    firstCity.finance +
    firstCity.education +
    firstCity.cost +
    firstCity.weather +
    firstCity.transport +
    firstCity.womenSafety;


  const secondTotal =
    secondCity.tech +
    secondCity.finance +
    secondCity.education +
    secondCity.cost +
    secondCity.weather +
    secondCity.transport +
    secondCity.womenSafety;


  let overallWinner;


  if (firstTotal > secondTotal) {

    overallWinner = firstCity.name;

  }

  else if (secondTotal > firstTotal) {

    overallWinner = secondCity.name;

  }

  else {

    overallWinner = "Tie";

  }


  // ======================================================
  // SEND RESPONSE
  // ======================================================

  res.json({

    city1: {

      name: firstCity.name,

      tech: firstCity.tech,

      finance: firstCity.finance,

      education: firstCity.education,

      cost: firstCity.cost,

      weather: firstCity.weather,

      transport: firstCity.transport,

      womenSafety: firstCity.womenSafety

    },


    city2: {

      name: secondCity.name,

      tech: secondCity.tech,

      finance: secondCity.finance,

      education: secondCity.education,

      cost: secondCity.cost,

      weather: secondCity.weather,

      transport: secondCity.transport,

      womenSafety: secondCity.womenSafety

    },


    comparison: comparison,


    overall: {

      city1Score: firstTotal,

      city2Score: secondTotal,

      winner: overallWinner

    }

  });

});


// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );

});