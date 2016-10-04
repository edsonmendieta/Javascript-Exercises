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
