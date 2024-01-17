function checkSumO2(numbers, k) { // So this is a function that takes in an array of numbers and a number k and returns true if any two numbers in the array add up to k, and false otherwise.
  for (let i = 0; i < numbers.length; i++) { // So we're going to loop through the array, and for each element in the array, we're going to loop through the array again.
      for (let j = i + 1; j < numbers.length; j++) { // So this is a nested loop, so we're going to loop through the array twice. So we're going to loop through the array once, and then for each element in the array, we're going to loop through the array again.
          if (numbers[i] + numbers[j] === k) { // So if the sum of the two numbers is equal to k, then we're going to return true.
              return true;
          }
      }
  }
  return false; // If we get to the end of the function and we haven't returned true, then we're going to return false.
}

console.log("checkSumO2");
console.log(checkSumO2([10, 15, 3, 7], 17)); // true
console.log(checkSumO2([1, 8, 10, 21], 19)); // false

/*This algorithm is a function that checks if two numbers in a given array can be added together to get a specific value k.

It uses a brute force approach, where it checks every possible pair of numbers in the array. If a pair is found whose sum equals k, the function returns true. If no matching pair is found, the function returns false.

The time complexity of this algorithm is O(n^2) because there are two nested loops that traverse the array.*/