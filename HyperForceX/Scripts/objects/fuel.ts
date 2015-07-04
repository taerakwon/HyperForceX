module objects {
    export class Fuel extends objects.GameObject {

        constructor(assetName: string) {
            super(assetName);

            this.name = "fuel";
            this.reset();
        }


        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // Checks if Fuel has left screen by 1400 Px
            // This is so that Fuel does not respawn too often
            if (this.x < -1400) {
                this.reset();
            }
            // Bounces the Fuel if Fuel Hits The Border of the Canvas
            if (this.y < 0) {
                this.dy = Math.floor(Math.random() * 10);
                this.dx = Math.floor(Math.random() * -4) - 2;
            }
            if (this.y > 480) {
                this.dy = Math.floor(Math.random() * -10);
                this.dx = Math.floor(Math.random() * -4) - 2;
            }
        }


        private reset(): void {
            this.x = 720; // start island off stage 
            this.y = Math.floor(Math.random() * 480); // Starts Asteroid at Random Vertical Edge
            this.dy = Math.floor(Math.random() * 10) - 5; // Asteroids can either move up or down
            this.dx = Math.floor(Math.random() * -4) - 2; // Asteroid displacement speed towards left
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; // Moves Asteroid Horizontally
            this.y += this.dy; // Moves Asteroid Vertically
            this.checkBounds();
        }
    }

}
 