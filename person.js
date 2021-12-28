class person extends GameObject{
    constructor(config){
        super(config);
        this.movementprogressremaining = 0;
        this.isplayerplaying = config.playerplaying || false;

        this.directionupdate = {
            "up": ['y',-1],
            "down": ["y",1],
            "left": ['x',-1],
            "right": ["x",1],
        }
    }

    update(state){
        this.updateposition();
        this.updatesprite(state)

        if (this.isplayerplaying && this.movementprogressremaining === 0 && state.arrow){
            this.direction = state.arrow;
            this.movementprogressremaining = 16; 
        }
    }

    updateposition(){
        if(this.movementprogressremaining > 0){
            const[property,change] = this.directionupdate[this.direction];    
            this[property] += change;
            this.movementprogressremaining -=1;
        }
    }

    updatesprite(state){

        if (this.isplayerplaying && this.movementprogressremaining === 0 && !state.arrow){
            
            this.sprite.setanimation("idle"+this.direction)
            return;
        }

        if (this.movementprogressremaining > 0){
            this.sprite.setanimation("walk"+this.direction)
            
        }
    }

    
}