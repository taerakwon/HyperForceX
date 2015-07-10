var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Asteroid = (function (_super) {
        __extends(Asteroid, _super);
        function Asteroid(assetName) {
            _super.call(this, assetName);
            this.name = "asteroid";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Asteroid.prototype.checkBounds = function () {
            // Checks if Asteroid has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Asteroid.prototype.reset = function () {
            this.x = 720; // start island off stage 
            this.y = Math.floor(Math.random() * 480); // Starts Asteroid at Random Vertical Edge
            this.dy = Math.floor(Math.random() * 6) - 3; // Asteroids can either move up or down
            this.dx = Math.floor(Math.random() * -8) - 3; // Asteroid displacement speed towards left
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Asteroid.prototype.update = function () {
            this.x += this.dx; // Moves Asteroid Horizontally
            this.y += this.dy; // Moves Asteroid Vertically
            this.checkBounds();
        };
        return Asteroid;
    })(objects.GameObject);
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map