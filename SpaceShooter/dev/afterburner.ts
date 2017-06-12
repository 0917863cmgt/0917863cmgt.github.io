class Afterburner implements Behaviour {
     car: Car;
    constructor(c:Car){
        this.car = c;
    }
    draw():void{
        while(this.car.energy > 0 && this.car.speed < 16){
            this.car.energy -= 5;
            this.car.speed += 1;
            
                
            
        }

        if(this.car.energy == 0 && this.car.speed > 2){
            this.car.behaviour = new Driving(this.car);  
            console.log("Ha");
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
       }
    
      
    }
    onKeyDown(e: KeyboardEvent):void{
            if(e.key == 'a') {
            this.car.pivot -=45;
        }   else if(e.key == 'd') {
            this.car.pivot +=45;
        }
    }

    onKeyUp(a: KeyboardEvent):void{
        if(a.key == 'w') {
            this.car.behaviour = new Driving(this.car);      
        }
    }

    onMouseClick(b: MouseEvent):void{

    }

}