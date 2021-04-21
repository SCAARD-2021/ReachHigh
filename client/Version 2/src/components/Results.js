import React, { useEffect, useState } from "react";
import "../App.css";
import { callResultLink } from "../Service/EndPoints";

function Results() {

  const [firstAverage, setFirstAverage] = useState([]);

  const testing = async () => {
    const dataa = await callResultLink();
    console.log(dataa.data.attractiveness.firstAverage)
    setFirstAverage(dataa.data.attractiveness.firstAverage);
  };

  useEffect(() => {
    testing();
  }, []);

  return (
    <div>
      {/* //FIRST CONTAINER IN RESULTS PAGE */}
      <div className="calculateProcess">
        <fieldset className="field_set">
          <legend>How We Calculate The Results</legend>
        </fieldset>
      </div>

      {/* POINTS CONTAINER / FIST MIDDLE CONTAINER */}
      <div className="points">
        <fieldset className="field_set2">
          <p>{firstAverage}</p>
          <legend>Points to Each Elements</legend>
        </fieldset>
      </div>

      {/* DETAILED RESULTS CONTAINER / LAST CONTAINER */}
      <div className="detailedResults">
        <fieldset className="field_set">
          <legend>Detailed Results</legend>
        </fieldset>
      </div>

      {/* RESULTS CONTAINER / LAST MIDDLE CONTAINER */}
      <div className="resultsBox">
        <fieldset className="field_set3"></fieldset>
      </div>
    </div>
  );
}

export default Results;
