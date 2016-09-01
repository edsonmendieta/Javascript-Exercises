// My solution to the "Tree Walker" exercise found at the end of this Dom Tutorials page: https://dom-tutorials.appspot.com/static/1.html

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
