// STATE FOR INSTRUCTION

module states {
    export class Instruction {
        // Constructor
        constructor() {
            menu.stopBGM();
            this.main();
        }

        public update() {
            mainButton.update();
        }

        public main() {            
            stateName = "instruction";
            // Add Game Container
            game = new createjs.Container();            

            // Adds Title Bitmap to the Stage
            blank = new createjs.Bitmap(assets.loader.getResult("black"));
            game.addChild(blank);     
            
            // Add Instruction Button            
            mainButton = new objects.Button("main");
            mainButton.x = 300;
            mainButton.y = 360;
            mainButton.addEventListener("click", this.mainClickedEvent);
            game.addChild(mainButton);     
            
            // Add Instruction Label
            var instText = "Use your mouse to maenuver the HyperForce X Jet\n\n" +
                "Dodge asteroids and collect fuels to travel further\n\n\n" +
                "WARNING\n\nHitting an astroid will leak lots fuel\n\n" +
                "Game ends when you no longer have fuel to fly your jet\n\n\nGOOD LUCK!";
            instructionLabel = new createjs.Text(instText, "26px digital-7", "#FFFF00");
            instructionLabel.textAlign = "center";
            instructionLabel.x = canvas.clientWidth / 2;
            instructionLabel.y = 100;
            game.addChild(instructionLabel);

        }

        // PUBLIC METHOD
        // When Main Menu Button is Clicked
        private mainClickedEvent(event: MouseEvent) {
            game.removeAllChildren();
            stateName = "menu";
            menu = new states.Menu();
            stage.addChild(game);
        }
    }
} 