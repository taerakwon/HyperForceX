var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        // Constructor
        function Button(imageString) {
            _super.call(this, assets.atlas, imageString);
        }
        Button.prototype.update = function () {
            this.on("mouseover", this.onOver);
            this.on("mouseout", this.onOut);
        };
        Button.prototype.onOver = function (event) {
            this.alpha = 0.5;
        };
        Button.prototype.onOut = function (event) {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map