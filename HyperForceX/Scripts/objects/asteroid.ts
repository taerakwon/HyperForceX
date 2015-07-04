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
            this.dy = Math.floor(Math.random() * 10) + 5;
            this.dx = Math.floor(Math.random() * -5) - 3;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x += this.dx; // Moves Asteroid Horizontally
            this.checkBounds();
        }
    }
                
 }
 