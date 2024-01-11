// Define a function that takes in the parameters given in the problem
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Initialize variables to store the number of apples and oranges that land on the house
    let appleCount = 0;
    let orangeCount = 0;
  
    // Loop through the array of apples and add the distance from the apple tree to each element
    for (let i = 0; i < apples.length; i++) {
      apples[i] += a;
      // Check if the apple falls within the range of the house
      if (apples[i] >= s && apples[i] <= t) {
        // Increment the apple count
        appleCount++;
      }
    }
  
    // Loop through the array of oranges and add the distance from the orange tree to each element
    for (let i = 0; i < oranges.length; i++) {
      oranges[i] += b;
      // Check if the orange falls within the range of the house
      if (oranges[i] >= s && oranges[i] <= t) {
        // Increment the orange count
        orangeCount++;
      }
    }
  
    // Print the apple and orange counts
    console.log(appleCount);
    console.log(orangeCount);
  }
  