# Reapeated String

## Explanation


 **Repeated String**

This code snippet implements a function called `repeatedString` that takes two arguments: a string `s` and an integer `n`. The function returns the number of times the letter 'a' appears in the first `n` characters of the infinitely repeated string `s`.

**Implementation Details**

The function first initializes a variable `count` to 0. This variable will be used to keep track of the number of times the letter 'a' appears in the string.

Next, the function uses a `for` loop to iterate through each character in the string `s`. For each character, the function checks if it is equal to the letter 'a'. If it is, the function increments the `count` variable by 1.

After the loop has completed, the function multiplies the `count` variable by the quotient of `n` and the length of the string `s`. This gives the number of times the letter 'a' appears in the first `n` characters of the infinitely repeated string `s`.

Finally, the function uses another `for` loop to iterate through the remainder of `n` and the length of the string `s`. For each character in the remainder, the function checks if it is equal to the letter 'a'. If it is, the function increments the `count` variable by 1.

The function then returns the final `count` variable.

**Example**

For example, if we call the function `repeatedString` with the following arguments:

```
s = "aba"
n = 10
```

The function will return the value 7. This is because the letter 'a' appears 3 times in the string "aba", and the string "aba" is repeated 3 times in the first 10 characters of the infinitely repeated string "aba".

**Code Snippet**

Here is the code snippet for the `repeatedString` function:

```javascript
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
      // loop through the remainder of number and string length and increment

