import React, { useEffect, useState } from "react";
import "../App.css";
import { callResultLink } from "../Service/EndPoints";

function Results(props) {
  const [result, setResult] = useState([]);
  const testing = async () => {
    let sampleTest;
    sampleTest = aId;
    sampleTest = sampleTest.split("?id=")[1];
    const dataa = await callResultLink(sampleTest);
    if (dataa) {
      console.log(dataa);
      setResult(dataa.data);
    }
  };
  const { aId } = props.location.state;

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
          {/* <p>{result.attractiveness.firstAverage}</p> */}
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
