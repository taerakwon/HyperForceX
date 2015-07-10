module objects {
    export class Asteroid extends objects.GameObject {        
        constructor(assetName: string) {
            super(assetName);            
            this.name = "asteroid";
            this.reset();
        }


        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // Checks if Asteroid has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = 720; // start island off stage 
            this.y = Math.floor(Math.random() * 480); // Starts Asteroid at Random Vertical Edge
            this.dy = Math.floor(Math.random() * 6) - 3; // Asteroids can either move up or down
            this.dx = Math.floor(Math.random() * -8) - 3; // Asteroid displacement speed towards left
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; // Moves Asteroid Horizontally
            this.y += this.dy; // Moves Asteroid Vertically
            this.checkBounds();
        }
    }
                
 }
 