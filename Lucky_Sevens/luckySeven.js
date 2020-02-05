// JavaScript Document

function clearErrors(){
	for (var loopCounter = 0; loopCounter < document.forms["luckySeven"].elements.length; loopCounter++){
		if(document.forms["luckySeven"].elements[loopCounter].parentElement.className.indexOf("has-") != 1){
			
			document.forms["luckySeven"].elements[loopCounter].parentElement.classList = "form-group";
		}
	}
}

function resetForm(){
	clearErrors();
	
	document.forms["luckySeven"]["bet"].value = "";
	document.forms["luckySeven"]["bet"].focus();
}

function validateItems(){
	clearErrors();
	
	//Store the num of rolls til the player loses
	var numOfRolls = 0;
	//Store the max amount of money received
	var maxMoney = 0;
	//Grab the player entered bet from the form
	var playerBet = parseInt(document.forms["luckySeven"]["bet"].value);
	//Store the roll count from the highest money held
	var diceAtMax = 0;
	//Validate that the var for bet is a valid number
	if(playerBet == "" || isNaN(playerBet)){
		console.log(playerbet);
		alert("Bet must be filled with a number.");
		document.forms["luckySeven"]["bet"].parentElement.className = "form-group has-error";
		document.forms["luckySeven"]["bet"].focus();
		return false;
	}
	
	while(playerBet > 0){
		var diceOne = rollDice();
		var diceTwo = rollDice();
		
		var diceTotal = diceOne + diceTwo;
		numOfRolls++;
		
		//Check for a sum of 7
		if(diceTotal === 7){
			playerBet = playerBet + 4;
			if(playerBet > maxMoney){
				maxMoney = playerBet;
				diceAtMax = numOfRolls;
			}
		}
		else{
			playerBet--;
		}
	/*
	This was set up as a test of the console instead of clicking each alert, as the numbers got big on occasion
	
	console.log("The sum of the rolls are: " + diceTotal + " and the Player Bet is: " + playerBet + " for a total of: " + numOfRolls + " rolls." + "\n\n" + "The highest amount of money received was: " + maxMoney + " and the roll count was: " + diceAtMax);*/
	}
	
	//Display the table
	document.getElementById("results").style.display = "block";
	
	//Fill in the values for the table
	document.getElementById("startBet").textContent = "$" + parseInt(document.forms["luckySeven"]["bet"].value);
	document.getElementById("totalRolls").textContent += numOfRolls;
	document.getElementById("maxWon").textContent += maxMoney;
	document.getElementById("rollCountMax").textContent += diceAtMax;
	
	if(confirm("Would you like to Play Again?")){
		resetForm();
		return false;
	}
	else{
		alert("Thank you for Playing!");
		return false;
	}
	return false;
}

function rollDice(){
	return Math.floor(Math.random() * 6) + 1;
}