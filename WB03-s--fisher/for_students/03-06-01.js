// @ts-check
//Attributions:
/// Reference:
// https://thumbs.dreamstime.com/z/
// remote-controlled-quadcopter-model-image-vector-illustration-204640817.jpg
// Bezier maker:
// https://www.victoriakirst.com/beziertool/
export {};


// somewhere in your program you'll want a line
// that looks like:
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
const ctx = canvas.getContext("2d");
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
function sf_fillTriangle(b,h,p,fill,stroke){
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
function sf_drawBox(l,w,h,x,y) {
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
function sf_fillCircle(r,p,fill,stroke){
    ctx.save();
    ctx.translate(p.x,p.y);
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
/////////////////sf_library ^^^^^^^^^^^^^^^^^^^^^^
class pos{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
const quad_obj = [];
var theta = 0;

class sfQuad {
    constructor(t,d,a,p){
        this.t = t % 360;
        this.x = p.x;
        this.y = p.y;
        this.p = new pos(p.x,p.y);
        this.d = d*performance.now()*2;
        this.a = a;

        this.make = () =>{
            console.log('${pos.x},${pos.y}');
        }
        quad_obj.push({"t":this.t,"d":this.d,"a":this.a,"p":this.p});
    }
}


function sf_drawQuads(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    quad_obj.forEach(function(quads) {
        var tpos = sf_flightpath(quads.p,quads.t);
        const iQuad = new sfQuad(quads.t,1,quads.a,tpos);
        quad_obj.pop();

    });


}

function sf_upDateQuads(){
    quad_obj.forEach(function(quads) {
        var tpos = sf_flightpath(quads.p,quads.t);
        quads.t += .1;
        const iQuad = new sfQuad(quads.t,1,quads.a,tpos);
        sf_Quad(performance.now(),quads.a,quads.p,quads.t);
        quad_obj.pop();
    });
}

/**
 * the animation loop gets a timestamp from requestAnimationFrame
 * 
 * @param {DOMHighResTimeStamp} timestamp 
 */
function loop(timestamp) {
    sf_drawQuads();
    sf_upDateQuads();
    window.requestAnimationFrame(loop);
};


function main(){
    const myQuad = new sfQuad(0,10,.04,new pos(300,300));
    const myQuad2 = new sfQuad(0,5,.09,new pos(100,100));
    loop(Date.now());
}
main();


/**
 * @param {pos} pos - position
 * @param {Number} rot - rotation direction
 * @param {Number} a - altitude 
 * @param {String} c - color
 */
function sf_propeller(p,rot,a,c){
    ctx.strokeStyle = c;
    let s = a; //scale
    var blade1 = sf_blade(s);
    var blade2 = sf_blade(s);
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(rot*(Math.PI/180));
    ctx.fill(blade1);
    ctx.stroke(blade1);
    ctx.restore();
    
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate((rot+180)%360*(Math.PI/180));
    ctx.fill(blade2);
    ctx.stroke(blade2);
    ctx.restore();
    ctx.save();
    ctx.translate(p.x,p.y);
        sf_fillCircle(a*(40),new pos(0,0),"black","red");
    ctx.restore();
}

/**
 * 
 * @param {Number} d - direction
 * @param {Number} a - altitude
 * @param {String} c - color
 * @param {pos} p - position 
 */
function sf_propset(d,a,c,p){
    ctx.save();
    ctx.translate(p.x,p.y);
    let xoffR = a*(400);
    let yoffB = a*(350);
    let xoffL = -a*(400);
    let yoffU = - a*(350);

    sf_propeller(new pos(xoffR,yoffB),(d*.6)%360,a,c); //BR  
    sf_propeller(new pos(xoffR,yoffU),(d*-.6)%360,a,c); //UR
    sf_propeller(new pos(xoffL,yoffB),(d*-.6)%360,a,c); //BL
    sf_propeller(new pos(xoffL,yoffU),(d*.6)%360,a,c); //UL
    ctx.restore();
}

function sf_blade(s){
    var blade = new Path2D();
    blade.moveTo(0,0);
    blade.bezierCurveTo((-5) * s, (14) * s, (8) * s, (-23) * s, (17) * s, (-54) * s);
    blade.bezierCurveTo((29) * s, (-93) * s, (65) * s, (-98) * s, (98) * s, (-126) * s);
    blade.bezierCurveTo((132) * s, (-154) * s, (193) * s, (-186) * s, (204) * s, (-206) * s);
    blade.bezierCurveTo((215) * s, (-226) * s, (216) * s, (-243) * s, (225) * s, (-231) * s);
    blade.bezierCurveTo((229) * s, (-226) * s, (233) * s, (-212) * s, (235) * s, (-191) * s);
    blade.bezierCurveTo((237) * s, (-168) * s, (192) * s, (-122) * s, (165) * s, (-95) * s);
    blade.bezierCurveTo((156) * s, (-86) * s, (119) * s, (-43) * s, (94) * s, (-13) * s);
    blade.bezierCurveTo((84) * s, (4) * s, (57) * s, (11) * s, (44) * s, (14) * s);
    blade.bezierCurveTo((36) * s, (16) * s, (20) * s, (23) * s, (13) * s, (25) * s);
    blade.closePath();
    return blade;
}

/**
 * 
 * @param {pos} p - position
 * @param {pos} to - to
 * @param {Number} a - altitude 
 */
function sf_arms(p,to,a){
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.beginPath();
    ctx.moveTo(p.x,p.y);
    ctx.lineTo(to.x,to.y);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();
}


/**
 * 
 * @param {Number} d - direction //in degrees
 * @param {Number} a - altitude 
 * @param {pos} p - position
 * @param {Number} t - theta
 */
function sf_Quad(d,a,p,t){
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(t);
        let xoffR = a*(400);
        let yoffB = a*(350);
        let xoffL = - a*(400);
        let yoffU = - a*(350);
        sf_arms(new pos(0,0),new pos(xoffR,yoffB),a);
        sf_arms(new pos(0,0),new pos(xoffR,yoffU),a);
        sf_arms(new pos(0,0),new pos(xoffL,yoffB),a);
        sf_arms(new pos(0,0),new pos(xoffL,yoffU),a);
    ctx.restore();
    
    ctx.save();
        ctx.translate(p.x,p.y);
        ctx.rotate(t);
        sf_propset(d,a,"blue",new pos(0,0));
    ctx.restore();
    
    ctx.save();
        ctx.translate(p.x,p.y);
        ctx.rotate(t);
        sf_fillCircle(a*(100),new pos(0,0),"black","red");
        sf_fillTriangle(a*(100),a*50,new pos(0,0- a*55),"black","red");
    ctx.restore();
}


/**
 * @param {pos} p - position
 * @param {Number} t - theta
 */
function sf_flightpath(p,t){
    ctx.save();
    ctx.translate(p.x,p.y);
    let tpos = p;
   // var xdir = 0;
    //var ydir = 0;
    var r = 4.5;
    tpos.x += (r) * Math.cos(t);
    tpos.y += (r) * Math.sin(t);

   // sf_fillCircle(t,new pos(canvas.width / 4 , canvas.height / 4),"white","black");
   ctx.restore(); 
   return tpos;
}

