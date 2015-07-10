module objects {
    // Background Class +++++++++++++++++++++++++++++++++++++++
    export class Star extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = -1;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(assetName: string) {
            super(assetName);
            // Gets Width and Height of Image being inserted
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }

        // PRIVATE METHOD THAT CHECKS BOUNDARY ++++++++++++++++
        private checkBound(): void {
            // If stars image reaches the most left side of the canvas, call reset function
            if (this.x == -720) {
                this.reset();
            }
        }

        // RESET FUNCTION +++++++++++++++++++++++++++++++++++++
        private reset(): void {
            this.x = 0; // Starts the stars image off the screen
            this.y = 0;
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; // How much image moves in horizontal
            this.checkBound();
        }

    }
} 