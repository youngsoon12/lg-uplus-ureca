const filePath = process.platform === 'linux' ? 
'/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let rightStack = [];
const leftStack = input[0].split('');
const comand = +input[1];

for (let i = 2; i <=comand+1; i++){
    switch (input[i][0]) { 
        case 'L':
            if (leftStack.length > 0) rightStack.push(leftStack.pop()); 
            break;
        case 'D':
            if (rightStack.length > 0) leftStack.push(rightStack.pop()); 
            break;
        case 'B':
            if (leftStack.length > 0) {
                leftStack.pop();
            }
            break;
        case 'P':
            leftStack.push(input[i][2]);
            break;
    }
}
let answer = leftStack.join('');
answer+=rightStack.reverse().join('');
console.log(answer);


let func = function solution() {
    
}