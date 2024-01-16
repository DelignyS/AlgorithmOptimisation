// Exercice 1
function checkSumO2(numbers, k) {
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === k) {
              return true;
          }
      }
  }
  return false;
}

console.log("checkSumO2");
console.log(checkSumO2([10, 15, 3, 7], 17)); // true
console.log(checkSumO2([1, 8, 10, 21], 19)); // false