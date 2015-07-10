var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        // Constructor
        function Instruction(imageString) {
            _super.call(this, assets.atlas, imageString);
        }
        Instruction.prototype.update = function () {
            this.x = 288;
            this.y = 360;
            this.on("mouseover", this.onOver);
            this.on("mouseout", this.onOut);
        };
        Instruction.prototype.onOver = function (event) {
            this.alpha = 0.5;
        };
        Instruction.prototype.onOut = function (event) {
            this.alpha = 0.5;
        };
        return Instruction;
    })(createjs.Sprite);
    objects.Instruction = Instruction;
})(objects || (objects = {}));
//# sourceMappingURL=instruction.js.map