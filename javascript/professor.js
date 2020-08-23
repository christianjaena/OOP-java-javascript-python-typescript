const Person = require('./person');
const Course = require('./course');

class Professor extends Person {
	constructor(first, last, dob, phone, address, salary) {
		super(first, last, dob, phone, address);
		this.salary = salary;
		this.courses = []
		this.gotRaise = false;
	}

	checkForRaise() {
		if (this.courses.length >= 4 && !this.gotRaise) {
			this.salary += 20000;
			this.gotRaise = true;
		}
	}

	addCourse() {
		if (!(course instanceof Course)) {
			throw Error("Invalid Course ...")
		}
	}
}

module.exports = Professor;