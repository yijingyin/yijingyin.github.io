var animationIntervals = [];

var squaresConfig = [
  { 
    id: "square1", 
    direction: { x: 1, y: 1 },     // Move down-right
    startPos: { top: 0, left: 0 },
    endPos: { top: 350, left: 350 }
  },
  { 
    id: "square2", 
    direction: { x: -1, y: -1 },   // Move up-left
    startPos: { bottom: 0, right: 0 },
    endPos: { bottom: 350, right: 350 }
  },
  { 
    id: "square3", 
    direction: { x: -1, y: 1 },    // Move down-left
    startPos: { top: 0, right: 0 },
    endPos: { top: 350, right: 350 }
  },
  { 
    id: "square4", 
    direction: { x: 1, y: -1 },    // Move up-right
    startPos: { bottom: 0, left: 0 },
    endPos: { bottom: 350, left: 350 }
  },

];

// Function to clear all existing animations
function clearAllAnimations() {
  for (var i = 0; i < animationIntervals.length; i++) {
    clearInterval(animationIntervals[i]);
  }
  animationIntervals = [];
}


function moveAllSquares() {
  clearAllAnimations();
  
  var speedValue = document.getElementById("speed").value;
  
  for (var i = 0; i < squaresConfig.length; i++) {
    var config = squaresConfig[i];
    var square = document.getElementById(config.id);
    
    if (config.startPos.top !== undefined) square.style.top = config.startPos.top + "px";
    if (config.startPos.left !== undefined) square.style.left = config.startPos.left + "px";
    if (config.startPos.bottom !== undefined) square.style.bottom = config.startPos.bottom + "px";
    if (config.startPos.right !== undefined) square.style.right = config.startPos.right + "px";
  }
  
  for (var i = 0; i < squaresConfig.length; i++) {
    startSquareAnimation(squaresConfig[i], speedValue);
  }
}

function startSquareAnimation(config, speed) {
  var square = document.getElementById(config.id);
  var position = 0;
  
  var intervalId = setInterval(function() {
    if (position >= 350) {
      clearInterval(intervalId);
      // Remove this interval from the array
      var index = animationIntervals.indexOf(intervalId);
    } else {
      position++;
      
      // Update position based on direction
      if (config.direction.x > 0 && config.startPos.left !== undefined) {
        square.style.left = (config.startPos.left + position) + "px";
      } else if (config.direction.x < 0 && config.startPos.right !== undefined) {
        square.style.right = (config.startPos.right + position) + "px";
      }
      
      if (config.direction.y > 0 && config.startPos.top !== undefined) {
        square.style.top = (config.startPos.top + position) + "px";
      } else if (config.direction.y < 0 && config.startPos.bottom !== undefined) {
        square.style.bottom = (config.startPos.bottom + position) + "px";
      }
    }
  }, speed);
  
  animationIntervals.push(intervalId);
}