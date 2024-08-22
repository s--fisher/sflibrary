/**
 * GLOBAL ASSETS AND CONTEXT
 */
export let sfboids = [];
export let globalBoneList = 0;

/**
 * sf_LIB_AB
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
export function sf_LIB_AB(context, x1, y1, x2, y2) {
    let dX = x2 - x1;
    let dY = y2 - y1;

    let hypot = Math.sqrt(Math.pow(dX,2) + Math.pow(dY,2));//distance red to green
    let dS = Math.sqrt(Math.pow(hypot,2)*2)/2; //distance red to black
    let s = dS/10;

    let x3 = ((x1+x2)+(y2-y1))/2; // the black square X-cord
    let y3 = ((y1+y2)-(x2-x1))/2; // the black square Y--cord


    let radian = Math.atan((y3-y1)/(x3-x1));

    if(x1 <= x3){
        if(y1 < y3){
            radian %= Math.PI;
    //       console.log("case 1: "+ radian*180/Math.PI);
        }else{
            radian += (2)*Math.PI;
            radian %= (2)*Math.PI;
    //        console.log("case 4: "+ radian*180/Math.PI);
        }
    }else{
        if(y1 < y3){
            radian += Math.PI;
            radian %= Math.PI;
    //        console.log("case 2: "+ radian*180/Math.PI);
        }else{
            radian += Math.PI;
            radian %= (2)*Math.PI;
    //        console.log("case 3: "+ radian*180/Math.PI);
        }
    }

    let cos = Math.cos(radian);
    let sin = Math.sin(radian);

    let a = s*cos;//transform2[0]
    let b = s*sin;//transform2[1]
    let c = (-1)*s*sin;//transform2[3]
    let d = s*cos;//transform2[4]
    let e = x1;//transform2[6]
    let f = y1;//transform2[7]

    // please leave this line - you should CHANGE the 6 lines above. Add additonal math/logic code as needed.
    context.transform(a, b, c, d, e, f);
}
/**
 * sf_SuperRandom()
 *  Takes a few pieces of data to generate a super random (reseeded).
 * by Shia Aaron Lloyd Fisher
 *  6/3/2024
 * 
 * @param {number} i - random indicator (that's what makes this super random) 
 * @param {number} min - smallest number a random var can take
 * @param {number} max - largest number a random var can take
 * @param {number} r - random number offset
 * @returns 
 */
export function sf_SuperRandom(i, min, max, r) {
    if ((-1) ^ (i)) {
        r += (Math.random() * Math.min(min, max)) + min;
    } else {
        r -= (Math.random() * Math.max(min, max)) + min;
    }
    return r;
}
/**
 * Position Type
 */
export class pos {
    constructor(x = 0, y = 0, dir = 0) {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }
}
/**
 * Color Type
 */
export class color {
    constructor(r = 0, g = 0, b = 0,i=0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.i = i;
        this.callee = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    }

    paint() {
        return this.callee;
    }
}
/**
 * ADAPTED FROM UW MADISON CS DEPT
 */
export class BoidUV {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} vx 
     * @param {number} vy 
     */
    constructor(x = 0, y = 0, vx = 1, vy = 0) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.i = Math.atan((this.vy-this.y))/((this.vx-this.x));
        this.dir = Math.sin(this.i)/Math.cos(this.i);
    }

    draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.fillStyle = "blue";
        context.fillRect(-5, -5, 10, 10);
        context.restore();
    }
}

/**
 * sfBoid
 * This class contains a boid object.
 * by Shia Fisher
 * First Integrated 6/3/2024
 */
export class sfBoid {
    constructor(p = new pos(), s = 10, b = new BoidUV(), c = new color(), i = 1,name=new Number(globalBoneList)) {
        this.p = p;
        this.s = s;
        this.b = b;
        this.c = c;
        this.p.dir = sfA(b.vx, b.vy, i);
        this.muted = new Boolean;
        this.name = name;
        globalBoneList += 1;
        this.mint = 0;
        this.awareness = ((this.c.r + this.c.g + this.c.b)/(3)) % (100); //awareness is by random color.

/** try(){}catch()
   function sfGreedy((p.x = new Number) ? 1 : this.p.x = 1, this.p.s,this.p.b.vx - this.p.x){  
        //Implement Djystra's Algorithm
    } 
    sfGreedy(p = 0,size,){
        if(this.p.s != 10){//Greedy
            this.p.x += 1;
            this.p.y += 1*this.i;
        }
            console.Greedy(Greedy);

    } */
    }

