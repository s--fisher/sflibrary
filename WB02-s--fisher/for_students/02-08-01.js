// @ts-check
export {};

let fw_obj = [];
let objs = [];
let gravity = 9.8; //gravity feet per minute
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("box2canvas"));
let context = canvas.getContext('2d');
canvas.style.background = "black";


/**
 * Adds the fireworkd (fw) object to fw_obj list
 * 
 * @param {Number} weight 
 * @param {Number} fuel 
 * @param {Number} bins 
 * @param {Number} x
 * @param {Number} y 
 */
function sf_payload(weight, fuel, bins,x,y){
    fw_obj.push({"weight":weight,"bins":bins,"fuel":fuel,burst:false,"x":x,"y":y,"pos":canvas.height,"part":[]});
}
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
    context.fillStyle = fill; 
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.closePath();     //Close path
    context.fill();
    context.strokeStyle = stroke;
    context.lineWidth   = 1;
    context.stroke();
    context.save();
}


/**
 * Randomly assigns weight, number of bins, and fuel to a new payloads.
 * 
 * @param {Number} x - launch site
 * @param {Number} y - launch height
 */
function sf_launch(x, y){
    let weight =  Math.floor(Math.random() * 5) + 1;
    let bins =  Math.floor(Math.random() * 5) + 1;
    let fuel =  Math.floor(Math.random() * 1) + 1;
    sf_payload(weight,fuel,bins,x,y);
}

function sf_burst(fw){
    fw.fuel -= .05;
    let bins = fw.bins;
    let i = Math.floor(Math.random() * bins);
        let burst = fw.part;
        var dot_color;
        if(i == 0){
            dot_color = "blue";
        }
        if(i == 1){
            dot_color= "red";
        }
        if(i == 2){
            dot_color = "green";
        }
        if(i == 3){
            dot_color = "gold";
        }
        if(i == 4){
            dot_color = "purple";
        }

        let vx = (Math.random()-0.5)*5;
        let vy = (Math.random()-0.5)*5;
        burst.push({"x":fw.x,"y":fw.y,"vx":vx, "vy":vy,"color":dot_color});
    
        burst.forEach(function(dot){
            dot.x -= dot.vx;
            dot.y += dot.vy;
            dot.vy *= gravity*.1;
            dot.vy += 0.5;
        });
        burst = burst.filter(
            dot => ((dot.y>0)&&(dot.x>0)&&(dot.x<canvas.width)&&(dot.y<canvas.height))
            );
    
        burst.forEach(function(dot){
            context.fillStyle = dot.color;
                let w = 8*fw.fuel;
                context.fillRect(dot.x,dot.y,w,w);
        });
}
/**
 * Draws a given firework object.
 */
function drawObjs(){
    context.clearRect(0,0,canvas.width,canvas.height);
    fw_obj.forEach(function(fw) {
        if(fw.pos > fw.y){
            if((fw.pos - 1) <= fw.y){
                sf_fillCircle(fw.bins*3,fw.x,fw.pos,"white","red");
            }else{
                sf_fillCircle(fw.bins,fw.x,fw.pos,"red","red");
            }
            fw.pos -= 1;
        }else if(!fw.burst){
            if(fw.fuel > 0){
                sf_burst(fw);
            }else{
                fw.burst == true;
            }
        }
    });
}
/**
 * Updates the canvas firework drawings.
 */
function upDateObj(){
    fw_obj.forEach(function(fw) {
        if(fw.pos > fw.y){
            if((fw.pos - 1) <= fw.y){
                sf_fillCircle(fw.bins*3,fw.x,fw.pos,"white","red");
            }else{
                sf_fillCircle(fw.bins,fw.x,fw.pos,"red","red");
            }
            fw.pos -= 1;
        }else if(!fw.burst){
            if(fw.fuel > 0){
                sf_burst(fw);
            }else{
                fw.burst == true;
            }
        }
    });
}
/**
 * Takes user input to launch fireworks (x,y) 
 * inflection input
 * @param {*} event 
 */
canvas.onclick = function(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    mouseX -= box.left;
    mouseY -= box.top;
    sf_launch(mouseX,mouseY);
}
/**
 * Controls the animations.
 */
function animate() {
    drawObjs();
    upDateObj();
    window.requestAnimationFrame(animate);
}
animate();
