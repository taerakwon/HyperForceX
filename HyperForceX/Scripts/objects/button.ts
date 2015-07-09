module objects {
    export class Button extends createjs.Sprite {
        // Constructor
        constructor(imageString: string) {
            super(assets.atlas, imageString);
        }

        public update(): void {            
            this.on("mouseover", this.onOver);
            this.on("mouseout", this.onOut);
        }

        private onOver(event: MouseEvent): void {
            this.alpha = 0.5;                              
        }

        private onOut(event: MouseEvent): void {
            this.alpha = 1;
        }
    }
} 