class Person {
	private String firstName;
	private String lastName;
	private Date dateOfBirth;
	private String phone;
	private ArrayList<Address> address;

	Person(String first, String last, Date dob, String phone, ArrayList<Address> address) {
		this.firstName = first;
		this.lastName= last;
		this.dateOfBirth = dob;
		this.phone = phone;
		this.addresses = [];

		if (address instanceof Address) {
			this.addresses.add(address);
		} else if (address instanceof ArrayList<>) {
			for (int i = 0; i < address.length(); i++) {
				if (!(address[i] instanceof Address)) {
					throw new Exception("Invalid Address...");
				}

				this.addresses = address;
			}
		} else {
			throw new Exception("Invalid Address ...");
		}
	}
	
	public void addAddress(ArrayList<Address> address) {
		if (!(address instanceof Address)) {
			throw new Exception("Invalid Address ... ");
		}
			
		this.addresses.add(address);
	}
}