import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1976d2",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>
        Smart City
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/recommendation"
          style={{ color: "white", textDecoration: "none" }}
        >
          Recommendation
        </Link>

        <Link
          to="/compare"
          style={{ color: "white", textDecoration: "none" }}
        >
          Compare Cities
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;