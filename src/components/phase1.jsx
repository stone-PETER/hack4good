export const Phase1 = (props) => {
  const getRowStyle = (index) => {
    return { backgroundColor: index % 2 === 0 ? "" : "#33035c" };
  };

  return (
    <section id="Phase1">
      <div className="col-md-10 col-md-offset-1 section-title text-center">
        <h2>Phase 1 Result</h2>
      </div>
      <table className="eael-data-table">
        <tbody>
          <tr className="heading-tage">
            <td>SNO</td>
            <td>NAME</td>
          </tr>

          {props.data
            ? props.data.map((d, i) => (
                <tr key={`${d.sno}-${i}`} style={getRowStyle(i)}>
                  <td>{d.sno}</td>
                  <td>{d.name}</td>
                </tr>
              ))
            : "Loading..."}
        </tbody>
      </table>
    </section>
  );
};
