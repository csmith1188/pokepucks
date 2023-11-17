
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
document.getElementById('canvas').width = window.innerWidth
document.getElementById('canvas').height = window.innerHeight
const width = document.getElementById('canvas').width
const height = document.getElementById('canvas').height

class Puck {
    constructor(name, color, design,) {
        this.name = name;
        this.color = color;
        this.design = design;
        this.ability = function () { }
    }
}
class Slammer extends Puck{
        
    constructor(name, color, design,weight,type,strength,weakness){
        super()
        this.name = name
        this.color = color
        this.design = design
        this.weight = weight;
        this.type = type;
        this.strength = strength;
        this.weakness = weakness;
        
    
    }
}

const blankSlammer = new Slammer("BlankSlammer",'white',"none",10,"none","none","none")
const trainingBag = new Puck("TrainingBag","Grey","TrainingBag")
const draw =() =>{
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,width,height)
    ctx.fillStyle = "Purple"
    ctx.fillRect(20,100,20,100)
}
draw()