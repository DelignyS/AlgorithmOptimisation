# 🚀 AlgorithmsOptimisation

A lexic/tool built with [Vite](https://vitejs.dev/). This README will guide you on how to install and use it.

## 📚 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Building for Production](#building-for-production)
- [Serving the Production Build](#serving-the-production-build)

## 🔧 Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## 🛠 Installation

1. Clone this repository to your local machine using:
   
   ``` git clone https://github.com/DelignyS/AlgorithmOptimisation.git```

2.Navigate to your project Folder

``` cd your-repo```

3. install the dependencies:

``` npm install```

## 🚀 Usage 

Now to use It at your will juste run ``` npm start```

### Exercise 1: Check Sum

In this exercise, we have a function named `checkSumO2` which takes an array of numbers and a target number `k` as arguments. The function checks if there are two numbers in the array that add up to `k`.

### How it works

The function uses a nested loop to iterate over each pair of numbers in the array. For each pair, it checks if the sum of the two numbers is equal to `k`. If it finds such a pair, it immediately returns `true`.

If the function has checked all pairs and hasn't returned `true`, it means no such pair exists, so it returns `false`.

### Example

For example, when we call `checkSumO2([10, 15, 3, 7], 17)`, the function returns `true`. This is because the numbers 10 and 7 in the array add up to 17.

On the other hand, when we call `checkSumO2([1, 8, 10, 21], 19)`, the function returns `false`. This is because there are no two numbers in the array that add up to 19.

### Exercise 2: Count Buildings with View

In this exercise, we have a function named `countBuildingsWithViewO2` which takes an array of building heights as an argument. The function counts the number of buildings that have a view to the sea. The sea is assumed to be on the right side of the buildings.

### How it works

The function iterates over each building from left to right. For each building, it checks if there is any building to its right that is taller or of the same height. If there is, it means the current building does not have a view to the sea, so it moves on to the next building. If there isn't, it means the current building has a view to the sea, so it increments a counter.

The function returns the counter, which represents the number of buildings with a view to the sea.

### Example

For example, when we call `countBuildingsWithViewO2([4, 2, 3, 1])`, the function returns `2`. This is because only the first and third buildings from the left have a view to the sea. The second building is blocked by the first building, and the fourth building is blocked by the third building.

## Exercise 3: Check Sum Optimized

In this exercise, we have an optimized function named `checkSumO3` which takes an array of numbers and a target number `k` as arguments. The function checks if there are two numbers in the array that add up to `k`.

### How it works

The function uses a JavaScript `Set` to keep track of the numbers it has seen so far. For each number in the array, it checks if the difference between `k` and the current number is in the set of seen numbers. If it is, it means there are two numbers in the array that add up to `k`, so it immediately returns `true`.

If the function has checked all numbers and hasn't returned `true`, it means no such pair exists, so it returns `false`.

This optimized function has a time complexity of O(n), which is an improvement over the O(n^2) time complexity of the function in Exercise 1.

### Example

For example, when we call `checkSumO3([10, 15, 3, 7], 17)`, the function returns `true`. This is because the numbers 10 and 7 in the array add up to 17.

On the other hand, when we call `checkSumO3([1, 8, 10, 21], 19)`, the function returns `false`. This is because there are no two numbers in the array that add up to 19.

## Exercise 4: Count Buildings with View Optimized

In this exercise, we have an optimized function named `countBuildingsWithViewO4` which takes an array of building heights as an argument. The function counts the number of buildings that have a view to the sea. The sea is assumed to be on the right side of the buildings.

### How it works

The function iterates over each building from right to left (i.e., starting from the building closest to the sea). It keeps track of the maximum height it has seen so far. For each building, if its height is greater than the maximum height seen so far, it means the building has a view to the sea, so it increments a counter and updates the maximum height.

The function returns the counter, which represents the number of buildings with a view to the sea.

This optimized function has a time complexity of O(n), which is an improvement over the O(n^2) time complexity of the function in Exercise 2.

### Example

For example, when we call `countBuildingsWithViewO4([3, 7, 8, 3, 6, 1])`, the function returns `3`. This is because the third, second, and first buildings from the right have a view to the sea.

On the other hand, when we call `countBuildingsWithViewO4([1, 4, 5, 8])`, the function returns `1`. This is because only the first building from the right (the tallest one) has a view to the sea.

## Exercise 5: Check Sum Single Pass

In this exercise, we have a function named `checkSumSinglePass` which takes an array of numbers and a target number `k` as arguments. The function checks if there are two numbers in the array that add up to `k`.

### How it works

The function uses a JavaScript `Set` to keep track of the numbers it has seen so far. For each number in the array, it checks if the difference between `k` and the current number is in the set of seen numbers. If it is, it means there are two numbers in the array that add up to `k`, so it immediately returns `true`.

If the function has checked all numbers and hasn't returned `true`, it means no such pair exists, so it returns `false`.

This function has a time complexity of O(n), which means it only needs to pass through the array once, making it an efficient solution.

### Example

For example, when we call `checkSumSinglePass([10, 15, 3, 7], 17)`, the function returns `true`. This is because the numbers 10 and 7 in the array add up to 17.

On the other hand, when we call `checkSumSinglePass([1, 8, 10, 21], 19)`, the function returns `false`. This is because there are no two numbers in the array that add up to 19.

## Exercise 6: Count Buildings with View Single Pass

In this exercise, we have a function named `countBuildingsWithViewSinglePass` which takes an array of building heights as an argument. The function counts the number of buildings that have a view to the sea. The sea is assumed to be on the right side of the buildings.

### How it works

The function iterates over each building from right to left (i.e., starting from the building closest to the sea). It keeps track of the maximum height it has seen so far. For each building, if its height is greater than the maximum height seen so far, it means the building has a view to the sea, so it increments a counter and updates the maximum height.

The function returns the counter, which represents the number of buildings with a view to the sea.

This function has a time complexity of O(n), which means it only needs to pass through the array once, making it an efficient solution.

### Example

For example, when we call `countBuildingsWithViewSinglePass([3, 7, 8, 3, 6, 1])`, the function returns `3`. This is because the third, second, and first buildings from the right have a view to the sea.

On the other hand, when we call `countBuildingsWithViewSinglePass([1, 4, 5, 8])`, the function returns `1`. This is because only the first building from the right (the tallest one) has a view to the sea.

Thanks