    draw(context) {

        if(this.mint != 0){
            this.mint -= 1;
            let hex = this.mint.toString(16);
            let result = (hex == 1 ? "0" + hex : hex);
          //  this.c.r -= (parseInt(result[1],16) % 255) % 1;
           // this.c.g -= (parseInt(result[2],16) % 255) % 1;
            //this.c.b -= (parseInt(result[3],16) % 255) % 1;
            this.c = new color (this.c.r,this.c.g,this.c.b,this.c.i);
        }

        sf_ObjUV(context, this.p, this.s, new color(this.c.r,this.c.g,this.c.b,this.c.i), this.b.vx);
        context.setTransform(1,0,0,1,0,0);
      // this.p.dir = (this.p.dir - Math.PI/2) % Math.PI;
    }
//   sfboids.forEach(function (sfboid) {//movement in general
    updatePosition(context, speed) {
        if(this.muted){
            return;
        }
        if(this.projectile){
            let velocity = Math.sqrt(this.b.vx^2 + this.b.vy^2);
            let angle = Math.atan(this.p.y/this.p.x);
            this.b.vx = Math.cos(angle) * velocity;
            this.b.vy = Math.sin(angle) * velocity;
        }

 //       console.log("UPDATE POSITION CALL");
//     sfboid.p.x += sfboid.b.vx * speed;
    this.p.x += this.b.vx * speed;
//   sfboid.p.y += sfboid.b.vy * speed;
    this.p.y += this.b.vy * speed;
    this.p.dir = sfA(this.b.vx,this.b.vy);
    // this.p.dir = -Math.tan(angle);//this logic is correct
        


//  context.transform(1,0,0,1,0,0); // Normalize the offsets
    context.transform(1,0,0,1,0,0);

    }
/**
 * HANDLE COLLISIONS
 * by Shia Fisher
 * sfLibrary - sfBoids
 * @param {*} canvas 
 * @param {sfBoid} that 
 * @param {number} collision - a switch default off
 */
    //START HANDLE_COLLISIONS_____________________________________________________________________________
    handleCollision(canvas,that = 0,collision=0) {//collisons do not mutate position, it mutates the object direction or size [think attack damage KIRK ;-)]
        let context = canvas.getContext("2d");
// COLLISION DETECTION
let  ballX = this.p.x + this.b.vx + 2*(this.s);
let  ballY = this.p.y + this.b.vy + 2*(this.s);
let speedlimit = 2;

let rotationalCore = Math.PI/2; // what is the factor to change course

        // console.log("COLLISIONS,");
if(this.c.i > 0){
//    console.log("Heal-Damage for @" + this.name + " was :" + this.c.i + " ADJUSTED: " + Math.round(this.c.i-1));
    this.c.i -= 1;
    this.c.i = Math.round(this.c.i);
}//CLOSE HEALING

if(this.mint + that == 0){//ACK
    console.log("I DIDN'T SEE A THING");
    this.mint = (this.mint == 0 ? 100 : this.mint - this.c.i );
    console.log("yeah right " + this.mint);
} else{    

// If there is more than one bone on screen we need to check for collisions.    
    if(!that){
        //this is a global case, I don't think it is useful for anything except development of the IDNP Protocol.
            
        }//CLOSE CASE FOR MORE THAN 1 ARROW ON SCREEN

    if((collision == 1) && (typeof this.name != 'undefined') && (typeof that.name != 'undefined')){//CALL
        if( (typeof that.b.vx  == 'undefined') ||  (typeof that.b.vy  == 'undefined') || 
        (typeof this.b.vx  == 'undefined') || (typeof this.b.vy  == 'undefined')){
       //     console.log("======================================================>WARNING");
        }else{
     //       console.log("LEGAL <======================================================");
        }

 
 //console.log("NAME CHECK: " + this.name + " ? " + that.name);
        if(this.name != that.name){ //ensure the recursive loop isn't just finding itselt
     
                        //     let hiveMind = 50;//how well are the boids coordinated
               let damageR = 30;
                    let insurance = (Math.max(this.s,that.s)/damageR) % 20;

        let fxThis = (this.b.vx-this.p.x);//this is the real location of THIS object
let fxThat = (that.b.vx -that.p.x);//this is the projected("real") location of another object
        let fx = Math.abs(fxThis-fxThat);//the distance between the two is measured here.

        let fyThis = (this.b.vy - this.p.y);//this is the real location of THIS object
let fyThat = (that.b.vy - that.p.y);//this is the projected("real") location of another object
let fy = Math.abs(fyThis-fyThat);//the distance between the two is measured here.
//console.log("DETECTION MODE,: " + this.name);
//console.log("COMPARE :" + new Number(this.b.vx) + " | with " + new Number(that.b.vx));
                        let ballBy = that.s+that.p.y+that.b.vy;
                        let ballBx = that.s+that.p.x+that.b.vx;
//                    if(insurance*fx*2 <= Math.min(this.s,that.s) ){//if the insurance of the objects times their ditance is smaller than their size they came too close
//                        if(insurance*fy*2 <= Math.min(this.s,that.s) ){
            if(Math.abs(ballBy - ballY) <= Math.min(this.s,that.s)){
                if(Math.abs(ballBx - ballX) <= Math.min(this.s,that.s)){

                            let mA = this.s; //mass of object A
                            let mB = that.s;// mass of object B

                            let vxA =  Math.sqrt(Math.abs((((.5)*(mA*this.b.vx^2 + mB*that.b.vx^2)-(mA*fx))/(mA))*(2)));
                            let vxB =  Math.sqrt(Math.abs((((.5)*(mA*this.b.vy^2 + mB*that.b.vy^2)-(mB*fx))/(mB))*(2))); 
                            let vyA =  Math.sqrt(Math.abs((((.5)*(mA*this.b.vx^2 + mB*that.b.vx^2)-(mA*fy))/(mA))*(2)));
                            let vyB =  Math.sqrt(Math.abs((((.5)*(mA*this.b.vy^2 + mB*that.b.vy^2)-(mB*fy))/(mB))*(2)));  
        let vA = (vyA/vxA);
        let vB = (vyB/vxB);
        if(((isNaN(vA)  ||  isNaN(vB) || 
        isNaN(vxA) || isNaN(vxB)))){
           // console.log("=====================> WARNING = "+ vA + " ]{}[ " + vB+ " [" + vxA + " ]{}[ " + vxB);
        }else{
         //   console.log("LEGAL <=================================="+ vA + " ]{}[ " + vB+ " [" + vxA + " ]{}[ " + vxB);
        }         
        let impact = new Number(Math.sqrt(2*vA*vB));                    

        

////_________________---------CASES________________--------------_______________------------_______________________________
        if(mA > mB){                       
   // console.log("ACCIDENT DETECTED VICTIM B, impact: "+ impact);// vB = vB / impact;
    vB = vB / impact;
    //console.log(this.name + " was dinged by " + that.name + " @  (" + this.p.x + ", " + this.p.y + ") with VELOCITY::" + vA +" \n");    
            that.b.vx = -(((vyB-fx) - vxA))*vB % speedlimit;//-(this.b.vx * fx)/Math.cos(vB); //find actual velocity
            that.b.vy = (((vxB-fy) - vyA))*vB % speedlimit;//-(this.b.vy * fy)/Math.sin(vB);
            that.p.dir = sfA(that.b.vx,that.b.vy);
            this.b.vx = (((vyA-fx) - vxB))*vA % speedlimit;//-(tempx * fx)/Math.cos(vA);
            this.b.vy = -(((vxA-fy) - vyB))*vA % speedlimit;//-(tempy * fy)/Math.sin(vA);
            this.p.dir = sfA(this.b.vx,this.b.vy);

this.c.i += Math.round((Math.abs(impact*mB)/insurance))*damageR;


that.c.i += Math.round((Math.abs(impact*mA)/insurance))*damageR;

context.transform(1,0,0,1,0,0);    
                        } else if(mA < mB){
                
    //console.log("ACCIDENT DETECTED VICTIM A, impact: "+ impact);//    vA = vA / impact;
    vA = vA / impact;
    //console.log(that.name + " was in an accident with " + this.name + " @  (" + that.p.x + ", " + that.p.y + ") with VELOCITY::" + vB +" \n");   
    
    that.b.vx = -(((vyB-fx) - vxA))*vB % speedlimit;//-(this.b.vx * fx)/Math.cos(vB); //find actual velocity
    that.b.vy = (((vxB-fy) - vyA))*vB % speedlimit;//-(this.b.vy * fy)/Math.sin(vB);
    that.p.dir = sfA(that.b.vx,that.b.vy);

    vA = vA / impact;
    this.b.vx = (((vyA-fx) - vxB))*vA % speedlimit;//-(tempx * fx)/Math.cos(vA);
    this.b.vy = -(((vxA-fy) - vyB))*vA % speedlimit;//-(tempy * fy)/Math.sin(vA);
    this.p.dir = sfA(this.b.vx,this.b.vy);


    this.c.i += Math.round((Math.abs(impact*mB)/insurance))*damageR;

    
    that.c.i += Math.round((Math.abs(impact*mA)/insurance))*damageR;

context.transform(1,0,0,1,0,0);     
                            } else{ // the OBJECTS HAVE EQUAL MASS
                                    //THE TASK IS TO DETERMINE WHO IS AT FAULT, AND WHO HAS BETTER INSURANCE
                                        //FAULT IS DETERMINTED BY SPEED, AND LACK OF INSURANCE
                                    //FOR NOW IT IS SIMPLE TO JUST EQUALLY IMPACT
                                    if (!((isNaN(this.b.vx)  ||  isNaN(this.b.vy) || 
                                    isNaN(that.b.vx ) || isNaN( that.b.vy )))){
// console.log("NO BUG REPORTED :::: >");
// console.log(this);
// console.log("NO BUG REPORTED :::: >");
// console.log(that);
 console.log("CRASH DETECTED");
// console.log("SETTLE W/O INSURANCE 50-50");
 console.log(this.name + " was in an accident with " + that.name + " @  (" + this.p.x + ", " + this.p.y + ") \n"); 
                                        that.b.vx = (((vxB-fx) - vxA))*vB % speedlimit;//-(this.b.vx * fx)/Math.cos(vB); //find actual velocity
                                        that.b.vy = -(((vyB-fy) - vyA))*vB % speedlimit;//-(this.b.vy * fy)/Math.sin(vB);
                                        that.p.dir = sfA(that.b.vx,that.b.vy);
//  console.log(that);//statistics
                                        that.c.i += impact*damageR; 
                                        context.transform(1,0,0,1,0,0); 

                                        this.b.vx = -(((vxA-fx) - vxB))*vA % speedlimit;//-(tempx * fx)/Math.cos(vA);
                                        this.b.vy = (((vyA-fy) - vyB))*vA % speedlimit;//-(tempy * fy)/Math.sin(vA);
                                        this.p.dir = sfA(this.b.vx,this.b.vy);
// console.log(this);

                                        this.c.i += impact*damageR;    
                                        context.transform(1,0,0,1,0,0); 
                                   }else{
                                    console.log("HERE IS A BUG :: ");
                                    console.log(this);
                                    console.log(that);
                                    }
                            }//CLOSE CASE FOR mA == mB
                        }//CLOSE INSURANCE OF THE Y-FINAL VELOCITY
                    }//CLOSE INSURANCE OF THE X-FINAL VELOCITY
                }
                //collision = 0;
            }else{
//                console.log("throw exception"); 
             //   collision = 0;
            }//CLOSE CHECK THIS.NAME !+ THAT.NAME
        
            collision = 0;
            
    }// CLOSE ALTERNATIVE TO ACK
    if(collision == 0){

//LOCAL PHYISICS
let mA = this.s; //mass of object the boid
let mB =  this.s;// mass of the Edges of the container

let fxThis = (this.b.vx - this.p.x);//final velocity projected obj THIS
let fxThat = mB;//Velocity of the wall------bounce
let fx = fxThis-fxThat;

let fyThis = (this.b.vy - this.p.y);//final velocity projected obj THIS
let fyThat = mB;//Velocity of the wall------bounce
let fy = fyThis-fyThat;

let vxA =  Math.sqrt(Math.abs((((.5)*(mA*this.b.vx^2 + mB*that.b.vx^2)-(mA*fx))/(mA))*(2)));
let vxB =  Math.sqrt(Math.abs((((.5)*(mA*this.b.vy^2 + mB*that.b.vy^2)-(mB*fx))/(mB))*(2))); 
let vyA =  Math.sqrt(Math.abs((((.5)*(mA*this.b.vx^2 + mB*that.b.vx^2)-(mA*fy))/(mA))*(2)));
let vyB =  Math.sqrt(Math.abs((((.5)*(mA*this.b.vy^2 + mB*that.b.vy^2)-(mB*fy))/(mB))*(2)));  

// EOF LOCAL PHYSICS

if(that == 0){//check if there is another object.
    // FUTURE IMPLEMENTATIONS . . . 
      console.log("SIMPLE");
                    let seed = 2;//seed ///NO REMODULATION AFTER THIS.
    
    //  console.log("COLLISION HANDELING.");
    
    
                let p = new pos(this.p.x,this.p.y,sfA((1/this.b.vx % speedlimit),(1/this.b.vy % speedlimit)));
                let b = new BoidUV(p.x,p.y,(1/this.b.vx % speedlimit),(1/this.b.vy % speedlimit));
                that = new sfBoid(p,this.s-1,b,new color(0,255,255));
    
                    console.log("GO TO WARP");//KIRK
                  //  context.setTransform(Math.cos(p.dir), -Math.sin(p.dir), Math.sin(p.dir), Math.cos(p.dir), p.x, p.y);          
                 //   this.p = that.p;
                  //  this.b = that.b;
                   //     that.draw(context);
                    //context.transform(1,0,0,1,0,0);
    
                    console.log("LIVE LONG");//VULCAN
                }else if (typeof this == 'undefined'){
console.log("BUG");
        
                    }
                
// START EDGE DETECTION
    if(ballY >= canvas.height){//bottom wall
//console.log("BOTTOM EDGE HANDELING.");
        this.b.vy = -Math.abs((vyA-fy) - vyB) % speedlimit;
    }else if(this.p.y+this.b.vy <= this.s){//top wall
//console.log("TOP EDGE HANDELING.")
        this.b.vy = Math.abs((vyA-fy) - vyB)  % speedlimit;
    }
    if(ballX >= canvas.width){
 //       console.log("RIGHT EDGE HANDELING.");
                    this.b.vx = -Math.abs((vxA-fx) - vxB)  % speedlimit;//right wall
                }else if(this.p.x+this.b.vx <= mA/2){
   //     console.log("LEFT EDGE HANDELING.");            
                    this.b.vx = Math.abs((vxA-fx) - vxB) % speedlimit;//left wall
                    this.b.vy = Math.abs(this.b.vy);
                }

    context.transform(1,0,0,1,0,0);
   // console.log(this.name + " has a velocity of ("+ this.b.vx + " / " + this.b.vy + ") = ");
// END EDGE DETECTION
            }
}
//END HANDLE_COLLISIONS_____________________________________________________________________________

