function repeatedString(s, n) {
    let count = 0;
      // loop through the string and increment the count for each a
      for (let char of s) {
        if (char === "a") {
          count++;
        }
      }
      // multiply the count by the quotient of number and string length
      count *= Math.floor(n / s.length);
      // loop through the remainder of number and string length and increment the count for each a
      for (let i = 0; i < n % s.length; i++) {
        if (s[i] === "a") {
          count++;
        }
      }
      // return the final count
      return count;
    
}