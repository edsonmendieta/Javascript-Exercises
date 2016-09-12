// *********************
//  Tree Walker (DOM iteration)
// *********************

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

// *********************
//  Wavy Text
// *********************


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

strRoller("Rollercoaster!");


// Bonus (Roller Coaster Text):  Try creating an undulating sine wave or shifting colours.


// My Bonus Solution: Outputs given string in a sine wave curve, and assigns each letter a random color from an array of colors.

var text = 'Hello World!';

var div = document.getElementById('rollercoaster');


var font = 10;

var color = ["blue", "red", "yellow", "green", "orange", "skyblue", "silver", "purple", "gold"]; 

function strRoller(arg) {

  var splitStr = arg.split("");
  
  for (var i = 0; i < splitStr.length; i++) {

      
      if(i <= ((splitStr.length / 4) + .5)) {            // ADD 10 to font if this condition is true
      
      	font += 20;
      }
      
      else if(i > ((splitStr.length / 4) + .5) && i <= ((splitStr.length / 2) + .5)) {
      
      	font -= 20;                                    // MINUS 10 from font if this condition is true          
      }
    
    

      else if(i > ((splitStr.length / 2) + .5) && i <= (((splitStr.length / 2) + .5) + ((splitStr.length / 4) + .5))) {
        
        	font += 20;                          // ADD 10 to font if this condition is true
        }
      
      	else if( i > (((splitStr.length / 2) + .5) + ((splitStr.length / 4) + .5))) {
        
        	font -= 20;                          // MINUS 10 from font if this condition is true
        }
    
    

    var span = document.createElement('span');

    var firstLtrNode = document.createTextNode(splitStr[i]);

    var spanLtr = span.appendChild(firstLtrNode);

    var spanLtrFont = span.style.fontSize = font + "px";
    
    var spanLtrColor = span.style.color = color[Math.floor(Math.random() * 10)];

    div.appendChild(span);
    
    
  }
  
}

strRoller("Rollercoaster!");


// *********************
//  Tux Context Menu
// *********************

// Source: https://dom-tutorials.appspot.com/static/3.html


// Instructions: For this exercise we want to implement a custom context menu for Tux, the penguin.

//Write some JavaScript code below that does as many of the following as you can:
//Add a click event handler to the penguin (his id is "tux") that makes the menu visible (style.display = 'block').
//Move the menu (e.g. style.left = '123px' and style.top = '123px') to the mouse's location. Use the event's pageX and pageY properties.
//Instead of using click, use contextmenu to detect the right mouse button.
//Supress the browser's own context menu.
//Add a click handler to the whole page (document.body) that hides the menu (style.display = 'none').
//Add event handlers to each option that does something.



// My Solution to Tux Context Menu Exercise


// assigns an id to tux parent's container - tux's parent, parent.
document.getElementById('tux').parentNode.parentNode.setAttribute('id', 'tuxTRContainer');

// makes context-menu visible after photography option is chosen: menu was place behind img at that point
document.getElementById('menu').style.zIndex = "5";

var tR = document.getElementById('tuxTRContainer');
  


var fishyImg = document.createElement('img'); // creates img element for fish pic
  	
  	// sets fish img src
  	fishyImg.src = "https://i453.photobucket.com/albums/qq256/Groningen-photos/Illustrator/vector-goldfish.jpg";
  	
	fishyImg.setAttribute('id', 'fishFood');
	
	fishyImg.style.position = "relative";
	
  	fishyImg.style.width = "45px";
  	fishyImg.style.height = "45px";
	
	fishyImg.style.right = "635.5px";
	fishyImg.style.top = "175px";




document.getElementById('tux').addEventListener('contextmenu', seeMenu, false); 
// opens context menu when user right-clicks on img of tux

document.body.addEventListener('click', hideMenu, false); // hides context menu when user left-clicks




var theMenu = document.getElementById('menu'); 


function seeMenu(e) {
  	
  	var mouseX = e.pageX; 
    var mouseY = e.pageY;
	
  	e.preventDefault(); // prevents the default browser context menu when user right-clicks
	theMenu.style.display = 'block';
  	theMenu.style.left = mouseX + "px";
  	theMenu.style.top = mouseY + "px";
  
  	console.log(e);
}


function hideMenu() {

	theMenu.style.display = "none";
}

// - - - - - - - - - - - - - - - - - - - Option event handlers - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Photograph - option

document.getElementById('option1').addEventListener('click', alignTux, false);

document.getElementById('option1').addEventListener('click', download, false);


function alignTux() {
  
  	
  
  	// Puts Tux right-side-up when 3rd option is selected
  	document.getElementById('tux').style.transform = "rotate(0deg)"; 

	
  	
  	
}



function download() {
  
  	var tuxImg = document.getElementById('tux');

	var newAnchor = document.createElement('a');
  
  
  	newAnchor.setAttribute('id', 'tuxAnchor');
  
  	document.getElementById('playground6').appendChild(newAnchor);
  
  	var anchorBox = document.getElementById('tuxAnchor');
  
  	anchorBox.setAttribute('href', 'tux.png');
  	anchorBox.setAttribute('download', '');
  	
  	anchorBox.appendChild(tuxImg);
  	
  	alert('Click on Tux the penguin to download the image!');
  	
}