    steer(canvas,that = 0,collision=0) {
        
        let rotationalCore = 100; // what is the factor to change course

        let  ballX = this.p.x + this.b.vx + 2*(this.s);
        let  ballY = this.p.y + this.b.vy + 2*(this.s);
        let angle =2 * Math.PI / 180;
        let s = Math.sin(angle);
        let c = Math.cos(angle);
        let speedlimit = 2;

        let context = canvas.getContext("2d");


        let ovx = this.b.vx;
        let ovy = this.b.vy;


        if((collision == 1) && (typeof this.name != 'undefined') && (typeof that.name != 'undefined')){
            if(this.name != that.name){
                let  ballBx = that.p.x + that.b.vx + 2*(that.s);
                let  ballBy = that.p.y + that.b.vy + 2*(that.s);
                let rateA = (this.b.vy-this.p.x)/(this.b.vx-this.p.x);
                let rateB = (that.b.vy-that.p.x)/(that.b.vx-that.p.x);
                let distance = Math.sqrt(Math.abs((that.p.x - this.p.x)^2 + (that.p.y - this.p.y)^2));
                 angle = (sfA(that.b.vx,that.b.vy) * this.awareness/(distance+Math.min(this.s,that.s))) % Math.PI;
                 s = Math.sin(angle);
                 c = Math.cos(angle);
                let indicator = (this.awareness)-((rateB/rateA)*(that.s/2));

              //  console.log("WERE GUNNA ???  " + indicator + "   ??   " + Math.abs(ballBy - ballY));
              let tempx = (-that.b.vx * (c*that.awareness)/that.s + that.b.vy * (s*that.awareness)/that.s)*(that.b.vy/that.b.vx) % Math.PI;
              let tempy = (that.b.vx * (s*that.awareness)/that.s + that.b.vy * (c*that.awareness)/that.s)*(that.b.vy/that.b.vx) %  Math.PI;

                if(Math.abs(ballBy - ballY) <= indicator){
                    if(Math.abs(ballBx - ballX) <= indicator){
            //            console.log("WERE GUNNA CRASH!" + angle);

            that.b.vx -= tempx/1000;
            that.b.vy += tempy/1000;
            that.p.dir = sfA(that.b.vx ,that.b.vy );
            context.transform(1,0,0,1,0,0);

            this.b.vx += ((ovx * c + ovy * s)* (this.b.vy/this.b.vx) %  Math.PI/2)/rotationalCore;
            this.b.vy -= ((-ovx * s + ovy * c) * (this.b.vy/this.b.vx) %  Math.PI/2)/rotationalCore;
                        this.p.dir = sfA(this.b.vx ,this.b.vy );
                        context.transform(1,0,0,1,0,0);
                    }

                }


            }
        }

        //this.b.vx = ovx * c + ovy * s;
       // this.b.vy = -ovx * s + ovy * c;
       // this.p.dir = sfA(this.b.vx,this.b.vy);


        context.transform(1,0,0,1,0,0);
    }

