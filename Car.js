c class Car {
	public String make;
	public int year;

//this creates the class Car and introduce trhe String make and the integer year
/* ----------------------------------------------------------------- */
// this the zero constructor, its make is unknown and the year is the base year which is 2015
Car () {
	make = "Unknown";
	year = 2015;
	}
//this is the one constructor, it calls the String Make and uses the this to refer to Make String
Car (String thisMake) {
	this();
	make = thisMake;
	}
//this the two constructor and it calls the String make and the integer year, it uses the this to refer to the Make and year also
Car (String thisMake, int thisYear) {
	make = thisMake;
	year = thisYear;
	}
// this piece of code calls to  print out the strings and integers and return a value
public String toString() {
	String desc = "Make: " + make + " Year: " + year;
	return desc;
	}
}
