/*
Answers to exercises in second chapter of eloquent JS
 */

// Print a tree
var toPrint = "#"
for (var n = 0; n < 7; n += 1) {
    console.log(toPrint);
    toPrint += "#"
}

// Fizz Buzz
for (var n = 1; n <= 100; n += 1) {
    var toPrint = ""
    if (n % 3 == 0) toPrint = "Fizz";
    if (n % 5 == 0) toPrint += "Buzz";
    console.log(toPrint || n)
}

// Print arbitrary size chess board
size = 12
var oddRow = ""
var evenRow = ""
for (var i = 1; i <= size; i += 1) {
    if (i % 2 == 0) {
        oddRow += "#";
        evenRow += " ";
    }
    else {
        oddRow += " ";
        evenRow += "#";
    }
}
for (var i = 1; i <= size; i += 1) {
   if (i % 2 == 0) console.log(evenRow)
   else console.log(oddRow)
}
