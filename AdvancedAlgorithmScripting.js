// Returns true if the passed string is a valid US phone number.
// The user may fill out the form field any way they choose as long as it is a valid US number.

function telephoneCheck(str) {
  // Good luck!
  
  
  var paraArray = [];
  
  var paraL = /\(/g;
  
  var paraR = /\)/g;
  
  var paraLeft = str.match(paraL);
  
  var paraRight = str.match(paraR);
  
  
  var paraTruth = true;
  
  
  //-------------------------------------------------------------
  
  var myRe = /\d/g; // matches ALL numbers in string
  
  var filteredArray = str.match(myRe); // array filled with matches of "myRe" in passed "str".
  
  //--------------------------------------------------------------
  
  
  // FIRST: check for parantheses in the passed string (must be exactly 2, AND exclusively THREE NUMBERS inside).
  
  if (paraLeft !== null && paraRight !== null) { // if both rexexp matches MATCHED, push their resulting arrays to "paraArray"
    
      paraArray.push(paraLeft);
  
      paraArray.push(paraRight);
  }
  
  else if (paraLeft === null && paraRight !== null) { // if only right one exists...
    
      return false;
  }
  
  else if (paraRight === null && paraLeft !== null) { // if only left one exists...
    
      return false;
  }
  

  
  if (paraArray.length !== 0 && paraArray.length !== 2) { // if length is NOT ZERO or TWO (zero means no parathenses),
                                                          // then there was only one parathenses and it's an Invalid #.
    
      paraTruth = false;
      return false;
  }
  
  else if (paraArray.length == 2) { // if there was at least one of each (left & right parantheses)...
    
      if (paraArray[0].length !== 1 || paraArray[1].length !== 1) { // and there is more than one of either...
        
          paraTruth = false; //...then phone # is INVALID.
          return false;
      }
  }
  
  // AT THIS POINT: "paraTruth" is either false or true(either there are zero para.'s in "str" or there are exactly one of each).
  
  if (paraTruth === false) { // if "paraTruth" is false at this point, return false.
    
    return false;
  }
  
  
  
  if (paraTruth === true && paraArray.length == 2) { // if string has parantheses, and there are 2, and exactly one of each (left                                                      // & right), then...
      var areaCode = /\(+\d+\d+\d+\)/;
    
      if (str.match(areaCode) !== null && str.match(areaCode)[0].split("").length === 5) { // checks to see that there are exactly 3 NUMBERS between them
        
          paraTruth = true;
      }
    
      else {
        
          paraTruth = false;
          return false;
      }
    
//       return str.match(areaCode);
      
  }
  
  // AT THIS POINT: If "paraTruth" is TRUE, it's BECAUSE there are ZERO para.'s in "str" OR they are USED CORRECTLY.
  
  
  if (str.split("")[0] == "-" && str.split("")[1] == 1) { // checks for an erroneous country code of "-1".
    
    return false;
  }
  

  
  
  //---------------------------------------------------------------
  if (filteredArray.length == 10 && paraTruth === true) { // if it's a 10-digit #, and there are no mis-used para.'s...
    
      return true;
  }
  
  else if (filteredArray.length == 11 && filteredArray[0] == 1 && paraTruth === true) { // same but w/country code...
    
      return true;
  }
  
  else {
    
      return false;
  }
 //----------------------------------------------------------------- 


}


telephoneCheck("-1 (757) 622-7382");
telephoneCheck("1 555)555-5555");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("(6505552368)");
//--------------------------------------------------------------------------------------------------------------------



// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕)
// of the provided arrays.


