module objects {
    // Exports Class Button of Sprite
    export class Button extends createjs.Sprite {
        // Constructor
        constructor(imageString: string) {
            super(assets.atlas, imageString);
        }

        public update(): void {            
            this.on("mouseover", this.onOver);
            this.on("mouseout", this.onOut);
        }

        // MOUSE EVENTS
        // When mouse if over a button, the button's opacity is in half
        private onOver(event: MouseEvent): void {
            this.alpha = 0.5;                              
        }
        // When mouse is no longer hovering over a button, the button's opacity returns to original (1)
        private onOut(event: MouseEvent): void {
            this.alpha = 1;
        }
    }
} 