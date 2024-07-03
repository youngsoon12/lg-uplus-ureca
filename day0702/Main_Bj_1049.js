const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

let money = 0;

let [n, m] = input[0].split(" "); // n : 끊어진 기타줄 개수 , m : 기타 브랜드 종류(m<=50)
input.shift();


let packages = [];
let eachs = [];

for (let i = 0; i < m; i++){
    packages[i] = input[i].split(' ')[0];
    eachs[i] = input[i].split(' ')[1];
}
packages.sort((a, b) => a - b);
eachs.sort((a, b) => a - b);

let current = n;
let boo = true;
while (boo) {
    
    if (current <= 0) { boo = true; break; }
    if (current <= 6) {
        if (packages[0] < eachs[0] * current) {
            current -= 6;
            money += parseInt(packages[0]);
        }
        else {
            current -= 1;
            money += parseInt(eachs[0]);
        }
    }

    else if (packages[0] / 6 < eachs[0]) {
       
            current -= 6;
            money += parseInt(packages[0]);
        }
    else{
        current -= 1;
        money += parseInt(eachs[0]);
    }
    }

console.log(money);