    hover(mousemove) {
       this.c = "red";
    }
}
/**
 * sf_Obj - Creates an object that looks like an arrow.
 * 6/3/2024
 * By: Shia Aaron Lloyd Fisher
 * 
 * 
 * @param {pos} p - position
 * @param {number} s - size
 * @param {color} c - color
 * @param {number} vx - fixed vector (X) velcicity 
 */
export function sf_Obj(p, s, c, vx) {
    if (((vx - p.x)/(p.y)*s) % 1 < (c.r+c.g*c.b/(255*3)) ){//color versus tan
        p.dir += (-1)*Math.PI*s;
    }

    let degree = p.dir - Math.PI / 2;
    let sin = Math.sin(degree);
    let cos = Math.cos(degree);

    context.setTransform(cos, sin, -sin, cos, p.x, p.y);
    context.lineWidth = Math.round(s / 6);
    context.strokeStyle = (new color(c.b, c.r, c.g)).paint();
    context.fillStyle = c.paint();

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(s / 2, 0);
    context.lineTo(0, 2 * s);
    context.lineTo(-s / 2, 0);
    context.fill();
    context.closePath();
    context.stroke();

    context.setTransform(1, 0, 0, 1, 0, 0);
}

/**
 *
 * sf_Obj from the sf_Library
 * by: Shia Aaron Lloyd Fisher
 * 5/31/2024
 * This creates an arrow object, which is going to be used for rigging elements
 * This is a like a bone.
 *
 * I am adding the ability to select either end as a control point
 * I am adding the ability to right click on control points to open an option menu
 * I am adding the ability to join control points together to create a complete hierarchical model
 *
 * @param {pos} p - position of the object
 * @param {number} s - size - this is the size of the object
 * @param {color} c - color -this is the color of the object
 * @param {number} vx - this is an indicator value passed along,
 *      right now I think it controls the direction
 */
