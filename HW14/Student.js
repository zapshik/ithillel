class Student {
    constructor(name, surname, birthYear, course) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = [];
        this.courses = [course];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    addAttendance() {
        this.attendance.push(true);
    }

    getAverageGrade() {
        return this.grades.length ? this.grades.reduce((a, b) => a + b, 0) / this.grades.length : 0;
    }

    getAttendanceRate() {
        return this.attendance.length ? this.attendance.filter(a => a).length / this.attendance.length : 0;
    }

    changeCourse(newCourse) {
        this.courses.push(newCourse);
    }

    removeCourse(course) {
        this.courses = this.courses.filter(c => c !== course);
    }

    getInfo() {
        return `${this.name} ${this.surname}, Курсы: ${this.courses.join(", ")}, Средняя оценка: ${this.getAverageGrade().toFixed(2)}, Посещаемость: ${(this.getAttendanceRate() * 100).toFixed(1)}%`;
    }
}


const student1 = new Student("Alice", "Smith", 2000, "JavaScript");
student1.addGrade(90);
student1.addGrade(80);
student1.addAttendance();
student1.addAttendance();
student1.changeCourse("React");

console.log(student1.getInfo());