function sym(args) {
  
  // global variables ---------------------------------------------
  var noDoubles = [];
  var argArray = [];
  var comparingDuo = [];
  var standard = [];
  // --------------------------------------------------------------


// NEED TO ELIMINATE DOUBLES FROM "args" ARRAYS -----------------------------------------------------------------------
  
 
  
  for (var e = 0; e < arguments.length; e++) {
    
      noDoubles.push(arguments[e]);
  }
  
  
  
 
  
  for (var a = 0; a < noDoubles.length; a++) { // used to iterate over ALL arrays in "noDoubles" array.
    
      for (var g = 0; g < noDoubles[a].length; g++) { // used to iterate over elements in current "noDoubles" element 
    
    
          for (var c = 0; c < noDoubles[a].length; c++) { // same as direct-parent loop
          
              if (c !== g && noDoubles[a][c] == noDoubles[a][g]) { // if element is a duplicate...
              
                  noDoubles[a].splice(c, 1); //...remove it from this array
              }
          } // c-loop closed
        
      } // g-loop closed
  } // a-loop closed
  
 // AT THIS POINT: "noDoubles" array is filled with the argument arrays W/ NO DOUBLES.
  
  
  for (var l = 0; l < noDoubles.length; l++) { // fills "argArray" with edited arrays from "noDoubles" array.
    
      argArray.push(noDoubles[l]);
  }
   


// --------------------------------------------------------------------------------------------------------------------
  
  
  
  for (var z = 0; z < 2; z++) { // pushes all elements in first 2 arrays into "comparing" array.
    
      for (var j = 0; j < argArray[z].length; j++) {
        
          comparingDuo.push(argArray[z][j]);
      }
  }
  
  
  for (var y = 0; y < comparingDuo.length; y++) { // iterates over each element in "comparingDuo" array.
    
      var unique = "yes"; // if current element in "comparingDuo" array is NOT unique, this changes to "no".
    
      for (var x = 0; unique == "yes" && x < comparingDuo.length; x++) { // compares current outer loop element with all others                                                                             in "comparingDuo" array to check if it's unique.
        
          if (x !== y && comparingDuo[x] == comparingDuo[y]) { // if there is a match, current outer-element is NOT unique...
            
              unique = "no"; // ends loop and moves on to next outer-loop element
          }
      } // inner-loop closes
    
      if (unique == "yes") { // if current outer-loop element WAS UNIQUE, push it to "standard" array.
        
          standard.push(comparingDuo[y]);
      }
  } // outer-loop closes
  
  
  
  argArray.shift(); // removes first two arrays in "argArray" since they are being compared already.
  argArray.shift();
  
  comparingDuo = [];
  
  if (arguments.length == 2) { // if ONLY 2 arrays were passed as arguments to this function, return "standard" array, A.K.A.:                                     the symmetric of the two arrays.
    
      return standard;
  }
  
  
  // ------------------------------------------------------------------------------------------
  
  
  for (var b = 0; argArray.length !== 0; b = 0) { // as long as "argArray" is NOT EMPTY, do this:
    
      comparingDuo = comparingDuo.concat(standard.concat(argArray[0]));
      // at this point: array in "standard" and first array in "argArray" are in "comparingDuo" array--------

      standard = [];
      argArray.shift();
     // at this point: "standard" has been emptied, and array from "argArray" currently in "comparingDuo" has been removed             from "argArray".
    
    
      //-----------------------------------------------------------------------------------------------
      
      for (var h = 0; h < comparingDuo.length; h++) { // iterates over each element in "comparingDuo" array.
    
      var checker = "yes"; // if current element in "comparingDuo" array is NOT unique, this changes to "no".
    
      for (var r = 0; checker == "yes" && r < comparingDuo.length; r++) { // compares current outer loop element with all                                                                           others in "comparingDuo" array to check if it's unique.
        
          if (r !== h && comparingDuo[r] == comparingDuo[h]) { // if there is a match, current outer-element is NOT unique...
            
              checker = "no"; // ends loop and moves on to next outer-loop element
          }
      } // inner-loop closes
    
      if (checker == "yes") { // if current outer-loop element WAS UNIQUE, push it to "standard" array.
        
          standard.push(comparingDuo[h]);
      }
  } // outer-loop closes -----------------------------------------------------------------------------
    
    
    comparingDuo = []; // empty "comparingDuo" array for next pair of arrays to be compared.
    
    
} // outer-most-loop closes
  
//----------------------------------------------------------------------------------------------------------

  
  
  return standard;
  
  
}


sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
//----------------------------------------------------------------------------------------------------------------------




// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" 
// if cash-in-drawer is equal to the change due.
// Otherwise, return change in coin and bills, sorted in highest to lowest order.


function checkCashRegister(price, cash, cid) {
  

  // USEABLE VARIABLES --------------------------------------------------
  
  var currencyValues = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  
  var register = []; // copy of "cid" array.

  var changeDue = cash - price; // a person's total change due.
  
  var yourChange = []; // array to which a person's exact change will be pushed to.
  
  // ---------------------------------------------------------------------
  
  
  
// Cash-IN-Drawer variable--------------------------------------------------
  
  var cidTotal = cid.reduce(function(a, b) {
    
      return a + b[1];
  }, 0);
  
  //  use "cidTotal.toFixed(2)" to get accurate total w/ only two decimal places. 

// -----------------------------------------------------------------------
  
  // Total CID
  var totalRegister = cidTotal.toFixed(2);
  
  
// -----------------------------------------------------------------------------------
  
  for (var i = 0; i < cid.length; i++) { // pushes all elements in "cid" array to
                                         // "register" array.
    
      register.push(cid[i]);
  }
  
// -------------------------------------------------------------------------------------
  
  
  
// CONDITION EXECUTIONS 
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

  
  if (totalRegister < changeDue) { // if not enough money in register:
    
      return "Insufficient Funds";
  }
  
  else if (totalRegister == changeDue) { // if only exact change in register & no more:
    
      return "Closed";
  }
  
//--------------------------------------------------------------------------------
  
  
  if (totalRegister > changeDue) {
    
      for (var z = 8; z > -1; z--) { // loops 9 times
        

           if (register[z][1] !== 0 && currencyValues[z] <= changeDue) { // if there are amounts of this currency in "register",                                                                          //and, this currency-value is less than "changeDue"...
             
               var miniArray = [];
             
               var quotient; // number of times this currency-type can go into "changeDue".
             
               var totalUsed = 0; // keeps track of currency total as a sum of all times that currency is used.  
             
               
               miniArray.push(register[z][0]); // pushes currency's name to "miniArray".
             
               quotient = changeDue / currencyValues[z];
             
               quotient = quotient.toString().split(".")[0]; // leaves out decimals
             
               for (var h = 0; h < quotient && (register[z][1] - currencyValues[z]) >= 0; h++) {
               // WONT'T execute: more times than "quotient", and, if total currency-type amount is less than currency-value.
                 
                   totalUsed += currencyValues[z];
                 
                   changeDue = (changeDue - currencyValues[z]).toFixed(2); // updates changeDue.
                   
                   register[z][1] = (register[z][1] - currencyValues[z]).toFixed(2); // updates "register[z][1]" total.
               }
             
               miniArray.push(totalUsed); // sum of currency-value per times used
             
               yourChange.push(miniArray); // push array containing currency-name and total amount of this currency used.
           }
      }
    
    //return changeDue;
      if (changeDue > 0) { // if exact change wasn't able to be given...
        
          return "Insufficient Funds";
      }
    
      else { // if exact change WAS given..,
        
          return yourChange;
      }
    

  }
  
  

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
  
}
 

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, 
// add the new item and quantity into the inventory array. The returned inventory array should be in 
// alphabetical order by item.
  
  
  var updatedCopy = [];

  var finalCopy = [];
  
  
  
  
  // The below executes IF: EITHER array IS EMPTY-------------------------------------------------------------------------
  
  if (arguments[0].length === 0 || arguments[1] === 0) { // if either passed array is empty...
    
      for (var q = 0; q < arguments.length; q++) { // iterate over them and...
        
          if (arguments[q].length !== 0) { // for the non-empty array do the following:
            
              for (var g = 0; g < arguments[q].length; g++) { // for the length of the NON-EMPTY array...

		          updatedCopy.push([]); //...push an empty array to "updatedCopy".
              }


              for (var k = 0; k < updatedCopy.length; k++) { // iterates over each element in "updatedCopy" array, and...

		          updatedCopy[k][0] = arguments[q][k][1]; // makes its 1st element equal to arg array's 2nd element (string).
                
                  updatedCopy[k][1] = arguments[q][k][0]; // makes it's 2nd element equal to arg array's 1st element (number).
              }
            

              updatedCopy.sort(); // sorts "updatedCopy" array by alphabetical order of its child element's first elements.
            

              for (var j = 0; j < updatedCopy.length; j++) { // for the length of "updatedCopy" array...

		          finalCopy.push([]); // push an empty array to "finalCopy" array.
              }

              for (var n = 0; n < finalCopy.length; n++) { // iterates over each element in "finalCopy" array, and...

		          finalCopy[n][0] = updatedCopy[n][1]; // makes its 1st element equal to arg array's 2nd element (number).
                  finalCopy[n][1] = updatedCopy[n][0]; // makes it's 2nd element equal to arg array's 1st element (string).
              }


              return finalCopy; // returns the NON-EMPTY array in alphabetical order by item.
          }
      }
  }
  
