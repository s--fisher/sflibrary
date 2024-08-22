/**
 * 04-04-01.js - a simple JavaScript file that gets loaded with
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
 * You must write this function using rotate, translate and scale
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
    let dS =  Math.sqrt(Math.pow(dX,2) + Math.pow(dY,2));
    let radian = Math.atan(dY/dX);

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

    context.translate(x1,y1);
    context.scale(s,s);
    context.rotate(radian);
}

utilities.setup("canvas1", twoDots, "black");


