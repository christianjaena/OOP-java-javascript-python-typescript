public class Course {
	private	String name;
	private String code;
	private int max_;
	private int min_;
	private	ArrayList<Professor> professors;
	private ArrayList<Enroll> enrollments; 

	Course(String name, String code, int max, int min, ArrayList<Professor> professor) {
		this.name = name;
		this.code = code;
		this.max_ = max;
		this.min_ = min;
		this.professors = [];
		this.enrollments = [];

		if (professor instanceof Professor) {
			this.professors.add(professor);
		} else if (professor instanceof ArrayList<>) {
			for (int i = 0; i < professor.length(); i++) {
				if (!(professor[i] instanceof Professor)) {
					throw new Exception("Invalid professor ...");
				}
			}
			self.professors = professor;
		} else {
			throw new Exception("Invalid Professor ...");
		}
	}

	public void addProfessor(ArrayList<Professor> professor) {
		if (!(professor instanceof Professor)) {
			throw new Exception("Invalid professor ...");
		}
		
		this.professors.add(professor);
	}

	public void addEnrollment(ArrayList<Enroll> enroll) {
		if (!(enroll instanceof Enroll)) {
			throw new Exception("Invalid enroll");
		}

		if (enrollments.length() == this.max_) {
			throw new Exception("Cannot enroll, course is full ...");
		}

		this.enrollments.add(enroll);
	}

	public boolean isCancelled() {
		return this.enrollments.length() < this.min_;
	}
	
}