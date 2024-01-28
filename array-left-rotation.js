function rotLeft(a, d) {
    // Write your code here
      // Create a copy of the array
  let newArr = a.slice();
  // Loop for d times
  for (let i = 0; i < d; i++) {
    // Remove the first element and append it to the end
    newArr.push(newArr.shift());
  }
  // Return the rotated array
  return newArr;
}