// -----------------------------------------------------------------------------------------------------------------------
  
  
  
  
  
// The below executes IF: BOTH array arguments are NOT EMPTY------------------------------------------------------------

for (var i = 0; i < arr2.length; i++) { // iterates over all elements in "arr2".

		var Rx = arr2[i][1];
    
    var matchStatus = "no";
    
    for (var z = 0; z < arr1.length; z++) {//iterates over all elements in "arr1".
    
    		if (arr1[z][1].match(Rx) !== null) { // if same item...
        
        		arr1[z][0] += arr2[i][0]; // update item amount.
            
            matchStatus = "yes";
        }
    }
    
    if (matchStatus == "no") { // if item doesn't exist in first array...
    
    		arr1.push(arr2[i]); // push this current "arr2" element to "arr1".
    }
    
}

// STATUS: "arr1" has ALL ITEMS & UPDATED COUNTS.
  
    // This actually puts BOTH "arr1" & "arr2" in alphabetical order, however, only "arr1" needs it, but that's okay.
  
  for (var a = 0; a < arguments.length; a++) { // iterate over them and...
        
          if (arguments[a].length !== 0) { // for the non-empty array do the following:
            
              for (var e = 0; e < arguments[a].length; e++) { // for the length of the NON-EMPTY array...

		          updatedCopy.push([]); //...push an empty array to "updatedCopy".
              }


              for (var s = 0; s < updatedCopy.length; s++) { // iterates over each element in "updatedCopy" array, and...

		          updatedCopy[s][0] = arguments[a][s][1]; // makes its 1st element equal to arg array's 2nd element (string).
                
                  updatedCopy[s][1] = arguments[a][s][0]; // makes it's 2nd element equal to arg array's 1st element (number).
              }
            

              updatedCopy.sort(); // sorts "updatedCopy" array by alphabetical order of its child element's first elements.
            

              for (var p = 0; p < updatedCopy.length; p++) { // for the length of "updatedCopy" array...

		          finalCopy.push([]); // push an empty array to "finalCopy" array.
              }

              for (var d = 0; d < finalCopy.length; d++) { // iterates over each element in "finalCopy" array, and...

		          finalCopy[d][0] = updatedCopy[d][1]; // makes its 1st element equal to arg array's 2nd element (number).
                  finalCopy[d][1] = updatedCopy[d][0]; // makes it's 2nd element equal to arg array's 1st element (string).
              }


              return finalCopy; // returns the NON-EMPTY array in alphabetical order by item.
          }
      }
  
  
  
    return arr1;
}



updateInventory(curInv, newInv);

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);


updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//Return the number of total permutations of the provided string that don't have repeated consecutive letters.
//Assume that all characters in the provided string are each unique.

