const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'example.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, f] = input;

console.log(n);
console.log(f);

