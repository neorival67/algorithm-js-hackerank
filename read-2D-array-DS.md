 # Hourglass Sum

This code calculates the maximum sum of an hourglass in a 2D array. An hourglass in a 2D array is a set of 7 numbers arranged in the following pattern:

```
a b c
  d
e f g
```

The function `hourglassSum` takes a 2D array as input and returns the maximum sum of any hourglass in the array.

## Implementation Details

The function `hourglassSum` is implemented using a nested loop. The outer loop iterates over the rows of the array, and the inner loop iterates over the columns of the array. For each position in the array, the function calculates the sum of the current hourglass and updates the maximum sum if the current sum is larger.

Here is a step-by-step explanation of the code:

1. Initialize the maximum sum to the smallest possible value:

```javascript
let maxSum = -Infinity;
```

2. Loop through the rows of the array, except the last two:

```javascript
for (let i = 0; i < arr.length - 2; i++) {
```

3. Loop through the columns of the array, except the last two:

```javascript
for (let j = 0; j < arr [i].length - 2; j++) {
```

4. Calculate the sum of the current hourglass:

```javascript
let sum = arr [i] [j] + arr [i] [j + 1] + arr [i] [j + 2] +
                  arr [i + 1] [j + 1] +
                  arr [i + 2] [j] + arr [i + 2] [j + 1] + arr [i + 2] [j + 2];
```

5. Update the maximum sum if the current sum is larger:

```javascript
maxSum = Math.max (maxSum, sum);
```

6. Return the maximum sum:

```javascript
return maxSum;
```

## Example

Here is an example of how to use the `hourglassSum` function:

```javascript
const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1,
```