export function sf_ObjUV(context, p,s,c,vx){
     let degree = p.dir;//(p.dir- Math.PI/2) % Math.PI;
     let sin = Math.sin(degree);
     let cos = Math.cos(degree);

     context.setTransform(cos,sin,-sin,cos,p.x,p.y);

     context.lineWidth = Math.round(s/6);


     if(c.i > 0){
        context.strokeStyle = c.paint();
        context.fillStyle = "red";
      //  console.log("Damage " + c.i);
        c.i -= 1;    
     }else{
        context.strokeStyle = (new color(c.b,c.r,c.g)).paint();
        context.fillStyle = c.paint();
     }
     context.beginPath();

     context.moveTo(0,0);
     context.lineTo((s/2),0);
     context.lineTo( 0, 2*s);
     context.lineTo(-(s/2), 0);

     context.fill();

     context.closePath();

     context.stroke();

     context.beginPath();
     context.strokeStyle = "purple";
     context.moveTo(0, 0);
     context.lineTo(0, -25);

     context.stroke();

     context.setTransform(1,0,0,1,0,0);
 }

/**
 * sfA - from the sf_Library.
 * Converts velocities into their Theta angle degree.
 * 5/31/2024
 * by Shia Aaron Lloyd Fisher
 * @param {number} vx  - velocity x
 * @param {number} vy - velocity y
 * @returns
 */
