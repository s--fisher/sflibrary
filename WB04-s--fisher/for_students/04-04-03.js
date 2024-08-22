/**
 * 04-04-03.js - a simple JavaScript file that gets loaded with
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
 * This should perform some transformation - you can decide how it works
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

// start the program running
utilities.setup("canvas1", twoDots);

