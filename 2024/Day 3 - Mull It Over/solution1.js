import fs from 'fs';
const input = fs.readFileSync('./input', 'utf8');

let result = 0;
const matches = input.match(/mul\((\d*?,\d*?)\)/g);

matches.forEach(match => {
  const factors = match.slice(4, -1).split(',').map(n => Number(n));
  const mul = () => factors[0] * factors[1];

  result += mul();
});

console.log(result);
