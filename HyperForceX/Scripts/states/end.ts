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
            blank = new createjs.Bitmap(assets.loader.getResult("black"));
            game.addChild(blank);
            //game.addChild(galaxy);

            // Adds Star Object to the Stage
            stars = new objects.Star(assets.loader.getResult("stars"));
            //stars1 = new objects.Star(assets.loader.getResult("stars"));
            //stars1.dx = -30;
            game.addChild(stars);
           // game.addChild(stars1);

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
            mainButton.addEventListener("click", this.mainClickedEvent);
            game.addChild(mainButton);

            // Add Game Over Label
            gameOverLabel = new createjs.Text("GAME OVER", "70px digital-7", "#FFFF00");
            gameOverLabel.textAlign = "center";
            gameOverLabel.x = canvas.clientWidth / 2;
            gameOverLabel.y = 70;
            game.addChild(gameOverLabel);

            // Display Final Score            
            totalDistanceLabel = new createjs.Text("TOTAL DISTANCE: "+jetStatus.distance, "50px digital-7", "#FFFF00");
            totalDistanceLabel.textAlign = "center";
            totalDistanceLabel.x = canvas.clientWidth / 2;
            totalDistanceLabel.y = 200;
            game.addChild(totalDistanceLabel);
        }

        // Function to Replay the Game
        private playClickedEvent(event: MouseEvent) {
            game.removeAllChildren();
            play = new states.Play();
            stage.addChild(game);
        }

        // Function to Return to Main Menu
        private mainClickedEvent(event: MouseEvent) {
            game.removeAllChildren();
            menu = new states.Menu();
            stage.addChild(game);
        }
    }
} 