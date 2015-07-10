var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Background Class +++++++++++++++++++++++++++++++++++++++
    var Jetplane = (function (_super) {
        __extends(Jetplane, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Jetplane(assetName) {
            _super.call(this, assetName);
            this.x = 20;
            this.engineSound = createjs.Sound.play("engine", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            stage.cursor = "none";
        }
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        Jetplane.prototype.update = function () {
            // Changes vertical and horizontal location based on mouse location
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        };
        Jetplane.prototype.destroy = function () {
            this.engineSound.stop();
            stage.cursor = "auto";
        };
        return Jetplane;
    })(objects.GameObject);
    objects.Jetplane = Jetplane;
})(objects || (objects = {}));
//# sourceMappingURL=jet.js.map