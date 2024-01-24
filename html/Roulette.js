// html/Roulette.js
"use strict";

let wheel = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, 37, 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];

let number;
let color;
let even;
let size;

let index = Math.floor(Math.random() * 38);

if (index == 0) {
    number = "0,";
    color = "Rouge,";
    even = "Impair,";
    size = "Manque";
} else if (index == 19) {
    number = "00,"
    color = "Noir,";
    even = "Pair,";
    size = "Passe";
} else {
    number = wheel[index].toString() + ",";
    color = (index % 2 == 0) ? "Rouge," : "Noir,";
    even = (wheel[index] % 2 == 0) ? "Pair," : "Impair,";
    size = (wheel[index] > 18) ? "Passe" : "Manque";
}

console.log(number, color, even, size);
