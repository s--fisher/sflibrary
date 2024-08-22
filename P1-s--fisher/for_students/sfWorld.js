
import * as SFL from "./sfLibrary.js";
let worlds = [];
let ID = 0;
export class sfWorld{
/**
 
* /////   BUILD WORLDs/    //  //  //  //  //  //  //  //  //  //  //  //  //
 * 
 * @param {HTMLCanvasElement} w 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {SFL.sfAssetMap} map 
 * @param {String} a
 * @param {HTMLInputElement} e 
*/
  constructor(w, ctx = 'context', map = 'assetMap',a = 'assets',e = 'elements'){
    let world = w;
    let context = ctx;
    let assetMap = map;
    let assets = a;
    let elements = e;

    let E = new Boolean;

    if(w){
      w.id = ID;ID+=1;
      w.label = "mainWorld";
      this.w = w;
      this.world = this.w;
      if(ctx=='context'){
        ctx =  this.world.getContext("2d");
        ctx.id = ID;ID+=1;
        ctx.tag = "";
        this.ctx = ctx;
        this.context = this.ctx;
      }//EOF CHECK CONTEXT
      if(typeof(this.context) != CanvasRenderingContext2D) {//type gaurenting 
        context = /** @type {CanvasRenderingContext2D} */(ctx);
      }
    }//EOF if W & context
    this.index = worlds.length;//should be worldS
    if(!this.assetMap || !this.map){ //check for assetMap in object

      assetMap =  new SFL.sfAssetMap(this.w,this.ctx,SFL.NULL,false);
      assetMap.label = "mainMap";//re-labeled from default
      this.assetMap = assetMap;

        ///////CHECK SET PRIMATIVE
        if(map == 'assetMap'){ //check for assetMap in primative   
          map = this.assetMap;
          this.map = map;
        }else{
          this.assetMap = map;
        }
        ///////////EOF PRIMATIVE
//FILL MAP~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          if(assets == 'assets'){   
            assets =  "No assets installed.";
          }else if(!this.assets || this.assets !=  this.a){
            this.assets = assets;
            this.a = this.assets;    
          }


          if(elements == 'elements'){   
            elements =  "No elements installed.";
          }else if(!this.elements || this.elements !=  this.e){
            this.elements = elements;
            this.e = this.elements;    
          }

          this.map.Items += assets; 
          this.map.Items += elements; 
        this.map.Child = [assets,elements];
        this.map.Parent = this;

    }else{        
////////////////////////////MAP IS DEFINED
////////first ensure the map is of correct type
      if(typeof(map) == typeof(SFL.sfAssetMap)){//check type for map
        this.map = map;
        assetMap = this.map;

        this.assetMap = assetMap;

        this.map = map;
        this.m = this.map;
      }
    }

    this.Parent = "TOP";
    this.Child = this.w;
    this.Items = [];
    this.Items[0] = this.w;
    this.Items[1] = this.ctx;
    this.Items[2] = this.map;

