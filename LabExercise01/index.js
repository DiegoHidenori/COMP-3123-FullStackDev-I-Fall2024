const prompt = require('prompt-sync')();

// Exercise 2 - Find the largest of 3
function max(a, b, c) {
    let largest = a;
    if (b > largest) largest = b;
    if (c > largest) largest = c;
    return largest;
}
console.log("Exercise 2");
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


// Exercise 3 - Move last 3 characters to the start of string
function right(str) {
    let arr = str.split("");
    let finalStr;
    if (str.length <= 3) return str;
    let char;
    for (let i = 0; i < 3; i++) {
        char = arr.pop();
        arr.unshift(char);
    }
    finalStr = arr.join("");
    return finalStr;
}
console.log("\nExercise 3");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


// Exercise 4 - Find the type of given angles
function angle_Type(a) {
    if (a >= 0 && a < 90) return "Acute angle";
    else if (a == 90) return "Right angle";
    else if (a < 180) return "Obtuse angle";
    else if (a == 180) return "Straight angle";
    else return "Not valid";
}
console.log("\nExercise 4");
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))


// Exercise 5 - Find the max possible sum
function array_max_sum(arr, consNum) {
    if (consNum <= arr.length) {
        let maxSum = 0, tempSum;
        for (let i = 0; i <= arr.length - consNum; i++) {
            tempSum = 0;
            tempSum += arr[i];
            for (j = i + 1, count = 1; count < consNum; count++, j++) {
                tempSum += arr[j];
            }
            if (tempSum > maxSum) maxSum = tempSum;
        }
        return maxSum;
    }
    else {
        return "Consecutive number out of range";
    }
}
console.log("\nExercise 5");
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));