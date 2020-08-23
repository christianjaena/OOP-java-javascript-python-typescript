import Person from './person';
import Enroll from './enroll';

class Student extends Person {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
	phone: string;
	address: [];
	international: boolean;
	enrolled: Enroll[];

	constructor(
		first: string,
		last: string,
		dob: Date,
		phone: string,
		address: [],
		international: boolean = false
	) {
		super(first, last, dob, phone, address);
		this.international = international;
		this.enrolled = [];
	}

	addEnrollment(enroll: Enroll): void {
		if (!(enroll instanceof Enroll)) {
			throw Error('Invalid Enroll ...');
		}
		this.enrolled.push(enroll);
	}

	isOnProbation(): boolean {
		return false;
	}

	isPartTime(): boolean {
		return this.enrolled.length <= 3;
	}
}

export default Student;
