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
//---------------------------------------------------------------------------------------------------------



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
      
    case 4: // if number length is 4 digits do this:
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
      
    case 3: // if number is 3 digits do this: (same but for 3 digits w/0 a thousandths place).
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
      
    case 2: // if number is 2 digits do this: (same but for 2 digits w/0 a thousandths or hundredths place).
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
      
    case 1: // if number is 1 digit do this: (same but only for number with a one's place).
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
// --------------------------------------------------------------------------------------------------------




//Make a function that looks through an array of objects (first argument) and returns an array of all objects 
//that have matching property and value pairs (second argument). Each property and value pair of the source 
//object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  
  //collection variables
  var collectionLength = collection.length;
  
  // source variables
  var sourceKeys = Object.keys(source);
  
  var sourceKeysLength = sourceKeys.length;
  
  // outer for-loop
  for (i = 0; i < collectionLength; i++) {
    
    var yesNo = 0; // keeps track of successful key-value matches in current "collection" object/element.
    
    // innner for-loop
    for (z = 0; z < sourceKeysLength; z++) {
    
        if (collection[i].hasOwnProperty(sourceKeys[z])) {
            
              if(collection[i][sourceKeys[z]] == source[sourceKeys[z]]) {
                
                yesNo += 1; // object had a successful/identical key-value match/pair with current "source" key-value pair.
              }
        }
    }
    
    if (yesNo == sourceKeysLength) { // if current "collection" object had identical key-value pairs with "source"...
      
      arr.push(collection[i]); //...push current "collection" object into "arr" array.
    }
  }
  
  
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//------------------------------------------------------------------------------------------------------------------




//Performs a search and replace on the sentence using the arguments provided and returns the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace 
//the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  
  // new sentence
  var newStr;
  
  // "before" variables
  var beforeSplit = before.split(""); // array made up of letters of "before" arg.
  
  var beforeFirstUpper = beforeSplit[0].toUpperCase(); // first letter of "before", uppercased.
  
  // "after" variables
  var afterSplit = after.split(""); // array made up of letters of "after" arg.
  
  var afterFirstUpper = afterSplit[0].toUpperCase(); // first letter of "after", uppercased.
  
  var newAfter; 
  
  
  //conditional
  if (beforeSplit[0] == beforeFirstUpper) { // if first letter of "before" IS uppercase...
    
      newAfter = after.replace(afterSplit[0], afterFirstUpper); //...make first letter of "after" uppercase.
        
      newStr = str.replace(before, newAfter); // replace matches of "before" in "str" with uppercased-first-letter version of "after".
    
  }
  
  else { // if first letter of "before" is NOT uppcase...
    
    newStr = str.replace(before, after); // replace matches of "before" in "str" with UN-AlTERED "after".
  }
  
  
  
  return newStr; // return the edited sentence
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//-----------------------------------------------------------------------------------------------------------------



// Translates the provided string to pig latin.

function translatePigLatin(str) {
  
  var ay = "ay";
  
  var way = "way";
  
  var vowels = ["a", "e", "i", "o", "u"];
  
  var splitStr = str.split(""); 
  
  var vowelFirst = "no"; // is updated to "yes" if first letter of word is a vowel
  
  var newStr; // the edited word.
  
  var vowelFound = "no"; // if word DOESN't start with vowel: is updated to "yes" once first vowel in word is found.
  
  var consonantArray = []; // if word DOESN'T start with vowel: contains first consonant's', up until first vowel in word.
  
  var restOfLetters = []; // if word DOESN'T start with vowel: contains all letters after & including first vowel in word.
  
  
  
  for (i = 0; i < 5; i++) { // checks if word starts with a vowel
    
       if (splitStr[0] == vowels[i]) {
           
           vowelFirst = "yes";
       }
  }
    
      
       
       if (vowelFirst == "yes") {  // if word DOES start with a vowel
     
         
           newStr = str + way; // edits word according to pig-latin rules
         
       }
    
       else if (vowelFirst == "no") { // if word does NOT start with a vowel
      
         
           for (z = 0; z < splitStr.length; z++) {
             
               var letter = splitStr[z]; // evaluates each letter in word to see if it's a vowel.
             
               if(letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u" && vowelFound == "no") {
                 // if current letter is NOT a vowel and a vowel has NOT been encountered yet, do this:
                   consonantArray.push(letter);
               }
             
               else { // if current letter IS a vowel AND/OR a vowel has already been encountered, do this: 
                 
                 restOfLetters.push(letter);
                 
                 vowelFound = "yes";
               }

           }
           
           newStr = restOfLetters.join("") + consonantArray.join("") + ay;// edits word according to pig-latin rules
       }
  
  
  return newStr;
}

