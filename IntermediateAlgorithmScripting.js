// Takes an array of two numbers and returns the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  
  //variables
  var firstNum = arr[0];
  var secondNum = arr[1];
  
  var smallest = Math.min(firstNum, secondNum);
  var largest = Math.max(firstNum, secondNum);
  var fullArray = [];
  
  var sum;
  
  
  for (i = largest; smallest < i; i--) {
    
    fullArray.unshift(i - 1);
  }
  
  fullArray.push(largest);
  
  
  sum = fullArray.reduce(function(a, b) {
    
    return a + b;
  }, 0);
  
  
  
  
  return sum;
}

sumAll([1, 4]);



// Compares two arrays and returns a new array with items only found in one of the two given arrays, but not both. 
// In other words, returns the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  var joinedArr = arr1.concat(arr2);
  var match;

  for (i = 0; i < joinedArr.length; i++) {
    
    match = 0;
    
    var testNum = joinedArr[i];
    
    for (z = 0; z < joinedArr.length; z++) {
      
      if (testNum == joinedArr[z]) {
        
        match += 1;
      }
    }
    
    if (match == 1) {
      
      newArr.push(joinedArr[i]);
    }
    
  }
  
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



// Converts the given number into a roman numeral (up to four digits).

function convertToRoman(num) {
  
  var romanArr = [];
  
  var thousand = "M";
  var hundred9 = "CM";
  var hundred5 = "D";
  var hundred4 = "CD";
  var hundred = "C";
  var ten9 = "XC";
  var ten5 = "L";
  var ten4 = "XL";
  var ten = "X";
  var nine = "IX";
  var five = "V";
  var four = "IV";
  var one = "I";
  
  
  var numString = num.toString();
  
  var splitNumbers = numString.split("");
  
  // options on how to convert depending on # length
  switch(splitNumbers.length) {
      
    case 4: // if number length is 4 do this:
      for (i = 0; i < 4; i++) { // a for-loop used to iterate over each element/number in splitNumbers array
        
        switch(i) { // what is i at this point
            
          case 0: // if i is 0...
            
            for (z = 0; z < splitNumbers[i]; z++) { //...grab FIRST # in splitNumbers and...
              
              romanArr.push(thousand); //... add that many "M"'s to roman array.
            }
            break;
            
          case 1: // if i is 1...
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(hundred9);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(hundred5); // add one "D" to roman array
              
              var howManyC = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "C"'s should be added
              
              for (c = 0; c < howManyC; c++) { // adds correct amount of "C"'s to roman array.
                
                romanArr.push(hundred); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(hundred5);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(hundred4);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(hundred);
              }
            }
               
            break;
            
          case 2:
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(ten9);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(ten5); // add one "L" to roman array
              
              var howManyL = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "X"'s should be added
              
              for (l = 0; l < howManyL; l++) { // adds correct amount of "X"'s to roman array.
                
                romanArr.push(ten); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(ten5);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(ten4);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(ten);
              }
            }
            break;
            
          case 3:
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(nine);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(five); // add one "V" to roman array
              
              var howManyV = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "I"'s should be added
              
              for (v = 0; v < howManyV; v++) { // adds correct amount of "I"'s to roman array.
                
                romanArr.push(one); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(five);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(four);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(one);
              }
            }
            break;
        }
      }
      break;
      
    case 3:
      for (i = 0; i < 3; i++) { // a for-loop used to iterate over each element/number in splitNumbers array
        
        switch(i) { // what is i at this point
            
          case 0: // if i is 1...
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(hundred9);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(hundred5); // add one "D" to roman array
              
              var howManyCC = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "C"'s should be added
              
              for (c = 0; c < howManyCC; c++) { // adds correct amount of "C"'s to roman array.
                
                romanArr.push(hundred); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(hundred5);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(hundred4);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(hundred);
              }
            }
               
            break;
            
          case 1:
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(ten9);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(ten5); // add one "L" to roman array
              
              var howManyLL = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "X"'s should be added
              
              for (l = 0; l < howManyLL; l++) { // adds correct amount of "X"'s to roman array.
                
                romanArr.push(ten); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(ten5);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(ten4);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(ten);
              }
            }
            break;
            
          case 2:
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(nine);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(five); // add one "V" to roman array
              
              var howManyVV = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "I"'s should be added
              
              for (v = 0; v < howManyVV; v++) { // adds correct amount of "I"'s to roman array.
                
                romanArr.push(one); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(five);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(four);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(one);
              }
            }
            break;
        }
      }
      break;
      
    case 2:
      for (i = 0; i < 4; i++) { // a for-loop used to iterate over each element/number in splitNumbers array
        
        switch(i) { // what is i at this point
            
          case 0:
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(ten9);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(ten5); // add one "L" to roman array
              
              var howManyLLL = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "X"'s should be added
              
              for (l = 0; l < howManyLLL; l++) { // adds correct amount of "X"'s to roman array.
                
                romanArr.push(ten); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(ten5);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(ten4);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(ten);
              }
            }
            break;
            
          case 1:
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(nine);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(five); // add one "V" to roman array
              
              var howManyVVV = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "I"'s should be added
              
              for (v = 0; v < howManyVVV; v++) { // adds correct amount of "I"'s to roman array.
                
                romanArr.push(one); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(five);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(four);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(one);
              }
            }
            break;
        }
      }
      break;
      
    case 1:
      for (i = 0; i < 4; i++) { // a for-loop used to iterate over each element/number in splitNumbers array
        
        switch(i) { // what is i at this point
            
          case 0:
            
            if (splitNumbers[i] == 9) { // if that # is 9, do this:
              
              romanArr.push(nine);
            }
            
            else if (splitNumbers[i] > 5) {  //...if that # is 5 or greater, do this:
              
              romanArr.push(five); // add one "V" to roman array
              
              var howManyVVVV = splitNumbers[i] - 5; // value is the difference of # - 5, and is how many "I"'s should be added
              
              for (v = 0; v < howManyVVVV; v++) { // adds correct amount of "I"'s to roman array.
                
                romanArr.push(one); 
              }
            }
            
            else if (splitNumbers[i] == 5) { // if # is 5, do this:
            
              romanArr.push(five);
            }
            
            else if (splitNumbers[i] == 4) { // if # is 4, then do this:
              
              romanArr.push(four);
            }
            
            else if (splitNumbers[i] < 4) {  //... if that # is less than 5, do this:
              
              for (z = 0; z < splitNumbers[i]; z++) {
                
                romanArr.push(one);
              }
            }
            break;
        }
      }
  } // END OF OUTERMOST SWITCH
  
  var romanString = romanArr.join("");
  
  
 return romanString;
}

convertToRoman(3999);
