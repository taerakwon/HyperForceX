var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Background Class +++++++++++++++++++++++++++++++++++++++
    var Background = (function (_super) {
        __extends(Background, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Background(imageString, imageString2) {
            _super.call(this, imageString2);
            // Gets Width and Height of Image being inserted
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map