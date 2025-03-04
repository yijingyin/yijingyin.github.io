var NRPTS = 5;
var vectors = [];
var animationId = null;
var isAnimating = false;
var showTrace = false;
var animationSpeed = 20; // Default speed

function createVector() {
    let x = (Math.random() * 570) + 20;
    let y = (Math.random() * 470) + 20;

    let vx = (Math.random() - 0.5);
    let vy = (Math.random() - 0.5);

    let length = Math.sqrt(vx * vx + vy * vy);
    vx /= length;
    vy /= length;

    const color = generateRandomColor();

    return {
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        color: color,
        radius: 5,
        originalX: x,
        originalY: y,
        path: [{x: x, y: y}]
    };
}

function drawVector(ctx, vector, showTrace) {
    if (showTrace && vector.path.length > 1) {
        ctx.beginPath();
        ctx.moveTo(vector.path[0].x, vector.path[0].y);

        for (let i = 1; i < vector.path.length; i++) {
            ctx.lineTo(vector.path[i].x, vector.path[i].y);
        }

        ctx.strokeStyle = vector.color;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
        ctx.globalAlpha = 1.0;
    }

    ctx.beginPath();
    ctx.arc(vector.x, vector.y, vector.radius, 0, Math.PI * 2);
    ctx.fillStyle = vector.color;
    ctx.fill();

    const vectorLength = 30;
    const endX = vector.x + (vector.vx * vectorLength);
    const endY = vector.y + (vector.vy * vectorLength);

    ctx.beginPath();
    ctx.moveTo(vector.x, vector.y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = vector.color;
    ctx.stroke();
}

function updateVector(vector, canvas, shouldRecordTrace) {
    vector.x += vector.vx * (100 / animationSpeed);
    vector.y += vector.vy * (100 / animationSpeed);

    if (vector.x <= vector.radius || vector.x >= canvas.width - vector.radius) {
        vector.vx = -vector.vx;
        vector.x = Math.max(vector.radius, Math.min(vector.x, canvas.width - vector.radius));
    }
    if (vector.y <= vector.radius || vector.y >= canvas.height - vector.radius) {
        vector.vy = -vector.vy;
        vector.y = Math.max(vector.radius, Math.min(vector.y, canvas.height - vector.radius));
    }

    if (shouldRecordTrace) {
        vector.path.push({x: vector.x, y: vector.y});
    }
}

function resetVector(vector) {
    vector.x = vector.originalX;
    vector.y = vector.originalY;
    vector.path = [{x: vector.originalX, y: vector.originalY}];
}

function updateNRPTS() {
    NRPTS = parseInt(document.getElementById('nrpts').value, 10) || 5;
}

function toggleTrace() {
    showTrace = document.getElementById('traceCheckbox').checked;

    if (!showTrace) {
        vectors.forEach(vector => {
            vector.path = [{x: vector.x, y: vector.y}];
        });
    }

    drawVectors();
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function generatePoints() {
    if (isAnimating) {
        toggleAnimation();
    }

    vectors = [];
    for (let i = 0; i < NRPTS; i++) {
        vectors.push(createVector());
    }

    drawVectors();

    if (!document.getElementById("animationControls")) {
        addAnimationControls();
    }
}

function drawVectors() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    vectors.forEach(vector => {
        drawVector(ctx, vector, showTrace);
    });
}

function animateVectors() {
    if (!isAnimating) return;

    const canvas = document.getElementById("myCanvas");

    vectors.forEach(vector => {
        updateVector(vector, canvas, showTrace);
    });

    drawVectors();

    animationId = requestAnimationFrame(animateVectors);
}

function toggleAnimation() {
    const toggleBtn = document.getElementById("toggleBtn");

    if (isAnimating) {
        isAnimating = false;
        cancelAnimationFrame(animationId);
        toggleBtn.textContent = "Start Animation";
        document.getElementById("resetBtn").disabled = false;
    } else {
        isAnimating = true;
        toggleBtn.textContent = "Stop Animation";
        document.getElementById("resetBtn").disabled = true;
        animationId = requestAnimationFrame(animateVectors);
    }
}

function resetAnimation() {
    vectors.forEach(vector => {
        resetVector(vector);
    });

    drawVectors();
}

function addAnimationControls() {
    const controlsDiv = document.createElement("div");
    controlsDiv.id = "animationControls";
    controlsDiv.style.margin = "10px 0";

    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggleBtn";
    toggleBtn.textContent = "Start Animation";
    toggleBtn.onclick = toggleAnimation;

    const resetBtn = document.createElement("button");
    resetBtn.id = "resetBtn";
    resetBtn.textContent = "Reset Animation";
    resetBtn.onclick = resetAnimation;
    resetBtn.style.marginLeft = "10px";

    const traceLabel = document.createElement("label");
    traceLabel.style.marginLeft = "20px";

    const traceCheckbox = document.createElement("input");
    traceCheckbox.type = "checkbox";
    traceCheckbox.id = "traceCheckbox";
    traceCheckbox.checked = showTrace;
    traceCheckbox.onchange = toggleTrace;

    traceLabel.appendChild(traceCheckbox);
    traceLabel.appendChild(document.createTextNode(" Show Trace"));

    controlsDiv.appendChild(toggleBtn);
    controlsDiv.appendChild(resetBtn);
    controlsDiv.appendChild(traceLabel);

    const canvas = document.getElementById("myCanvas");
    canvas.parentNode.insertBefore(controlsDiv, canvas.nextSibling);
}

window.onload = function() {
    generatePoints();
};
