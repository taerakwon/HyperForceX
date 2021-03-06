﻿// MAIN MENU STATE

module states {
    export class Menu {
        bgm: createjs.AbstractSoundInstance;

        // Constructor
        constructor() {            
            this.main();
        }

        public update() {
            instructionButton.update();
            playButton.update();
        }

        public main() { 
            this.bgm = createjs.Sound.play("bgm", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);           
            stateName = "menu";
            // Add Game Container
            game = new createjs.Container();            

            // Adds Title Bitmap to the Stage
            titleScreen = new createjs.Bitmap(assets.loader.getResult("title"));
            game.addChild(titleScreen);     
            
            // Add Instruction Button            
            instructionButton = new objects.Button("instruction");
            instructionButton.x = 287;
            instructionButton.y = 360;
            instructionButton.addEventListener("click", this.instructionClickedEvent);
            game.addChild(instructionButton);       

            // Add Play Button
            playButton = new objects.Button("play");
            playButton.x = 318;
            playButton.y = 300;
            playButton.addEventListener("click", this.playClickedEvent);
            game.addChild(playButton);
        }

        // PUBLIC METHODS
        // When Play Button is Clicked
        private playClickedEvent(event: MouseEvent) {            
            game.removeAllChildren();            
            stateName = "play";
            play = new states.Play();            
        }
        // When Instruction Button is Clicked
        private instructionClickedEvent(event: MouseEvent) {
            game.removeAllChildren();
            stateName = "instruction";              
            instruction = new states.Instruction();
            stage.addChild(game);
        }
        // Stops the Background Music 
        public stopBGM() {
            this.bgm.stop();  
        }

    }
} 