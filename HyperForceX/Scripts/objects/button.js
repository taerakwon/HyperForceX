var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Exports Class Button of Sprite
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
        // MOUSE EVENTS
        // When mouse if over a button, the button's opacity is in half
        Button.prototype.onOver = function (event) {
            this.alpha = 0.5;
        };
        // When mouse is no longer hovering over a button, the button's opacity returns to original (1)
        Button.prototype.onOut = function (event) {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map