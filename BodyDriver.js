
dyDriver: a class to demonstrate and manipulate Body objects
	code from book typed in by Brian Capouch
	11 February 2015
								*/
public class BodyDriver {
  public static void main(String[] args) {
	// This uses the first constructor, no parameters
	Body sun = new Body();
	// sun.idNum = Body.nextID++;
	sun.name = "Sol";
	sun.orbits = null; // Sun don't orbit nobody
	System.out.println(sun.toString("Hi mom"));

	// This uses the second constructor, two parameters
	Body earth = new Body(sun,"Earth");
	// earth.idNum = Body.nextID++;
	// earth.orbits = sun;
// start of the changes i made to the program
	System.out.println(earth.toString());
	Body Jupiter = new Body(sun, "Earth");
	System.out.println(Jupiter.toString());
	Body Jmoon = new Body(Jupiter, "lo");
	System.out.println(Jmoon.toString());
	
	// This uses the third constructor, one parameterr
	Body moon = new Body("Chuck");
	moon.orbits = earth;
	System.out.println(moon.toString());
	
	Body lance = new Body();
	lance.orbits = moon;
	lance.name = "Lance";

	System.out.println(lance.toString());
	
}

}
