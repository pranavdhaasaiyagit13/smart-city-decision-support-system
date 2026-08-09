import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recommendation from "./pages/Recommendation";
import Compare from "./pages/Compare";

function App() {
  return (
    <div>
      <nav
        style={{
          padding: "20px",
          background: "#1976d2",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
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
      </nav>

      <div style={{ padding: "30px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recommendation"
            element={<Recommendation />}
          />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
