function countBuildingsWithViewO2(heights) { // So this is a function that takes in an array of building heights and counts how many buildings have a view to the sea. The view is unobstructed if there are no buildings taller than the current one to its right.
  let count = 0; // So we're going to initialize a counter to zero.
  for (let i = 0; i < heights.length; i++) { // So we're going to loop through the array, and for each element in the array, we're going to loop through the array again.
      let hasView = true; // So we're going to assume that the building has a view.
      for (let j = i + 1; j < heights.length; j++) { // So this is a nested loop, so we're going to loop through the array twice. So we're going to loop through the array once, and then for each element in the array, we're going to loop through the array again.
          if (heights[j] >= heights[i]) { // So if the height of the building to the right is greater than or equal to the height of the current building, then we're going to set hasView to false and break out of the loop.
              hasView = false; // So we're going to set hasView to false.
              break;
          }
      }
      if (hasView) {    // So if hasView is still true, then we're going to increment the counter.
          count++; // So we're going to increment the counter. And go back to the outer loop. So we're going to repeat this process for each building in the array.
      }
  }
  return count;
}

console.log("countBuildingsWithViewO2");
console.log(countBuildingsWithViewO2([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildingsWithViewO2([1, 4, 5, 8])); // 1

/*This JavaScript function countBuildingsWithViewO2 takes an array of building heights
 and counts how many buildings have a view to the sea. The view is unobstructed if there
  are no buildings taller than the current one to its right.

The outer loop (line 4) iterates over each building from left to right. For each building,
 it assumes that the building has a view (hasView = true).

The inner loop (line 6) starts from the building next to the current one and checks all the buildings
 to its right. If it finds a building that is taller or equal in height (heights[j] >= heights[i]), it sets hasView
  to false and breaks the inner loop because the current building's view is obstructed.

After the inner loop, if hasView is still true, it means no taller building was found to the right, so the current building
 has a view. The counter count is then incremented.

This process is repeated for each building in the array. The function finally returns the count of buildings with a view.

The time complexity of this algorithm is O(n^2) due to the nested loops. For each building, it potentially checks all other buildings
 to its right, leading to a quadratic number of operations in the worst case.

*/