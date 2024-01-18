function birthday(s, d, m) {
    // Write your code 
    let ans = [0];
    // Loop through the array from the beginning to the end minus the subarray length
    for (let i = 0; i <= s.length - m; i++) {
        // Calculate the sum of the subarray starting from index i
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        // If the sum matches the birth day, increment the answer
        if (sum == d) {
            ans++;
        }
    }
    // Return the answer
    return ans;

}

