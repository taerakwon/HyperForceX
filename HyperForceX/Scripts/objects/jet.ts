module objects {
    // Background Class +++++++++++++++++++++++++++++++++++++++
    export class Jetplane extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(assetName: string) {
            super(assetName);
            this.x = 20;
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        public update(): void {
            // Changes vertical location based on mouse location
            this.y = stage.mouseY;            
        }
    }
}  