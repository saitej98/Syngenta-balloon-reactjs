import React, { useEffect, useState } from "react";
import { getColors } from "./getColors";
function Balloon() {
  let [color, setColor] = useState([]);

  useEffect(() => {
   console.log (setColor(getColors()));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Balloon Assignment</h1>
      <div className="outercontainer">
              <div className="right">{color.map((elem) => (
                  <div style={{ backgroundColor: `${elem}` }}></div>
              ))} </div>
        <div className="left">
          <div className="emptydiv"></div>
          <div className="shoot">
            <input
              type="number"
              style={{
                marginTop: "25%",
                fontSize: "1rem",
              }}
            />
            <br />
            <input type="button" value="Shoot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balloon;
