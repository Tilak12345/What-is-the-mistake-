class directioninput{
    constructor(){
        this.helddirection = [];

        this.keyneeded = {
            "ArrowUp": "up",
            "ArrowDown": "down",
            "ArrowLeft": "left",
            "ArrowRight": "right",
            "KeyW": "up",
            "KeyA": 'left',
            "KeyD": 'right',
            "KeyS": "down",
        }
    }

    get direction(){
        return this.helddirection[0]
    }

    init(){
        document.addEventListener("keydown",k=>{
            const dir = this.keyneeded[k.code]
            if (dir && this.helddirection.indexOf(dir) === -1){
                this.helddirection.unshift(dir);
                
            }
        })

        document.addEventListener("keyup",k=>{
            const dir = this.keyneeded[k.code]
            const index = this.helddirection.indexOf(dir);
            if(index > -1){
                this.helddirection.splice(index, 1)
                
            }
            

        })
    }
}
