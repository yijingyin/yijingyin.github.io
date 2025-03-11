// Initialize the grid with all dead cells
function initCells() {
    const canvas = document.getElementById('myCanvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    const rows = Math.floor(canvas.height / cellSize);
    const cols = Math.floor(canvas.width / cellSize);
    cells = [];
      
    // Initialize all cells as dead (false)
    for (let i = 0; i < rows; i++) {
      cells[i] = [];
      for (let j = 0; j < cols; j++) {
        cells[i][j] = false;
      }
    }
  }
  
  // Draw the grid lines
  function drawGrid() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    
    // Draw vertical lines
    for (let x = 0; x <= canvas.width; x += cellSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Draw horizontal lines
    for (let y = 0; y <= canvas.height; y += cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }
  
  // Draw the cells (living cells are filled)
  function drawCells() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the grid
    drawGrid();
    
    // Fill in living cells
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
  
  // Count neighbors for a cell
  function countNeighbors(row, col) {
    let count = 0;
    
    // Check all 8 neighboring cells
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // Skip the center cell (the cell itself)
        if (i === 0 && j === 0) continue;
        
        const newRow = row + i;
        const newCol = col + j;
        
        // Check if the neighbor is within bounds
        if (newRow >= 0 && newRow < cells.length && 
            newCol >= 0 && newCol < cells[0].length) {
          // Add 1 to count if the neighbor is alive
          if (cells[newRow][newCol]) {
            count++;
          }
        }
      }
    }
    
    return count;
  }
  
  // Update the cells for the next generation
  function updateCells() {
    // Create a copy of the current state
    const newCells = JSON.parse(JSON.stringify(cells));
    
    // Update each cell based on the rules
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        const neighbors = countNeighbors(i, j);
        
        // Apply Conway's Game of Life rules
        if (cells[i][j]) {
          // Any live cell with fewer than two live neighbors dies (underpopulation)
          // Any live cell with more than three live neighbors dies (overpopulation)
          if (neighbors < 2 || neighbors > 3) {
            newCells[i][j] = false;
          }
          // Any live cell with two or three live neighbors lives on
          // (already true, no change needed)
        } else {
          // Any dead cell with exactly three live neighbors becomes a live cell (reproduction)
          if (neighbors === 3) {
            newCells[i][j] = true;
          }
        }
      }
    }
    
    // Update the cells array with the new state
    cells = newCells;
  }
  
  // Handle a single step/generation
  function nextGeneration() {
    updateCells();
    drawCells();
  }
  
  // Start the animation loop
  function startAnimation() {
    if (!isRunning) {
      isRunning = true;
      runAnimation();
    }
  }
  
  // Stop the animation
  function stopAnimation() {
    isRunning = false;
    cancelAnimationFrame(animationId);
  }
  
  // Run the animation with a proper frame rate
  function runAnimation() {
    if (isRunning) {
      nextGeneration();
      setTimeout(() => {
        animationId = requestAnimationFrame(runAnimation);
      }, 100); // 100ms delay between generations (10 generations per second)
    }
  }
  
  // Handle canvas click to toggle cells
  function canvasClickHandler(event) {
    const canvas = document.getElementById('myCanvas');
    const rect = canvas.getBoundingClientRect();
    
    // Calculate grid position from mouse coordinates
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    
    // Toggle the cell state
    if (row >= 0 && row < cells.length && col >= 0 && col < cells[0].length) {
      cells[row][col] = !cells[row][col];
      drawCells();
    }
  }
  
  // Handle canvas size change
  function changeCanvasSize() {
    // Stop any running animation
    if (isRunning) {
      stopAnimation();
      document.getElementById('startButton').textContent = 'Start';
    }
    
    // Get the selected size
    const sizeOption = document.getElementById('canvasSize').value;
    
    // Set the canvas dimensions based on selection
    switch(sizeOption) {
      case 'small':
        canvasWidth = 300;
        canvasHeight = 200;
        break;
      case 'medium':
        canvasWidth = 500;
        canvasHeight = 300;
        break;
      case 'large':
        canvasWidth = 700;
        canvasHeight = 400;
        break;
      case 'xlarge':
        canvasWidth = 900;
        canvasHeight = 500;
        break;
    }
    
    // Reinitialize with new size
    initCells();
    drawCells();
  }
  
  // Add random cells to the grid
  function addRandomCells() {
    const density = 0.3; // 30% of cells will be alive
    
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        cells[i][j] = Math.random() < density;
      }
    }
    
    drawCells();
  }
  
  // Initialize everything when the page loads
  window.onload = function() {
    // Initialize the cells
    initCells();
    
    // Draw the initial grid
    drawGrid();
    
    // Set up the event listeners for buttons
    document.getElementById('startButton').addEventListener('click', function() {
      if (isRunning) {
        this.textContent = 'Start';
        stopAnimation();
      } else {
        this.textContent = 'Stop';
        startAnimation();
      }
    });
    
    document.getElementById('nextButton').addEventListener('click', nextGeneration);
    
    document.getElementById('restartButton').addEventListener('click', function() {
      stopAnimation();
      document.getElementById('startButton').textContent = 'Start';
      initCells();
      drawCells();
    });
    
    // Add canvas click handler
    document.getElementById('myCanvas').addEventListener('click', canvasClickHandler);
    
    // Add event listener for canvas size change
    document.getElementById('applySizeButton').addEventListener('click', changeCanvasSize);
    
    // Add button for random cells (optional - you need to add this button to HTML)
    const randomButton = document.getElementById('randomButton');
    if (randomButton) {
      randomButton.addEventListener('click', addRandomCells);
    }
  };