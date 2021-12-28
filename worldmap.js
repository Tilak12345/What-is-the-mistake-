class worldmap{
    constructor(config){
        this.gameObjects = config.gameObjects;

        this.lowerimage = new Image()
        this.lowerimage.src = config.lowersrc;

        this.upperimage = new Image()
        this.upperimage.src = config.uppersrc;

    }

    drawlowerimage(ctx){
        ctx.drawImage(this.lowerimage,0,0)
    }

    drawupperimage(ctx){
        ctx.drawImage(this.upperimage,0,0)
    }
}


window.worldmaps = {
    demoroom:{
        lowersrc: "images/maps/DemoLower.png",
        uppersrc: "images/maps/DemoUpper.png",

        gameObjects: {
            hero: new person({
                x:utils.widthGrid(5), y:utils.widthGrid(5), playerplaying:true,
            }),
            // npcl: new person({
            //     x:utils.widthGrid(5), y:utils.widthGrid(5),src: "images/characters/people/npc1.png"
            // })
        }
    },
    kitchen:{

        lowersrc: "images/maps/KitchenLower.png",
        uppersrc: "images/maps/KitchenUpper.png",

        gameObjects: {
            
            npc2: new person({
                x: utils.widthGrid(5), 
                y:utils.widthGrid(5),
                src: "images/characters/people/npc2.png"
            }),
            npc3: new person({
                x: utils.widthGrid(6),
                y:utils.widthGrid(5),
                src: "images/characters/people/npc3.png"
            })
        }
    },
    street:{
        
    }
}