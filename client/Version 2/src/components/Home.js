import React, { useState } from "react";
import { callAppLink } from "../Service/EndPoints";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const [link, setLink, app] = useState("");
  const [setApp] = useState([]);
  let sampleTest;
  const handleSubmit = (e) => {
    e.preventDefault();
    sampleTest = link;
    sampleTest = sampleTest.split("?id=")[1];
    testing();
  };

  // state = { response: {} };
  const testing = async () => {
    const data = await callAppLink(sampleTest);
    if (data) {
      // setApp(data);
      console.log(data.title);
      //              const response = res.data;
      //                 this.setState({response});
      //               });
      //             }
    }
  };

  return (
    <div>
      <form>
        <p>
          <input
            type="text"
            placeholder="Paste the link.."
            onChange={(e) => setLink(e.target.value)}
          />
          {
            <Link to={"/Confirmation"}>
              <button className="get">Submit</button>
            </Link>
          }
        </p>
      </form>
      <div className="help">Help</div>
    </div>
  );
}

export default Home;
