const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = +input.splice(0, 1);
let obj = {};
let answer = [];
let arr = input.map((v) => v.replace('\r', ''));

for (let i = 0; i < input.length; i++) {
    let str = arr[i].split(' ');
     if (obj[str[0]]) {
        // 키가 이미 존재하면 배열에 값을 추가
        obj[+str[0]].push(str[1]);
    } else {
        // 키가 존재하지 않으면 새 배열을 생성하여 값을 추가
        obj[+str[0]] = [str[1]];
    }
}
for (let i in obj) {
    obj[i].sort((a, b) => a - b);
}

let keys = Object.keys(obj).sort((a,b)=>a-b);
let values = [];

for (let i = 0; i < keys.length; i++) 
{
    values.push(obj[keys[i]]);
}

for (let i = 0; i < keys.length; i++){
    for (let j = 0; j < values[i].length; j++){
        answer.push(`${keys[i]} ${values[i][j]}`);
    }
}
console.log(answer.join('\n'));





