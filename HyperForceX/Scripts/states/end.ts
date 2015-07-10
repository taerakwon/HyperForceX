module states {
    export class End {
        // Constructor
        constructor() {
            this.main();
        }

        public update() {
            stars.update();
            stars1.update();
            againButton.update();
            mainButton.update();
        }

        public main() {            
            // Add Game Container
            game = new createjs.Container();            

            // Adds Galaxy Bitmap to the Stage
            galaxy = new createjs.Bitmap(assets.loader.getResult("galaxy"));
            game.addChild(galaxy);

            // Adds Star Object to the Stage
            stars = new objects.Star(assets.loader.getResult("stars"));
            stars1 = new objects.Star(assets.loader.getResult("stars"));
            stars1.dx = -30;
            game.addChild(stars);
            game.addChild(stars1);

            // Add Play Button
            againButton = new objects.Button("again");
            againButton.x = 318;
            againButton.y = 300;
            againButton.addEventListener("click", this.playClickedEvent);
            game.addChild(againButton);

            // Back To Main Menu
            mainButton = new objects.Button("main");
            mainButton.x = 318;
            mainButton.y = 350;
            mainButton.addEventListener("click", this.playClickedEvent);
            game.addChild(mainButton);
        }

        private playClickedEvent(event: MouseEvent) {
            game.removeAllChildren();
            stateName = "play";
            play = new states.Play();
        }
    }
} 