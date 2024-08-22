/**
 * 04-04-02.js - a simple JavaScript file that gets loaded with
 * page 4 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 *
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as utilities from "./04-04-utilities.js";

/**
 * TwoDots - a function for the student to write
 * Notice that it gets the two points and the context as arguments
 * This function should apply a transformation
 *
 * You must write this function using transform.
 * There should not be any rotate, translate or scale function calls.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
function twoDots(context, x1, y1, x2, y2) {
   let dX = x2 - x1;
   let dY = y2 - y1;
   let radian = Math.atan(dY/dX);

   let after = context;
   let dS = (Math.sqrt(Math.pow(dX,2) + Math.pow(dY,2)));

   let s = dS/10;
   
if(x1 <= x2){
    if(y1 <= y2){
        radian %= Math.PI;
//       console.log("case 1: "+ radian*180/Math.PI);
    }else{
        radian += (2)*Math.PI;
        radian %= (2)*Math.PI;
//        console.log("case 4: "+ radian*180/Math.PI);
    }
    }else{
    if(y1 <= y2){
        radian += Math.PI;
        radian %= Math.PI;
//        console.log("case 2: "+ radian*180/Math.PI);
    }else{
        radian += Math.PI;
        radian %= (2)*Math.PI;
//        console.log("case 3: "+ radian*180/Math.PI);
    }
}

///  [COS    -SIN  0]     X   [a, c, e] [0, 3, 6]
//// [SIN   COS    0]     X   [b, d, f] [1, 4, 7]
//// [0      0     1]     X   [0, 0, 1] [2, 5, 8]

//  [(cos*a - sin*b + 0*0)  (cos*c - sin*d + 0*0)  (cos*e - sin*f + 0*1)]
//  [(sin*a + cos*b + 0*0)  (sin*c + cos*d + 0*0)  (sin*e + cos*f + 0*1)]
//  [(0*a + 0*b + 1*0)  (0*c + 0*d + 1*0)  (0*e + 0*f + 1*1)]
    let cos = Math.cos(radian);
    let sin = Math.sin(radian);

    const actionTranslate = [1, 0, 0, 0 , 1, 0, x1, y1, 1];
    const actionScale = [s, 0, 0, 0, s, 0, 0, 0, 1];
    const actionRotate = [cos, sin, 0, -sin, cos, 0, 0, 0, 1];     

    
    //Translate, Scale, Rotate operations
    let transform1 = [];//[s,0,0,0,s,0,x1,y1,1]
     transform1[0] = actionTranslate[0]*actionScale[0] + actionTranslate[3]*actionScale[1] + actionTranslate[6]*actionScale[2];
        //(1*s + 0*0 + x1*0) = s;
     transform1[1] = actionTranslate[1]*actionScale[0] + actionTranslate[4]*actionScale[1] + actionTranslate[7]*actionScale[2];
        //(0*s + 1*0 + y1*0) = 0; 
     transform1[2] = actionTranslate[2]*actionScale[0] + actionTranslate[5]*actionScale[1] + actionTranslate[8]*actionScale[2];
        //(0*s + 0*0 + 1*0) = 0;
     transform1[3] = actionTranslate[0]*actionScale[3] + actionTranslate[3]*actionScale[4] + actionTranslate[6]*actionScale[5];
        //(1*0 + 0*s + x1*0) = 0;
     transform1[4] = actionTranslate[1]*actionScale[3] + actionTranslate[4]*actionScale[4] + actionTranslate[7]*actionScale[5];
        //(0*0 + 1*s + y1*0) = s;
     transform1[5] = actionTranslate[2]*actionScale[3] + actionTranslate[5]*actionScale[4] + actionTranslate[8]*actionScale[5];
        //(0*0 + 0*s + 1*0) = 0;
     transform1[6] = actionTranslate[0]*actionScale[6] + actionTranslate[3]*actionScale[7] + actionTranslate[6]*actionScale[8];
        //(1*0 + 0*0 + x1*1) = x1;
     transform1[7] = actionTranslate[1]*actionScale[6] + actionTranslate[4]*actionScale[7] + actionTranslate[7]*actionScale[8];
        //(0*0 + 1*0 + y1*1) = y1; 
     transform1[8] = actionTranslate[2]*actionScale[6] + actionTranslate[5]*actionScale[7] + actionTranslate[8]*actionScale[8];
        //(0*0 + 0*0 + 1*1) = 1;

const transform2 = [];//[s*cos,s*sin,0,(-1)*s*sin,s*cos,0,x1,y1,1]
    transform2[0] = transform1[0]*actionRotate[0] + transform1[3]*actionRotate[1] + transform1[6]*actionRotate[2];
    //(s*cos + 0*sin + x1*0) = s*cos;
 transform2[1] = transform1[1]*actionRotate[0] + transform1[4]*actionRotate[1] + transform1[7]*actionRotate[2];
    //(0*cos + s*sin + y1*0) = s*sin;
 transform2[2] = transform1[2]*actionRotate[0] + transform1[5]*actionRotate[1] + transform1[8]*actionRotate[2];
    //(0*cos + 0*sin + 1*0) = 0;
 transform2[3] = transform1[0]*actionRotate[3] + transform1[3]*actionRotate[4] + transform1[6]*actionRotate[5];
    //(s*-sin + 0*cos + x1*0) = (-1)*s*sin;
 transform2[4] = transform1[1]*actionRotate[3] + transform1[4]*actionRotate[4] + transform1[7]*actionRotate[5];
    //(0*-sin + s*cos + y1*0) = s*cos;
 transform2[5] = transform1[2]*actionRotate[3] + transform1[5]*actionRotate[4] + transform1[8]*actionRotate[5];
    //(0*-sin + 0*cos + 1*0) = 0;
 transform2[6] = transform1[0]*actionRotate[6] + transform1[3]*actionRotate[7] + transform1[6]*actionRotate[8];
    //(s*0 + 0*0 + x1*1) = x1;
 transform2[7] = transform1[1]*actionRotate[6] + transform1[4]*actionRotate[7] + transform1[7]*actionRotate[8];
    //(0*0 + s*0 + y1*1) = y1;
 transform2[8] = transform1[2]*actionRotate[6] + transform1[5]*actionRotate[7] + transform1[8]*actionRotate[8];
    //(0*0 + 0*0 + 1*1) = 1;
   
  let a = s*cos;//transform2[0]
  let b = s*sin;//transform2[1]
  let c = (-1)*s*sin;//transform2[3]
  let d = s*cos;//transform2[4]
  let e = x1;//transform2[6]
  let f = y1;//transform2[7]

    after.setTransform(a,b,c,d,e,f);
    let storedTransform = after.getTransform();
    context.setTransform(storedTransform);
}

// setup and start the program
utilities.setup("canvas1", twoDots, "black");

