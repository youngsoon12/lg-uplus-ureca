const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = input.splice(0, 1);
let result = [];
let arr = [];
let answers = [];
input.map((data) => { arr.push(data.replace("\r", '').split(' ')); });
for (let i = 0; i < n; i++) {
    switch (arr[i][0]) {
        case 'push':
            result.push(arr[i][1]);
            break;
        case 'pop':
            if (result.length === 0) {
                answers.push(-1);
            } else {
                answers.push(result.shift());
            }
            break;
        case 'size': 
            answers.push(result.length);
            break;
        case 'empty':
            if (result.length === 0) {
                answers.push(1);
            } else answers.push(0);
            break;
        case 'back':
            if (result.length === 0) {
                answers.push(-1);
            } else {
                answers.push(result[result.length - 1]);
            }
            break;
        case 'front':
            if (result.length === 0) {
                answers.push(-1);
            } else { answers.push(result[0]); }
            break;
    }
}
console.log(answers.join('\n'));

