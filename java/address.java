public class Address {
	private	String country;
	private String state;
	private String city;
	private String street;
	private String postal_code;

	Address(String country, String state, String city, String street, String postcode) {
		this.country = country;
		this.state = state;
		this.city = city;
		this.street = street;
		this.postal_code = postcode;
	}
}