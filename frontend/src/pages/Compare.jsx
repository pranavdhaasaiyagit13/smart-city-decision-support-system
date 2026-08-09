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

function Comparison() {
  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");

  const [result, setResult] = useState(null);

  const cities = [
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Mumbai",
    "Delhi",
    "Noida",
    "Gurugram",
    "Ahmedabad",
    "Kolkata",
  ];

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

  const handleCompare = async (e) => {
    e.preventDefault();

    if (!city1 || !city2) {
      alert("Please select two cities.");
      return;
    }

    if (city1 === city2) {
      alert("Please select two different cities.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/compare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city1,
          city2,
        }),
      });

      const data = await response.json();

      console.log(data);

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

  const factors = [
    {
      label: "💻 Technology",
      key: "tech",
    },
    {
      label: "💼 Finance",
      key: "finance",
    },
    {
      label: "🎓 Education",
      key: "education",
    },
    {
      label: "💰 Affordability",
      key: "cost",
    },
    {
      label: "🌤️ Weather",
      key: "weather",
    },
    {
      label: "🚇 Public Transportation",
      key: "transport",
    },
    {
      label: "👩 Women Safety",
      key: "womenSafety",
    },
  ];

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
          ⚖️
        </div>

        <h1
          style={{
            fontSize: "44px",
            margin: "0",
            fontWeight: "800",
          }}
        >
          Compare Cities
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#526357",
            lineHeight: "1.6",
            marginTop: "12px",
          }}
        >
          Compare two cities across the factors that matter
          when choosing where to live and build your future.
        </p>
      </div>

      {/* CITY SELECTION */}

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
          }}
        >
          Choose Your Cities
        </h2>

        <form onSubmit={handleCompare}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
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
                CHOICE 1
              </label>

              <select
                value={city1}
                onChange={(e) => setCity1(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #D4C2E3",
                  background: "#F0E8F8",
                  fontSize: "16px",
                  color: "#1F2937",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select City</option>

                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
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
              CHOICE 2
              </label>

              <select
                value={city2}
                onChange={(e) => setCity2(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #D4C2E3",
                  background: "#F0E8F8",
                  fontSize: "16px",
                  color: "#1F2937",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select City</option>

                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
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
              ⚖️ Compare Your Choices
            </button>
          </div>
        </form>
      </div>

      {/* RESULTS */}

      {result && (
        <div
          style={{
            maxWidth: "1050px",
            margin: "45px auto 0",
          }}
        >
          {/* CITY IMAGE CARDS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {/* CITY 1 */}

            <div
              style={{
                background: "#F0E8F8",
                border: "1px solid #D4C2E3",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "0 7px 22px rgba(100,70,130,0.10)",
              }}
            >
              <img
                src={cityImages[result.city1.name]}
                alt={result.city1.name}
                style={{
                  width: "100%",
                  height: "240px",
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
                    marginBottom: "6px",
                  }}
                >
                  CITY 1
                </div>

                <h2
                  style={{
                    margin: "0",
                  }}
                >
                  {result.city1.name}
                </h2>
              </div>
            </div>

            {/* CITY 2 */}

            <div
              style={{
                background: "#F0E8F8",
                border: "1px solid #D4C2E3",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "0 7px 22px rgba(100,70,130,0.10)",
              }}
            >
              <img
                src={cityImages[result.city2.name]}
                alt={result.city2.name}
                style={{
                  width: "100%",
                  height: "240px",
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
                    marginBottom: "6px",
                  }}
                >
                  CITY 2
                </div>

                <h2
                  style={{
                    margin: "0",
                  }}
                >
                  {result.city2.name}
                </h2>
              </div>
            </div>
          </div>

          {/* COMPARISON TABLE */}

          <div
            style={{
              marginTop: "30px",
              background: "#FFFFFF",
              border: "1px solid #BFE0C4",
              borderRadius: "20px",
              padding: "28px",
              boxShadow:
                "0 8px 25px rgba(63,143,74,0.10)",
              overflowX: "auto",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginTop: "0",
                marginBottom: "25px",
              }}
            >
              📊 City Comparison
            </h2>

            <table
              style={{
                width: "100%",
                minWidth: "650px",
                borderCollapse: "separate",
                borderSpacing: "0",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      background: "#F0E8F8",
                      color: "#62477B",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    Factor
                  </th>

                  <th
                    style={{
                      padding: "16px",
                      background: "#F0E8F8",
                      color: "#62477B",
                    }}
                  >
                    {result.city1.name}
                  </th>

                  <th
                    style={{
                      padding: "16px",
                      background: "#F0E8F8",
                      color: "#62477B",
                      borderTopRightRadius: "10px",
                    }}
                  >
                    {result.city2.name}
                  </th>
                </tr>
              </thead>

              <tbody>
                {factors.map((factor) => {
                  const value1 =
                    result.city1[factor.key];

                  const value2 =
                    result.city2[factor.key];

                  return (
                    <tr key={factor.key}>
                      <td
                        style={{
                          padding: "17px",
                          borderBottom:
                            "1px solid #E4E8E5",
                          fontWeight: "700",
                          color: "#344054",
                        }}
                      >
                        {factor.label}
                      </td>

                      <td
                        style={{
                          padding: "17px",
                          textAlign: "center",
                          borderBottom:
                            "1px solid #E4E8E5",
                          fontWeight:
                            value1 > value2
                              ? "800"
                              : "500",
                          color:
                            value1 > value2
                              ? "#2F7D3E"
                              : "#344054",
                        }}
                      >
                        {value1}/10

                        {value1 > value2 && (
                          <span> 🏆</span>
                        )}
                      </td>

                      <td
                        style={{
                          padding: "17px",
                          textAlign: "center",
                          borderBottom:
                            "1px solid #E4E8E5",
                          fontWeight:
                            value2 > value1
                              ? "800"
                              : "500",
                          color:
                            value2 > value1
                              ? "#2F7D3E"
                              : "#344054",
                        }}
                      >
                        {value2}/10

                        {value2 > value1 && (
                          <span> 🏆</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* OVERALL WINNER */}

          <div
            style={{
              marginTop: "30px",
              background:
                "linear-gradient(135deg, #3F8F4A, #286B35)",
              color: "#FFFFFF",
              borderRadius: "22px",
              padding: "42px 25px",
              textAlign: "center",
              boxShadow:
                "0 10px 30px rgba(63,143,74,0.25)",
            }}
          >
            <div
              style={{
                fontSize: "48px",
              }}
            >
              🏆
            </div>

            <h2
              style={{
                margin: "10px 0",
                fontSize: "28px",
              }}
            >
              Better Overall
            </h2>

            <h1
              style={{
                fontSize: "44px",
                margin: "10px 0",
              }}
            >
              {result.overall.winner}
            </h1>

            <p
              style={{
                opacity: "0.9",
                fontSize: "16px",
              }}
            >
              Based on the overall comparison across all
              available factors.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "70px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <div>
                <div
                  style={{
                    opacity: "0.85",
                    marginBottom: "6px",
                  }}
                >
                  {result.city1.name}
                </div>

                <strong
                  style={{
                    fontSize: "28px",
                  }}
                >
                  {result.overall.city1Score}
                </strong>
              </div>

              <div>
                <div
                  style={{
                    opacity: "0.85",
                    marginBottom: "6px",
                  }}
                >
                  {result.city2.name}
                </div>

                <strong
                  style={{
                    fontSize: "28px",
                  }}
                >
                  {result.overall.city2Score}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comparison;
