import Person from './person';
import Course from './course';

class Professor extends Person {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
	phone: string;
	address: [];
	salary: number;
	courses: [];
	gotRaise: boolean;

	constructor(
		first: string,
		last: string,
		dob: Date,
		phone: string,
		address: [],
		salary: number
	) {
		super(first, last, dob, phone, address);
		this.firstName = first;
		this.lastName = last;
		this.dateOfBirth = dob;
		this.phone = phone;
		this.address = address;
		this.salary = salary;
		this.courses = [];
		this.gotRaise = false;
	}

	checkForRaise(): void {
		if (this.courses.length >= 4 && !this.gotRaise) {
			this.salary += 20000;
			this.gotRaise = true;
		}
	}

	addCourse(course: []): void {
		if (!(course instanceof Course)) {
			throw Error('Invalid course ...');
		}
		this.courses = course;
	}
}

export default Professor;
