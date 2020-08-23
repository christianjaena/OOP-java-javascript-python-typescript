import Professor from './professor';
import Enroll from './enroll';

class Course {
	name: string;
	code: string;
	max_: number;
	min_: number;
	professors: [];
	enrollments: [];

	constructor(
		name: string,
		code: string,
		max: number,
		min: number,
		professor: []
	) {
		this.name = name;
		this.code = code;
		this.max_ = max;
		this.min_ = min;
		this.professors = [];
		this.enrollments = [];

		if (Array.isArray(professor)) {
			professor.forEach(item => {
				if (!((item as any) instanceof Professor)) {
					throw Error('Invalid Professor ...');
				}
				this.professors = professor;
			});
		} else {
			throw Error('Invalid Professor ...');
		}
	}

	addProfessor(professor: []): void {
		professor.forEach(item => {
			if (!((item as any) instanceof Professor)) {
				throw Error('Invalid Professor ...');
			}
			this.professors = professor;
		});
	}

	addEnrollment(enroll: []): void {
		enroll.forEach(item => {
			if (!((item as any) instanceof Professor)) {
				throw Error('Invalid Professor ...');
			}
			this.enrollments = enroll;
		});
		if (this.enrollments.length === this.max_) {
			throw Error('Cannot enroll, course is full ...');
		}
	}

	isCancelled(): boolean {
		return this.enrollments.length < this.min_;
	}
}

export default Course;