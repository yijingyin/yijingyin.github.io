var animationIntervals = [];

var circlesConfig = [
  { 
    id: "circle1", 
    direction: { x: 1, y: 1 },     // Move down-right
    startPos: { top: 0, left: 0 },
    endPos: { top: 350, left: 350 }
  },
  { 
    id: "circle2", 
    direction: { x: -1, y: -1 },   // Move up-left
    startPos: { bottom: 0, right: 0 },
    endPos: { bottom: 350, right: 350 }
  },
  { 
    id: "circle3", 
    direction: { x: -1, y: 1 },    // Move down-left
    startPos: { top: 0, right: 0 },
    endPos: { top: 350, right: 350 }
  },
  { 
    id: "circle4", 
    direction: { x: 1, y: -1 },    // Move up-right
    startPos: { bottom: 0, left: 0 },
    endPos: { bottom: 350, left: 350 }
  },


];

function clearAllAnimations() {
  for (var i = 0; i < animationIntervals.length; i++) {
    clearInterval(animationIntervals[i]);
  }
  animationIntervals = [];
}

function moveAllCircles() {
  clearAllAnimations();

  var speedValue = document.getElementById("speed").value;

  for (var i = 0; i < circlesConfig.length; i++) {
    var config = circlesConfig[i];
    var circle = document.getElementById(config.id);
    

    if (config.startPos.top !== undefined) circle.style.top = config.startPos.top + "px";
    if (config.startPos.left !== undefined) circle.style.left = config.startPos.left + "px";
    if (config.startPos.bottom !== undefined) circle.style.bottom = config.startPos.bottom + "px";
    if (config.startPos.right !== undefined) circle.style.right = config.startPos.right + "px";
  }
  
  for (var i = 0; i < circlesConfig.length; i++) {
    startCircleAnimation(circlesConfig[i], speedValue);
  }
}

function startCircleAnimation(config, speed) {
  var circle = document.getElementById(config.id);
  var position = 0;
  
  var intervalId = setInterval(function() {
    if (position >= 350) {
      clearInterval(intervalId);
      var index = animationIntervals.indexOf(intervalId);
      if (index > -1) {
        animationIntervals.splice(index, 1);
      }
    } else {
      position++;
      
      if (config.direction.x > 0 && config.startPos.left !== undefined) {
        circle.style.left = (config.startPos.left + position) + "px";
      } else if (config.direction.x < 0 && config.startPos.right !== undefined) {
        circle.style.right = (config.startPos.right + position) + "px";
      }
      
      if (config.direction.y > 0 && config.startPos.top !== undefined) {
        circle.style.top = (config.startPos.top + position) + "px";
      } else if (config.direction.y < 0 && config.startPos.bottom !== undefined) {
        circle.style.bottom = (config.startPos.bottom + position) + "px";
      }
    }
  }, speed);
  
  // Store the interval ID
  animationIntervals.push(intervalId);
}