const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

let [n,l]= input[0].split(" ");
let boolean = true;
let check = -1;
let result = [];
let length = 0;
    
for (let i = l; i <=100; i++){
    if ((Number.isInteger((n / i) - (i - 1) / 2)) && ((n / i) - (i - 1) / 2) >= 0) {
        a = (n / i) - (i - 1) / 2;
        check = 1;
        length = i;
        break;
    }
}

if ((check === -1)|| length>100 ) {
    result.push(-1);
} 
else {
    for (let i = 0; i < length; i++) {
        result.push(a + i);
}
}
console.log(result.join(' '));






