// Exercice 4
function countBuildingsWithViewO4(heights) {
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

console.log("countBuildingsWithViewO4");
console.log(countBuildingsWithViewO4([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildingsWithViewO4([1, 4, 5, 8])); // 1