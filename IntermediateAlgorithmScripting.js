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
