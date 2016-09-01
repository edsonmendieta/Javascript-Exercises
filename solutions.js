// Source: https://dom-tutorials.appspot.com/static/1.html


// Instructions: For this exercise, put all these pieces together to write a function called nextNode that can be used
// to walk through all the nodes of a DOM tree. The function should take a node as an argument, and return the next node in the tree.



// My solution to the "Tree Walker" exercise
nextNode = function(node) {
  //...Code goes here to walk to the next node...
  
  
  if (node.childNodes.length !== 0) {
  
  	node = node.firstChild;
  
  }
  
   else if (node.childNodes.length == 0 && node.nextSibling !== null) {
  
  	node = node.nextSibling;
  
  }
  
  else if (node.nextSibling == null) {
  
  	while (node.nextSibling == null) {
    
    	node = node.parentNode;
    
    }
    
    node = node.nextSibling;
  
  }
  


  return node;
};
