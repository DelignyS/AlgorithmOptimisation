function checkSumO3(numbers, k) { // So this is a function that takes in an array of numbers and a number k and returns true if any two numbers in the array add up to k, and false otherwise.
  let seenNumbers = new Set(); // So we're going to initialize a set to keep track of the numbers we've seen so far. new Set() is a constructor that creates a new empty set.
  for (let i = 0; i < numbers.length; i++) { // So we're going to loop through the array, and for each element in the array, we're going to loop through the array again.
      if (seenNumbers.has(k - numbers[i])) { // So if the difference between k and the current number is in the seenNumbers set, then we're going to return true.
          return true; // So we're going to return true.
      } // So if the difference is not in the set, then we're going to add the current number to the set and continue to the next number.
      seenNumbers.add(numbers[i]); // So we're going to add the current number to the set.
  }
  return false;
}

console.log("checkSumO3");
console.log(checkSumO3([10, 15, 3, 7], 17)); // true
console.log(checkSumO3([1, 8, 10, 21], 19)); // false

/* This JavaScript function checkSumO3 checks if there are two numbers in an array that can be added together to get a specific value k.

It uses a more efficient approach than the previous function by utilizing a Set data structure to keep track of numbers we have seen so far.

The function iterates over the array of numbers (line 4). For each number, it checks if the difference between k and the current number is in the seenNumbers set (line 5). If it is, that means we have found two numbers which add up to k, and the function returns true.

If the difference is not in the set, it adds the current number to the seenNumbers set (line 7) and continues to the next number.

If the function iterates over the entire array and doesn't find two numbers that add up to k, it returns false (line 9).

The time complexity of this algorithm is O(n) because it makes a single pass through the array. This is more efficient than the previous O(n^2) algorithm. */