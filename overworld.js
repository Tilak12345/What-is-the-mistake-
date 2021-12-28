class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startgameloop(){
        const step = ()=>{
            
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)

            this.map.drawlowerimage(this.ctx)

            Object.values(this.map.gameObjects).forEach((object) => {
                object.update({
                    arrow:this.directioninputs.direction
                });
                object.sprite.draw(this.ctx)
                
            })

            this.map.drawupperimage(this.ctx)


            requestAnimationFrame(()=>{
                step();
            })
        }
        step();
    }

    init(){

        this.map = new worldmap(window.worldmaps.demoroom)
        this.directioninputs = new directioninput();
        this.directioninputs.init();
        this.startgameloop();
        
    } 
}