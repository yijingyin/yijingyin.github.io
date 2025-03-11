
const cellSize = 10;

function initCells() {
  const canvas = document.getElementById('myCanvas');
  const rows = canvas.height / cellSize;
  const cols = canvas.width / cellSize;
  cells = [];
  
  // Initialize all cells as dead (false)
  for (let i = 0; i < rows; i++) {
      cells[i] = [];
      for (let j = 0; j < cols; j++) {
          cells[i][j] = false; 
      }
  }
}

function drawGrid(){
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')
  const cellSize = 10; 
  ctx.strokeStyle ="black";
  ctx.lineWidth = 0.5;

  // Draw vertical lines
  for (let x = 0; x <= canvas.width; x += cellSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0); 
    ctx.lineTo(x, canvas.height);

    ctx.stroke();
  }
  // Draw horzontal lines
  for (let y = 0; y <= canvas.height; y += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, y); 
    ctx.lineTo(canvas.width, y);

    ctx.stroke();
  }
}
function drawCells() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'black';
  
  for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
          if (cells[i][j]) {
              ctx.fillRect(
                  j * cellSize,
                  i * cellSize,
                  cellSize,
                  cellSize
              );
          }
      }
  }
}
