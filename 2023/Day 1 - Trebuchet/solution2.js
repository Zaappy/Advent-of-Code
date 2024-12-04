// idk how AoC works uhhhh

const fs = require('fs');
let inputArr = fs.readFileSync('./input', 'utf8').split('\n');
let regexLetters = /\D/gi;
let regexMiddle = /(?!^)[\s\S](?!$)/g;
let sum = 0;

inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('nine', 'n9e');
});
inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('eight', 'e8t');
});
inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('seven', 's7n');
});
inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('six', 's6x');
});
inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('five', 'f5e');
});
inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('four', 'f4r');
});
inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('three', 't3e');
});
inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('two', 't2o');
});
inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replaceAll('one', 'o1e');
});

inputArr.forEach(el => {
  inputArr[inputArr.indexOf(el)] = el.replace(regexLetters, '');
});

inputArr.forEach(el => {
  if (el.length > 2) {
    inputArr[inputArr.indexOf(el)] = Number(el.replace(regexMiddle, ''));
  } else if (el.length < 2) {
    inputArr[inputArr.indexOf(el)] = Number(el.concat(el));
  } else {
    inputArr[inputArr.indexOf(el)] = Number(el);
  }
});

inputArr.forEach(el => {
  sum += el;
});

console.log(sum);
