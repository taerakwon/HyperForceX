var managers;
(function (managers) {
    // Exporting Asset Class
    var Asset = (function () {
        // CONSTRUCTOR
        function Asset() {
            // PRIVATE PROPERTIES
            this.manifest = [
                { id: "bgm", src: "assets/audio/bgm.wav" },
                { id: "galaxy", src: "assets/images/galaxy.png" },
                { id: "stars", src: "assets/images/stars.png" },
                { id: "bullet", src: "assets/images/bullet.png" },
                { id: "title", src: "assets/images/title.png" },
                { id: "black", src: "assets/images/black.png" },
                { id: "engine", src: "assets/audio/engine.wav" },
                { id: "imhit", src: "assets/audio/imhit.wav" },
                { id: "fuelPack", src: "assets/audio/fuelPack.wav" }
            ];
            this.data = {
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
            };
            this.preload();
        }
        // PRELOAD FUNCTION
        Asset.prototype.preload = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            // Create Texture Atlas - Defining New Spritesheet
            this.atlas = new createjs.SpriteSheet(this.data);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map