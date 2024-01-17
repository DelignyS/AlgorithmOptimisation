function countBuildingsWithViewSinglePass(heights) {
  // So this is a function that takes in an array of building heights and counts how many buildings have a view to the sea. The view is unobstructed if there are no buildings taller than the current one to its left.
  let count = 0; // So we're going to initialize a counter to zero.
  let max_height = 0; // So we're going to initialize a variable to keep track of the maximum height we've seen so far.
  for (let i = heights.length - 1; i >= 0; i--) {
    // So we're going to loop through the array in reverse order, from right to left.
    if (heights[i] > max_height) {
      // So if the height of the current building is greater than the maximum height we've seen so far, then we're going to increment the counter and update the maximum height.
      count++; // So we're going to increment the counter.
      max_height = heights[i]; // So we're going to update the maximum height.
    }
  }
  return count; // So we're going to return the counter.
}

console.log("countBuildingsWithViewSinglePass");
console.log(countBuildingsWithViewSinglePass([3, 7, 8, 3, 6, 1])); // So why it's 3? Because 8, 7, and 3 have a view to the sea.
console.log(countBuildingsWithViewSinglePass([1, 4, 5, 8, 2])); // 1
/*This JavaScript function countBuildingsWithViewSinglePass takes an array of building heights
 and counts how many buildings have a view to the sea. The view is unobstructed if there are no buildings
  taller than the current one to its left.

The function starts by initializing a counter count to 0 and a variable max_height to 0.

Then it iterates over the array of building heights in reverse order, from right to left (line 5). For each building,
 it checks if its height is greater than the current max_height (line 6).

If the current building is taller than max_height, it increments the count (line 7) and updates max_height to the height
 of the current building (line 8).

This process is repeated for each building in the array. The function finally returns the count of buildings with a view.

The time complexity of this algorithm is O(n) because it makes a single pass through the array. This is more efficient than the
 previous O(n^2) algorithm.*/
