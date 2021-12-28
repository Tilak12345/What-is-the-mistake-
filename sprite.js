class sprite{
    constructor(config){

        //image set up

        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = ()=>{
            this.isloaded = true;
        }

        //shadow
        this.shadow = new Image()
        this.useshadow = true;

        if (this.useshadow){
            this.shadow.src = "images/characters/shadow.png"
        }
        this.shadow.onload = ()=>{
            this.shadowloaded = true;
        }      
        
        

        //animation
        this.animation = config.animation || {
            "idledown": [[0,0]],
            "idleleft": [[0,3]],
            "idleright": [[0,1]],
            "idleup": [[0,2]],
            "walkdown": [[0,0], [1,0], [2,0], [3,0]],
            "walkup": [[0,2], [1,2], [2,2], [3,2]],
            "walkleft": [[0,3], [1,3], [2,3], [3,3]],
            "walkright": [[0,1], [1,1], [2,1], [3,1]],
        }
        this.currentanimation = config.currentanimation || "idledown";
        this.currentanimationframe = 0;
        this.animationframelimit = config.animationframelimit || 8;
        this.animationframeprogress = this.animationframelimit;

        //reference 
        this.gameObject = config.gameObject;

    }


    get frame(){
        return this.animation[this.currentanimation][this.currentanimationframe];

    }

    setanimation(key){
        if (this.animationframeprogress !== key){
            this.currentanimation = key;
            this.currentanimationframe = 0;
            this.animationframeprogress = this.animationframelimit;
        }
    }


    updateanimationprogress(){
        if (this.animationframeprogress > 0){
            this.animationframeprogress -= 1;
            return;
        }

        this.animationframeprogress = this.animationframelimit;
        this.currentanimationframe += 1;
        console.log(this.frame);
        if (this.frame === undefined || this.frame == 0){
            this.currentanimationframe = 0;
        }
    }

    draw(ctx){
        const x = this.gameObject.x - 8;
        const y = this.gameObject.y - 18;

        this.shadowloaded && ctx.drawImage(this.shadow, x, y)


        const[framex,framey] = this.frame;

        this.isloaded && ctx.drawImage(
            this.image,
            framex * 32, framey * 32,
            32, 32,
            x, y,
            32,32
        )

        this.updateanimationprogress()
    }

}