    this.world = world;
    this.context = context;
    this.assetMap = assetMap;
    this.assets = assets;
    this.elements = elements;
        w = this.w;
        ctx = this.ctx;
        map = this.map;
        a = this.a;
        e = this.e;
        console.log(this);
  }

  /**
   * 
   * @param {HTMLCanvasElement} world 
   * @param {SFL.sfAssetMap} assetMap - SFL.sfAssetMap
   * @param {*} assets
   * @param {*} elements 
   */
  install(world = this.world, assetMap = this.assetMap, assets = 'undefined', elements ='undefined'){
    if(world){
      let mkNew = new SFL.sfLibrary_JS(world,this.context,assetMap,assets,elements, false);
      this.w = this.world;

      this.edit = mkNew;
        this.edit.world = this.w; //create editable world pointer
        this.edit.context = this.ctx;//create editable context pointer
        this.edit.assetMap = this.map;//create editable map pointer

      this.id = this.edit.id;
      if(this.ctx == 'context'|| this.edit.context == 'context'){
        console.log("YOU DON'T HAVE A CONTEXT");
        return;
      }
        let map = [];

        map = new SFL.sfAssetMap(world,this.context,'',false);///abstract the context param
        this.map = map;map.Items=[];
          this.map.label = "mainMap";
            this.map.id = ID;ID += 1;
        assetMap = this.map;


        if(elements == 'undefined'){
          console.log("NO ELEMENTS INSTALLED");
        }else{
          this.elements = elements;
          this.e = this.elements;

          for(let i = 0; i < elements.length; i++){
            map[i] = elements[i];
            map.Items[i] = elements[i];
            this.edit.assetMap[i] = map[i];
            }
          }

        if(assets == 'undefined'){
          console.log("NO ASSETS INSTALLED");
        }else{
          this.assets = assets;
          this.a = this.assets;

          var j = elements.length;
          for(let i = j; i < ((assets.length)+j); i++){
            let asset = assets[i-j];

            if(assets[i-j].asset){//if this asset has other assets
              for(k = 0; j < assets[i-j].length; k++){
                map[i][k] = assets[k];
                this.edit.assetMap[i] = map[i];
              }
            }else{         
              map[i] = asset;
              map.Items[i] = asset;
              this.edit.assetMap[i] = map[i];
            }
          }
        }
        this.map = map;
        assetMap = this.map;
        this.assetMap = assetMap;

        this.edit.assetMap = assetMap;
      this.name = "("+ this.w.label+")~<"+this.map.label+">";

    }else{////NO WORLD FOUND,,,, LET'S MAKE ONE
      let world = (/** @type {HTMLCanvasElement} */ (document.getElementById("sfWorld")));    
      let E = new Boolean;
      let w = world;
      if(w == 'undefined' || typeof(world) != typeof(w)){
        console.log("You must specify a target for the world.");
        console.log("Created, document.getElementById('sfWorld')");
        w = world;
      }else{
        world = w;
      }    let assetMap =[];
    world = (/** @type {HTMLCanvasElement} */ (document.getElementById("sfWorld")));    
    E = new Boolean;
    if(w == 'undefined' || typeof(world) != typeof(w)){
      console.log("You must specify a target for the world.");
      console.log("Created, document.getElementById('sfWorld')");
      w = world;
    }else{
      world = w;
    }
    }  

    console.log("INSTALLED: " + this.name + " Successfully." + this);

    this.Items[3] = this.a;
    this.Items[4] = this.e;
 //   console.log(this.edit);//SFJS
   // console.log(this);//SFW
  }
      /**
       * 
       * @param {HTMLCanvasElement} world - Load Canvas
       * @param {CanvasRenderingContext2D} context - Take Context
       * @param {sfAssetMap} assetMap - MapAssets
       * @param {Array<Array<T>>} assets - Import Assets as array.
       * @param {HTMLInputElement} elements - //HTML resources only
       */      
      /**
         * @param {HTMLCanvasElement} world
         * @param {*} asset 
         * @returns {HTMLCanvasElement}
         */
      assetMap_f(world = this.edit.world, asset = []){
        console.log(asset + " " + assets);
        let breaker = ((world > asset) ? -1 : []); 
        for(let i = 0; i < assets.length; i++){
        assets[i] = new Boolean;
          if(asset == assets[i]){
        assets[i][0] = true;
            assets[i].Enabled = true;
            console.log("CONFIRMED");
            if(assets[i].Enabled == true){
              asset.Enabled = breaker;
              asset.Enabled = new Boolean;
              asset.Enabled = assets[i].Enabled;

            }


            //this.edit = assets[i];
          }else{
            console.log("RESOURCE UNAVAILABLE:: " + assets[i]);
          }
        }
        console.log( world);
        console.log( ctx);
        console.log(assets);
        console.log(asset);
        console.log(elements);
        this.world = world;
        console.log(this.world);

        if(world == this.world){
          //console.log(world);// console.log(WAIT);

          if(this.assetMap != 'undefined'){
            return this.assetMap;
          }
        }else{
          this.world = this.edit.world;
          new sfWorld() ? this.world.assetClass : (this.worlds ? this.world : 1);
          let edit =  [];
          world = edit.world;
        }

        if(edit == this.ctx){
          console.log("WHAT DOES THIS");
        }

        return world;
      }

      run(world = this.world, context = this.ctx, assetMap = this.map, assets = this.a, elements =  this.e){
    //BUILD / DISPLAY MENU
        if(world == 'world'|| context == 'context' || assetMap == 'assetMap' || assets== 'assets' || elements == 'elements'){
          console.log("There is nothing to run, please edit your environment and try again.");
          return;
        }else{

            let runner = new SFL.sfLibrary_JS(world,context,assetMap,assets,elements,true);
          console.log("sf_LibAnimate(" + runner.world+ "{"+runner.context+"}, {<"+assets+"> & ("+elements+")})" )

          let runnable = runner.init();//very interesting line, basically this passes the extended class of RunCanvas into the asset map.
          for(let i = 0; i < assets.length; i++){
            runner.SFrun(runner.world,runner.context,runner.assetMap,runner.assets[i],runnable);
          }

        }
      }
    }

    