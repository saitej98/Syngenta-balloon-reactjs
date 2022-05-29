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

// i am working on random colour from my array but i am getting same  colors intested of i can use Math.floor(Math.random()*16777215).toString(16) it is working but as per problem statement i tried this