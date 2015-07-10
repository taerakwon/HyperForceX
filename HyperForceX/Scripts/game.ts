/// <reference path="states/instruction.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../config/constants.ts" />


/// <reference path="utility/utility.ts" />
/// <reference path="managers/asset.ts" />


/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/button.ts" />

/// <reference path="objects/star.ts" />
/// <reference path="objects/jet.ts" />
/// <reference path="objects/asteroid.ts" />
/// <reference path="objects/fuel.ts" />

/// <reference path="objects/status.ts" />
/// <reference path="managers/collision.ts" />


/// <reference path="states/menu.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/end.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var game: createjs.Container;


// Background Variable
var titleScreen: createjs.Bitmap;
var galaxy: createjs.Bitmap;
var stars: objects.Star;
var stars1: objects.Star;
var blank: createjs.Bitmap;

// Game Variables
var instructionButton: objects.Button;
var playButton: objects.Button;
var againButton: objects.Button;
var mainButton: objects.Button;

var helloLabel: createjs.Text; // create a reference
var instructionLabel: createjs.Text;
var totalDistanceLabel: createjs.Text;
var gameOverLabel: createjs.Text;
var jet: objects.Jetplane;
var asteroids: objects.Asteroid[] = [];
var fuel: objects.Fuel;
var jetStatus: objects.Status;
var count = 0; // Counter used to measure fuel consumption
var buttonName = "";

// Game Manager

var assets: managers.Asset;
var collision: managers.Collision;


// Game States
var stateName = "menu";
var menu: states.Menu;
var instruction: states.Instruction;
var play: states.Play;
var end: states.End;




// Preloader Function
function preload() {    
    // Instatiate Asset Manager Class   
    assets = new managers.Asset();
    
    //Setup statistics object
    setupStats();    
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);    
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.addEventListener("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.textAlign = 'center';
    //stats.domElement.style.letElementById('spinner').innerHTML = documentft = '10px';
    stats.domElement.style.top = '500px';
    document.body.appendChild(stats.domElement);
}



// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    if (stateName == "menu") {
        menu.update();
    }
    else if (stateName == "play") {
        play.update();
    }
    else if (stateName == "end") {
        end.update();
    }
    else if (stateName == "instruction") {
        instruction.update();
    }
    stage.update();
    stats.end(); // end measuring
}

// MAIN GAME FUNCTION
function main()
{
    // Add Main Game Container
    game = new createjs.Container();

    // Instatiate Menu State
    menu = new states.Menu();

    stage.addChild(game);    
    // Instatiate End State
    //end = new states.End();

    

    // Instantiate Play State
    //play = new states.Play();

    // Add Game Container to Stage
    //stage.addChild(game);
    
    //helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    //helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
   // helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    //helloLabel.x = 160;
   // helloLabel.y = 190;
   // stage.addChild(helloLabel);
}
