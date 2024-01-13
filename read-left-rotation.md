# LEFT ROTATION DATA STRUCTURE HACKERRANK

## EXPLANATION

This code defines a function named `rotateLeft` that takes two parameters: `d` and `arr`. The function is intended to rotate the elements of the array `arr` to the left by `d` positions, and return the rotated array. For example, if `arr` is `[1, 2, 3, 4, 5]` and `d` is `2`, then the function should return `[3, 4, 5, 1, 2]`.

Here is a step-by-step explanation of the code:

- The first `if` statement checks if the array is empty or has only one element. If so, there is no need to rotate it, so the function returns the array as it is.
- The second `if` statement checks if the number of positions `d` is valid. If `d` is negative or greater than the length of the array, then the rotation does not make sense, so the function returns the array as it is.
- The next line uses the modulo operator (`%`) to calculate the effective number of positions to rotate. This is because rotating the array by `d` positions is equivalent to rotating it by `d % arr.length` positions. For example, if the array has 5 elements and `d` is 7, then rotating it by 7 positions is the same as rotating it by 2 positions.
- The next line creates a copy of the array using the `concat` method. This is to avoid modifying the original array, which is considered a bad practice in programming. The copy is stored in a variable named `rotatedArray`.
- The next line starts a `for` loop that iterates `d` times. In each iteration, the following steps are performed:
    - The first element of `rotatedArray` is removed using the `shift` method, and stored in a variable named `frontItem`.
    - The `frontItem` is added to the end of `rotatedArray` using the `push` method.
- The last line returns the `rotatedArray`, which is the result of the rotation.
