//it's always the cubes and never the icosahedra smh

const fs = require('fs');
let inputArr = fs.readFileSync('./input', 'utf8').split('\n');
let sum = 0;

//sorry if this is kinda unreadable whoops
//also yeah i was too lazy to figure out how to make it check for the valid numbers automatically
//so thats why i did if-then'd them all individually
inputArr.forEach(el => {
  let gameArr = el.split(': ');
  gameArr[1] = gameArr[1].split('; ');
  inputArr[inputArr.indexOf(el)] = gameArr;

  gameArr[0] = Number(gameArr[0].replace('Game ', ''));
  gameArr[1].forEach(gameEl => {
    let colours = gameEl.split(', ');

    colours.forEach(colourEl => {
      if (colourEl.startsWith('1 red')) {
        return;
      }
      else if (colourEl.startsWith('2 red')) {
        return;
      }
      else if (colourEl.startsWith('3 red')) {
        return;
      }
      else if (colourEl.startsWith('4 red')) {
        return;
      }
      else if (colourEl.startsWith('5 red')) {
        return;
      }
      else if (colourEl.startsWith('6 red')) {
        return;
      }
      else if (colourEl.startsWith('7 red')) {
        return;
      }
      else if (colourEl.startsWith('8 red')) {
        return;
      }
      else if (colourEl.startsWith('9 red')) {
        return;
      }
      else if (colourEl.startsWith('10 red')) {
        return;
      }
      else if (colourEl.startsWith('11 red')) {
        return;
      }
      else if (colourEl.startsWith('12 red')) {
        return;
      }
      else if (colourEl.startsWith('1 green')) {
        return;
      }
      else if (colourEl.startsWith('2 green')) {
        return;
      }
      else if (colourEl.startsWith('3 green')) {
        return;
      }
      else if (colourEl.startsWith('4 green')) {
        return;
      }
      else if (colourEl.startsWith('5 green')) {
        return;
      }
      else if (colourEl.startsWith('6 green')) {
        return;
      }
      else if (colourEl.startsWith('7 green')) {
        return;
      }
      else if (colourEl.startsWith('8 green')) {
        return;
      }
      else if (colourEl.startsWith('9 green')) {
        return;
      }
      else if (colourEl.startsWith('10 green')) {
        return;
      }
      else if (colourEl.startsWith('11 green')) {
        return;
      }
      else if (colourEl.startsWith('12 green')) {
        return;
      }
      else if (colourEl.startsWith('13 green')) {
        return;
      }
      else if (colourEl.startsWith('1 blue')) {
        return;
      }
      else if (colourEl.startsWith('2 blue')) {
        return;
      }
      else if (colourEl.startsWith('3 blue')) {
        return;
      }
      else if (colourEl.startsWith('4 blue')) {
        return;
      }
      else if (colourEl.startsWith('5 blue')) {
        return;
      }
      else if (colourEl.startsWith('6 blue')) {
        return;
      }
      else if (colourEl.startsWith('7 blue')) {
        return;
      }
      else if (colourEl.startsWith('8 blue')) {
        return;
      }
      else if (colourEl.startsWith('9 blue')) {
        return;
      }
      else if (colourEl.startsWith('10 blue')) {
        return;
      }
      else if (colourEl.startsWith('11 blue')) {
        return;
      }
      else if (colourEl.startsWith('12 blue')) {
        return;
      }
      else if (colourEl.startsWith('13 blue')) {
        return;
      }
      else if (colourEl.startsWith('14 blue')) {
        return;
      } else {
        gameArr[0] = gameArr[0].toString();
        gameArr[0] = gameArr[0].replace(/\d/g, '');
      }
    });
  });
});

inputArr.forEach(el => {
  sum += Number(el[0]);
});

console.log(sum);