export function sfA(vx = 1,vy = 0){
    if(vx == 0 ){
        return Math.PI;
    }if(vx < 0){
        return (Math.atan(vy/vx)+Math.PI/2);
    }
    return (Math.atan(vy/vx)-Math.PI/2);
}

/**
 * sf_SuperRandom
 * by Shia Aaron Lloyd Fisher
 * 5/31/2024
 *
 * This routine proivides 8 way random objects,
 * It is based on the current iteration (even and odd)
 *  If it is even it increases the random input by it's min max range.
 *  If it is an odd iteration it decreases the random input by it's min max range.
 *
 *  As you can see, this is a more dynamic way to develop random numbers.
 * @param {Number} i - What is the iteration (state of the clock essentially)
 * @param {Number} max - what is the maximum random change the input can take.
 * @param {Number} min - what is the smallest random change the input can take
 * @param {number} r - current random number
*/
export function sf_SuperRandomUV(i,min,max,r){
    if((-1)^(i)){
        r += (Math.random() * Math.min(min,max)) + min;
    }else{
        r -= (Math.random() * Math.max(min,max)) + min;
    }
        return r;
}

/**
 * sf_Del
 * 5/31/2024
 * by Shia Aaron Lloyd Fisher
 *
 * This is a command panel that Adds Bones.
 * 
 * @param {*} canvas 
 * @param {*} sfboids 
 */
