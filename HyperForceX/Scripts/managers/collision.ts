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
                        jetStatus.fuelAmount += 25;
                        gameObject.y = -150;                        
                    }
                    if (gameObject.name == "asteroid") {
                        jetStatus.fuelAmount -= 25;
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