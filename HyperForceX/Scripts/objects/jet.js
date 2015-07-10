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
        }
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        Jetplane.prototype.update = function () {
            // Changes vertical location based on mouse location
            this.y = stage.mouseY;
        };
        return Jetplane;
    })(objects.GameObject);
    objects.Jetplane = Jetplane;
})(objects || (objects = {}));
//# sourceMappingURL=jet.js.map