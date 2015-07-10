module states {
    export class Play {

        // Constructor
        constructor() {
            menu.bgm.stop();
            this.main();
        }

        // PUBLIC METHODS
        // Update Function
        public update() {
            stars.update();
            stars1.update();
            jet.update();
            for (var asteroid = 0; asteroid < 12; asteroid++) {
                asteroids[asteroid].update();
                collision.check(asteroids[asteroid]);
            }
            fuel.update();
            collision.check(fuel);

            jetStatus.update();
            this.distance();
            this.fuelConsumption();
        }

        // PRIVATE METHODS

        // Function to calculate fuel consumption
        private fuelConsumption() {
            count += 1;
            if (count == 20) {
                jetStatus.fuelAmount -= 1;
                count = 0;
            }
            if (jetStatus.fuelAmount <= 0) {
                jet.destroy();
                game.removeAllChildren();
                stateName = "end";        
                end = new states.End();        
                stage.addChild(game);
            }
        }

        // Function to calculate distance travelled
        private distance() {
            jetStatus.distance++;
        }

        // Main Function
        public main() {       
            stateName = "play";     
            // Add Main Game Container
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

            // Adds Jetplane to the Stage
            jet = new objects.Jetplane("jetplane");
            game.addChild(jet);

            
            // Adds Asteroid to the Stage
            for (var asteroid = 0; asteroid < 12; asteroid++) {
                asteroids[asteroid] = new objects.Asteroid("asteroid");
                game.addChild(asteroids[asteroid]);
            }

            // Adds Fuel to the Stage
            fuel = new objects.Fuel("fuel");
            game.addChild(fuel);

            // Add Status
            jetStatus = new objects.Status();

            // Add Collision Manager
            collision = new managers.Collision();

            // Add Game Container to Stage
            stage.addChild(game);

        }
    }
}