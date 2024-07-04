/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


/********* LÖSUNGSVORSCHLAG **********/

const prompt = require('prompt-sync')({sigint: true});

let firstName = prompt("Wie ist Dein Name? Bitte eingeben:...");
let age = parseInt(prompt("Wie alt bist Du? Bitte eingeben:..."));

switch (true) {
    case (age >= 0) && (age <= 5): 
    console.log(firstName + "´s Getränk ist Milch.");
        break;

    case (age >= 6) && (age <= 12): 
    console.log(firstName + " hat die Wahl zwischen Milch und Saft.");
        break;

    case (age >= 13) && (age <= 17): 
        console.log(firstName + " hat die Wahl zwischen Milch, Saft und Cola.");
        break;

    case (age >= 18): 
    console.log(firstName + " hat die Wahl zwischen Milch, Saft, Cola und Wein.");
        break;

    default: console.log("Programmabbruch wegen Falscheingabe");
        break;
}
