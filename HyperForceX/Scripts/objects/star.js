var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Background Class +++++++++++++++++++++++++++++++++++++++
    var Star = (function (_super) {
        __extends(Star, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Star(assetName) {
            _super.call(this, assetName);
            this.dx = -1;
            // Gets Width and Height of Image being inserted
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHOD THAT CHECKS BOUNDARY ++++++++++++++++
        Star.prototype.checkBound = function () {
            // If stars image reaches the most left side of the canvas, call reset function
            if (this.x == -720) {
                this.reset();
            }
        };
        // RESET FUNCTION +++++++++++++++++++++++++++++++++++++
        Star.prototype.reset = function () {
            this.x = 0; // Starts the stars image off the screen
            this.y = 0;
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        Star.prototype.update = function () {
            this.x += this.dx; // How much image moves in horizontal
            this.checkBound();
        };
        return Star;
    })(createjs.Bitmap);
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map