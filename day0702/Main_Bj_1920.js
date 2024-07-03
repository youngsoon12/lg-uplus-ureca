const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'example.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [L, number, M, checks] = input;

const numbers = number.split(' ').map(v => +v);
const check = checks.split(' ').map(v => +v);

numbers.sort((a, b) => a - b);

check.forEach(v => {
    let low = 0;
    let high = numbers.length - 1;
    let mid;
    while (low <= high) {
        mid = parseInt((low + high) / 2);
        if (numbers[mid] === v) return console.log(1);
        else if (numbers[mid] > v) high = mid - 1;
        else low = mid + 1;
    }
    return console.log(0);
}
)




