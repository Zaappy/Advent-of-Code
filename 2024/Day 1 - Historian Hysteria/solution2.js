import fs from 'fs';
const input = fs.readFileSync('./input', 'utf8').split('\n');

const left = [];
const right = [];
let result = 0;

input.forEach(set => {
  left.push(Number(set.split('   ')[0]));
  right.push(Number(set.split('   ')[1]));
});

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

left.forEach(num => {
  const matches = right.filter(n => n === num).length;
  result += num * matches;
});

console.log(result);
