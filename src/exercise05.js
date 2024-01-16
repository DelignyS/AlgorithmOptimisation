// Exercice 5
function checkSumSinglePass(numbers, k) {
  let seenNumbers = new Set();
  for (let number of numbers) {
      if (seenNumbers.has(k - number)) {
          return true;
      }
      seenNumbers.add(number);
  }
  return false;
}

console.log("checkSumSinglePass05");
console.log(checkSumSinglePass([10, 15, 3, 7], 17)); // true
console.log(checkSumSinglePass([1, 8, 10, 21], 19)); // false