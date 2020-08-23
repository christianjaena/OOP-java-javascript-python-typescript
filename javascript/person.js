const Address = require('./address');

class Person {
	constructor(first, last, dob, phone, address) {
		this.firstName = first;
		this.lastName = last;
		this.dateOfBirth = dob;
		this.phone = phone;
		this.addresses = [];

		if (address instanceof Address) {
			this.addresses.push(address);
		} else if (address.isArray()) {
			address.forEach(item => {
				if (!(item instanceof Address)) {
					throw Error('Invalid Address ...');
				}
				this.addresses = address;
			});
		} else {
			throw Error('Invalid address...');
		}
	}

	addAddress(address) {
		if (!(address instanceof Address)) {
			throw Error('Invalid address..');
		}
		this.addresses.push(address);
	}
}

module.exports = Person;