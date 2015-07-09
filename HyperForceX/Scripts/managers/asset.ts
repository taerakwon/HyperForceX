module managers {
    // Exporting Asset Class
    export class Asset {
        // PUBLIC PROPERTIES
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet;

        // PRIVATE PROPERTIES
        private manifest = [
        { id: "galaxy", src: "assets/images/galaxy.png" },
        { id: "stars", src: "assets/images/stars.png" },
        { id: "bullet", src: "assets/images/bullet.png" }
        ];

        private data = {

            "images": [
                "assets/images/atlas.png"
            ],

            "frames": [
                [2, 2, 50, 50, 0, 0, 0],
                [54, 2, 50, 30, 0, 0, 0],
                [106, 2, 80, 29, 0, 0, -1]
            ],

            "animations": {
                "asteroid": [0],
                "fuel": [1],
                "jetplane": [2]
            }
        }

        // CONSTRUCTOR
        constructor() {
            this.preload()
        }


        // PRELOAD FUNCTION
        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);

            // Create Texture Atlas - Defining New Spritesheet
            this.atlas = new createjs.SpriteSheet(this.data);
        }
    }
}
