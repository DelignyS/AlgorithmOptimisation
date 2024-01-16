// Exercice 3
function checkSumO3(numbers, k) {
  let seenNumbers = new Set();
  for (let i = 0; i < numbers.length; i++) {
      if (seenNumbers.has(k - numbers[i])) {
          return true;
      }
      seenNumbers.add(numbers[i]);
  }
  return false;
}

console.log("checkSumO3");
console.log(checkSumO3([10, 15, 3, 7], 17)); // true
console.log(checkSumO3([1, 8, 10, 21], 19)); // false