//For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
//but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.


function permAlone(str) {
  
  var counter = 0;
  
  
  function generate(n, array) {
	
	
	
	if (n == 1) { // at this point, new version of array is ready for output.
		
		// console.log(array)
		
		var strVersion = array.join("");
		
		var status = "no"; 
		
		for (var e = 0; e < strVersion.length && status == "no"; e++) {
			
			var letter = array[e];
			
			var regex = new RegExp(letter + "{2}", "g"); // dynamic regexp
			
			if (strVersion.match(regex)) {
		
 				status = "yes"; // there was two identical letters side-by-side
 	
			}
			
		}
		
		if (status == "no") { // if no two identical letters were side-by-side...
			
			counter += 1; // update the counter total of viable permutations.
			
// 			console.log(array);
		
		}
	}
	
	// ------------------------------------------------------------------------
	
	else {
		
	    for (var i = 0; i < n - 1; i++) {
			
			
		    generate(n - 1, array);
			
			if (n % 2 === 0) {
	
				
				var one = array[i];
				var two = array[n - 1];
				
				array[i] = two;
				
				array[n - 1] = one;
				
				
			}
			
			else {
				
				
				var first = array[0];
				var second = array[n - 1];
				
				array[0] = second;
				
				array[n - 1] = first;
				
				
				
			}
			 
		}
		
		
		
		generate(n - 1, array);
	}
	

}
  
  
  
  var testedArray = str.split(""); 
  
  generate(testedArray.length, testedArray); // runs the permutation function based    //off of provided string. 
  
  
  
  return counter; // total number of viable permuations. A.k.A: no repeats.
}

permAlone('aab');
permAlone("abcdefa");
permAlone("zzzzzzzz");
permAlone("abfdefa");
permAlone("aaabb");
//---------------------------------------------------------------------------------------------------------------------


//Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
//The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).
//If the date range ends in less than a year from when it begins, do not display the ending year.
//Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, 
//the year should not be displayed at the beginning of the friendly range.
//If the range ends in the same month that it begins, do not display the ending year or month.


