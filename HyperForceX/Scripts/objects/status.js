var objects;
(function (objects) {
    var Status = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function Status() {
            // PUBLIC PROPERTIES
            this.distance = 0;
            this.fuelAmount = 100;
            this.distanceLabel = new createjs.Text("Distance:", "40px digital-7", "#FFFF00");
            this.fuelLabel = new createjs.Text("Fuel:", "40px digital-7", "#FFFF00");
            this.fuelLabel.x = 150;
            this.fuelLabel.y = 25;
            this.distanceLabel.x = 350;
            this.distanceLabel.y = 25;
            game.addChild(this.distanceLabel);
            game.addChild(this.fuelLabel);
        }
        // PUBLIC METHODS +++++++++++++++++
        Status.prototype.update = function () {
            this.distanceLabel.text = "DISTANCE: " + this.distance;
            this.fuelLabel.text = "FUEL: " + this.fuelAmount;
        };
        return Status;
    })();
    objects.Status = Status;
})(objects || (objects = {}));
//# sourceMappingURL=status.js.map