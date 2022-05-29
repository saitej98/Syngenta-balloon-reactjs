import React, { useEffect, useRef, useState } from "react";
import { getColors } from "./getColors";
function Balloon() {
  let colorref = useRef();
  let [color, setColor] = useState([]);

  useEffect(() => {
    setColor(getColors());
  }, []);

    const handleSubmit = () => {
        // document.querySelectorAll(".colorballoons").style.color="white"
    }
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Balloon Assignment</h1>
      <div className="outercontainer">
        <div className="right">
          {color.map((elem, i) => (
            <div
              className="colorballoons"
              id={i + 1}
              key={i}
              style={{ backgroundColor: `${elem}` }}
            >
            </div>
          ))}
        </div>
        <div className="left">
          <div className="emptydiv"></div>
          <div className="shoot">
            <input
              ref={colorref}
              type="telephone"
              placeholder="Enter Number(1-5)"
              maxLength="1"
              style={{
                marginTop: "25%",
                fontSize: "1rem",
              }}
            />
            <br />
            <input
              type="button"
              onClick={handleSubmit()}
              // console.log(colorref.current.value);

              value="Shoot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balloon;
