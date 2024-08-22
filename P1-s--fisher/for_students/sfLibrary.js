import { makeCheckbox } from "../libs/CS559/inputHelpers.js";
import { draggablePoints } from "../libs/CS559/dragPoints.js";
import { insertAfter } from "../libs/CS559/inputHelpers.js";
import * as RC from "../libs/CS559/runCanvas.js";
//RECALL SF_LIBRARY
//RECALL IDNO[p](r).COPYRIGHT
//////RECALL TGHC
// RECALL PRINT AND DO[HTMLOBJ,TO.sTRING]
//.)
import * as SFW from "./sfWorld.js";
import * as sfOBJ from "./sfAssets.js";
const NULL='';
let worlds = 0;//an array of HTMLCanvasElements
let ID = 0;
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
 * Position Type
 */
export class arcPos {
/**
 * 
 * @param {pos} c 
 * @param {pos} endPoint 
 * @param {number} slice 
 * @param {number} speed 
 * @param {number} t 
 */
  constructor(c = new pos(), endPoint = new pos(), slice = 0, speed = 0, t = 0) {
      this.c = c;
      this.endPoint = endPoint;
      this.slice = slice;
      this.speed = speed;
      this.t = t;
  }
}


/** @type Array<number[]> */
let thePoints = [];

/**
 * Draw function - this is the meat of the operation
 *
 * It's the main thing that needs to be changed
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number} param
 */
 function draw(canvas, param) {
  let context = canvas.getContext("2d");
  // clear the screen
  context.clearRect(0, 0, canvas.width, canvas.height);

  // draw the control points
  thePoints.forEach(function(pt) {
    context.beginPath();
    context.arc(pt[0], pt[1], 5, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  });

  // now, the student should add code to draw the track and train
}

/**
 * 
 * @param {HTMLCanvasElement} world - canvas
 * @param {number} points - thePoints
 * @param {HTMLCanvasElement} slider - HTML CanvasElement
 */
 function wrapDraw(world,points,slider) {
  // do modular arithmetic since the end of the track should be the beginning
  draw(world, Number(slider.value) % points.length);
}
/**
 * 
 * @param {sfRC} runnable - runnable
 */
function setNumPoints(runnable) {
 // console.log(this);
  //console.log(runnable.slider.value);
  //runnable.slider.setupSlider(4, 100, 1);
//  runnable.slider();
}
   export class sfLibrary_JS{
/**
 * @param {HTMLCanvasElement} world 
 * @param {CanvasRenderingContext2D} context 
 * @param {sfAssetMap} assetMap 
 * @param {Array<T>} assets 
 * @param {Array<HTMLInputElement>} elements
 * @param {boolean} m - Enabled Is this visible and active? the mute param
*/
      constructor(
          world = 'undefined',
          context = 'undefined',
          assetMap = 'undefined',
          assets = 'undefined',
          elements='undefined', 
          m = 'undefined'){
            let primative = SFW.sfWorld;
            this.world = world;
            primative.w = /** @type {HTMLCanvasElement} */ world; //ostensible a canvas

            //IN LAYMANS TERMS: IF ASSETS ARE FOUND, LOOK FOR ASSETMAP, OTHERWISE SET ASSETMAP.
            if(assetMap == 'undefined' && (primative.assetMap)){
              assetMap =  primative.assetMap;
              this.assetMap = assetMap;
              primative.map = this.assetMap;
            }else{
              primative.map = assetMap;
              primative.assetMap = primative.map;
            }

          let tempTag = world;
            world = [];
            world.tag = 0;
            world = tempTag;

          tempTag = context;
           context = [];
           context.tag = 0;
           context = tempTag;

          tempTag = assetMap;
           assetMap = [];
           assetMap.tag = 0;
           assetMap = tempTag;

          tempTag = assets;
           assets = [];
           assets.tag = 0;
           assets = tempTag;


          tempTag = elements;
           elements = [];
           elements.tag = 0;
           elements.value  = 0;
           elements = tempTag;


          if(primative.world  == 'undefined' || primative.w == NULL){
            console.log("CANNOT CREATE A WORLD ENVIRONMENT WITHOUT SPECIFICATION");
            return NULL;
          }else{
            if(context == 'undefined' && (primative.world)){
              context = (primative.world).getContext("2d")
              this.context = context;
            }else{
              primative.ctx = context;
              primative.context = primative.ctx;
            }//COMMIT THIS.CONTEXT

            if(elements == 'undefined'){
              primative.e = [];
              primative.elements = primative.e;
            }else{
              primative.e = elements;
              primative.elements = primative.e;
            }

            if(assets == 'undefined'){
              primative.assets = [];
              primative.assets = primative.a;
            }else{
              primative.a = assets;
              primative.assets = primative.a;
            }

              primative.worlds = worlds;worlds+=1;
              primative.tag = "World-" + primative.worlds;
              primative.id =  ID;ID +=1;

              this.id = "GL_"+primative.worlds;
          //COMMIT THIS.ASSETMAP.ASSETS.{WORLD,CONTEXT,ASSET,ELEMENT}{(PARENT,CHILD,)}.ITEM.ID.etc 
          }


          this.world = world;
          this.context = context;
          this.assetMap = assetMap;
          this.assets = assets;
          this.elements = elements;
          this.m = m;
          this.tag = primative.tag;
          this.load();
        }
          load(w=this.world,ctx=this.context,map=this.assetMap,a=this.assets,e=this.elements){
            let world = w;
              w = [];
              w.tag = tag(this.world,this);
              w = world;

              this.world = w;
            
            let context = ctx;
             ctx = [];
             ctx.tag = tag(this.context,this.world);
             ctx = context;

             this.context = ctx;
            
            let assetMap = map;
              map = [];
              map.tag = tag(this.assetMap,this.context);
              map = assetMap;

              this.assetMap = map;

            let assets = a;
              a = [];
              a.tag = tag(this.assets,this.map);
              a = assets;

              this.assets = a;

            let elements = e;
              e = [];
              e.tag = tag(this.elements,this.map);
              e = elements;

              this.elements = e;
          }
          init(w=this.world,ctx=this.context,map=this.assetMap,a=this.assets,e = this.elements){
            var r = 1;

            let runcanvas = new sfRC(w,this.sf_LibAnimate);

            for(let i = 0; i < e.length; i++){
              if(e[i] == 'slider'){
                var initialvalue = 4;
                var minimumvalue = 4;
                var maxvalue = 100;
                var stepvalue = 1;

                runcanvas.slider(e[i],initialvalue,minimumvalue,maxvalue,stepvalue);
                e[i] = {name:e[i], value: initialvalue};
                map.callItems(w,ctx,runcanvas,e[i]);
                r = runcanvas;
              }else if(e[i] == 'speed'){
                var initialvalue = 1;
                var minimumvalue = 0;
                var maxvalue = 20;
                var stepvalue = .001;

                runcanvas.slider(e[i],initialvalue,minimumvalue,maxvalue,stepvalue);
                e[i] = {name:e[i], value: initialvalue};
                map.callItems(w,ctx,runcanvas,e[i]);
                r = runcanvas;
              }else{
                map.callItems(w,ctx,'',e[i]);
              }
             }
             for(let j = 0; j < a.length; j++){
              if(a[j] == 'dots' && thePoints.length < 1){
                thePoints.push(
                  [150, 150],
                  [150, 450],
                  [450, 450],
                  [450, 150]
                ); 
              }
              if(a[j] == 'radar' || a[j] == 'train'){
                let temp = {name: a[j],value:0};
                a[j] = temp;
                map.callItems(w,ctx,runcanvas,a[j]);
              }
             }
             return r;
          }
          enable(asset = 'undefined'){
            if(asset != 'undefined'){
              return true;
            }
            return false;
          }
        SFrun(w = 'undefined',ctx='undefined',map = 'undefined',a = 'undefined', r = 'undefined') {
//RENDER

        if(w == 'world'|| ctx == 'context' || map == 'map' || a == 'assets' || r == 'elements'){
          console.log("There is nothing to run, please edit your environment and try again.");
          return;
          }         
          sf_LibAnimate();


            /**
            * Draw function - this is the meat of the operation
            * @param {HTMLCanvasElement} canvas
            * @param {number} param
            */
            function sf_LibAnimate(GlWorld={w,ctx},param){  
              function sf_LibAnimate(GlWorld=GlWorld,param) {
                map.callItems(map.Parent,map.Child,r,a);
                // draw the control points
                thePoints.forEach(function(pt) {
                  ctx.beginPath();
                  ctx.arc(pt[0], pt[1], 5, 0, Math.PI * 2);
                  ctx.closePath();
                  ctx.fill();
              });
              }

              let lastTime;
       
              function loop(timestamp,context = ctx,speed = Number(10)) {//change to elements
                  const delta = (lastTime ? timestamp - lastTime : 0) * 1000.0 / 60.0;
                  lastTime = timestamp; // Update lastTime for the next frame
  
                  sf_LibAnimate(GlWorld,param);
                  //console.log(runcanvas.slider.value);   
                  window.requestAnimationFrame(loop);
              }

              window.requestAnimationFrame(loop);
            }
        }
      }
      
    let TAG = 0;
    export  class sfAssetMap extends sfLibrary_JS{

    /**
     * @param {*} Parent - Parent
     * @param {*} Child - Child
     * @param {Array<Array<T>>} Items - Contents
     * @param {boolean} Enabled - Is this visible and active?
     */
    constructor(Parent,Child,Items = [],Enabled = true){
      super(Parent, Child, Items);

      this.Parent = Parent;
      this.Child = Child;
      this.Items = Items;
      this.live = Enabled;
      this.tag='';

      if(Items == NULL){//By Default a world is not enabled because it is not directly editable
        let tag = "[object sfAssetMap]";
        if(Parent){
          tag = "<"+tag +"."+ new Date().getTime()+">"+"["+Parent.id+"]";
        }
        if(Child){
          this.id = Child.id +1;
        }else{
          this.id = "N/A";
        }

        if(this.Items[0]){
          let slider = [];
          slider.value = 4;
          this.Items.slider = slider;
        }

        this.tag = tag;
        this.label = this.tag + "<"+this.id+">";
        return;
      }else{
        let tag = "[object " + Items + "]";
          tag = "<"+tag +"."+ new Date().getTime()+">"+"["+Parent.id+"]";
          this.id = Parent.id + TAG;
            TAG+=1;
          this.tag = tag;
          this.label = Items;
      }
    
    }
      /**
       * 
       * @param {*} w - if nothing find from assetmap
       * @param {*} ctx - if nothing find from assetmap
       * @param {*} runcanvas - if nothing find from assetmap
       * @param {*} p - if nothing find from assetmap
       * @returns 
       */
      callItems(w=this.Parent.w,ctx=this.Parent.ctx,runcanvas=this.Parent.assetMap,p=this.Parent.assetMap[0]){
      
        let value = (p.value >= 0 ? p.value : (thePoints.length));
      //  console.log("CALLING: " + p + " :: to " + w + " - in -" + ctx);
            
            if(ctx != 'undefined'){
              if(p == 'boxes'){
                makeCheckbox("radar",ctx).checked=false;
                makeCheckbox("simple-track",ctx).checked=true;
                makeCheckbox("bezier",ctx).checked=false;
                makeCheckbox("arc-length",ctx).checked=false;
                makeCheckbox("train",ctx).checked=false;
                 console.log("boxes - complete");
                return 1;
              }


              if(p.name == 'slider'){
                runcanvas.setValue(p.name ,p.value);
                runcanvas.setupSlider(4,100,1);
                console.log("slider - complete, value:" + p.value);
                return 1;
              }
              if(p.name == 'speed'){
                  runcanvas.setValue(p.name ,p.value);
                  runcanvas.setupSlider(0,20,1);
                  console.log("speed - complete, value:" + p.value);
                  return 1;
                 }
              if(p == 'dots'){
                var i = 0;
               draggablePoints(w,thePoints, wrapDraw(w,thePoints,runcanvas.arb[0].value), 10, thePoints.length);
          //      console.log("dots - complete");
                return 1;
              }
              if(p == 'mkNew'){
                makeCheckbox("Make More Dots",ctx);
                return 1;
              }
              if(p == 'moredots'){
                var i = 1;
                var j = 1;
                var k = 0;
                while(thePoints.length < runcanvas.arb[0].value){
                  let l = thePoints.length;
                  let ptA = new pos(thePoints[(i-1) % l][0],thePoints[(i-1) % l][1]);
                  let ptB = new pos(thePoints[i % l][0],thePoints[i % l][1]);

                  k = sfGreatestIndex(thePoints,ptA,ptB,i);
                  let temp = [(thePoints[k % l][0] + thePoints[k-1][0])/2,(thePoints[k % l][1] + thePoints[k-1][1])/2];

                  thePoints.splice(k,0,temp);
                  i++;
                }
                var mem = -1;//this is so two points are removed from the same position twice in a row
                while(thePoints.length > runcanvas.arb[0].value){
                  let l = thePoints.length;
                  let ptA = new pos(thePoints[(j-1) % l][0],thePoints[(j-1) % l][1]);
                  let ptB = new pos(thePoints[j % l][0],thePoints[j % l][1]);

                  let k = 0;
                  mem = (mem > 0 ? mem : sfLeastIndex(thePoints,ptA,ptB,j));
                   
                  for(var t = 1; t < l; t++){
                    let ptC = new pos(thePoints[(j+t) % l][0],thePoints[(j+t) % l][1]);
            k = (k > 0  ? Math.min(mem,k) : sfLeastIndex(thePoints,ptB,ptC,mem));
            k = (k <  sfGreatestIndex(thePoints,ptB,ptC,mem) ?  sfGreatestIndex(thePoints,ptB,ptC,mem): k);
            
                  }



              //    console.log(mem + ", " + k);
                  thePoints.splice(Math.max(mem,k),1);
 
                  j++;
                }
                
                return 1;//this can be used to pass global data
              }
              if(p == 'bezier'){
                if(document.getElementById('check-bezier').checked){
                  sfBezier(ctx,thePoints);
                }
                
              }
              if(p == 'maketracks'){
                if(document.getElementById('check-simple-track').checked){
                //  console.log(ctx);
                  let ptA = new pos();
                  let ptB = new pos();
                  ptA.x = thePoints[0][0];
                  ptA.y = thePoints[0][1];
                  ctx.save();
                  ctx.translate(0,0);
                  ctx.beginPath();
                  ctx.moveTo(ptA.x,ptA.y);    
                  for(var i = 0; i < thePoints.length;i++){                    
                    if(i+1 != thePoints.length){
                      ptB.x = thePoints[i+1][0];
                      ptB.y = thePoints[i+1][1];
                    }else{
                      ptB.x = thePoints[0][0];
                      ptB.y = thePoints[0][1];
                    }
                    ctx.lineTo(ptB.x,ptB.y);
                    ctx.stroke();
                  }
                    ctx.closePath();
                    ctx.restore();
                //  console.log("maketracks -  completed");
                  return 1;
                }
                return 0;
              }

              if(p.name == 'radar'){

                if(document.getElementById('check-radar').checked){
                 p.value = sfRadar(w,ctx,p.value,thePoints, runcanvas.arb[1].value);
               //   console.log("radar - complete");
                  return 1;
                }
                return 0;
              }

              if(p.name == 'train'){
                if(document.getElementById('check-train').checked){
                  p.value = sfRadar(w,ctx,p.value,thePoints, runcanvas.arb[1].value);
                   console.log("train - complete");
                   return 1;
                 }
                return 0;
              }

              

          return 0;
        }
        if(element == 'undefined'){
          elements = [Parent,Child,Items,Elements];
    
          if(Enabled == 'undefined'){
            Enabled = new Boolean;
            Enabled = false;
          }else{
            this.Enabled = Enabled;
          }
          if(Enabled == 'undefined'){
            Enabled = new Boolean;
            Enabled = false;
          }else{
            this.Enabled = Enabled;
          }
    
        }
        if(elements == this.Enabled){
          if(this.Enabled){
            if(elements[0] == this.Items){
              if(this.Items[0] == this.Parent){
                this.Child = this.Items.length;
              }else{
                this.Child = NULL;
              }
            }
          }
      }
        }   
      
    }

    /**
     * @param {HTMLCanvasElement} w - the world
     * @param {CanvasRenderingContext2D} ctx - the context
     * @param {number} i //global timestamp
     * @param {Array<Array<number>>} setup - thePoints Array 
     * @param {number} speed -the slider
     */
    function sfRadar(w=this.world,ctx=this.context,i=0,setup=thePoints,speed=0){
    
      let pip = sfObjPos(w,i,setup,speed);

      sf_DrawRadar(ctx,pip);

      return pip.t;

    }

    /**
     * SF Libtrary axioms
     * @param {pos} posA 
     * @param {pos} posB 
     * @returns d2 euclidian distance of two 2D points
     */
function sf_d2(posA,posB){
  return Math.sqrt(Math.pow(posA.x - posB.x,2)+Math.pow(posA.y - posB.y,2));
}

    /**
     * @param {CanvasRenderingContext2D} ctx - the context
     * @param {arcPos} pip // pip
     */
    function sf_DrawRadar(ctx,pip){
      const p = new pos(0,0);

      let rad = sf_d2(pip.c,pip.endPoint)/20;
      ctx.save();
      ctx.translate(pip.c.x,pip.c.y);
  

      sfOBJ.sf_fillCircle(ctx,rad,p,"red","black");
      ctx.moveTo(0,0);
      ctx.lineTo(pip.endPoint.x,pip.endPoint.y);
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.restore();
    }
    /**
     * @param {HTMLCanvasElement} w - the world
     * @param {CanvasRenderingContext2D} ctx - the context
     * @param {number} i //global timestamp
     * @param {Array<Array<number>>} setup - thePoints Array 
     * @param {number} speed -the slider
     */
    function sfObjPos(w=this.world,i=0,setup=thePoints,speed=0){
      var pip = new arcPos();
      const c = sfFindCenter(setup);//center
       

        let sup = sf_d2(sfGreatestPoint(setup),c);

        let inf = sf_d2(sfLeastPoint(setup),c);

      const l = setup.length;
      const m = [0,2*Math.PI*Math.max(w.width,w.height)];//scanner range
      const t = (-i) % Math.max(m[0],m[1]);
      const degree  = -(180*t/Math.PI);
          c.dir = sfA(degree);
      const slice = Math.abs(m[0]-m[1]);
      speed /= 100;
        var t_i = ((i + speed) % slice);
        var t_i_1 = ((i - speed) % slice);
          
      //  console.log("speed: " +speed*100);
        let r = inf;
      //  console.log(t_i_1+ ", " + t_i);

      let n = 0;
      let dt = i;

      let r_l = -1;
      let r_u = -1;

let R = 0;
      for(var k = ((t_i_1 - speed) % slice) ; k < t_i ; k = dt){
        let dx = (-k) % Math.max(m[0],m[1]);
        let dy = (-k) % Math.max(m[0],m[1]);

        dx = Math.pow(r*Math.cos(dx),2);
        dy = Math.pow(r*Math.sin(dy),2);

    let  temp = t*(Math.sqrt((dx/Math.pow(dt,2))+(dy/Math.pow(dt,2))));
       r = temp;
       R = r_u;
     //console.log(n+".) "+"~~~~~>"+Math.round(r_l) + "<" + Math.round(r) + "<" + Math.round(r_u));
       n++;
        r_l = (r_l < 0 ? temp : (r_u > temp ? (r_l < temp ? r_l : temp) : r_l));

        r_u = (r_u < 0 ? (r_l < temp ? temp : r_l) : (r_u < temp ? temp : r_u));
        dt = ((k + (speed)) % slice);
      }

      r_l = ((sup-inf)-r_l)/n;
      R = ((sup-inf)-R)/n;
      r_u = ((sup-inf)-r_u)/n;
 
      console.log("guess: " + Math.round(r_l) + " < " + Math.round(R) + " < " + Math.round(r_u));

      var endPoint = new pos();

    

      for(var i = 0; i < l; i++){
        var ptA = new pos(setup[(i) % l][0],setup[(i) % l][1]);
        var ptB = new pos(setup[(i+1) % l][0],setup[(i+1) % l][1]);

        var beta = Math.atan(ptA.y/ptA.x);
        var alpha = Math.atan(ptB.y/ptB.x);

        var leastUp = new pos(r_u*Math.cos(t_i),r_u*Math.sin(t_i));
        var greatLo = new pos(r_l*Math.cos(t_i_1),r_l*Math.sin(t_i_1));

        if(sf_d2(ptA,greatLo) <= sf_d2(ptA,leastUp) + sf_d2(leastUp,greatLo) <= sf_d2(greatLo,ptB)){
          endPoint.x = R+((leastUp.x + greatLo.x)/2);
           // endPoint.x *= r/R;
          endPoint.y = R+((leastUp.y + greatLo.y)/2);
           // endPoint.y *= r/R;
          i = l;
        }
      }

      R = Math.sqrt(Math.pow(endPoint.x,2) + Math.pow(endPoint.y,2));

      R = r_u/inf + (R+r)/(n-1) + r_l/sup;
      const EP = new pos(R*Math.cos(t),R*Math.sin(t));

      pip.c = c;
      pip.endPoint = EP;
      pip.slice = slice;
      pip.speed = speed;
      pip.t = t_i;

     return pip;
    }
/**
 * 
 * @param {*} thePoints 
 * @returns the position of the point furthest from center.
 */
function sfGreatestPoint(pts = thePoints){
  let x = 0;
  let y = 0;
  let temp = new pos(x,y);

  let c = sfFindCenter(pts);

  for(var i = 0; i < pts.length; i++){
    x = pts[i][0];
    y = pts[i][1];
    if(sf_d2(c,temp) >= sf_d2(c,new pos(x,y))){
      temp = new pos(x,y);
    }
  }
    return temp;
}
/**
 * 
 * @param {*} thePoints 
 * @returns the position of the point furthest from center.
 */
function sfLeastPoint(pts = thePoints){
  let x = 0;
  let y = 0;
  let temp = new pos(x,y);

  let c = sfFindCenter(pts);

  for(var i = 0; i < pts.length; i++){
    x = pts[i][0];
    y = pts[i][1];
    if(sf_d2(c,temp) <= sf_d2(c,new pos(x,y))){
      temp = new pos(x,y);
    }
  }
    return temp;
}
    function sfGreatestIndex(thePoints,ptA,ptB,i){
      var ckdistance = Math.sqrt( Math.pow((ptB.x-ptA.x),2) + Math.pow(ptB.y - ptA.y,2));
     // console.log("this: " + ptA.x + "," + ptA.y + " that: " + ptB.x + ", " + ptB.y);
      var r = 0;
      var greatest = 0;
      var l = thePoints.length;
      for(var j = 1; j <= l;j++){
        var X = {i: Number(thePoints[j % l][0]) , ii: Number(thePoints[j-1][0])};
        var Y = {i: Number(thePoints[j % l][1]) , ii: Number(thePoints[j-1][1])};
        var distance = Math.sqrt(Math.pow(X.ii-X.i,2) + Math.pow(Y.ii-Y.i,2));
        if(distance > greatest){
          greatest = distance;
          r = j;
        }
      }
      if(ckdistance < greatest){
     //   console.log("return: " + r + " , " + greatest);
        return r;
      }else{
       // console.log("return: original(" + r + ") , " + greatest);
        return i;
      }
    }
    function sfLeastIndex(thePoints,ptA,ptB,i){
      var ckdistance = Math.sqrt( Math.pow((ptB.x-ptA.x),2) + Math.pow(ptB.y - ptA.y,2));
      var r = 0;
      var least = ckdistance;
      var l = thePoints.length - 1;//

      let pip =  {i: Number(thePoints[l][0]) , ii: Number(thePoints[l][1])};
      for(var j = l; j >= 0;j--){
let t = 0;

    while(t<j){
        var X = {i: Number(thePoints[j % l][0]) , ii: Number(thePoints[j-1][0])};
        var Y = {i: Number(thePoints[j % l][1]) , ii: Number(thePoints[j-1][1])};
        pip +=1;
        var distance = Math.sqrt(Math.pow(X.ii-X.i,2) + Math.pow(Y.ii-Y.i,2));
        if(distance < least){
          least = distance;
          r = t;
        }
        t++;
      }
    }
      if(ckdistance > least){
        console.log("return: " + r + " , " + least);
        return r;
      }else{
        console.log("pip?");
        let output = ((i > r) ?  ((r+i) % l): ((r-i)%l));
        if(output < Math.sqrt(Math.pow(pip.i,2)+Math.pow(pip.ii,2))){
          return pip;//pip;
        }else{
          return i;//(;
        }
//        console.log("return: original(" + i + ") , " + least);
      }
    }
    function sfFindCenter(pts = thePoints){
      let x = 0;
      let y = 0;
      let dir = 0;

      for(var i = 0; i < pts.length; i++){
        x += pts[i][0];
        y += pts[i][1];
        for(var j = 0; j < pts.length; j++){
          var temp = Math.sqrt(Math.pow(pts[j][0] - pts[i][0],2)+Math.pow(pts[j][1] - pts[i][1],2));
          dir = (dir <= temp ? temp : dir);
        }
      }

      x = Math.round(x/pts.length);
      y = Math.round(y/pts.length);

      return new pos(x,y, dir);
    }

    function sfBezier(ctx,setup = thePoints){
      let l = setup.length;
      let ptA = new pos();
      let ptB = new pos();

      let center = sfFindCenter(setup);
      ctx.save();
      ctx.translate(0,0);
      ctx.beginPath();

                
let control = [];
  for(var i = 0; i < l;i++){
    ptA.x = setup[i % l][0];
    ptA.y = setup[i % l][1];


    
    ptB.x = setup[(i+1)%l][0];
    ptB.y = setup[(i+1)%l][1];
    let previous = new pos((setup[Math.abs((i-1)%l)][0]),(setup[Math.abs((i-1)%l)][1]));
let next = new pos((setup[(i+2)%l][0]),(setup[(i+2)%l][1]));
    
  let ptC = new pos((ptA.x + ptB.x)/2 ,(ptA.y + ptB.y)/2);
  let ptk = new pos((ptA.x+previous.x)/2,(ptA.y+previous.y)/2);
    let ptK = new pos((ptB.x+next.x)/2,(ptB.y+next.y)/2);
    let start = ptC;
    let end = ptK;
    let ct1 = new pos();
    let ct2 = new pos();

    if(ptC.x < center.x){
      start.x -= sf_d2(ptA,ptB)/4;
    }else if(ptC.x > center.x) {
      start.x += sf_d2(ptA,ptB)/4;
    }else{
      start.x = ptC.x;
    }

    if(ptC.y < center.y){
      start.y -= sf_d2(ptA,ptB)/4;
    }else if(ptC.y > center.y) {
      start.y += sf_d2(ptA,ptB)/4;
    }else{
      start.y = ptC.y;
    }
///////////////////////////////////////////////////////
    if(ptK.x < center.x){
      end.x -= sf_d2(ptB,next)/4;
    }else if(ptK.x > center.x) {
      end.x += sf_d2(ptB,next)/4;
    }else{
      end.x = ptK.x;
    }

    if(ptK.y < center.y){
      end.y -= sf_d2(ptB,next)/4;
    }else if(ptK.y > center.y) {
      end.y += sf_d2(ptB,next)/4;
    }else{
      end.y = ptK.y;
    }

    if(start.x < center.x && ptB.y > center.y){
      ct1.x = start.x;
      ct1.y = start.y + sf_d2(ptC,ptB);
    }
    if(start.x > center.x && ptB.y < center.y){
      ct1.x = start.x;
      ct1.y = start.y - sf_d2(ptC,ptB);
    }

    if(start.y > center.y && ptB.x > center.x){
      ct1.x = start.x + sf_d2(ptC,ptB);
      ct1.y = start.y;
    }
    if(start.y < center.y && ptB.x < center.x){
      ct1.x = start.x - sf_d2(ptC,ptB);
      ct1.y = start.y;
    }


    if(end.x < center.x && ptB.y < center.y){
      ct2.x = end.x;
      ct2.y = end.y - sf_d2(ptC,ptB);
    }
    if(end.x > center.x && ptB.y > center.y){
      ct2.x = end.x;
      ct2.y = end.y + sf_d2(ptC,ptB);
    }
    if(end.y > center.y && ptB.x < center.x){
      ct2.x = end.x - sf_d2(ptC,ptB);
      ct2.y = end.y;
    }
    if(end.y < center.y && ptB.x > center.x){
      ct2.x = end.x + sf_d2(ptC,ptB);
      ct2.y = end.y;
    }



    ctx.moveTo(start.x,start.y);   
    var temp = {dots: start, ct1: ct1, ct2: ct2};
    
    control.push(temp);
    
    ctx.bezierCurveTo(ct1.x,ct1.y,ct2.x,ct2.y,end.x,end.y);
    ctx.stroke();
    
  }
        ctx.closePath();
        ctx.restore();
        for(var j = 0; j < control.length; j++){
          sfOBJ.sf_fillCircle(ctx,5,control[j].dots,"gold","purple");
          sfOBJ.sf_fillCircle(ctx,5,control[j].ct1,"green","blue");
          sfOBJ.sf_fillCircle(ctx,5,control[j].ct2,"red","orange");
          ctx.fillText("ct1["+j+"]",control[j].ct1.x,control[j].ct1.y);
          ctx.fillText("ct2["+j+"]",control[j].ct2.x,control[j].ct2.y);
          ctx.fillText("pt["+j+"]",control[j].dots.x,control[j].dots.y);
        }  
    }
function sf_roundnessL(point,center){
  var fR = Math.PI*((point + center));
  return point - 150;
}
function sf_roundnessR(point,center){
  var fR = Math.PI*((point + center));
  return point + 150;
}
    function tag(environment,pos = 'undefined'){//create defintions//abstract from context
      if(pos != 'undefined'){
       pos = (Object.hasOwn(pos,'id') ? pos.id : pos);
      }
      return "<"+environment +"."+ new Date().getTime()+">"+"["+pos+"]";
    }
class sfRC extends RC.RunCanvas {
  
  constructor(canvasNameOrCanvas){

    super(canvasNameOrCanvas);

delete this.range;
delete this.text;
document.getElementById("0-br").remove();
document.getElementById("0-slider").remove();
document.getElementById("0-text").remove();
document.getElementById("0-run").remove();

    this.arb=[];
    this.canvasName = "sfRC_" + this.canvas.label;

    super.range = [];
    super.text = [];

  }
  setupSlider(){

    if(this.arb){
      let l = this.arb.length;
      insertAfter(this.br, this.canvas);
      insertAfter(this.arb[0].text,this.br);
      insertAfter(this.arb[0].range,this.arb[0].text);
      for(var i = 1; i < l;i++){
        insertAfter(this.arb[i].text,this.br);
        insertAfter(this.arb[i].range,this.arb[i].text);
      }
      insertAfter(this.br2, this.arb[l-1].range);

    }
  }
  setValue(n,v){    
    var temp = {id: n, value: v};
    if(this.arb){
      for(var i = 0; i < this.arb.length;i++){         
        if(n == this.arb[i].name){

          this.arb[i].value = temp.value;
          this.arb[i].range.value = String(v);
          this.arb[i].text.value = Number(v).toFixed(this.digits);
            if (this.drawFunc) {
              this.drawFunc(this.canvas, this.arb[i].value);
            }
            return;
        }
      }
    }
  }

  slider(n,v,min,max,step){
    let self = this;
    let range = document.createElement("input");
    range.id = this.canvasName + "_" + n + "-slider"+ this.arb.length;
    range.setAttribute("type", "range");
    range.style.width = String(this.canvas.width - 50 - 20 - 10) + "px";
    range.value =  String(v);
    range.setAttribute("min", String(min));
    range.setAttribute("max", String(max));
    range.setAttribute("step", String(step));

    let text = document.createElement("input");  
    text.id = this.canvasName + "_" + n + "-text" + this.arb.length;
    text.setAttribute("type", "text");
    text.style.width = "50px";
    text.setAttribute("readonly", "1");
    text.value = v.toFixed(this.digits);

    let temp = {
      name: n,
      noloop:false,
      range: range,
      value: v,
      text: text,
    };
    this.arb.push(temp);
    for(var i = 0; i < this.arb.length; i++){
      this.range[i] = this.arb[i].range;
      this.text[i] = this.arb[i].text;
    }

    this.arb.forEach((item) => item.range.oninput = 
    function() {
      self.setValue(item.name,item.range.value);
    }
  );
  }
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