var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Background Class +++++++++++++++++++++++++++++++++++++++
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Explosion(assetName) {
            _super.call(this, assetName);
            this.x = jet.x;
            this.y = jet.y;
        }
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++
        Explosion.prototype.update = function () {
            // Changes vertical location based on mouse location
        };
        return Explosion;
    })(objects.GameObject);
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map