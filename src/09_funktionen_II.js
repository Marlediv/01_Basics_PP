

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

//  Auswahl Rechenart

const ERROR_STR_GEN = "Irgendwas ging schief!";
const ERROR_STR_DIV = "Teilen durch 0 nicht möglich!"

// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));

function calculator(a, b, op) {  // WAS soll gemacht werden?
	switch (op) {
		case "+": // Addition
			return add(a,b);

		case "-": // Subtraktion
		return subtract(a,b);

		case "*": // Multiplikation
		return multiply(a,b);

		case "/": // Division
		case ":":	
		return divide(a,b);
			
		default:
			return ERROR_STR_GEN
	}
}

/**WIE sollen die Aufgaben gelöst werden? */

// Fkt. Grundrechenarten

// module: multiplication a * b |  test: check!
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}

// module: division a / b |  test: check!
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));

function divide(a,b) {
	if (b == 0) {
		return ERROR_STR_DIV; // Ausnahme!
	}
		return a / b; // Regel!
	
}

// module: subtraction a - b |  test: check!
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}

// module: addition a + b |  test: check! 
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a + b;
}

// module: output | test: check!
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  