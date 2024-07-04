
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
ausgabeName();

// Funktion
function ausgabeName()
    {

    //interne Variable | What happens in VEAGS...
    let firstName = "Sara"
    console.log("Hallo " + firstName + "!");

}

// console.log(firstName); // Fehler : scope!
