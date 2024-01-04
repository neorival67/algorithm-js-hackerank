function gradingStudents(grades) {
    // Write your code here
    let final = grades.map((grade) => {
         return grade >= 38 && grade % 5 >= 3  ? grade - (grade % 5) + 5 : grade;  
    })
    return final;
}
