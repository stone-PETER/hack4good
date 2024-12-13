import { useNavigate } from "react-router-dom";

export const Result = () => {
  const navigate = useNavigate();

  const handleViewProblemStatements = () => {
    navigate("/phase1");
  };

  return (
    <section id="results">
      <div
        className="problem-statements"
        style={{ margin: "0 auto", padding: "2rem 1rem" }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            className="col-md-10 col-md-offset-1 section-title text-center"
            style={{
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            <h2>Result</h2>
          </div>
          <div className="container">
            <h3
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Phase 1 Results announced!!
            </h3>
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
              View Phase1 Results
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
