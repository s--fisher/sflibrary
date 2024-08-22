// @ts-check
export {};

// we'll keep track of a set of "circles"
let circles = [];

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("box1canvas"));
let context = canvas.getContext('2d');
/**
 * 
 * @param {Number} r radius
 * @param {Number} x x--coord
 * @param {Number} y y--coord
 * @param {String} fill color
 * @param {String} stroke color
 * 
 */
function sf_fillCircle(r,x,y,fill,stroke){
    context.fillStyle = fill; 
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.closePath();     //Close path
    context.fill();
    context.strokeStyle = stroke;
    context.lineWidth   = 1;
    context.stroke();
    context.save();
}
canvas.onclick = function(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    mouseX -= box.left;
    mouseY -= box.top;
    circles.push({"x":mouseX,"y":mouseY,"fill":"rgb(0,255,51)",clicked:false});
};

function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);

    circles.forEach(function(circle){
        if(!circle.clicked){
            sf_fillCircle(5,circle.x,circle.y,circle.fill,"red");
        }else{
            sf_fillCircle(5,circle.x,circle.y,"red",circle.fill);
        }
    });
    window.requestAnimationFrame(animate);
}
animate();

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {Array[object]} circList
 */
function hoverCircleList(x,y,circList) {

    circList.forEach(function(circ) {
        if ((x >= circ.x-5) && (y>=circ.y-5) && (x <= circ.x+5) && (y <= circ.y+5) ) {
            circ.clicked = true;
        }else{
            circ.clicked = false;
        }
    });
}

canvas.onmousemove = function(event) {
    let x = event.clientX;
    let y = event.clientY;
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    x -= box.left;
    y -= box.top;

    hoverCircleList(x, y, circles);
};