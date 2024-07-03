const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

let [sum, minLength] = input[0].split(" ").map(Number);
let length;
let start = -1;

for (length = minLength; length <= 100; length += 1) {
  const equation = sum - (length * (length - 1)) / 2;
  if (equation >= 0 && equation % length === 0) {
    start = equation / length;
    break;
  }
}

if (start === -1) {
  console.log(-1);
} else {
  const sol = Array.from({ length }).map((_, idx) => start + idx);
  console.log(sol.join(' '));
}