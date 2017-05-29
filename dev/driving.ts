class Driving implements Behaviour {
    car: Car;
    constructor(c:Car){
        this.car = c;
    }
    draw():void {

         while(this.car.energy < 600){
            this.car.energy += 1;
        }
         while(this.car.speed > 2){
            this.car.speed -= 1;
        }

        switch (this.car.pivot){
            
            case 0:
            this.car.y -= this.car.speed;
            return
            
            case 45 :
            this.car.y -= 0.5 * this.car.speed;
            this.car.x += 0.5 * this.car.speed;
            return

            case 90 :
            this.car.x += this.car.speed;
            return

            case 135 :
            this.car.y += 0.5 * this.car.speed;
            this.car.x += 0.5 * this.car.speed;
            return

            case 180 :
            this.car.y += this.car.speed;
            return

            case 225 :
            this.car.y += 0.5 * this.car.speed;
            this.car.x -= 0.5 * this.car.speed;
            return

            case 270 :
            this.car.x -= this.car.speed;
            return

            case 315 :
            this.car.y -= 0.5 * this.car.speed;
            this.car.x -= 0.5 * this.car.speed;
            return

            case 360 :
            this.car.pivot = 0;
            return

            case -45 :
            this.car.pivot = 315;
            // this.car.y -= 0.5 * this.car.speed;
            // this.car.x -= 0.5 * this.car.speed;
            return

            // case -90 :
            // this.car.x -= this.car.speed;
            // return

            // case -135 :
            // this.car.y += 0.5 * this.car.speed;
            // this.car.x -= 0.5 * this.car.speed;
            // return

            // case -180 :
            // this.car.y += this.car.speed;
            // return

            // case -225 :
            // this.car.y -= 0.5 * this.car.speed;
            // this.car.x -= 0.5 * this.car.speed;
            // return

            // case -270 :
            // this.car.x -= this.car.speed;
            // return

            // case -315 :
            // this.car.y += 0.5 * this.car.speed;
            // this.car.x -= 0.5 * this.car.speed;
            // return

            // case -360 :
            // this.car.pivot = 0;
            // return
        }

    }

    onKeyDown(e: KeyboardEvent):void{
    
            if(e.key == ' ') {
            this.car.behaviour = new Jumping(this.car);
        }   else if(e.key == 'Control') {
            this.car.behaviour = new Engine(this.car);
        }   else if(e.key == 'Shift') {
            this.car.behaviour = new Braking(this.car);
        }   else if(e.key == 'Meta') {
            this.car.behaviour = new Engine(this.car);
        }   else if(e.key == 'w') {
            this.car.behaviour = new Afterburner(this.car);
        }   else if(e.key == 's') {
            this.car.behaviour = new Reverse(this.car);
        }   else if(e.key == 'a') {
            this.car.pivot -=45;
        }   else if(e.key == 'd') {
            this.car.pivot +=45;
        }
        
    }

    onKeyUp(a: KeyboardEvent):void{

    }

    onMouseClick(b: MouseEvent):void{
        // b.clientX

    }

}