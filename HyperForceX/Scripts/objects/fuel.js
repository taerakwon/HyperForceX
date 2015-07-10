var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Fuel = (function (_super) {
        __extends(Fuel, _super);
        function Fuel(assetName) {
            _super.call(this, assetName);
            this.name = "fuel";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Fuel.prototype.checkBounds = function () {
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
        };
        Fuel.prototype.reset = function () {
            this.x = 720; // Starts Astroids Off Stage
            this.y = Math.floor(Math.random() * 450); // Starts Asteroid at Random Vertical Edge
            this.dy = 5; // Fuel can either move up or down
            this.dx = -5; // Fuel displacement speed towards left
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Fuel.prototype.update = function () {
            this.x += this.dx; // Moves Fuel Horizontally
            this.y += this.dy; // Moves Fuel Vertically
            this.checkBounds();
        };
        return Fuel;
    })(objects.GameObject);
    objects.Fuel = Fuel;
})(objects || (objects = {}));
//# sourceMappingURL=fuel.js.map