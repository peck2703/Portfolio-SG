// JavaScript Document

var portalString = "The cake is a lie";

countingCharacters(portalString);

function countingCharacters(stringToCount){
	// The length property has been mentioned in
	// the Logging Letter Exercise in Lesson 4
	'use strict';
	console.log(stringToCount + " has " + stringToCount.length + " characters.");
}
function countingCharacters2(stringToCount, characterToFind){
    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
	'use strict';
    var characterCount = 0;
    for (var characterPosition = 0; 
           characterPosition < stringToCount.length; 
           characterPosition++){
        if (stringToCount[characterPosition] === characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + 
                  characterCount);
}
function countingCharacters3(str, search){
	'use strict';
	var count = 0; //number found
	var numChars = search.length;
	
	/*We need to stop loop based on multiple characters example; if searching "Ohio" with three characters at a time we want to stop at h so we do not go past the end of the string*/
	
	var lastIndex = str.length - numChars;
	
	//We will use a for loop to go through our string
	
	//This time, we are looking for a series oc characters - a substring
	for (var index = 0; index <= lastIndex; index++){
		//substring gets a part of a string from a start to end index
		
		var current = str.substring(index, index + numChars); //If the substring matches our series, increase our counter
		
		if(current === search){
			count++;
		}
	}
	
	return count;
}