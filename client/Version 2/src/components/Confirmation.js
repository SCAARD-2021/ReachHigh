import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { callAppLink } from "../Service/EndPoints";

function Confirmation(props) {
  const { ai } = props.location.state;
  // const ai = "?id=com.facebook.lite";
  const [app, setApp] = useState([]);

  const testing = async () => {
    let sampleTest = ai;
    sampleTest = sampleTest.split("?id=")[1];
    const dataa = await callAppLink(sampleTest);
    console.log(dataa.data)
    setApp(dataa.data);
  };

  useEffect(() => {
    testing();
  }, []);

  return (
    <div className="appimage">
      <img src={app.icon} alt="AppIcon" width="150" height="150"></img>

      <h4 className="appName">{app.title}</h4>
      <span className="confirm">
        <p> Is this Your app looking for ? </p>
        {
          <Link to={{ pathname: "/Container/Results", state: { just:"hi"} }}>
            <button className="yes">Yes</button>
          </Link>
        }
        {
          <Link to={"/"}>
            <button className="no">No</button>
          </Link>
        }
      </span>
    </div>
  );
}

export default Confirmation;
