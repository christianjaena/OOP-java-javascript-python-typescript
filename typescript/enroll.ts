import Course from './course';
import Student from './student';

class Enroll {
	student: Student;
	course: Course;
	grade: number;
	date: Date;
	
	constructor(student: Student, course: Course) {

		if (!(student instanceof Student)) {
			throw Error("Invalid Student...")
		}
		if (!(course instanceof Course)) {
			throw Error("Invalid Course ...");
		}

		this.student = student;
		this.course = course;
		this.grade = null;
		this.date = new Date();
	}

	setGrade(grade: number): void {
		this.grade = grade;
	}

}

export default Enroll;
