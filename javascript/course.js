const Professor = require('./professor');
const Enroll = require('./enroll');

class Course {
	constructor(name, code, max_, min_, professor) {
		this.name = name;
		this.code = code;
		this.max = max_;
		this.min = min_;
		this.professors = [];
		this.enrollments = [];

		if (professor instanceof Professor) {
			this.professors.push(professor);
		} else if (professor.isArray()) {
			professor.forEach(item => {
				if (!(item instanceof Professor)) {
					throw Error('Invalid Professor');
				}
			});
			this.professors = professor;
		} else {
			throw Error('Invalid Professor...');
		}
	}

	addProfessor(professor) {
		if (!(professor instanceof Professor)) {
			throw Error("Invalid Professor...")
		}
		this.professors.push(professor)
	}

	addEnrollment(enroll) {
		if (!(enroll instanceof Enroll)) {
			throw Error("Invalid Enroll");
		}
		if (this.enrollments.length === this.max) {
			throw Error("Cannot enroll, course is full ....");
		}

		this.enrollments.push(enroll);
	}

	isCancelled() {
		return this.enrollments.length < this.min;
	}
}

module.exports = Course;