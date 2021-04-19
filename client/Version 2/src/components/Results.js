import React from "react";
import "../App.css";

function Results() {
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
          <legend>Points to Each Elements</legend>
        </fieldset>
      </div>

      {/* DETAILED RESULTS CONTAINER / LAST CONTAINER */}
      <div className="detailedResults">
        <fieldset className="field_set">
          <legend>Detailed Results</legend>
        </fieldset>
      </div>
    </div>
  );
}

export default Results;
