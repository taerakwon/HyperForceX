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
        function Star(imageString, imageString2) {
            _super.call(this, imageString2);
            // Gets Width and Height of Image being inserted
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
        return Star;
    })(createjs.Bitmap);
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=stars.js.map