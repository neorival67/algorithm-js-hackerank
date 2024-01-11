# Apple and Oranges Algortihm Hackkerank

## Explanation

- First, you define a function named `countApplesAndOranges` that takes in seven parameters: `s`, `t`, `a`, `b`, `apples`, `oranges`, and `return`. These parameters represent the starting and ending points of Sam's house, the location of the apple and orange trees, the arrays of distances at which each fruit falls from its respective tree, and the output format that you want to return.
- Next, you initialize two variables, `appleCount` and `orangeCount`, to store the number of apples and oranges that land on Sam's house. You set them to zero initially.
- Then, you loop through the array of apples and add the distance from the apple tree (`a`) to each element. This gives you the final position of each apple on the x-axis.
- For each apple, you check if its position falls within the range of Sam's house (`s` to `t`). If it does, you increment the `appleCount` by one.
- Similarly, you loop through the array of oranges and add the distance from the orange tree (`b`) to each element. This gives you the final position of each orange on the x-axis.
- For each orange, you check if its position falls within the range of Sam's house (`s` to `t`). If it does, you increment the `orangeCount` by one.
- Finally, you check the value of the `return` parameter. If it is `true`, you return an array of two numbers, `[orangeCount, appleCount]`. If it is `false`, you print the two numbers to the console, separated by a space.

## Source

Source: Conversation with Bing, 1/11/2024
(1) Algorithms Tutorial - GeeksforGeeks. https://www.geeksforgeeks.org/fundamentals-of-algorithms/.
(2) What is an algorithm and why should you care? - Khan Academy. https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/v/what-are-algorithms.
(3) What is an algorithm? - BBC Bitesize. https://www.bbc.co.uk/bitesize/topics/z3tbwmn/articles/z3whpv4.
(4) All about algorithms - BBC Bitesize. https://www.bbc.co.uk/bitesize/articles/zqrq7ty.
(5) Algorithm - Simple English Wikipedia, the free encyclopedia. https://simple.wikipedia.org/wiki/Algorithm.
(6) en.wikipedia.org. https://en.wikipedia.org/wiki/Algorithm.