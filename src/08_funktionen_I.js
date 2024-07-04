
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call

// test();

// Funktionsrumpf | callee
// Funktionsdeklaration

// function test()
//     {
//         console.log("Hallo Welt");
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeName();

// Funktion
function ausgabeName()
    {

    //interne Variable | What happens in VEAGS...
    let firstName = "Sara"
    console.log("Hallo " + firstName + "!");

}

// console.log(firstName); // Fehler : scope!


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Arian"); // Argument --> Daten für Parameter
ausgabeNamen2("Maxine");
ausgabeNamen2("Saba");

function ausgabeNamen2(firstName) // Parameter
    {

        console.log("Hallo " + firstName + "!");  
    
}