function makeFriendlyDates(arr) {
  
  
  var tracker = [];
  
  var output = [];
  
  
  
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  
  
  // Months & Day Variables -----------------------------------------------
  var numMonth1 = Number(arr[0].substr(5, 2));
  
  var numMonth2 = Number(arr[1].substr(5, 2));
  
  var numDay1 = Number(arr[0].substr(8, 2));
  
  var numDay2 = Number(arr[1].substr(8, 2));
  //------------------------------------------------------------------------

  
  function ordinal(num) { // adds ordinal letters to end of number
  
      if (num == 1 || num == 21 || num == 31) {

          return num + "st";
      }
    
      else if (num == 2 || num == 22) {
        
          return num + "nd";
      }
    
      else if (num == 3 || num == 23) {
        
          return num + "rd";
      }
    
      else if (num >= 4 && num <= 20 || num >= 24 && num < 31) {
        
          return num + "th";
      }

  }
  
  
  // New Months & Day Variables --------------------------------------------
  var month1 = months[numMonth1 - 1];
  
  var month2 = months[numMonth2 - 1];
  
  var day1 = ordinal(numDay1);
  
  var day2 = ordinal(numDay2);
  
  var year1 = Number(arr[0].substr(0, 4));
  
  var year2 = Number(arr[1].substr(0, 4));
  //------------------------------------------------------------------------
  
                              //ONE
  
  if ((year2 == year1) || (year2 == year1 + 1) && (numMonth2 < numMonth1 || (numMonth2 == numMonth1 && numDay2 < numDay1))) {
    
    // if date-range ends in less than a year from start, does NOT display ending year.
    
    
      tracker.push(1);
  }
  
//------------------------------------------------------------------------------- 
  
                              //TWO
  
  if (year1 == 2016 && (year2 == 2016 || (year2 == 2017 && (numMonth2 < numMonth1 || (numMonth2 == numMonth1 && numDay2 <= numDay1))))) { 
    
    // if date range begins in current year (2016) and ends within one year, beginning        year is NOT displayed. 
      
      tracker.push(2);
    
    
  }
  
//------------------------------------------------------------------------------
         
                             //THREE
   
  if (year2 == year1 && month2 == month1) {
    
  // If range ends in same month it begins, ending year & month NOT displayed.
      
      tracker.push(3);
  }
  
//------------------------------------------------------------------------------
  
                             //FOUR
  
  if (year2 == year1 && (numMonth2 == numMonth1 && numDay2 == numDay1)) {
    
    // If start date & end date are EXACTLY the SAME: output start date
    
      tracker.push(4);
  }
  
 
  
  
  
  // Situational Constructs -------------------------------------------------
  
  var one1 = month1 + " " + day1 + ", " + year1;
  
  var one2 = month2 + " " + day2;
  
  // Satisfies requirements of a "1" also.
  var two1 = month1 + " " + day1;
  
  var two2 = month2 + " " + day2;
  
  
  var three1 = month1 + " " + day1;
  
  var three2 = day2;
  
  
  var none1 = month1 + " " + day1 + ", " + year1;
  
  var none2 = month2 + " " + day2 + ", " + year2; 
  
  
  
  //-------------------------------------------------------------------------
  
  
  var filler = [];
  
  filler.push(none1);
  
  filler.push(none2);
  
  
  // Checking "tracker" array -----------------------------------------------
  
  
  var reg4 = /4/g;
  
  var reg3 = /3/g;
  
  var reg2 = /2/g;
  
  var reg1 = /1/g;
  
  
  
  var str = tracker.join("");
  
  
  if (str.match(reg4)) {
    
      output.push(none1);
    
      return output;
  }
  
  
  
  else if (str.match(reg3)) {
    
      output.push(three1);
    
      output.push(three2);
    
      return output;
  }
  
  
  else if (str.match(reg2)) {
    
      output.push(two1);
    
      output.push(two2);
    
      return output;
  }
  
  else if (str.match(reg1)) {
    
      output.push(one1);
    
      output.push(one2);
    
      return output;
  }
  
  
  else {
    
      output.push(none1);
    
      output.push(none2);
    
      return output;
  }
  
  
  //-------------------------------------------------------------------------
  
  
  
  
  //return tracker;
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);

//------------------------------------------------------------------------------------------------------------------------


//Fill in the object constructor with the following methods below:

//getFirstName()
//getLastName()
//getFullName()
//setFirstName(first)
//setLastName(last)
//setFullName(firstAndLast)

//Run the tests to see the expected output for each method.
//The methods that take an argument must accept only one argument and it has to be a string.
//These methods must be the only available means of interacting with the object.


var Person = function(firstAndLast) { // Object constructor
  

    var splitUp = firstAndLast.split(" "); 
  
  
  //---------------------------------------------------
  
    this.getFirstName = function() { // outputs person's FIRST name
      
      
         return splitUp[0];
    };
  
  
  
    this.getLastName = function() { // outputs person's LAST name
      
      
        return splitUp[1];
    };
  
  
  
    this.getFullName = function() { // outputs person's FULL name

        return firstAndLast;
    };
  
 //-----------------------------------------------------
  
  
  this.setFirstName = function(first) { // changes person's FIRST name
    
      var firstName = [];
    
      firstName.push(splitUp[0]);
    
      firstName.push(splitUp[1]);

      firstName[0] = first;
    
      firstAndLast = firstName.join(" "); // re-defines it
      
      splitUp = firstAndLast.split(" "); // re-defines it
    
//       return firstAndLast;
  };
  
  
  
  this.setLastName = function(last) { // changes person's LAST name
    
      var lastName = [];
    
      lastName.push(splitUp[0]);
    
      lastName.push(splitUp[1]);

      lastName[1] = last;
    
      firstAndLast = lastName.join(" "); // re-defines it
    
      splitUp = firstAndLast.split(" "); // re-defines it
  };
  
  
  
  this.setFullName = function(full) { // changes person's FULL name
    
      var fullName = [];
    
      var nameArg = full.split(" ");
    
    
      fullName.push(nameArg[0]);
    
      fullName.push(nameArg[1]);
    
    
      firstAndLast = fullName.join(" "); // re-defines it
    
      splitUp = firstAndLast.split(" "); // re-defines it
  };
  

};