export function sf_Del(canvas,sfboids){
    while(sfboids.length > 0){
        sfboids.pop();
    }
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

//     let call = new sfLibrary.call;
     console.log("cleared " + globalBoneList );
     globalBoneList = 0;
 }

/**
 * sf_Add
 * 5/31/2024
 * by Shia Aaron Lloyd Fisher
 *
 * This is a command panel that Adds Bones.
 * 
 * @param {*} canvas 
 * @param {*} create 
 */
export function sf_Add(canvas,create = 0) {
        const maxX = parseInt(canvas.width);
        const maxY = parseInt(canvas.height);


        console.log("created ");
    if(create == 0){ //Let's assume this is not yet animated, so vx and vy are not important


        let center = new pos(maxX/2,maxY/2);
        let bone = new BoidUV(center.x,center.y,0,1);
        let c = new color();
        c.i = -1;
        let arrow = new sfBoid(center,10,bone,c);

        sfboids.push(arrow);
        console.log(globalBoneList + " unanimated object @: ("+arrow.p.x+", "+arrow.p.y+")");
    }else if(create == 1){
        console.log(" random animated object");
        let vx = (Math.random() * maxX) % Math.PI;
        let vy = (Math.random() * maxY) % Math.PI;

    if(vx == 0){
        vx = Math.PI/2;
    }
    if(vy == 0){
        vy = Math.PI/2;
    }

        let p = new pos(200,200,sfA(vx,vy));
        let s = 20;
        let b = new BoidUV(p.x,p.y,vx,vy);
        let c = new color(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255),-1);
        let staged = new sfBoid(p,s,b,c);
        staged.muted = false;
        sfboids.push(staged);

    } else{
        console.log(create + " objects at random, and moving.");
        let vx = (Math.random() * maxX) % Math.PI;
        let vy = (Math.random() * maxY) % Math.PI;

        if(vx == 0){
            vx = Math.PI/2;
        }
        if(vy == 0){
            vy = Math.PI/2;
        }

        let rParams = Math.random() * Math.min(maxX,maxY); //initial random

        for(let i = 0; i < create; i++){
            let rSignX = Math.round(Math.random());
            let rSignY = Math.round(Math.random());

            vx = sf_SuperRandom(i,1,100,vx) % 1;
            vy = sf_SuperRandom(i,1,100,vy) % 1;
            vx -= rSignX;
            vy -= rSignY;



            let s = Math.round(Math.random()*(25 - 5) + 5);//(random*(max-min)+min)
            let x = sf_SuperRandom(i,Math.min(maxX,maxY),Math.max(maxX,maxY),rParams) % (maxX - s);
            let y = sf_SuperRandom(i,Math.min(maxX,maxY),Math.max(maxX,maxY),rParams) % (maxY - s);
            let c = new color(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255),-1);

            let staged = new sfBoid(new pos(x,y),s,new BoidUV(x,y,vx,vy),c);
            staged.muted = false;
            console.log(staged);
            sfboids.push(staged);
    }

};
    }
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MUTATOR METHODS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SETTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
export class mutator{
    /**
     * 
     * @param {number} set 
     * @param {*} get 
     * @param {String} print 
     * @param {*} remove 
     */
    constructor(set,get,print,remove){
        this.id = 0;
        this.set = set;
        this.get = get;
        this.print = print;
        this.remove = remove;
    }

}

