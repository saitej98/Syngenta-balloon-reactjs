import { RandomColor } from "./RandomColor";
export const getColors = (x) => {
  let Array = [];
  let colors = ["#ff0000", "#0000ff", "#3cb371", "#ee82ee", "#ffa500"];
  for (let i = 0; i < 5; i++) {
    let prop = RandomColor(0, colors.length - 1);
    Array.push([colors[prop]]);
    }
  return Array[x];

};
