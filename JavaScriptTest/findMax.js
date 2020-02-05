// JavaScript Document
// In this exercise, we have an array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
// Let's fimd the max value in this array

//we'll initiate the max var to the first element in the array
var max = 0;
// We'll use a for loop to calculate that sum
for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
    // We'll use the unary addition operator 
    // to compare the current max to the next element in the array
	//We changed the initial value of arrayPosition to 1, since 0 is already set as max
    if(testArray[arrayPosition] > max){
		max = testArray[arrayPosition];
	}
}
console.log("The max of " + testArray + " is: " + max);