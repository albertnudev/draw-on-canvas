//---------------------------------------------////
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let coord = {x:0, y:0 };
let drawing = false;
let pointer = document.getElementById('pointer');
let color = document.getElementById('color');
let eraser = document.getElementById('eraser');
let save = document.getElementById('save');


canvas.addEventListener("mousedown", (e) => {
    x = e.offsetX;
    y= e.offsetY;
    drawing = true;
});

canvas.addEventListener("mousemove", (e) => {
    if (drawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener("mouseup", (e) =>{
    if (drawing === true){
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        drawing = false;
    }
});

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineWidth = pointer.value;
    ctx.lineCap = "round";
    ctx.strokeStyle = color.value;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}


canvas.addEventListener("resize", resize);
function resize() {
    ctx.canvas.width = canvas.width;
    ctx.canvas.height = canvas.height;
}
resize();

eraser.addEventListener("click", borrar, false);
function borrar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

save.addEventListener('click', function() {
    let link = document.createElement('a');
    link.download = 'download.jpg';
    link.href = canvas.toDataURL()
    link.click();
    link.delete;
});