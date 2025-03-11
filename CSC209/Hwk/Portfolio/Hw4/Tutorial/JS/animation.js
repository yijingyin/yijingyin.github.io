
var currentRedInterval = null;
var currentBlueInterval = null;

function moveRed() {

  if (currentRedInterval !== null) {
    clearInterval(currentRedInterval);
  }
  
  var redSquare = document.getElementById("redBlock");  
  var redPos = 0;
  var speedValue = document.getElementById("redSpeed").value;
  var stepRedId = setInterval(stepRed, speedValue);
  currentRedInterval = stepRedId;
  
  function stepRed() {
    if (redPos == 350) {
      clearInterval(stepRedId);
      currentRedInterval = null;
    } else {
      redPos++;
      redSquare.style.top = redPos + 'px';
      redSquare.style.left = redPos + 'px';
    }
  }
}
    
function moveBlue() {

  if (currentBlueInterval !== null) {
    clearInterval(currentBlueInterval);
  }
  
  var blueSquare = document.getElementById("blueBlock");    
  var bluePos = 0;
  var speedValue = document.getElementById("blueSpeed").value;
  var stepBlueId = setInterval(stepBlue, speedValue);
  currentBlueInterval = stepBlueId;
  
  function stepBlue() {
    if (bluePos == 350) {
      clearInterval(stepBlueId);
      currentBlueInterval = null;
    } else {
      bluePos++;
      blueSquare.style.bottom = bluePos + 'px';
      blueSquare.style.right = bluePos + 'px';
    }
  }
}