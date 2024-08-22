/**
 * 
 * @param {Number} b base
 * @param {Number} h height
 * @param {pos} p - positon
 * @param {String} fill color
 * @param {String} stroke color
 * 
 * by some attribution:
 * http://www.java2s.com/
 * // Tutorials/Javascript/Canvas_How_to/Shape/Fill_Triangle.html
 * 
 */
export function sf_fillTriangle(b,h,p,fill,stroke){
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.lineWidth   = 4;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);  //top point
    ctx.lineTo(p.x-(b/2), p.y+h); //(x_1, y_1)
    ctx.lineTo(p.x+(b/2), p.y+h);  //(x_2, y_2)
    ctx.fill();
    ctx.closePath();     //Close path
    //Fill triangle
    ctx.stroke();
    ctx.restore();
}
/**
 * Draws a 3 box in a 2D canvas
 * 
 * @param {Number} l length
 * @param {Number} w width
 * @param {Number} h height
 * @param {Number} x x-coord
 * @param {Number} y y-coord
 */
export function sf_drawBox(l,w,h,x,y) {
    //add rotation functionality
    //add color type
    
    l = l/2;
    ctx.lineWidth = 2;
    ctx.fillStyle = "lightblue";
    ctx.strokeStyle = "darkblue";
    ctx.setLineDash([3,3]);
    ctx.fillRect(x+(l^(2)/2),y-(l^(2)/2),w,h);
    ctx.strokeRect(x+(l^(2)/2),y-(l^(2)/2),w,h);
    ctx.save();


    ctx.setLineDash([0,0]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "darkred";

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+(l^(2)/2),y-(l^(2)/2));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x+w,y);
    ctx.lineTo(x+w+(l^(2)/2),y-(l^(2)/2));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x+w,y+h);
    ctx.lineTo(x+w+(l^(2)/2),y+h-(l^(2)/2));
    ctx.stroke();

    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "goldenrod";
    ctx.lineWidth = 3;
    ctx.fillRect(x,y,w,h);
    ctx.strokeRect(x,y,w,h);
    ctx.restore();
}

/**
 * 
 * @param {Number} r radius
 * @param {pos} p - position
 * @param {String} fill color
 * @param {String} stroke color
 * 
 */
export function sf_fillCircle(ctx,r,p,fill,stroke){
    ctx.save();
    ctx.translate(0,0);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill; 

    ctx.arc(p.x, p.y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();     //Close path
    ctx.stroke();
    ctx.restore();
}