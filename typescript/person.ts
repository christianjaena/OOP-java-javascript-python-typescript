import Address from './address';

class Person {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
	phone: string;
	addresses: [];

	constructor(
		first: string,
		last: string,
		dob: Date,
		phone: string,
		address: []
	) {
		this.firstName = first;
		this.lastName = last;
		this.dateOfBirth = dob;
		this.phone = phone;
		this.addresses = [];

		if (Array.isArray(address)) {
			address.forEach(item => {
				if (!((item as any) instanceof Address)) {
					throw Error('Invalid Address ...');
				}
				this.addresses = address;
			});
		} else {
			throw Error('Invalid Address ...');
		}
	}

	addAddress(address: []) {
		if (!(address instanceof Address)) {
			throw Error('Invalid Address ...');
		}

		this.addresses = address;
	}
}

export default Person;
