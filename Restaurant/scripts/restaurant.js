// JavaScript Document

function clearErrors(){
	for (var loopCounter = 0; loopCounter < document.forms["contactMe"].elements.length; loopCounter++){
		if(document.forms["contactMe"].elements[loopCounter].parentElement.className.indexOf("has-") != 1){
			
			document.forms["contactMe"].elements[loopCounter].parentElement.classList = "form-group";
		}
	}
}

function resetForm(){
	clearErrors();
	document.forms["contactMe"]["firstName"].value = "";
	document.forms["contactMe"]["email"].value = "";
	document.forms["contactMe"]["phone"].value = "";
	
	document.getElementById("reason").selectedIndex = 0;
	
	document.forms["contactMe"]["info"].value = "";
	
	document.getElementById("choice1").checked = false;
	document.getElementById("choice2").checked = false;
	
	document.getElementById("mon").checked = false;
	document.getElementById("tues").checked = false;
	document.getElementById("wed").checked = false;
	document.getElementById("thurs").checked = false;
	document.getElementById("fri").checked = false;
	
	document.forms["contactMe"]["num1"].focus();
}

function validateItems(){
	clearErrors();
	
	var name = document.getElementById("firstName").value;
	var email = document.getElementById("email").value;
	var phoneNum = document.getElementById("phone").value;
	var reason = document.getElementById("reason").value;
	
	//var choice = document.getElementById("choice1").is(":checked") ? 1: 0;
	
	if(name == ""){
		alert("First name must be filled out.");
		document.forms["contactMe"]["name"].parentElement.className = "form-group has-error";
		document.forms["contactMe"]["name"].focus();
		return false;
	}
	if(email == ""){
		alert("Email must be entered to receive a response.");
		document.forms["contactMe"]["email"].parentElement.className = "form-group has-error";
		document.forms["contactMe"]["email"].focus();
		return false;
	}
	if(phoneNum == "" || isNaN(phoneNum) || phoneNum.length != 10){
		alert("Phone Number must be filled in with a number containing 10 digits, including area code.");
		document.forms["contactMe"]["phone"].parentElement.className = "form-group has-error";
		document.forms["contactMe"]["phone"].focus();
		return false;
	}
	if(document.getElementById("choice1").checked == false && document.getElementById("choice2").checked == false){
		//Player must select at least one option
		alert("Have you been to the restaurant before must be selected");
		document.forms["contactMe"]["choice1"].parentElement.className = "form-group has-error";
		document.forms["contactMe"]["choice2"].parentElement.className = "form-group has-error";
		document.forms["contactMe"]["choice1"].focus();
		return false;
	}
	
	alert("Your message has been sent to the restaurant. We will get back to you asap");
	return false;
}