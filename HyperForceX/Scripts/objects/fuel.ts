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
                this.dy = 5;
                this.dx = -5;
            }
            if (this.y > 480) {
                this.dy = -5;
                this.dx = -5;
            }
        }


        private reset(): void {
            this.x = 720; // start island off stage 
            this.y = Math.floor(Math.random() * 450); // Starts Asteroid at Random Vertical Edge
            this.dy = 5; // Fuel can either move up or down
            this.dx = -5; // Fuel displacement speed towards left
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; // Moves Fuel Horizontally
            this.y += this.dy; // Moves Fuel Vertically
            this.checkBounds();
        }
    }

}
 