var bob = new Person("Bob Ross"); // new copy of object constructor



bob.getFullName();

//---------------------------------------------------------------------------------------------------------------------



//Return a new array that transforms the element's average altitude into their orbital periods.
//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//The values should be rounded to the nearest whole number. The body being orbited is Earth.
//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.



function orbitalPeriod(arr) {
  
  
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  
  var finalResult = [];
  
  
  for (var i = 0; i < arr.length; i++) {
  
      var period = Math.round((2 * Math.PI) * Math.sqrt(Math.pow((earthRadius + arr[i].avgAlt), 3) / GM));

      var newOut = [];

      newOut.push(arr[i]);

      delete newOut[0].avgAlt;

      newOut[0].orbitalPeriod = period;
    
      
      finalResult.push(newOut[0]);
    
  
  }
 
  
  return finalResult;
 
}
  


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

//-----------------------------------------------------------------------------------------------------------------------


//Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
//If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of
//indices. Once an element has been used, it cannot be reused to pair with another.


function pairwise(arr, arg) {
  
  var output = [[]];
  
  var total = 0;
    
      var rd = arr.reduce(function(a, b, c) {
        
           if (output[0].join('').match(c) === null) {
               
               var stat = "no";
        
               for (var i = 0; i < arr.length && stat == "no"; i++) {

                   if ((output[0].join('').match(i) === null && i !== c) && b + arr[i] == arg) {
                     
                         stat = "yes";
                     
                         output[0].push(c);
                     
                         output[0].push(i);
                     
                     //----------------------------------------------
                         var mini = [];
                       
                         var tiny1 = [];
                     
                         var tiny2 = [];
                     //------------------------------------------------
                     
                         tiny1.push(b);
                         tiny1.push(arr[i]);
                     
                         mini.push(tiny1);
                     
                       //--------------------
                     
                         tiny2.push(arr[i]);
                         tiny2.push(b);
                     
                         mini.push(tiny2);
                     //-------------------------------------------------
                     
                         mini.push(c + i);
                     
                     // **** 1st SECTION ENDS ******* -----------------------------
                     
                         if (output.length == 1) {
                           
                             output.push(mini);
                         }// this "if" closed
                     
                         else if (output.length > 1) {
                           
                             var doneYet = "no";
                           
                             var match = "no";
                           
                             for (var k = 1; k < output.length && doneYet == "no"; k++) {
                               
                                 if (mini[0].join('') == output[k][0].join('') || mini[0].join('') == output[k][1].join('')) {
                                   
                                     doneYet = "yes";
                                   
                                    
                                   
                                     if (mini[2] < output[k][2]) {
                                       
                                         output[k] = mini;
                                       
                                         match = "yes";
                                      
                                     } //end "<" "if"
                                 } // end matcher "if"
                             }// end 2nd for-loop
                             if (match == "no") {
                               
                                 output.push(mini);
                             }
                         }// end 1st "else-if"
                     
                     // ***** 2nd SECTION ENDS ****------------------------------------
                           
                   } // 2nd "if" closed
               } // 1st for-loop closed
           } // 1st "if" closed
      }, 0); // reduce function closed
  
  
  for (var g = 1; g < output.length; g++) {
    
      total += output[g][2];
  }
  
  return total;
}

pairwise([1,4,2,3,0,5], 7);

pairwise([1, 3, 2, 4], 4);

pairwise([0, 0, 0, 0, 1, 1], 1);

pairwise([], 100);

//-----------------------------------------------------------------------------------------------------------------------

