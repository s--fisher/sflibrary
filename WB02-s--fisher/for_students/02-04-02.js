//Shia Verions

// @ts-check
export {};

/** @type {HTMLCanvasElement} */
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let context = canvas.getContext('2d');
let ctx = context;

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
function sf_fillCircleShade(r,x,y,stroke){
 
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.closePath();     //Close path
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth   = 2;
    ctx.stroke();
    ctx.save();
}
/**
 * 
 * Using vector maker
 * https://claudiopro.github.io/beziertool/
 * Trace
 * https://cdn.wallpapersafari.com/67/27/PW6JN0.jpg
 * @param {*} ctx context
 * @param {Number} xoff x--offset
 * @param {Number} yoff y--offset
 */
function sf_Wisconsin(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(113 + xoff, 119 + yoff);
    ctx.bezierCurveTo(111 + xoff, 104 + yoff, 98 + xoff, 271 + yoff, 96 + xoff, 256 + yoff);
    ctx.bezierCurveTo(81 + xoff, 255 + yoff, 131 + xoff, 258 + yoff, 116 + xoff, 257 + yoff);
    ctx.bezierCurveTo(111 + xoff, 243 + yoff, 159 + xoff, 408 + yoff, 179 + xoff, 441 + yoff);
    ctx.bezierCurveTo(206 + xoff, 398 + yoff, 310 + xoff, 363 + yoff, 297 + xoff, 371 + yoff);
    ctx.bezierCurveTo(294 + xoff, 386 + yoff, 318 + xoff, 264 + yoff, 315 + xoff, 279 + yoff);
    ctx.bezierCurveTo(311 + xoff, 265 + yoff, 339 + xoff, 378 + yoff, 335 + xoff, 364 + yoff);
    ctx.bezierCurveTo(320 + xoff, 362 + yoff, 415 + xoff, 362 + yoff, 454 + xoff, 374 + yoff);
    ctx.bezierCurveTo(511 + xoff, 189 + yoff, 514 + xoff, 135 + yoff, 543 + xoff, 134 + yoff);
    ctx.bezierCurveTo(550 + xoff, 136 + yoff, 550 + xoff, 55 + yoff, 559 + xoff, 15 + yoff);
    ctx.bezierCurveTo(532 + xoff, 10 + yoff, 429 + xoff, 16 + yoff, 414 + xoff, 16 + yoff);
    ctx.bezierCurveTo(412 + xoff, 1 + yoff, 391 + xoff, 141 + yoff, 399 + xoff, 144 + yoff);
    ctx.bezierCurveTo(432 + xoff, 141 + yoff, 386 + xoff, 210 + yoff, 385 + xoff, 256 + yoff);
    ctx.bezierCurveTo(346 + xoff, 134 + yoff, 374 + xoff, 153 + yoff, 378 + xoff, 142 + yoff);
    ctx.bezierCurveTo(380 + xoff, 118 + yoff, 389 + xoff, 4 + yoff, 388 + xoff, 19 + yoff);
    ctx.bezierCurveTo(373 + xoff, 16 + yoff, 283 + xoff, 40 + yoff, 268 + xoff, 43 + yoff);
    ctx.bezierCurveTo(254 + xoff, 166 + yoff, 243 + xoff, 175 + yoff, 264 + xoff, 178 + yoff);
    ctx.bezierCurveTo(259 + xoff, 204 + yoff, 246 + xoff, 283 + yoff, 237 + xoff, 290 + yoff);
    ctx.bezierCurveTo(236 + xoff, 278 + yoff, 220 + xoff, 250 + yoff, 217 + xoff, 194 + yoff);
    ctx.bezierCurveTo(206 + xoff, 205 + yoff, 243 + xoff, 160 + yoff, 232 + xoff, 171 + yoff);
    ctx.bezierCurveTo(231 + xoff, 186 + yoff, 246 + xoff, 35 + yoff, 245 + xoff, 50 + yoff);
    ctx.bezierCurveTo(231 + xoff, 44 + yoff, 136 + xoff, 114 + yoff, 122 + xoff, 108 + yoff);
   
    ctx.fill();
    ctx.stroke();
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
function sf_drawBox(l,w,h,x,y) {
    //add rotation functionality
    //add color type
    l = l/2;
    context.lineWidth = 2;
    context.fillStyle = "lightblue";
    context.strokeStyle = "darkblue";
    context.setLineDash([3,3]);
    context.fillRect(x+(l^(2)/2),y-(l^(2)/2),w,h);
    context.strokeRect(x+(l^(2)/2),y-(l^(2)/2),w,h);
    context.save();


    context.setLineDash([0,0]);
    context.lineWidth = 1;
    context.strokeStyle = "darkred";

    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+(l^(2)/2),y-(l^(2)/2));
    context.stroke();

    context.beginPath();
    context.moveTo(x+w,y);
    context.lineTo(x+w+(l^(2)/2),y-(l^(2)/2));
    context.stroke();

    context.beginPath();
    context.moveTo(x+w,y+h);
    context.lineTo(x+w+(l^(2)/2),y+h-(l^(2)/2));
    context.stroke();

    context.fillStyle = "yellow";
    context.strokeStyle = "goldenrod";
    context.lineWidth = 3;
    context.fillRect(x,y,w,h);
    context.strokeRect(x,y,w,h);
    context.save();
}
let i = 0;
let j = 0;
function animate() {
    // clear the canvas
    context.clearRect(0,0,canvas.width,canvas.height);

    if(i <= 1){
        i += .001;
        sf_fillCircle(25,250,450,"pink","red");
        sf_drawBox((50 + i*100),(50+i*100),(50+i*100),(90+i*100),(440-i*100));
        ctx.fillStyle = `rgba(39, 245, 230, ${i}`;
        sf_fillCircleShade(10,255,440,"blue");
    }else{
        sf_fillCircle(25,250,450,"pink","red");
        sf_drawBox((50 + i*100),(50+i*100),(50+i*100),(90+i*100),(440-i*100));
        ctx.fillStyle = `rgba(39, 245, 230, ${i}`;
        sf_fillCircleShade(10,255,440,"blue");
        j+= .001;
    }
    sf_Wisconsin(ctx,0,0);
    window.requestAnimationFrame(animate);
}
animate();