/**
 * 04-05-01.js - a simple JavaScript file that gets loaded with
 * page 5 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020, February 2021
 *
 */

/**
 * If you want to read up on JavaScript classes,
 * see the tutorial on the class website:
 *
 * https://cs559.github.io/559Tutorials/javascript/oop-in-js-1/
 */

import * as sfLibrary from "/for_students/sfLibrary.js";
function sf_Menu(){///make sure to clear the global bone list
    document.getElementById("create").onclick = function (){sfLibrary.sf_Add(canvas);};
    document.getElementById("add").onclick = function (){sfLibrary.sf_Add(canvas, 1);};
    document.getElementById("add10").onclick = function (){sfLibrary.sf_Add(canvas,10);};
    document.getElementById("clear").onclick = function () {sfLibrary.sf_Del(canvas,sfboids);};
    }
/**
 * Utility function to draw the draggable points
 * @param {CanvasRenderingContext2D} context
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {string} color
 */
function circle(context, x, y, radius, color) {
  if(e = 1) console.log("hit");
    context.save();
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.restore();
}

///////////////////////////////////////////////////////////////////////STOP///////////////////////////////
    /////   BUILD WORLD/    //  //  //  //  //  //  //  //  //  //  //  //  //
/**
 * 
 * @param {HTMLCanvasElement} canvas - Load Canvas
 * @param {CanvasRenderingContext2D} ctx - Take Context
 * @param {sfLibrary.sfBoid} sfboids - Load AssetSet
 * @param {HTMLInputElement} speedSlider - input Speed
 */
function world(world,ctx,sfboids,speedSlider) {
    function draw(context=ctx) {
        context.clearRect(0, 0, world.width, world.height);
        sfboids.forEach(sfboid => sfboid.draw(context));
    }
let lastTime;
    function loop(timestamp,context = ctx,speed = Number(speedSlider.value)) {
        const delta = (lastTime ? timestamp - lastTime : 0) * 1000.0 / 60.0;
        lastTime = timestamp; // Update lastTime for the next frame


       // CALL SFBOID
                    sfboids.forEach(sfboid => {

            //UPDATE POSITION
                        sfboid.updatePosition(context,speed);
                        context.transform(1,0,0,1,0,0);
            // \UPDATE POSITION

            let temp = sfboid.name;
                    if(sfboids.length > 1){
                                
// STEER
                        sfboids.forEach(that => {that.steer(world,sfboid,1)
//      console.log("STEER( This: " + sfboid.name + ", with that: " + that.name +")");
                        }); context.transform(1,0,0,1,0,0);
// \STEER

// HANDLE COLLISION
                        sfboids.forEach(that => {that.handleCollision(world,sfboid,1)
//      console.log("COLLISIONS( This: " + sfboid.name + ", with that: " + that.name +")");
                        }); context.transform(1,0,0,1,0,0);
                    }else{
                            sfboid.steer(world,sfboid);
                            context.transform(1,0,0,1,0,0);
                            sfboid.handleCollision(world,sfboid);
                            context.transform(1,0,0,1,0,0);
                        }
                        context.transform(1,0,0,1,0,0);
 // \HANDLE COLLISION

                    });
        // \SFBOID CALL

        // Handling mouse interaction
        // let root = document.documentElement;
        // root.addEventListener("mousemove", e => {
        //     root.style.setProperty('--mouse-x', e.clientX + "px");
        //     root.style.setProperty('--mouse-y', e.clientY + "px");

        //     sfboids.forEach(sfboid => {
        //         if ((sfboid.p.x - dragSize) < e.clientX && e.clientX < (sfboid.p.x + dragSize)) {
        //             if ((sfboid.p.y - dragSize) < e.clientY && e.clientY < (sfboid.p.y + dragSize)) {
        //                 sfboid.hover();
        //                 sfboid.p.x += sfboid.b.vx * speed;
        //                 sfboid.p.y += sfboid.b.vy * speed;
        //                 context.transform(1,0,0,1,0,0);
        //             }
        //         }
        //     });
        // });
        context.transform(1,0,0,1,0,0);
        draw();
        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
}
//////////////////END WORLD SCRIPT//////////////////////////////
// Start the world
let sfboids = sfLibrary.sfboids;

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("flock"));
let context = canvas.getContext("2d");

let speedSlider = /** @type {HTMLInputElement} */ (document.getElementById("speed"));
const dragSize = 7;


world(canvas,context,sfboids,speedSlider);
sf_Menu(canvas);
