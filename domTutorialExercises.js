// **Source**: https://dom-tutorials.appspot.com/static/1.html


// **Instructions**: For this exercise, put all these pieces together to write a function called nextNode that can be used
// to walk through all the nodes of a DOM tree. The function should take a node as an argument, and return the next node in the tree.



// **My solution** to the "Tree Walker" exercise
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




// **Source**: https://dom-tutorials.appspot.com/static/2.html

// **Instructions**: For this exercise, write code that takes a string and renders it with 
// undulating font sizes. Each letter should be in its own 'span' tag, and each span's .style.fontSize property starts at 
// '10px' and increases by 5 pixels until the middle of the string is reached, before shrinking back to 10 pixels.


// **My solution** to the "Roller Coaster Text" exercise


var text = 'Hello World!';

var div = document.getElementById('rollercoaster');


var font = 10;

function strRoller(arg) {

  var splitStr = arg.split("");
  
  for (var i = 0; i < splitStr.length; i++) {

	if (splitStr.length % 2 == 0 && i !== 0) {      // if string length is EVEN
      
      if(i <= (splitStr.length / 2)) {            // ADD 5 to font if this condition is true
      
      	font += 5;
      }
      
      else if(i > (splitStr.length / 2)) {
      
      	font -= 5;                              // MINUS 5 from font if this condition is true          
      }
    }
    
    
    else if (splitStr.length % 2 !== 0 && i !== 0) {     // if string length is ODD
    
    	if(i <= ((splitStr.length / 2) + .5)) {
        
        	font += 5;                          // ADD 5 to font if this condition is true
        }
      
      	else if( i > ((splitStr.length / 2) + .5)) {
        
        	font -= 5;                          // MINUS 5 from font if this condition is true
        }
    }

    var span = document.createElement('span');

    var firstLtrNode = document.createTextNode(splitStr[i]);

    var spanLtr = span.appendChild(firstLtrNode);

    var spanLtrFont = span.style.fontSize = font + "px";

    div.appendChild(span);
    
    
  }
  
}

strRoller("Whoopeeeeeeee!");
