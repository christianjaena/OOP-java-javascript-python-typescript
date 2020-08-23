class Professor extends Person {
	private String firstName;
	private String lastName;
	private Date dateOfBirth;
	private String phone;
	private String address;
	private float salary;
	private ArrayList<Course> courses;
	private boolean gotRaise;

	Professor(String first, String last, Date dob, String phone, String address, float salary) {
		super(first, last, dob, phone, address);
		this.salary = salary;
		this.courses = [];
		this.gotRaise = false;
	}

	public void checkForRaise() {
		if (this.courses.length() >= 4 && !this.gotRaise) {
			this.salary += 20000;
			this.gotRaise = true;
		}
	}

	public void addCourse(ArrayList<Course> course) {
		if (!(course instanceof Course)) {
			throw new Exception("Invalid course ...");
		}

		this.courses.add(course);
	}
}