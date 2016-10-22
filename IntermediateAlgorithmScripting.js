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
  
  
  var oneBigArray = [];
  
  var newArray = [];
  
  
  for (i = 0; i < arguments.length; i++) { // gets all elements of "arr" arrays and puts them into one arrray.
    
      for (z = 0; z < arguments[i].length; z++) { 
        
          oneBigArray.push(arguments[i][z]);
      }
  }  
  
  
  for (a = 0; a < oneBigArray.length; a++) { // iterates over each element of "oneBigArray".
    
      if (a === 0) { // if element is the first element, add to "newArray".
        
          newArray.push(oneBigArray[a]);
      }
    
      else { // element is NOT the first element, do this: 
        
          var match = "no"; // if current element of "oneBigArray" matches any element in "newArray" this turns to "yes".
        
          for (b = 0; b < newArray.length; b++) { // iterates over "newArray" elements.
            
              if (oneBigArray[a] == newArray[b]) {
                
                  match = "yes"; // there WAS a match, so current "oneBigArray" element is NOT pushed to "newArray".
              }
          }
        
          if (match == "no") { // there was NOT a match so current "oneBigArray" IS pushed to "newArray". 
            
              newArray.push(oneBigArray[a]);
          }
      }
  }
  
  
  return newArray; // returns the new array with unique values in their original order.
}



uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

//---------------------------------------------------------------------------------------------------------------------




//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // &colon;&rpar;
  
  
  var newStr = str.replace(/&/g, "&amp;");
  
  newStr = newStr.replace(/'/g, "&apos;");
  
  newStr = newStr.replace(/</g, "&lt;");
  
  newStr = newStr.replace(/>/g, "&gt;");
  
  newStr = newStr.replace(/"/g, "&quot;");
  
  
  
  
  return newStr;
}

convertHTML("Dolce & Gabbana");
//-----------------------------------------------------------------------------------------------------------------------



// Converts a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  var array = str.split("");
  
  var originalLength = array.length;
  
  var modifiedStr;
  
  
  for (i = array.length - 1; i >= 0; i--) {
    
      var currentIndex = i;
  
    
      if (array[i] !== array[i].toLowerCase() && isNaN(array[i-1]) === true && array[i-1] !== "_" && i !== 0) {
      // if current element in "array" is not lowercase, &, the element before it is not a number[numbers are replaced using regexp below, and a space counts as a number, so if there's a space before a capital letter this conditional evaluates to false and no extra space is added], &, the element before it is not an underscore: _ [underscores are dealt with below, so if I wasn't to include this boolean they would be acted upon and the end result of the function would produce "--" between each word instead of just "-"], & the current element is not the first one [a first element that is a capital letter doesn't need a space before it since there's no possibility that there's another letter before it & thus "attached" to it.] 
        
          array.splice(i, 0, " "); // if all conditionals are "true", then add a space before the capital letter.
      }
    
  }
  

 
  
modifiedStr = array.join(""); // edited "array" is joined into one single string again.
  
  
  
  
   var lowercased = modifiedStr.toLowerCase(); // converts all letters in array to lowercase
  
   lowercased = lowercased.replace(/\W/g, "-"); // replaces all non-alphanumerics with a dash.
  
   lowercased = lowercased.replace(/\d/g, "-"); // replaces all digits with a dash.
  
   lowercased = lowercased.replace(/_/g, "-"); // replaces all underscores with a dash. 
  
  
  
   return lowercased; // returns original string converted to spinal case. 
}

spinalCase('thisIsSpinalTap');
//-------------------------------------------------------------------------------------------------------------------------



// Given a positive integer num, returns the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {

//variables
var arr = [0, 1];
  
var newArr = [];
  
  
// loop that adds next fibonacci number to "arr" if it's <= "num".
for (i = 2; arr[i - 1] + arr[i - 2] <= num; i++) { // stops once NEXT fibonacci number is greater than "num".

    arr[i] = arr[i - 2] + arr[i - 1]; // sets value of current "arr" element to sum of the two elements/numbers before it.
}
  


