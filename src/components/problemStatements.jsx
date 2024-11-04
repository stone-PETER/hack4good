import React from "react";
import { useNavigate } from "react-router-dom";

const ProblemStatements = () => {
  const navigate = useNavigate();

  const handleViewProblemStatements = () => {
    navigate("/problem-statements");
  };

  return (
    <div
      className="problem-statements"
      style={{ margin: "0 auto", padding: "2rem 1rem" }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Problem Statements
        </h1>
        <p style={{ fontSize: "1.8rem", marginBottom: "2rem", color: "white" }}>
          This hackathon features 20 exciting problem statements based on
          Sustainable Development Goals.
        </p>
        <button
          onClick={handleViewProblemStatements}
          style={{
            backgroundColor: "#29004e",
            color: "white",
            fontWeight: "bold",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#29004e")}
        >
          View Problem Statements
        </button>
      </div>
    </div>
  );
};

export default ProblemStatements;
