const Person = require('./person');
const Enroll = require('./enroll');

class Student extends Person {
	constructor(first, last, dob, phone, address, international = false) {
		super(first, last, db, phone, address);
		this.international = international;
		this.enrolled = [];
	}

	addEnrollment(enroll) {
		if (!(enroll instanceof Enroll)) {
			throw Error('Invalid Enroll...');
		}

		this.enrolled.push(enroll);
	}

	isOnProbation() {
		return false;
	}

	isPartTime() {
		return this.enrolled.length <= 3;
	}
}

module.exports = Student;