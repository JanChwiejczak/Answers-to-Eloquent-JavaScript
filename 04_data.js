/**
 * Answers to 4th Chapter of Eloquent JS 
 */


// Write a range function that takes start, stop and step
// Write a sum function that takes an array and returns the sum

function range(start, end, step) {
    step = typeof step !== 'undefined' ? step : 1;
    // Check if the range is finite if not make it so
    if (Math.abs(end - (start + step)) > Math.abs(end - start)) {
        step = -step;
    }
    var myArray = [];
    if (start <= end) {
        for (var i=start; i<=end; i+=step) {
            myArray.push(i);
        }
    }
    else {
        for (var i=start; i>=end; i+=step) {
            myArray.push(i);
        }
    }
   return myArray
}

function sum(myArray) {
    var my_sum = 0;
    for (var i=0; i<myArray.length; i++) {
       my_sum += myArray[i];
    }
    return my_sum
}

console.log(sum(range(18, 15)));

// Reverse without changing object
function reverseArray(myArray) {
    var answer = [];
    var end = myArray.length;
    for (var i = 0; i < end; i++) {
        answer.unshift(myArray[i]);
    }
    return answer
}

console.log(reverseArray(range(1,5)));

// Reverse in place
function reverseArrayInPlace(myArray) {
    var end = Math.floor(myArray.length/2);
    for (var i = 0; i <= end; i++) {
        var move = myArray[i];
        myArray[i] = myArray[myArray.length - 1 - i];
        myArray[myArray.length - 1 - i] = move;
    }
}

var sample = range(1, 5);
reverseArrayInPlace(sample);
console.log(sample);

// Implementing Lists

function prepend(value, myList) {
    return {value: value, rest: myList};
}

function nth(index, myList) {
    if (index == 0) return myList.value;
    else {
        if (myList.rest == null) return undefined;
        return nth(index - 1, myList.rest)
    }
}

function arrayToList(myArray) {
    var myList = null;
    for (var i = myArray.length; i >= 1; i--) {
        myList = prepend(myArray[i - 1], myList);
    }
    return myList
}

function listToArray(myList) {
    var myArray = [];
    for (var node = myList; node; node = node.rest) {
        myArray.push(node.value)
    }
    return myArray
}

function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") {
        return false
    }

    var count_a = 0, count_b = 0;
    for (var prop in a) count_a++;
    for (var prop in b) {
        count_b++;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }

    return count_a == count_b;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
