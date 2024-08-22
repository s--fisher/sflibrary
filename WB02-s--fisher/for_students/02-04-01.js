// @ts-check
export {};

/** @type {HTMLCanvasElement} */
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let ctx = canvas.getContext('2d');


/**
 * 
 * @param {Number} b base
 * @param {Number} h height
 * @param {Number} x x--coord
 * @param {Number} y y--coord
 * @param {String} fill color
 * @param {String} stroke color
 * 
 * by some attribution:
 * http://www.java2s.com/
 * // Tutorials/Javascript/Canvas_How_to/Shape/Fill_Triangle.html
 * 
 */
function sf_fillTriangle(b,h,x,y,fill,stroke){
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(x, y);  //top point
    ctx.lineTo(x-(b/2), y+h); //(x_1, y_1)
    ctx.lineTo(x+(b/2), y+h);  //(x_2, y_2)
    ctx.closePath();     //Close path
    //Fill triangle
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth   = 6;
    ctx.stroke();
    ctx.save();
}
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
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.closePath();     //Close path
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth   = 5;
    ctx.stroke();
    ctx.save();
}

/**
 * Draws a filled ellipise
 * 
 * Some attribution to interactive search
 * introducting to bezierCurveTo
 * origionally attempted to use arcTo
 * 
 * @param {Number} r radius
 * @param {Number} fdis foci distance
 * @param {Number} x x--coord
 * @param {Number} y y--coord
 * @param {String} fill color
 * @param {String} stroke color
 * 
 */
function sf_fillEllipse(r,fdis,x,y,fill,stroke){
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(x-fdis,y+r);
    ctx.bezierCurveTo(x-fdis-1.5*r, y+r, x-fdis-1.5*r, y-r, x-fdis, y-r);
    ctx.lineTo(x+fdis,y-r);
    ctx.bezierCurveTo(x+fdis+1.5*r, y-r, x+fdis+1.5*r, y+r, x+fdis, y+r);
    ctx.lineTo(x-fdis,y+r);
    ctx.closePath();     //Close path
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth   = 5;
    ctx.stroke();
    ctx.save();
}
/**
 * Draws a filled sawtooth shape
 * 
 * @param {Number} b base
 * @param {Number} h height
 * @param {Number} x x--coord
 * @param {Number} y y--coord
 * @param {String} fill color
 * @param {String} stroke color
 * 
 */
function sf_twinPeak(b,h,x,y,fill,stroke){
    ctx.fillStyle = fill;
   // ctx.moveTo(x-(b/2),y-(h/2));
    ctx.beginPath();

    ctx.lineTo(x-(b/4),y-(h/2));
    ctx.lineTo(x,y);
    ctx.lineTo(x+(b/4),y-(h/2));
    ctx.lineTo(x+(b/2),y);
    ctx.lineTo(x+(b/2),y+(h/2));
    ctx.lineTo(x-(b/2),y+(h/2));
    ctx.lineTo(x-(b/2),y);
    ctx.closePath();     //Close path
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth   = 5;
    ctx.stroke();
    ctx.save();
}
sf_twinPeak(100,50,200,150,"grey","black");
sf_fillEllipse(25,25,200,50,"lightpink","darkred");
sf_fillCircle(25,60,50,"#F8E","#846")
sf_fillTriangle(55,50,60,125,"sandybrown","darkgoldenrod");