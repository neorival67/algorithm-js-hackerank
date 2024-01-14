# Flatland Space Statiton Algorithm Hackerank

## Explanation

I see that you are interested in solving the Flatland Space Stations problem using JavaScript. I found a possible that uses the following logic:

- Sort the array of space station locations in ascending order.
- Initialize an empty array to store the maximum distance for each city.
- Push the distance from the first city to the first space station, and the distance from the last city to the last space station, to the array.
- Loop through the space station locations and calculate the distance between two adjacent space stations. Divide this distance by two and push it to the array.
- Return the maximum value in the array.

we need to consider three cases:

- The first city to the first space station. This is the distance between the city with index 0 and the space station with the smallest index in the array `c`.
- The last city to the last space station. This is the distance between the city with index `n - 1` and the space station with the largest index in the array `c`.
- The cities between two space stations. This is the distance between the city and the midpoint of the two space stations. For example, if there are space stations at index 2 and 6, then the city at index 4 is 2 units away from the midpoint, which is 4.

The maximum distance is then the largest of these three cases. For example, if `n = 5` and `c = [0, 4]`, then the maximum distance is 2, which is the distance between the city at index 2 and the midpoint of the space stations at index 0 and 4.


