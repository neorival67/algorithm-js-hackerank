## NUMBER LINE JUMPS (Solve)

### Explanation Code

1. `if (v1 <= v2 )` This condition checks if the first kangaroo is not faster than the second one. If it is, it means the first kangaroo will never catch up to the second one, so the function returns 'NO'.

2. `else if ((x2 - x1) % (v1 - v2) == 0)`This condition checks whether the difference in starting positions (x2 - x1) is evenly divisible by the difference in velocities (v1 - v2). If it is, it means the kangaroos will land on the same spot after the same number of jumps, and the function returns 'YES'.

3. If neither of the above conditions is met, it means the kangaroos will never land on the same spot, and the function returns 'NO'.