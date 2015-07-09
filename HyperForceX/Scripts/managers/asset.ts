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
        { id: "bullet", src: "assets/images/bullet.png" },
        { id: "title", src: "assets/images/title.png" },
        { id: "black", src: "assets/images/black.png" }
        ];

        private data = {
            "images": [
                "assets/images/atlas.png"
            ],

            "frames": [
                [2, 2, 80, 29, 0, 0, -1],
                [84, 2, 120, 30, 0, 0, 0],
                [2, 33, 50, 30, 0, 0, 0],
                [54, 34, 140, 30, 0, 0, 0],
                [196, 34, 50, 50, 0, 0, 0],
                [2, 66, 120, 30, 0, 0, 0],
                [124, 66, 70, 30, 0, 0, 0]
            ],

            "animations": {
                "jetplane": [0],
                "again": [1],
                "fuel": [2],
                "instruction": [3],
                "asteroid": [4],
                "main": [5],
                "play": [6]
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
