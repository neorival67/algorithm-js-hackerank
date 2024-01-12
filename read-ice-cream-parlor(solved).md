# ICE CREAM PARLOR Algorithm Hackkerank

## Explanation 🙌

This code is a JavaScript solution for the Ice Cream Parlor problem, which I explained in my previous message. The code defines a function named `icecreamParlor` that takes two parameters: `m` and `arr`. `m` is the amount of money they have to spend, and `arr` is an array of integers representing the cost of each flavor of ice cream. The function returns an array of two integers representing the indices of the two flavors that add up to the given amount of money.

The code uses a map, which is a data structure that stores key-value pairs, to keep track of the cost and index of each flavor. The code then loops through the array of costs and checks if the complement of the current cost is already in the map. The complement of a cost is the difference between the total amount of money and the current cost. For example, if the total amount of money is 4 and the current cost is 1, then the complement is 3.

If the complement is in the map, then the code returns the indices of the current cost and its complement. The indices are incremented by one because the problem expects one-based indexing. If the complement is not in the map, then the code adds the current cost and its index to the map for future lookups.

The code has a time complexity of O(n), where n is the number of flavors, and a space complexity of O(n), where n is the number of flavors. This is because the code only needs to scan the array of costs once, and the map can store at most n elements.