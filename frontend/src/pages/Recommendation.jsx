import { useState } from "react";

import Pune from "../assets/cities/Pune.jpg";
import Bangalore from "../assets/cities/Bangalore.jpg";
import Gurugram from "../assets/cities/Gurugram.jpg";
import Noida from "../assets/cities/Noida.jpg";
import Delhi from "../assets/cities/Delhi.webp";
import Ahmedabad from "../assets/cities/Ahmedabad.jpg";
import Hyderabad from "../assets/cities/Hyderabad.webp";
import Kolkata from "../assets/cities/Kolkata.jpg";
import Mumbai from "../assets/cities/Mumbai.webp";
import Chennai from "../assets/cities/Chennai.webp";

function Recommendation() {
  const [goal, setGoal] = useState("");
  const [gender, setGender] = useState("");
  const [budget, setBudget] = useState("");
  const [weather, setWeather] = useState("");

  const [result, setResult] = useState(null);

  const cityImages = {
    Pune: Pune,
    Bengaluru: Bangalore,
    Gurugram: Gurugram,
    Noida: Noida,
    Delhi: Delhi,
    Ahmedabad: Ahmedabad,
    Hyderabad: Hyderabad,
    Kolkata: Kolkata,
    Mumbai: Mumbai,
    Chennai: Chennai,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!goal || !gender || !budget || !weather) {
      alert("Please select all preferences.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goal,
          gender,
          budget,
          weather,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong.");
        return;
      }

      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend!");
    }
  };

  const getBarWidth = (value) => {
    return `${value * 10}%`;
  };

  const selectStyle = {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "1px solid #D4C2E3",
    fontSize: "15px",
    background: "#F0E8F8",
    color: "#1F2937",
    boxSizing: "border-box",
    outline: "none",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#E5F2E7",
        color: "#1F2937",
        padding: "55px 25px 70px",
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 40px",
        }}
      >
        <div
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🏙️
        </div>

        <h1
          style={{
            fontSize: "44px",
            margin: "0",
            color: "#1F2937",
            fontWeight: "800",
          }}
        >
          Find Your City
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#526357",
            lineHeight: "1.6",
            marginTop: "12px",
          }}
        >
          Tell us what matters to you, and we'll find the city
          that best fits your future.
        </p>
      </div>

      {/* PREFERENCES CARD */}

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#FFFFFF",
          border: "1px solid #BFE0C4",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 8px 25px rgba(63,143,74,0.14)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginTop: "0",
            color: "#1F2937",
          }}
        >
          Your Preferences
        </h2>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px",
              marginTop: "25px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                🎯 Primary Goal
              </label>

              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Higher Education">
                  Higher Education
                </option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                👤 User Profile
              </label>

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                💰 Budget
              </label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                🌤️ Weather
              </label>

              <select
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                <option value="Pleasant">Pleasant</option>
                <option value="Moderate">Moderate</option>
                <option value="Hot">Hot</option>
              </select>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "32px",
            }}
          >
            <button
              type="submit"
              style={{
                padding: "15px 38px",
                border: "none",
                borderRadius: "11px",
                background: "#3F8F4A",
                color: "#FFFFFF",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow:
                  "0 6px 18px rgba(63,143,74,0.30)",
              }}
            >
              🚀 Discover My City
            </button>
          </div>
        </form>
      </div>

      {/* RESULTS */}

      {result && (
        <div
          style={{
            maxWidth: "1000px",
            margin: "45px auto 0",
          }}
        >
          {/* BEST MATCH */}

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #BFE0C4",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow:
                "0 10px 30px rgba(63,143,74,0.16)",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={cityImages[result.city]}
                alt={result.city}
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  background: "#F0E8F8",
                  color: "#62477B",
                  padding: "10px 18px",
                  borderRadius: "30px",
                  fontWeight: "700",
                  boxShadow:
                    "0 4px 12px rgba(90,60,120,0.18)",
                }}
              >
                🏆 Best Match
              </div>
            </div>

            <div
              style={{
                padding: "32px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "42px",
                  margin: "0",
                }}
              >
                {result.city}
              </h1>

              <div
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: "10px 24px",
                  borderRadius: "30px",
                  background: "#BFE0C4",
                  color: "#286B35",
                  fontSize: "23px",
                  fontWeight: "800",
                }}
              >
                {result.score}/100
              </div>

              <p
                style={{
                  color: "#526357",
                  fontSize: "17px",
                  marginTop: "18px",
                }}
              >
                {result.message}
              </p>
            </div>
          </div>

          {/* WHY THIS CITY */}

          <div
            style={{
              background: "#F0E8F8",
              border: "1px solid #D4C2E3",
              borderRadius: "18px",
              padding: "30px",
              marginTop: "25px",
              boxShadow:
                "0 6px 20px rgba(100,70,130,0.09)",
            }}
          >
            <h2 style={{ marginTop: "0" }}>
              💡 Why This City?
            </h2>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              {result.whyThisCity &&
                result.whyThisCity.map((reason, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "14px 17px",
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      border: "1px solid #E0D5E9",
                    }}
                  >
                    ✓ {reason}
                  </div>
                ))}
            </div>
          </div>

          {/* SCORE BREAKDOWN */}

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #BFE0C4",
              borderRadius: "18px",
              padding: "30px",
              marginTop: "25px",
              boxShadow:
                "0 6px 20px rgba(63,143,74,0.10)",
            }}
          >
            <h2 style={{ marginTop: "0" }}>
              📈 Score Breakdown
            </h2>

            {[
              {
                label: "🎯 Primary Goal",
                value: result.scoreBreakdown.goal,
              },
              {
                label: "💰 Affordability",
                value: result.scoreBreakdown.affordability,
              },
              {
                label: "🚇 Transportation",
                value: result.scoreBreakdown.transport,
              },
              {
                label: "🌤️ Weather",
                value: result.scoreBreakdown.weather,
              },
              ...(gender === "Female"
                ? [
                    {
                      label: "👩 Women Safety",
                      value:
                        result.scoreBreakdown.womenSafety,
                    },
                  ]
                : []),
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  marginBottom: "21px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    fontWeight: "700",
                  }}
                >
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    background: "#DCEBDD",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: getBarWidth(item.value),
                      height: "100%",
                      background: "#3F8F4A",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CITY PROFILE */}

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #BFE0C4",
              borderRadius: "18px",
              padding: "30px",
              marginTop: "25px",
              boxShadow:
                "0 6px 20px rgba(63,143,74,0.10)",
            }}
          >
            <h2 style={{ marginTop: "0" }}>
              📊 City Profile
            </h2>

            {[
              {
                label: "💻 Tech Opportunities",
                value: result.details.tech,
              },
              {
                label: "💼 Finance Opportunities",
                value: result.details.finance,
              },
              {
                label: "🎓 Education",
                value: result.details.education,
              },
              {
                label: "💰 Affordability",
                value: result.details.cost,
              },
              {
                label: "🌤️ Weather",
                value: result.details.weather,
              },
              {
                label: "🚇 Public Transportation",
                value: result.details.transport,
              },
              ...(gender === "Female"
                ? [
                    {
                      label: "👩 Women Safety",
                      value: result.details.womenSafety,
                    },
                  ]
                : []),
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "220px 1fr 55px",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                    color: "#475467",
                  }}
                >
                  {item.label}
                </span>

                <div
                  style={{
                    height: "9px",
                    background: "#DCEBDD",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: getBarWidth(item.value),
                      height: "100%",
                      background: "#3F8F4A",
                      borderRadius: "20px",
                    }}
                  />
                </div>

                <strong
                  style={{
                    textAlign: "right",
                  }}
                >
                  {item.value}/10
                </strong>
              </div>
            ))}
          </div>

          {/* ALTERNATIVES */}

          <div
            style={{
              marginTop: "40px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "25px",
              }}
            >
              🌆 Other Top Cities
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "25px",
              }}
            >
              {result.rankings
                .slice(1, 3)
                .map((city, index) => (
                  <div
                    key={city.city}
                    style={{
                      background: "#F0E8F8",
                      border: "1px solid #D4C2E3",
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow:
                        "0 6px 20px rgba(100,70,130,0.10)",
                    }}
                  >
                    <img
                      src={cityImages[city.city]}
                      alt={city.city}
                      style={{
                        width: "100%",
                        height: "190px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    <div
                      style={{
                        padding: "22px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          color: "#62477B",
                          fontWeight: "700",
                        }}
                      >
                        {index === 0
                          ? "🥈 Alternative 1"
                          : "🥉 Alternative 2"}
                      </div>

                      <h2
                        style={{
                          margin: "8px 0",
                        }}
                      >
                        {city.city}
                      </h2>

                      <div
                        style={{
                          display: "inline-block",
                          padding: "8px 17px",
                          borderRadius: "20px",
                          background: "#BFE0C4",
                          color: "#286B35",
                          fontWeight: "800",
                        }}
                      >
                        {city.score}/100
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recommendation;