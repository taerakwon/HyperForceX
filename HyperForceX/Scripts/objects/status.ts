module objects {
    export class Status {
        // PUBLIC PROPERTIES
        public distance: number = 5000;
        public fuelAmount: number = 100;

        private distanceLabel: createjs.Text;
        private fuelLabel: createjs.Text;

        // CONSTRUCTOR +++++++++++++++++++
        constructor() {            
            this.distanceLabel = new createjs.Text("Distance:", "40px digital-7", "#FFFF00");
            this.fuelLabel = new createjs.Text("Fuel:", "40px digital-7", "#FFFF00");
            this.fuelLabel.x = 150;
            this.fuelLabel.y = 25;
            this.distanceLabel.x = 350;
            this.distanceLabel.y = 25;
            stage.addChild(this.distanceLabel);
            stage.addChild(this.fuelLabel);
            
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.distanceLabel.text = "DISTANCE: " + this.distance;
            this.fuelLabel.text = "FUEL: " + this.fuelAmount;
        }
    }
} 