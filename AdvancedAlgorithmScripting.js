
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
