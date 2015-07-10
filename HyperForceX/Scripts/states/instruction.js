var states;
(function (states) {
    var Instruction = (function () {
        // Constructor
        function Instruction() {
            this.main();
        }
        Instruction.prototype.update = function () {
            mainButton.update();
        };
        Instruction.prototype.main = function () {
            stateName = "instruction";
            // Add Game Container
            game = new createjs.Container();
            // Adds Title Bitmap to the Stage
            blank = new createjs.Bitmap(assets.loader.getResult("black"));
            game.addChild(blank);
            // Add Instruction Button            
            mainButton = new objects.Button("main");
            mainButton.x = 290;
            mainButton.y = 360;
            mainButton.addEventListener("click", this.mainClickedEvent);
            game.addChild(mainButton);
            // Add Instruction Label
            instructionLabel = new createjs.Text("Use your mouse to move the jet plane up or down\n\n" +
                "Dodge astroids and collect fuels to travel further", "26px digital-7", "#FFFF00");
            instructionLabel.textAlign = "center";
            instructionLabel.x = canvas.clientWidth / 2;
            instructionLabel.y = canvas.clientHeight / 2;
            game.addChild(instructionLabel);
        };
        Instruction.prototype.mainClickedEvent = function (event) {
            game.removeAllChildren();
            stateName = "menu";
            menu = new states.Menu();
            stage.addChild(game);
        };
        return Instruction;
    })();
    states.Instruction = Instruction;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map