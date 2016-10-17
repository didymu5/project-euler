const test3and5 = 1000;
const getMultiplesThreeFive = (num) => {
  var tempArr = [];
  for (var i = num - 1; i > 0; i--) {
    if (tempArr[tempArr.length-1] === i) {
      continue;
    };
    if (i % 3 === 0 || i % 5 === 0) {
      tempArr.push(i);
    };
  };
  return tempArr;
}

getMultiplesThreeFive(test3and5);

const sumArray = (numArry) => {
  if (!numArry) return 'needs array';
  var total = 0;
  total = numArry.reduce((a, b) => a + b, 0);
  return total;
}

console.log(sumArray(getMultiplesThreeFive(test3and5)));