// Rub belly - option 

document.getElementById('option2').addEventListener('click', alignTux, false);

document.getElementById('option2').addEventListener('click', tickleTux, false);

function alignTux() {
  
  	
  
  	// Puts Tux right-side-up when 3rd option is selected
  	document.getElementById('tux').style.transform = "rotate(0deg)"; 

	
  	
  	
}


function tickleTux() {
  
  	if(document.getElementById('tuxAnchor')) {
    
    	document.getElementById('tuxAnchor').removeAttribute('href'); // removes download functionality from 
	// tux img.
    }

	var tuxImg = document.getElementById('tux');
  
  	var rotationTotal = 0;
  
  	tuxImg.style.transition = "transform .5s";
  	
  	tuxImg.addEventListener('click', itTickles, false);
  
  	alert("Click on Tux's belly and see how he reacts!");
  
  	function itTickles(e) {
      
      
      	var addRotation = 10;
      
      	rotationTotal += addRotation;
      
        var rotationValue = 'rotate' + '(' + rotationTotal + 'deg' + ')' 
    
    	tuxImg.style.transform = rotationValue;
      
      	
     
      	console.log(e);
    }
}


// Feed a Fish - option 

var fishOption = document.getElementById('option3');

fishOption.addEventListener('click', alignTux, false); // attaches event listener to option3

fishOption.addEventListener('click', createFishPic, false);    // attaches event listener to option3


function alignTux() {
  
  	
  
  	// Puts Tux right-side-up when 3rd option is selected
  	document.getElementById('tux').style.transform = "rotate(0deg)"; 

	document.getElementById('tux').addEventListener('click', upTux, false);
  
  	function upTux() { // sits Tux upgright every time user clicks on him.
      
      document.getElementById('tux').style.transform = "rotate(0deg)"; 
      // this new transform style value is added to the tux-img & thus overrides the previous one
      // from the "Rub-Belly" option (2nd option). 
	 // The option the user selects (2nd or 3rd) dictates which transform value gets added last
     // (+10deg or 0deg), since the respective value will be added last in the elements style 
      // declartion block.
    }
  	
  	
}

function createFishPic() {
  
  	//var lastElement = tR.lastChild;

	//if(fishyImg.style.opacity === 0) {
    
    //	fishyImg.style.opacity = "1";
    //}
  
  	document.getElementById('tuxTRContainer').appendChild(fishyImg);
  
  	
  	fishyImg.addEventListener('click',  feedTux, false);
  
  	alert('Click on the fish to feed it to Tux!');
  
  	function feedTux() {
      
      
      	fishyImg.style.transition = "top 1s, opacity 2s"; // time-length of transforms
      
    
    	fishyImg.style.top = "90px"; // moves fish up to Tux's mouth
      
      	fishyImg.style.opacity = "0";   // fades-out fish once it reaches Tux's mouth
      
      	document.getElementById('tux').style.transition = "transform .5s"; // assigns time to transition
      
      	document.getElementById('tux').style.transitionDelay = "1s"; // delays transition for 1s...
      	// giving fishImg transitions to finish first
      	document.getElementById('tux').style.transform = "rotate(1080deg)"; // spins tux 
      
      	window.setTimeout(yum, 2500); // delays the 'yum' function for 2500ms
      
      	function yum() {
        
        	alert('Tux says: "YUMMM! Thanks!"');
          
        }
      
      	window.setTimeout(eraseFishy, 4000)
        
        function eraseFishy() { 
        	
          	fishyImg.style.opacity = "1"; // These two styles set fish img visible and at correct position
          	fishyImg.style.top = "175px";
            
          	if(tR.lastChild == fishyImg) { // deletes fish img to reset for another 3rd option 'click'
            	
              document.getElementById('tuxTRContainer').removeChild(fishyImg);
            }
        }
      
      	
      
      
      	// resetting the fish for another click - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      
      	
    } 
}



// *********************
//  Collaborative Stars (an 'asynchornous server requests' exercise)
// *********************

// Source: https://dom-tutorials.appspot.com/static/4.html


// Instructions: The goal of this exercise is to write a collaborative drawing application where users can turn stars on and off
// and all other viewers of this page see the same pattern.

// 1. Add an event handler to each star (or to the table) so that when a star is clicked it toggles between on and off.
// 2. Send the clicked star's number (0-99) and new state (0 or 1) to the server in this format: /collab.py?n=99&s=1
// 3. The resulting response is a 100 character string that should be used to turn on or off each of the 100 stars.





// My Solution Collaborative Stars Exercise

var table = document.getElementById('star_table');
var stars = table.getElementsByTagName('img');

table.addEventListener('click', lightSwitch, false);

function lightSwitch(e) { //switches a star ON / OFF depending on it's src attribute value
  
  	var on = "https://dom-tutorials.appspot.com/static/star_on.gif"; // full console.log output of e.target.src
  	var off = "https://dom-tutorials.appspot.com/static/star_off.gif";
  
  	if(e.target.src) {
    	
      	if(e.target.src == off) {
        
        	e.target.src = "star_on.gif";

        }
      
      	else {
        
        	e.target.src = "star_off.gif";
        }
    }
}