translatePigLatin("glove");
//---------------------------------------------------------------------------------------------------------------------



// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
  
  
  var outerArr = [];
  
  var splitStr = str.split("");
  
  
  for (i = 0; i < splitStr.length; i++) { // iterates over every letter of "str" arg.
     
    var innerArr = [];
    
    switch(splitStr[i]) { // evaluates current letter and does one of the following:
        
        case "G":
        innerArr.push("G", "C");
        outerArr.push(innerArr);
        break;
        
        case "C":
        innerArr.push("C", "G");
        outerArr.push(innerArr);
        break;
        
        case "A":
        innerArr.push("A", "T");
        outerArr.push(innerArr);
        break;
        
        case "T":
        innerArr.push("T", "A");
        outerArr.push(innerArr);
    }
  }
  
  
  return outerArr; // returns a 2D array.
}

pairElement("GCG");
//----------------------------------------------------------------------------------------------------------------



//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  

  
  if ((str.charCodeAt(0)) + (str.length - 1) !== str.charCodeAt(str.length - 1)) { // if #-code of first letter. + number of letters left does not equal #-code of last letter, then there IS A MISSING LETTER.
      
        
        for (i = 0; i < str.length; i++) { // iterates through each letter of "str" arg.
          
          var prevLetter = i - 1; // the index # of the letter previous to current letter/index number.
          
          if (i !== 0) { // if index # of current letter is not 0, then:
            
              if (str.charCodeAt(i) - str.charCodeAt(prevLetter) !== 1) { // if code # of current letter - code # of previous letter do not equal 1, a.k.a the missing letter is between them, do this:
                
                return String.fromCharCode(str.charCodeAt(i) - 1); // gets letter by using its # code, which is the current letter's # code - 1. 
              }
          }
        }
      }
  
  else { // if letters are NOT MISSING do this:
    
    return undefined;
  }
  
  
}

fearNotLetter("abcdefghjklmno");
//-----------------------------------------------------------------------------------------------------------------------




// Checks if a value is classified as a boolean primitive. Returns true or false.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  if (bool === true || bool === false)  {
    
      return true;
  }
  
  else {
    
      return false;
  }
  
  
}

booWho(null);
//-----------------------------------------------------------------------------------------------------------------------



//Write a function that takes two or more arrays and returns a new array of unique values in 
//the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order,
//but with no duplicates in the final array.

//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  
  
  var joinedArray = [];
  
  var newArray = [];
  
  var finalArray = [];
  
  
  for (i = 0; i < arguments.length; i++) {
    
      var joined = arguments[i].join("");
      joinedArray.push(joined);
  }
  
  joinedArray = joinedArray.join("");
  joinedArray = joinedArray.split("");
  
  
  for (z = 0; z < joinedArray.length; z++) {
    
      if (z === 0) {
        
          newArray.push(joinedArray[z]);
      }
    
      else {
        
          var match = "no";
        
          for (h = 0; h < newArray.length; h++) {
            
              if (joinedArray[z] == newArray[h]) {
                
                  match = "yes";
              }
          }
        
          if (match == "no") {
            
              newArray.push(joinedArray[z]);
          }
      }
  }
  
   
  for (q = 0; q < newArray.length; q++) {
    
      var numberized = Number(newArray[q]);
    
      finalArray.push(numberized);
  }
  

  //var word;
  
  //if ([5] == 5) {
    
   // word = "bird";
  //}
  
  
  return finalArray;
}



uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
//---------------------------------------------------------------------------------------------------------------------
