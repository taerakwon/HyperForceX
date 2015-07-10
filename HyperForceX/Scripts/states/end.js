var states;
(function (states) {
    var End = (function () {
        // Constructor
        function End() {
            this.main();
        }
        End.prototype.update = function () {
            instructionButton.update();
            playButton.update();
        };
        End.prototype.main = function () {
            stateName = "end";
            // Add Game Container
            game = new createjs.Container();
            // Adds Title Bitmap to the Stage
            titleScreen = new createjs.Bitmap(assets.loader.getResult("title"));
            game.addChild(titleScreen);
            // Add Instruction Button            
            instructionButton = new objects.Button("instruction");
            instructionButton.x = 287;
            instructionButton.y = 360;
            game.addChild(instructionButton);
            // Add Play Button
            playButton = new objects.Button("play");
            playButton.x = 318;
            playButton.y = 300;
            playButton.addEventListener("click", this.playClickedEvent);
            game.addChild(playButton);
        };
        End.prototype.playClickedEvent = function (event) {
            game.removeAllChildren();
            stateName = "play";
            play = new states.Play();
        };
        return End;
    })();
    states.End = End;
})(states || (states = {}));
//# sourceMappingURL=end.js.map