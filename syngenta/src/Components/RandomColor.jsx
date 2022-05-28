export const RandomColor = (x, y) => {
  let a = y - x + 1;
  let b = Math.random() * a;
  let output = Math.floor(b) + x;
  console.log(output);
    return output;
  
};
