// JavaScript Document
function clearErrors(){
	'use strict';
	for (var loopCounter = 0; loopCounter < document.forms["evenFun"].elements.length; loopCounter++){
		if(document.forms["evenFun"].elements[loopCounter].parentElement.className.indexOf("has-") != 1){
			
			document.forms["evenFun"].elements[loopCounter].parentElement.classList = "form-group";
		}
	}
}

function resetForm(){
	'use strict';
	clearErrors();
	document.forms["evenFun"]["startNum"].value = "";
	document.forms["evenFun"]["endNum"].value = "";
	document.getElementById("results").style.display = "none";
	document.getElementById("submitButton").innerText = "Submit";
	document.forms["evenFun"]["startNum"].focus();
}

function validateItems(){
	'use strict';
	clearErrors();
	var startNum = document.forms["evenFun"]["startNum"].value;
	var endNum = document.forms["evenFun"]["endNum"].value;
	var stepNum = document.forms["evenFun"]["numStep"].value;
	
	var returnString = "";
	
	if(startNum == "" || isNaN(startNum)){
		alert("startNum must be filled with a number.");
		document.forms["evenFun"]["startNum"].parentElement.className = "form-group has-error";
		document.forms["evenFun"]["startNum"].focus();
		return false;
	}
	if(endNum == "" || isNaN(endNum)){
		alert("endNum must be filled in with a number.");
		document.forms["evenFun"]["endNum"].parentElement.className = "form-group has-error";
		document.forms["evenFun"]["endNum"].focus();
		return false;
	}
	//Check if the number is even, and if not, add 1 to it to make it even
	if(startNum %2 == 0){
		//Even
		for(var step = startNum; step <= endNum; step+= numStep){
			if(step %2 ==0){
				returnString+= step;
				//returnString+= "<br />";
			} 
		}
		return returnString;
	}
	else{
		var step = startNum;
		while{}
	}
}