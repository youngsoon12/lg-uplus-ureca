const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');


let n = input[0];
input.splice(0, 1);

let arr = [];
let imsi = [];
let result = [];
let max = 0;
let min = Infinity;

for (let i = 0; i < n; i++){
    arr.push(input[i].replace('\r', ''));
    arr[i].length > max ? max = arr[i].length : max;
    arr[i].length < min? min = arr[i].length : min;
}

let set = new Set(arr);
let dup = [...set];

dup.sort();

for (let i = min; i <=max; i++) { 
    for (let j = 0; j < dup.length; j++) { 
        if (dup[j].length === i) {
            result.push(dup[j]);
        }
    }
}

console.log(result.join('\n'));