// Exercice 2
function countBuildingsWithViewO2(heights) {
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
      let hasView = true;
      for (let j = i + 1; j < heights.length; j++) {
          if (heights[j] >= heights[i]) {
              hasView = false;
              break;
          }
      }
      if (hasView) {
          count++;
      }
  }
  return count;
}

console.log("countBuildingsWithViewO2");
console.log(countBuildingsWithViewO2([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildingsWithViewO2([1, 4, 5, 8])); // 1