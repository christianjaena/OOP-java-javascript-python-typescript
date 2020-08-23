const Course = require('./course')
const Student = require('./student')

class Enroll {
	constructor(student, course) {
		if (!(student instanceof Student)) {
			throw Error("Invalid Student ...");
		}
		if (!(student instanceof Course)) {
			throw Error("Invalid Course ...");
		}
		this.student = student;
		this.course = course;
		this.grade = null;
		this.date = new Date();
	}

	setGrade(grade) {
		this.grade = grade;
	}
}

module.exports = Enroll;