// Complete the hourglassSum function below.
function hourglassSum(arr) {
    // Initialize the maximum sum to the smallest possible value
    let maxSum = -Infinity;
    // Loop through the rows of the array, except the last two
    for (let i = 0; i < arr.length - 2; i++) {
      // Loop through the columns of the array, except the last two
      for (let j = 0; j < arr [i].length - 2; j++) {
        // Calculate the sum of the current hourglass
        let sum = arr [i] [j] + arr [i] [j + 1] + arr [i] [j + 2] +
                  arr [i + 1] [j + 1] +
                  arr [i + 2] [j] + arr [i + 2] [j + 1] + arr [i + 2] [j + 2];
        // Update the maximum sum if the current sum is larger
        maxSum = Math.max (maxSum, sum);
      }
    }
    // Return the maximum sum
    return maxSum;
  }
  