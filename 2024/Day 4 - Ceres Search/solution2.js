import fs from 'fs';
const input = fs.readFileSync('./input', 'utf8').split('\n').map(line => line.split(''));

let result = 0;

input.forEach((row, rowInd) => {
  row.forEach((col, colInd) => {
    if (col === 'A') {
      if (input[rowInd - 1] && input[rowInd + 1]) {
        switch (input[rowInd - 1][colInd - 1]) {
          case 'M':
            if (input[rowInd + 1][colInd + 1] === 'S') {
              switch (input[rowInd - 1][colInd + 1]) {
                case 'M':
                  if (input[rowInd + 1][colInd - 1] === 'S') result++;
                  break;
                case 'S':
                  if (input[rowInd + 1][colInd - 1] === 'M') result++;
                  break;
              }
            }
            break;
          case 'S':
            if (input[rowInd + 1][colInd + 1] === 'M') {
              switch (input[rowInd - 1][colInd + 1]) {
                case 'M':
                  if (input[rowInd + 1][colInd - 1] === 'S') result++;
                  break;
                case 'S':
                  if (input[rowInd + 1][colInd - 1] === 'M') result++;
                  break;
              }
            }
            break;
        }
      }
    }
  });
});

console.log(result);
