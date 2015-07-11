module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        constructor() {
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // CHECKS THE DISTANCE BETWEEN JETPLANE AND OTHER OBJECTS
        public check(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();            

            p1.x = jet.x;
            p1.y = jet.y;

            p2.x = gameObject.x;
            p2.y = gameObject.y;
            
            if (utility.distance(p1, p2) < ((jet.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "fuel") {
                        createjs.Sound.play("fuelPack");
                        jetStatus.fuelAmount += 25; // Adds 25 fuel when it is collected
                        if (jetStatus.fuelAmount > 100) {
                            jetStatus.fuelAmount = 100;
                        }
                        gameObject.y = -150;
                        gameObject.x = 0;                        
                    }
                    if (gameObject.name == "asteroid") {
                        createjs.Sound.play("imhit"); 
                        jetStatus.fuelAmount -= 25; // Removes 25 fuel when the Jet collides with an astroid
                        gameObject.y = -150;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        }


    }
}  