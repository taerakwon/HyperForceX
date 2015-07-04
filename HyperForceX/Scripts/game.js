/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/star.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "galaxy", src: "assets/images/galaxy.png" },
    { id: "stars", src: "assets/images/stars.png" }
];
// Game Variables
var helloLabel; // create a reference
// Background Variable
var galaxy;
var stars;
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
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
    //stats.domElement.style.left = '10px';
    stats.domElement.style.top = '500px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    stars.update();
    stage.update();
    stats.end(); // end measuring
}
// MAIN GAME FUNCTION
function main() {
    // Adds Galaxy Bitmap to the Stage
    galaxy = new createjs.Bitmap(assets.getResult("galaxy"));
    stage.addChild(galaxy);
    // Adds Star Object to the Stage
    stars = new objects.Star(assets.getResult("stars"));
    stage.addChild(stars);
    //helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    //helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    // helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    //helloLabel.x = 160;
    // helloLabel.y = 190;
    // stage.addChild(helloLabel);
}
//# sourceMappingURL=game.js.map