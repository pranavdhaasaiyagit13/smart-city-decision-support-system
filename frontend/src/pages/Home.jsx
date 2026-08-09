import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3F8F3",
        color: "#1F2937",
        padding: "70px 30px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {/* BRAND */}

      <div
        style={{
          fontSize: "18px",
          fontWeight: "700",
          letterSpacing: "3px",
          color: "#4F8F5B",
          marginBottom: "35px",
        }}
      >
        🏙️ SMART CITY
      </div>

      {/* MAIN HEADLINE */}

      <h1
        style={{
          fontSize: "64px",
          lineHeight: "1.1",
          margin: "0",
          fontWeight: "800",
        }}
      >
        <span
          style={{
            display: "block",
            color: "#1F2937",
          }}
        >
          Your City.
        </span>

        <span
          style={{
            display: "block",
            color: "#4F8F5B",
          }}
        >
          Your Future.
        </span>
      </h1>

      {/* DESCRIPTION */}

      <p
        style={{
          maxWidth: "750px",
          margin: "30px auto 0",
          fontSize: "19px",
          lineHeight: "1.7",
          color: "#66736A",
        }}
      >
        Choosing where to live, work, and build your future is a
        big decision.
        <br />
        Smart City helps you discover the city that best matches
        your career goals, budget, lifestyle, weather preferences,
        transportation needs, and safety priorities.
      </p>

      {/* BUTTONS */}

      <div
        style={{
          marginTop: "45px",
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/recommendation"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            style={{
              padding: "15px 30px",
              fontSize: "17px",
              fontWeight: "700",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              color: "#FFFFFF",
              background: "#4F8F5B",
              boxShadow:
                "0 5px 15px rgba(79,143,91,0.25)",
            }}
          >
            🚀 Discover My City
          </button>
        </Link>

        <Link
          to="/compare"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            style={{
              padding: "15px 30px",
              fontSize: "17px",
              fontWeight: "700",
              borderRadius: "10px",
              cursor: "pointer",
              color: "#4F8F5B",
              background: "#FFFFFF",
              border: "1px solid #7BAE7F",
            }}
          >
            ⚖️ Compare Cities
          </button>
        </Link>
      </div>

      {/* FEATURE CARDS */}

      <div
        style={{
          maxWidth: "950px",
          margin: "80px auto 0",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "18px",
        }}
      >
        {/* CAREER */}

        <div
          style={{
            background: "#F3EEFA",
            border: "1px solid #DDD2EC",
            borderRadius: "15px",
            padding: "25px 15px",
            boxShadow:
              "0 4px 15px rgba(100,70,130,0.08)",
          }}
        >
          <div style={{ fontSize: "30px" }}>💼</div>

          <h3>Career</h3>

          <p
            style={{
              color: "#66736A",
              fontSize: "14px",
            }}
          >
            Find cities matching your career goals.
          </p>
        </div>

        {/* AFFORDABILITY */}

        <div
          style={{
            background: "#F3EEFA",
            border: "1px solid #DDD2EC",
            borderRadius: "15px",
            padding: "25px 15px",
            boxShadow:
              "0 4px 15px rgba(100,70,130,0.08)",
          }}
        >
          <div style={{ fontSize: "30px" }}>💰</div>

          <h3>Affordability</h3>

          <p
            style={{
              color: "#66736A",
              fontSize: "14px",
            }}
          >
            Consider your budget and cost of living.
          </p>
        </div>

        {/* TRANSPORT */}

        <div
          style={{
            background: "#F3EEFA",
            border: "1px solid #DDD2EC",
            borderRadius: "15px",
            padding: "25px 15px",
            boxShadow:
              "0 4px 15px rgba(100,70,130,0.08)",
          }}
        >
          <div style={{ fontSize: "30px" }}>🚇</div>

          <h3>Connectivity</h3>

          <p
            style={{
              color: "#66736A",
              fontSize: "14px",
            }}
          >
            Evaluate public transportation options.
          </p>
        </div>

        {/* LIFESTYLE */}

        <div
          style={{
            background: "#F3EEFA",
            border: "1px solid #DDD2EC",
            borderRadius: "15px",
            padding: "25px 15px",
            boxShadow:
              "0 4px 15px rgba(100,70,130,0.08)",
          }}
        >
          <div style={{ fontSize: "30px" }}>🌤️</div>

          <h3>Lifestyle</h3>

          <p
            style={{
              color: "#66736A",
              fontSize: "14px",
            }}
          >
            Find a city that fits your preferences.
          </p>
        </div>
      </div>

      {/* FOOTER */}

      <p
        style={{
          marginTop: "70px",
          color: "#7A877E",
          fontSize: "14px",
        }}
      >
        Make a smarter decision about where your future takes you.
      </p>
    </div>
  );
}

export default Home;