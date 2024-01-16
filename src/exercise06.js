// Exercice 6
function countBuildingsWithViewSinglePass(heights) {
  let count = 0;
  let max_height = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > max_height) {
          count++;
          max_height = heights[i];
      }
  }
  return count;
}

console.log("countBuildingsWithViewSinglePass");
console.log(countBuildingsWithViewSinglePass([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildingsWithViewSinglePass([1, 4, 5, 8])); // 1