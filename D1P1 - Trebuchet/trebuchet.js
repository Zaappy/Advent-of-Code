// oh god

const fs = require('fs');
const inputArr = fs.readFileSync('./amendedDoc.txt', 'utf8').split('\n');
let regex1 = /\D/gi;
let regex2 = /(?!^)[\s\S](?!$)/g;
let valuesArr = [];
let sum = 0;

inputArr.forEach(el => {
  valuesArr.push(el.replace(regex1, ''));
});

valuesArr.forEach(el => {
  if (el.length > 2) {
    valuesArr[valuesArr.indexOf(el)] = Number(el.replace(regex2, ''));
  } else if (el.length < 2) {
    valuesArr[valuesArr.indexOf(el)] = Number(el.concat(el));
  } else {
    valuesArr[valuesArr.indexOf(el)] = Number(el);
  }
});

valuesArr.forEach(el => {
  sum += el;
});

console.log(sum);

