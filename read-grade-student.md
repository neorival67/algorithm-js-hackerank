## GRADE STUDENTS HACKERANK SOLUTION

### Explanation code

1. The function gradingStudents takes an array of grades as its parameter.

2. Inside the function, it uses the map function to iterate over each element (grade) in the input array.

3.  `grade >= 38 && grade % 5 >= 3`
This condition checks if the grade is greater than or equal to 38 and if the difference between the grade and the next multiple of 5 is greater than or equal to 3.

4. If the condition is true, it means that the grade needs to be rounded up. The calculation for the new rounded grade is as follows:
`grade - (grade % 5) + 5`
This subtracts the remainder when dividing the grade by 5 from the grade, then adds 5 to get the next multiple of 5.

5. If the condition is false, it means that the grade does not need to be rounded, so the original grade is returned.

6. The map function applies this logic to each element in the input array, resulting in a new array of rounded grades.

7. The final rounded grades array is stored in the final variable, which is then returned by the function.

docs for `map` algorithm javascript
[Map](https://devdocs.io/javascript/global_objects/map)