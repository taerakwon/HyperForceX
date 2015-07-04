module objects {
    export class Status {
        // PUBLIC PROPERTIES
        public distance: number = 5000;
        public fuelAmount: number = 100;

        private distanceLabel: createjs.Text;
        private fuelLabel: createjs.Text;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {            
            this.distanceLabel = new createjs.Text("Distance:", "40px Consolas", "#FFFF00");
            this.fuelLabel = new createjs.Text("Fuel:", "40px Consolas", "#FFFF00");
            this.distanceLabel.x = 350;
            stage.addChild(this.distanceLabel);
            stage.addChild(this.fuelLabel);
            
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.distanceLabel.text = "Lives: " + this.distance;
            this.fuelLabel.text = "Score: " + this.fuelAmount;
        }
    }
} 