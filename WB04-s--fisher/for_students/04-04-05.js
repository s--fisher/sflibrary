/**
 * 04-04-05.js - a simple JavaScript file that gets loaded with
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
 *
 * ShearX function - student should fill this in.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} s
 */
function shearX(context, s) {

    let a = 1;
    let b = 0;
    let c = s;
    let d = 1;
    let e = 0;
    let f = 0;


    context.transform(a, b, c, d, e, f);
}


// students don't need to change this
{
    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
    let context = canvas.getContext("2d");

    context.save();
    context.translate(20, 20);
    context.scale(4, 4);
    shearX(context, 1);
    utilities.markedSquare(context);
    context.restore();

    context.save();
    context.translate(140, 20);
    context.scale(4, 4);
    shearX(context, -1);
    utilities.markedSquare(context);
    context.restore();

    context.save();
    context.translate(20, 80);
    context.scale(4, 4);
    shearX(context, 2);
    utilities.markedSquare(context);
    context.restore();

    context.save();
    context.translate(220, 80);
    context.scale(4, 4);
    shearX(context, -2);
    utilities.markedSquare(context);
    context.restore();
}