for (z = 0; z < arr.length; z++) { // iterates over "arr" elements.
  
    if ((arr[z] % 2) !== 0) { // if current "arr" element is an ODD number:
      
        newArr.push(arr[z]); //...push it to "newArr".
    }
}
  
  
 var sum = newArr.reduce(function(a, b) { // adds up all elements of "newArr" and returns the total.
   
     return a + b;
 }, 0);


   return sum;
}


sumFibs(1000);
//------------------------------------------------------------------------------------------------------------------------



// Sums all the prime numbers up to and including the provided number.

function sumPrimes(num) {
  
  //variables
  var allNumbers = [1]; // element 0 = "1".
  
  var primeNumbers = [];
   
  
  
  for (var i = 1; i < num; i++) { // fills "allNumbers" with all integers bigger than 1 && <= "num".
    
      allNumbers[i] = allNumbers[i - 1] + 1;
  }
  
  
  
  for (var z = 0; z < allNumbers.length; z++) { // the "allNumbers" element being tested for prime-ness.
    
      if (allNumbers[z] == 2) {
        
          primeNumbers.push(allNumbers[z]);
      }
    
      
    
      if (allNumbers[z] !== 1 && allNumbers[z] % 2 !== 0 ) { // if it's not 1 && not an even number do this:
        
          var divisible = "no"; // keeps track if current element being tested for prime-ness has proved divisible by something.
        
          for (var p = 1; p < allNumbers[z]; p++) { // the "allNumbers" element I want to test the potential primer against

            if(allNumbers[z] !== allNumbers[p] && allNumbers[z] > allNumbers[p]) { // if current element being tested is not equal to tester element && it's bigger than tester element, do this:

                if(allNumbers[z] % allNumbers[p] === 0 ) { // if element being tested is divisible by current tester element [ a number smaller than it], then it IS divisible by a number other than one and itself AND, therefore, NOT PRIME.

                  divisible = "yes";
                }
            }
        }
        
        if (divisible == "no") { // if element being tested has proved NOT DIVISIBLE by anything other than 1 and itself...
          
            primeNumbers.push(allNumbers[z]); //...push to "primeNumbers".
        }
    }
    
      
  }
  
  
  
  var totalPrime = primeNumbers.reduce(function(a, b) { //adds all numbers is "primeNumbers" and returns the sum. 
    
      return a + b;
    
  }, 0);
  
  
  
  return totalPrime; 

}

sumPrimes(977);
//------------------------------------------------------------------------------------------------------------------------



// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
  
  var smallLarge = [];
  
  var originalLCM;
  
  var filling = [];
  
  var allEvenly = "no";
  
  var finalLCM;
  
  
  // pushes both "arr" numbers into "smallLarge" array in order from least to greatest
  if (arr[0] < arr[1]) {
    
    smallLarge.push(arr[0]);
    smallLarge.push(arr[1]);
  }
  
  
  else {
    
      smallLarge.push(arr[1]);
      smallLarge.push(arr[0]);
  }
  
  
  
  if (smallLarge[1] % smallLarge[0] === 0) { // if bigger number IS evenly divisible by smaller one...
    
      originalLCM = smallLarge[1]; //...then the LCM is: bigger #.
  }
  
  else { // bigger number IS NOT evenly divisible by smaller one...
    
      var divisibleStatus = "no";
    
      for (var i = 2; divisibleStatus == "no"; i++) { // as long as divisibleStatus == "no": keep executing.
        
          var big = smallLarge[1] * i; // multiplies original big # by 2 & then by 1 more each time
          var small = smallLarge[0]; // small number from "arr".
          
          if (big % small === 0) { // if new version of big # is evenly divisible by small #...
            
              originalLCM = big; // this version of big # is the LCM.
            
              divisibleStatus = "yes"; // change value of this variable to "yes" so loop stops.
          }
      } // end of loop
  }// end of "else"
  
  
  // At this point the LCM of the "arr" numbers is found. 
    
    
  for (var n = smallLarge[0] + 1; n < smallLarge[1]; n++) { // puts all #'s b/w small # & big # into an array - small to large.
    
      filling.push(n);
  }
    
    
  for (var h = 1; allEvenly == "no"; h++) { // while "allEvenly" = "no", keep looping.
    
      finalLCM = originalLCM * h; // new version of originalLCM is made by multiplying originalLCM by "h", if last "finalLCM"
    // wasn't divisible by all numbers in the range.
    
      var tracker = 0; // will be equal to "filling.length" if all numbers b/w small & big number were evenly divided into "finalLCM".
    
      for (var b = 0; b < filling.length; b++) { // iterates over all numbers in "filling" array.

        
          if (finalLCM % filling[b] === 0) { // if current number of "filling" array evenly divides into "finalLCM" do this:

              tracker += 1; 
          }
        
      }
    
      if (tracker == filling.length) { // if all numbers in "filling" array evenly divided into the current version of
                                       // "finalLCM", end the loop.
        
          allEvenly = "yes";
        
      }
    
  }
  
  
  
  
  return finalLCM; // returns latest version of "finalLCM" which meets all necessary requirements.
}


