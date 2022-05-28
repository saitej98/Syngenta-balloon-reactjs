import { RandomColor } from "./RandomColor";
export const getColors = () => {
  let Array = [];
  let colors = ["#ff0000", "#0000ff", "#3cb371", "#ee82ee", "#ffa500"];
  for (let i = 0; i < 5; i++) {
    let prop = RandomColor(0, colors.length - 1);
    Array.push(colors[prop]);

    colors.splice(prop, 1);
    }
  return Array;
};
