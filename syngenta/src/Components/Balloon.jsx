import React, { useEffect, useState } from "react";
import { getColors } from "./getColors";
function Balloon() {
  //for colors
  let [color, setColor] = useState([]);

  // for individual balloon

  let [key, setKey] = useState(false);

  //for shooted balloon

  let [empty, setEmpty] = useState([]);

  useEffect(() => {
    ColorsArray();
  }, []);

  const ColorsArray = () => {
    const balloons = Array(5)
      .fill()
      .map((_, i) => ({ id: i, color: getColors(i) }));
    setColor([...balloons]);
  };

  const shoot = (key) => {
    if (key != false) {
      let Array = color;
      let pop = Array.splice(key - 1, 1);
      empty.push(...pop);
      setKey(null);
      setColor([...color]);
      document.getElementById("number").value = "";
    }
  };

  const shootedballon = (key) => {
    let Array = empty;
    let pop = Array.splice(key, 1);
    color.push(...pop);
    color.sort(function (a, b) {
      return a.id - b.id;
    });
    setColor([...color]);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Balloon Assignment</h1>
      <div className="outercontainer">
        <div className="right">
          {color.map((elem) => (
            <div
              className="colorballoons"
              key={elem.id}
              style={{ backgroundColor: elem.color }}
            ></div>
          ))}
        </div>
        <div className="left">
          <div className="emptydiv">
            {empty.map((el, index) => (
              <div
                onClick={() => shootedballon(index)}
                key={el.id}
                style={{ backgroundColor: el.color }}
              ></div>
            ))}
          </div>
          <div className="shoot">
            <input
              id="number"
              type="telephone"
              placeholder="Enter Number(1-5)"
              maxLength="1"
              style={{
                marginTop: "25%",
                fontSize: "1rem",
              }}
              onChange={(e) => setKey(e.target.value)}
            />
            <br />
            <input type="button" onClick={() => shoot(key)} value="Shoot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balloon;
