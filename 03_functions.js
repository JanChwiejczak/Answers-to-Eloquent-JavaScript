/*
 Answers to exercises in third chapter of eloquent JS
 */

// Find minimum of two arguments 
function min(x, y) {
    if (x <= y) return x;
    else return y;
}

// Write recursive functions checking if number is even
function isEven(n) {
    if (n == 0) return true;
    if (n == 1) return false;
    if (n >= 2) return isEven(n - 2)
}

// count occurrences of B in a given string
function countBs(my_string) {
    var answer = 0;
    for (var i = 0; i < my_string.length; i++) {
       if (my_string.charAt(i) == "B") answer += 1;
    }
    return answer
}

// General version of last function
function countChar(my_string, char) {
    var answer = 0;
    for (var i = 0; i < my_string.length; i++) {
        if (my_string.charAt(i) == char) answer += 1;
    }
    return answer
}
