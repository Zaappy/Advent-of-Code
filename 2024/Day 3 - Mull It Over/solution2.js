import fs from 'fs';
let input = fs.readFileSync('./input', 'utf8');

let result = 0;
input = input.split(/(do\(\)|don't\(\))/g);

input.forEach((str, i) => {
  if (input[i - 1] === 'do()' || input[i - 1] === undefined) {
    const matches = str.match(/mul\((\d*?,\d*?)\)/g);
    matches.forEach(m => {
      result += m.slice(4, -1).split(',').map(n => Number(n))[0] * m.slice(4, -1).split(',').map(n => Number(n))[1];
    });
  }
});

console.log(result);
