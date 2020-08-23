class Student extends Person {
	private String firstName;
	private String lastName;
	private Date dateOfBirth;
	private String phone;
	private String address;
	private boolean international;
	private ArrayList<Enroll> enrolled;
	
	Student(String first, String last, Date dob, String phone, String address, boolean international = false) {
		super(fist, last, dob, phone, address);
		this.international = international;
		this.enrolled = [];
	}

	public void addEnrollment(ArrayList<Enroll> enroll) {
		if (!(enroll instanceof Enroll)) {
			throw new Exception("Invalid Enroll ...");
		}

		this.enrolled.add(enroll);
	}

	public boolean isOnProbation() {
		return false;
	}

	public isPartTime() {
		return this.enrolled.length() <= 3;
	}
}