 # Breaking Records

 ## Explanation

This code snippet implements a function called `breakingRecords` that takes an array of scores as input and returns an array containing two integers: the number of times the maximum score was broken, and the number of times the minimum score was broken.

**Implementation Details**

The function initializes two variables, `max` and `min`, to the first score in the array. These variables will store the maximum and minimum scores seen so far.

It also initializes two counters, `maxCount` and `minCount`, to 0. These counters will store the number of times the maximum and minimum scores have been broken, respectively.

The function then iterates through the rest of the scores in the array. For each score, it checks if it is greater than the current maximum score. If it is, the function updates the maximum score and increments the `maxCount` counter.

The function also checks if the current score is less than the current minimum score. If it is, the function updates the minimum score and increments the `minCount` counter.

After iterating through all of the scores, the function returns an array containing the `maxCount` and `minCount` counters.

**Example**

Here is an example of how the `breakingRecords` function works:

```javascript
const scores = [10, 5, 20, 12, 15, 22];
const result = breakingRecords(scores);
console.log(result); // [2, 2]
```

In this example, the maximum score is broken twice (when the score increases from 10 to 20, and when it increases from 20 to 22). The minimum score is also broken twice (when the score decreases from 10 to 5, and when it decreases from 12 to 15). Therefore, the function returns the array `[2, 2]`.

**Conclusion**

The `breakingRecords` function is a simple but efficient way to find the number of times the maximum and minimum scores are broken in an array of scores. It can be used to analyze sports statistics, game scores, or any other type of data where records are kept.

