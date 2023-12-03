//world's #1 regex hater

const fs = require('fs');
let inputArr = fs.readFileSync('./input', 'utf8').split('\n');
var redCount = 0;
var greenCount = 0;
var blueCount = 0;
let sum = 0;

//this is so much better i should've done something like this before
inputArr.forEach(el => {
  let gameArr = el.split(': ');
  gameArr[1] = gameArr[1].split('; ');
  inputArr[inputArr.indexOf(el)] = gameArr;

  gameArr[1].forEach(gameOneEl => {
    let picks = gameOneEl.split(', ');
    picks.forEach(picksEl => {
      if (picksEl.includes('red')) {
        if (Number(picksEl.slice(0, 2)) > redCount) {
          redCount = Number(picksEl.slice(0, 2));
        }
        else {
          return;
        }
      }
      else if (picksEl.includes('green')) {
        if (Number(picksEl.slice(0, 2)) > greenCount) {
          greenCount = Number(picksEl.slice(0, 2));
        }
        else {
          return;
        }
      }
      else if (picksEl.includes('blue')) {
        if (Number(picksEl.slice(0, 2)) > blueCount) {
          blueCount = Number(picksEl.slice(0, 2));
        }
        else {
          return;
        }
      }
    });
  });
  sum += (redCount * greenCount * blueCount);
  redCount = 0;
  greenCount = 0;
  blueCount = 0;
});

console.log(sum);