smallestCommons([1, 5]);
//----------------------------------------------------------------------------------------------------------------------




// Create a function that looks through an array (first argument) and returns the first element 
//in the array that passes a truth test (second argument).

function findElement(arr, func) {
  
  
  return arr.filter(func)[0]; // returns first element of new array created by filter.
  
  
  
  
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
//---------------------------------------------------------------------------------------------------------------------



// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument)
//returns true.
// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  // Drop them elements.
  
  var original = [];
  
  var array = [];
  
  var result = "no";
  
  
  for (var z = 0; z < arr.length; z++) { // pushes elements of "arr" into "original" array in regular form.
    
      original.push(arr[z]);
  } //-------------------------------------------------------------------------------
  
  
  for (var i = 0; i < arr.length; i++) { // pushes elements of "arr" into "array" as singular arrays.
    
      var singleArr = [];  
    
      singleArr.push(arr[i]);
    
      array.push(singleArr);
  } // -------------------------------------------------------------------
  
  
  
  
   //return array[0].filter(func).length;
  
  
  for (var j = 0; result == "no" && j < array.length; j++) { // if: result == "no", and, "j" is less than the length of the array, meaning this loop won't execute on an empty array, execute.
    
      if (array[j].filter(func).length === 0) { // if element didn't pass "func" test...
        
          original.shift(); //...drop respective element from "original" array.
        
      }
    
      else {
          
          result = "yes"; // if current element from "array" array passes "func" test, stop loop and...
      }
    
  } //-------------------------------------------------------------------------------


  
  return original; // return edited, or not if all elements of "arr" pass "func" test, "original" array.
  
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
//------------------------------------------------------------------------------------------------------------------------



// Flattens a nested array. Accounts for varying levels of nesting.


function steamrollArray(arr) {
  
  //--------------------
  var examiner = [];
  
  var lastArray = [];
 //---------------------

  

 for (var i = 0; i < arr.length; i++) { // fills "myArray" with every element in "arr" argument that is passed into function.
   
      examiner.push(arr[i]);
   }
 //----------------------------------------------------------
  
  
  
  for (var z = 0; examiner.length !== 0; z = 0) { // as long as array is not empty, examine the first element.
    
      if (Array.isArray(examiner[z]) === false) { // if element is NOT an array, push it to "lastArray", because it's 
                                                 //either a number, string, or object (going off the provided test-cases).
        
          lastArray.push(examiner[z]); // push to "lastArray"
          examiner.splice(0, 1); // remove this element from "examiner"
      }
      
      else if (examiner[z].length >= 1) { // if element is a non-empty array...
        
          for (var r = 0; r < examiner[z].length; r++) { // iterate through each element inside and...
            
              examiner.push(examiner[z][r]); //...push this child element to "examiner".
          }
          examiner.splice(0, 1); // remove this element from "examiner" (initial element examined).
      }
    
      else { // if element is anything other than string, number, or non-empty array, remove it from "examiner".
        
          examiner.splice(0, 1);
      }
  }
  
  
  
  return lastArray; // return the new array with no array child elements.

}

steamrollArray([1, {}, [3, [[4]]]]);
//------------------------------------------------------------------------------------------------------------------------



// Returns an English translated sentence of the passed binary string.

function binaryAgent(str) {
  
  var splitStr = str.split(" ");
  
  var twoDigits = [];
  
  var humanRead = [];

  
  for (var i = 0; i < splitStr.length; i++) { // iterates over each element in "splitStr" array.
    
      var total = 0; // keepts track of the total numberical value of a byte as each of its 8 positions are iterated over.
    
      for (var z = 0; z < splitStr[i].length; z++) { // iterates over each of the 8 positions in the current byte.
        
        
          if (splitStr[i][z] == 1) { // if current position in byte is positive (has a "1"), then...
            
              switch (z) { //...evaluate its position and add a certain numberical value to "total" depending on the position. 
                  
                case 0:
                  total += 128;
                  break;
                case 1:
                  total += 64;
                  break;
                case 2:
                  total += 32;
                  break;
                case 3:
                  total += 16;
                  break;
                case 4:
                  total += 8;
                  break;
                case 5:
                  total += 4;
                  break;
                case 6:
                  total += 2;
                  break;
                case 7:
                  total += 1;
              } // end of switch ---------
          } // end of if -----------
      } // end of var z loop -------------------
    
      twoDigits.push(total);
  } // end of outermost loop -------------
  
  // At this point: all two-digit ASCII codes of each byte are in the array "twoDigits" 
  
  
  
  for (var u = 0; u < twoDigits.length; u++) { // iterates over each element in "twoDigits" array.
    
      humanRead.push(String.fromCharCode(twoDigits[u]));
      // pushes the symbol of respective ASCII number to "humanRead" array.
  }
  
  
  
  return humanRead.join(""); // returns English senctence.
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//-------------------------------------------------------------------------------------------------------------------



// Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  // Is everyone being true?
  
  var truthStatus = true;

  
  
  for (var i = 0; i < collection.length; i++) { // iterates over each element in "collection" arg. 
    
      if (collection[i].hasOwnProperty(pre) === false) { // if object does not contain the "pre" arg. property....
        
          truthStatus = false; // changes this variable's value to false and function return's "false", since the next "if"                                         statement only executes if the value of "truthStatus" is "true".
      }
  }
  
  
  if (truthStatus === true) { // if all objects in "collection" had the "pre" property....
    
       for (var z = 0; z < collection.length; z++) { // iterates over all elements in "collection" and...
         
           switch (collection[z][pre]) { // if the value of the "pre" propert in this current object matches any of the cases
                                         // then "truthStatus" equals false.
               
             case 0:
               truthStatus = false;
               break;
             case null:
               truthStatus = false;
               break;
             case "":
               truthStatus = false;
               break;
             case undefined:
               truthStatus = false;
 
           } // switch  ends
         
            if (typeof collection[z][pre] !== "string") { // if the value of this property is not a string...
             
               if (isNaN(collection[z][pre]) === true) { // and it's ture that it's NOT a number, "truthStatus" equals false.
                 
                   truthStatus = false; // really used for a key with a value of NaN since "case NaN" wasn't matching it. 
               }
           }
       } // loop  closes
  } // if  closes
  

  
  
  return truthStatus; // returns true or false
}


truthCheck([{"single": "double"}, {"single": NaN}], "single");

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
//--------------------------------------------------------------------------------------------------------------------



// Creates a function that sums two arguments together. If only one argument is provided, returns 
// a function that expects one argument and returns the sum.

    var addTogether = function(a, b) { // potenially accepts up to 2 arguments
        
  
            
         for (var i = 0; i < arguments.length; i++) { // checks to see if any arguments passed to this function are not numbers.
                
              if (typeof arguments[i] !== "number") { // if an argument passed is NOT a NUMBER...
                    
                  return ; //... return undefined
              } 
          }
            
          
          if (arguments.length == 2) { // if two arguments were passed to this function...
            
              return a + b; //...return their sum
          }

  
          else { // if only 1 argument was passed to this function...
            
              return function(y) { // return this function; which is a closure and thus remembers variables defined in parent                                        function/scopes: a.k.a: remembers value of "a" argument (and "b" if needed).
      
                 if (typeof y !== "number") { // if argument passed to this function is NOT a NUMBER... 
          
                    return ; //...returned undefined
                 }
      
                 return a + y; //...else, return the SUM of the argument passed to "addTogether" and the argument passed to this                                   function ("y").
              };
          }
      };



addTogether(2, 3);
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");
addTogether(2)([3]);
//-------------------------------------------------------------------------------------------------------------------






