function calculateAverageGrade(students) {
    let total = students.reduce((sum, student) => sum + student.grade, 0);
    return total / students.length;
}

const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students));