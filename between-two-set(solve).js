function getTotalX(a, b) {
    // Write your code here
    // Initialize a variable to store the result
    let result = 0;
    // Find the maximum element of a and the minimum element of b
    let maxA = Math.max(...a);
    let minB = Math.min(...b);
    // Loop from maxA to minB
    for (let x = maxA; x <= minB; x++) {
        // Check if x is a factor of all elements of a
        let isFactorOfA = a.every(element => x % element === 0);
        // Check if x is a multiple of all elements of b
        let isMultipleOfB = b.every(element => element % x === 0);
        // If both conditions are true, increment the result
        if (isFactorOfA && isMultipleOfB) {
            result++;
        }
    }
    // Return the result
    return result;

}