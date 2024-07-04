// Entscheidungsstrukturen | control flow

// // Deklaration + Assignment
// const ageJohn = 40;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// //Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(isJohnOlder)
//     {
//     console.log("John ist älter.");
// }


/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

<<<<<<< HEAD
// if (isJohnOlder) 
//     {
//         console.log("John ist älter.");
// } 

// else 
//     {
//         console.log("John ist jünger.");
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

// /************ IF - ELSE IF  ************/
// // mit alternativen Fällen (älter, jünger, gleich alt)

// if (isJohnOlder) 
//     {
//         console.log("John ist älter."); // true
// }

// else if(isJohnEqual)
//     {
//         console.log("John ist gleich alt."); // equal
// }

// else 
//     {
//         console.log("John ist jünger."); // false
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

// job = "driver";  // .. fährt TAXI! / UBER
// job = "diver"; // .. taucht im Rhein! 
// job = "artist"; // .. malt ein Bild!
// job = "pilot"; // .. macht etwas anderes! --> default
// job = "teacher"; // .. unterrichtet!
// job = "instructor"; // .. unterrichtet!

switch (job) 
    {
    case "driver": // --> job == "driver"
        console.log(firstName + " fährt Taxi");
        break;
    case "diver": // --> job == "diver"
        console.log(firstName + " taucht im Rhein!");
        break;
    case "artist": // --> job == "artist"
        console.log(firstName + " malt ein Bild!");
        break;
    case "teacher": // --> job == "teacher"
    case "instructor":
        console.log(firstName + " unterrichtet!");
        break;
    
    default: // WICHTIG!
    console.log(firstName + " macht etwas anderes!");
        break;
}

if (isJohnOlder) 
    {
        console.log("John ist älter.");
} 

else 
    {
        console.log("John ist jünger.");
}
>>>>>>> 9ae5aa8555c89f4a4cf44f3e40837a6ae2fd78da
