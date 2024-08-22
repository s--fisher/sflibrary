/*jshint esversion: 6 */
// @ts-check

// these two things are the main UI code for the train
// students learned about them in last week's workbook

import { draggablePoints } from "../libs/CS559/dragPoints.js";
import { RunCanvas } from "../libs/CS559/runCanvas.js";

// this is a utility that adds a checkbox to the page 
// useful for turning features on and off
//import { makeCheckbox } from "../libs/CS559/inputHelpers.js";


import * as SF from "./sfWorld.js";

/**
 * Have the array of control points for the track be a
 * "global" (to the module) variable
 *
 * Note: the control points are stored as Arrays of 2 numbers, rather than
 * as "objects" with an x,y. Because we require a Cardinal Spline (interpolating)
 * the track is defined by a list of points.
 *
 * things are set up with an initial track
 */
///** @type Array<number[]> */
//let thePoints = [
//  [150, 150],
//  [150, 450],
//  [450, 450],
//  [450, 150]
//];

// /**
//  * Draw function - this is the meat of the operation
//  *
//  * It's the main thing that needs to be changed
//  *
//  * @param {HTMLCanvasElement} canvas
//  * @param {number} param
//  */
// function draw(canvas, param) {
//   let context = canvas.getContext("2d");
//   // clear the screen
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   // draw the control points
//   thePoints.forEach(function(pt) {
//     context.beginPath();
//     context.arc(pt[0], pt[1], 5, 0, Math.PI * 2);
//     context.closePath();
//     context.fill();
//   });

//   // now, the student should add code to draw the track and train
// }

/**
 * Initialization code - sets up the UI and start the train
 */
//let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
//let context = canvas.getContext("2d");
let mainWorld  = new SF.sfWorld(/** @type {HTMLCanvasElement} */ (document.getElementById("canvas1")));
  var elements = [];
  elements.push("slider");
  elements.push("speed");
  elements.push("boxes");
  

var assets = [];
assets.push("dots");
assets.push("bezier");
assets.push("moredots");
assets.push("maketracks");
assets.push("radar");
  assets.push("train");



//assets.push("tracks");
//assets.push("frogs");

mainWorld.install(mainWorld.world,mainWorld.assetMap,assets,elements);
//this is for test mode, to run the world script on top of the default head
mainWorld.run();//mainWorld.run(mainWorld.name, mainWorld.ctx, mainWorld.assets,mainWorld.elements);


// we need the slider for the draw function, but we need the draw function
// to create the slider - so create a variable and we'll change it later
//let slider; // = undefined;

// note: we wrap the draw call so we can pass the right arguments
//  @param {HTMLInputElement} //element 

//function wrapDraw(/*element = assets[0]*/) {
    // do modular arithmetic since the end of the track should be the beginning
  //  SF.draw(mainWorld.world, Number(slider.value) % SF.thePoints.length);
//}
// create a UI
//let runcanvas = new RunCanvas(mainWorld.world,mainWorld.ctx);
// now we can connect the draw function correctly
//slider = runcanvas.range;

// note: if you add these features, uncomment the lines for the checkboxes
// in your code, you can test if the checkbox is checked by something like:
// document.getElementById("check-simple-track").checked
// in your drawing code
// WARNING: makeCheckbox adds a "check-" to the id of the checkboxes
//
// lines to uncomment to make checkboxes
              //makeCheckbox("simple-track");
              //makeCheckbox("arc-length").checked=true;
              //makeCheckbox("bspline");

// helper function - set the slider to have max = # of control points
//function setNumPoints() {
  //  runcanvas.setupSlider(0, SF.thePoints.length, 0.05);
//}
//setNumPoints();
//SF.runcanvas.setValue(.5);
                        //let wrapDraw = new SF.wrapDraw;
                        //wrapDraw.value = 0;
//draggablePoints(mainWorld.world, SF.thePoints, wrapDraw, 10, setNumPoints);//<=(assets.push.("dots"))