export class call{
    constructor(I,D,N,P,T,G,H,C,trundle,users,commands,mutators,objAttributes){//SYSTEM COMMANDS
        this.I = new Number(1);
        this.T = new Number(1);
        this.mutators = new mutator;
        this.set.globalBoneList = 26;
    }

    set(x = 0){
        if(this.I > 0){
            
        }
        function globalBoneList(x){
            return x;
        }


        this.set.globalBoneList = x;
    }
    get(i = this.I,t = this.T){
        console.log("GET");
        getter(i);
        
        console.log(getter(-i,t));//reveal command
        return getter(1,t);//send command
    }
}




///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EOF~SETTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EOF~MUTATOR METHODS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///

/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ACCESSOR METHODS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SETTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
export function set(SFlx=-1,x=0){
    if(x > 0){
        return this.I;
    }else{
      alert("ERROR");
    }
    return "end setter";
}

///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EOF~SETTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
//~~~~~~~~~~~~~//~~~~~~~~~~~~~//~~~~~~~~~~~~~~~~~~~~//~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~//~~~~~~~~~~~~~//~~~~~~~~~~~~~~~~~~~~//~~~~~~~~~~~~~~~~~//
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GETTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
 export function getter(SFlx=-1,x=0){//SF library object, and parameter (I,T)
    if(SFlx > 0){
        get(SFlx);
    }else{
      alert("COMMAND MODE");
    }
    return "end getter";
}

export function get(SFlx = -1){
    if(SFlx == -1){
        return "DOCUMENTATION";
    }
    switch(SFlx){
        case 0:
            return globalBoneList;
        default:
            "Exit?";

    }
}




///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EOF~GETTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EOF~ACCESSOR METHODS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/// 


////////////////////////////END OF SF_LIBRARY////////////////////////
