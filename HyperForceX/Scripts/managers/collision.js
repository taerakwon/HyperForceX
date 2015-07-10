var managers;
(function (managers) {
    var Collision = (function () {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        function Collision() {
        }
        //PUBLIC METHODS ++++++++++++++++++++++++
        // CHECKS THE DISTANCE BETWEEN JETPLANE AND OTHER OBJECTS
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = jet.x;
            p1.y = jet.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((jet.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "fuel") {
                        createjs.Sound.play("fuelPack");
                        jetStatus.fuelAmount += 25;
                        if (jetStatus.fuelAmount > 100) {
                            jetStatus.fuelAmount = 100;
                        }
                        gameObject.y = -150;
                        gameObject.x = 0;
                    }
                    if (gameObject.name == "asteroid") {
                        createjs.Sound.play("imhit");
                        jetStatus.fuelAmount -= 25;
                        gameObject.y = -150;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map