function breakingRecords(scores) {
    let max = scores[0], min = scores[0]; // initialize max and min to the first score
    let maxCount = 0, minCount = 0; // initialize counters for breaking records
    for (let i = 1; i < scores.length; i++) { // loop through the rest of the scores
        if (scores[i] > max) { // if the current score is greater than the max
            max = scores[i]; // update the max
            maxCount++; // increment the max counter
        }
        if (scores[i] < min) { // if the current score is less than the min
            min = scores[i]; // update the min
            minCount++; // increment the min counter
        }
    }
    return [maxCount, minCount]; // return the counters as an array
}
const scores = [10, 7, 20, 12, 15, 22];
const result = breakingRecords(scores);
console.log(result); // [2,1]