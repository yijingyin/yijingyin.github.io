

function drawVector() {
    let x = (Math.random() * 570)+20;
    let y = (Math.random() * 470)+20;
    let a = (Math.random() - 0.5) * 4;
    let b = (Math.random() - 0.5) * 4;
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const ctx2 = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);

    ctx2.moveTo(x,y);
    ctx2.lineTo(a,b);
    ctx2.stroke();
}


