module objects {
    // Background Class +++++++++++++++++++++++++++++++++++++++
    export class Jetplane extends objects.GameObject {

        engineSound: createjs.AbstractSoundInstance;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(assetName: string) {
            super(assetName);
            this.x = 20;
            this.engineSound = createjs.Sound.play("engine", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            stage.cursor = "none";
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        public update(): void {
            // Changes vertical and horizontal location based on mouse location
            this.x = stage.mouseX;
            this.y = stage.mouseY;            
        }
        // To Stop the Engine Sound and Let Mouse Curvor Visible
        public destroy() {
            this.engineSound.stop();
            stage.cursor = "auto"; // To remove mouse cursor when game is in play
        }
    }
}  