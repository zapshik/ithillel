class Group {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(studentName) {
        this.students = this.students.filter(student => student.name !== studentName);
    }

    getTopStudentsByGrade() {
        return [...this.students].sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }

    getTopStudentsByAttendance() {
        return [...this.students].sort((a, b) => b.getAttendanceRate() - a.getAttendanceRate());
    }

    getInfo() {
        return this.students.map(student => student.getInfo()).join("\n");
    }
}

const group = new Group("Frontend");
group.addStudent(student1);

const student2 = new Student("Bob", "Johnson", 2001, "JavaScript");
student2.addGrade(95);
student2.addGrade(85);
student2.addAttendance();

group.addStudent(student2);

console.log("Рейтинг по оценкам:");
console.log(group.getTopStudentsByGrade().map(s => s.getInfo()).join("\n"));

console.log("\nРейтинг по посещаемости:");
console.log(group.getTopStudentsByAttendance().map(s => s.getInfo()).join("\n"));
