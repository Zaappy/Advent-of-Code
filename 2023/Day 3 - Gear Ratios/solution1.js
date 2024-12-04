// .forEach() my beloved

const fs = require('fs');
let input = fs.readFileSync('./input', 'utf-8').split('\n');
let sum = 0;

// got over my hatred for regex
// this has caused so many headaches ajahnjdajfeanfanmcjknjcf
// i've given up trying to make this efficient i'm just gonna do it the stupid wait now ig

// 3 Digits
input.forEach(el => {
  let matches = el.match(/\d{1,3}/g);
  let currentRowIndex = input.indexOf(el);
  let currentRow = input[currentRowIndex];
  let nextRow = input[currentRowIndex + 1];
  let lastRow = input[currentRowIndex - 1];

  if (matches != null) {
    matches.forEach(num => {
      let numInd = currentRow.indexOf(num);
      if (num.length === 3) {
        // Check left
        if ((currentRow[numInd - 1] != undefined) && (currentRow[numInd - 1] != '.') && (currentRow[numInd - 1] != ' ') && (currentRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + currentRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check right
        else if ((currentRow[numInd + 3] != undefined) && (currentRow[numInd + 3] != '.') && (currentRow[numInd + 3] != ' ') && (currentRow[numInd + 3] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + currentRow[numInd + 3]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check up + left
        else if ((lastRow != undefined) && (lastRow[numInd - 1] != undefined) && (lastRow[numInd - 1] != '.') && (lastRow[numInd - 1] != ' ') && (lastRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check up + right
        else if ((lastRow != undefined) && (lastRow[numInd + 3] != undefined) && (lastRow[numInd + 3] != '.') && (lastRow[numInd + 3] != ' ') && (lastRow[numInd + 3] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd + 3]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check up digit 1
        else if ((lastRow != undefined) && (lastRow[numInd] != undefined) && (lastRow[numInd] != '.') && (lastRow[numInd] != ' ') && (lastRow[numInd] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check up digit 2
        else if ((lastRow != undefined) && (lastRow[numInd + 1] != undefined) && (lastRow[numInd + 1] != '.') && (lastRow[numInd + 1] != ' ') && (lastRow[numInd + 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd + 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check up digit 3
        else if ((lastRow != undefined) && (lastRow[numInd + 2] != undefined) && (lastRow[numInd + 2] != '.') && (lastRow[numInd + 2] != ' ') && (lastRow[numInd + 2] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd + 2]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check down + left
        else if ((nextRow != undefined) && (nextRow[numInd - 1] != undefined) && (nextRow[numInd - 1] != '.') && (nextRow[numInd - 1] != ' ') && (nextRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check down + right
        else if ((nextRow != undefined) && (nextRow[numInd + 3] != undefined) && (nextRow[numInd + 3] != '.') && (nextRow[numInd + 3] != ' ') && (nextRow[numInd + 3] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd + 3]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check down digit 1
        else if ((nextRow != undefined) && (nextRow[numInd] != undefined) && (nextRow[numInd] != '.') && (nextRow[numInd] != ' ') && (nextRow[numInd] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check down digit 2
        else if ((nextRow != undefined) && (nextRow[numInd + 1] != undefined) && (nextRow[numInd + 1] != '.') && (nextRow[numInd + 1] != ' ') && (nextRow[numInd + 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd + 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
        // Check down digit 3
        else if ((nextRow != undefined) && (nextRow[numInd + 2] != undefined) && (nextRow[numInd + 2] != '.') && (nextRow[numInd + 2] != ' ') && (nextRow[numInd + 2] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd + 2]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '   ');
        }
      }
    });
  }
});

// 2 Digits
input.forEach(el => {
  let matches = el.match(/\d{1,3}/g);
  let currentRowIndex = input.indexOf(el);
  let currentRow = input[currentRowIndex];
  let nextRow = input[currentRowIndex + 1];
  let lastRow = input[currentRowIndex - 1];

  if (matches != null) {
    matches.forEach(num => {
      let numInd = currentRow.indexOf(num);
      if (num.length === 2) {
        // Check left
        if ((currentRow[numInd - 1] != undefined) && (currentRow[numInd - 1] != '.') && (currentRow[numInd - 1] != ' ') && (currentRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + currentRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check right
        else if ((currentRow[numInd + 2] != undefined) && (currentRow[numInd + 2] != '.') && (currentRow[numInd + 2] != ' ') && (currentRow[numInd + 2] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + currentRow[numInd + 2]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check up + left
        else if ((lastRow != undefined) && (lastRow[numInd - 1] != undefined) && (lastRow[numInd - 1] != '.') && (lastRow[numInd - 1] != ' ') && (lastRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check up + right
        else if ((lastRow != undefined) && (lastRow[numInd + 2] != undefined) && (lastRow[numInd + 2] != '.') && (lastRow[numInd + 2] != ' ') && (lastRow[numInd + 2] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd + 2]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check up digit 1
        else if ((lastRow != undefined) && (lastRow[numInd] != undefined) && (lastRow[numInd] != '.') && (lastRow[numInd] != ' ') && (lastRow[numInd] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check up digit 2
        else if ((lastRow != undefined) && (lastRow[numInd + 1] != undefined) && (lastRow[numInd + 1] != '.') && (lastRow[numInd + 1] != ' ') && (lastRow[numInd + 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd + 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check down + left
        else if ((nextRow != undefined) && (nextRow[numInd - 1] != undefined) && (nextRow[numInd - 1] != '.') && (nextRow[numInd - 1] != ' ') && (nextRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check down + right
        else if ((nextRow != undefined) && (nextRow[numInd + 2] != undefined) && (nextRow[numInd + 2] != '.') && (nextRow[numInd + 2] != ' ') && (nextRow[numInd + 2] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd + 2]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check down digit 1
        else if ((nextRow != undefined) && (nextRow[numInd] != undefined) && (nextRow[numInd] != '.') && (nextRow[numInd] != ' ') && (nextRow[numInd] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
        // Check down digit 2
        else if ((nextRow != undefined) && (nextRow[numInd + 1] != undefined) && (nextRow[numInd + 1] != '.') && (nextRow[numInd + 1] != ' ') && (nextRow[numInd + 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd + 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, '  ');
        }
      }
    });
  }
});

// 1 Digit
input.forEach(el => {
  let matches = el.match(/\d{1,3}/g);
  let currentRowIndex = input.indexOf(el);
  let currentRow = input[currentRowIndex];
  let nextRow = input[currentRowIndex + 1];
  let lastRow = input[currentRowIndex - 1];
  
  if (matches != null) {
    matches.forEach(num => {
      let numInd = currentRow.indexOf(num);
      if (num.length === 1) {
        // Check left
        if ((currentRow[numInd - 1] != undefined) && (currentRow[numInd - 1] != '.') && (currentRow[numInd - 1] != ' ') && (currentRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + currentRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, ' ');
        }
        // Check right
        else if ((currentRow[numInd + 1] != undefined) && (currentRow[numInd + 1] != '.') && (currentRow[numInd + 1] != ' ') && (currentRow[numInd + 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + currentRow[numInd + 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, ' ');
        }
        // Check up + left
        else if ((lastRow != undefined) && (lastRow[numInd - 1] != undefined) && (lastRow[numInd - 1] != '.') && (lastRow[numInd - 1] != ' ') && (lastRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, ' ');
        }
        // Check up + right
        else if ((lastRow != undefined) && (lastRow[numInd + 1] != undefined) && (lastRow[numInd + 1] != '.') && (lastRow[numInd + 1] != ' ') && (lastRow[numInd + 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd + 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, ' ');
        }
        // Check up
        else if ((lastRow != undefined) && (lastRow[numInd] != undefined) && (lastRow[numInd] != '.') && (lastRow[numInd] != ' ') && (lastRow[numInd] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + lastRow[numInd]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, ' ');
        }
        // Check down + left
        else if ((nextRow != undefined) && (nextRow[numInd - 1] != undefined) && (nextRow[numInd - 1] != '.') && (nextRow[numInd - 1] != ' ') && (nextRow[numInd - 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd - 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, ' ');
        }
        // Check down + right
        else if ((nextRow != undefined) && (nextRow[numInd + 1] != undefined) && (nextRow[numInd + 1] != '.') && (nextRow[numInd + 1] != ' ') && (nextRow[numInd + 1] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd + 1]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, ' ');
        }
        // Check down
        else if ((nextRow != undefined) && (nextRow[numInd] != undefined) && (nextRow[numInd] != '.') && (nextRow[numInd] != ' ') && (nextRow[numInd] != /\d/g)) {
          sum += Number(num);
          console.log(num + ' ' + nextRow[numInd]);
          input[currentRowIndex] = input[currentRowIndex].replace(num, ' ');
        }
      }
    });
  }
});

console.log(sum);
