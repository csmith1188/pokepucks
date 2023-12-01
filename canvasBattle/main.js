
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
document.getElementById('canvas').width = window.innerWidth
document.getElementById('canvas').height = window.innerHeight
const width = document.getElementById('canvas').width
const height = document.getElementById('canvas').height
const blackSide = document.getElementById('blackSide')
const blackRotation1 = document.getElementById('blackRotation1')
const blackRotation2 = document.getElementById('blackRotation2')
const blackRotation3 = document.getElementById('blackRotation3')
const whiteRotation1 = document.getElementById('whiteRotation1')
const whiteRotation2 = document.getElementById('whiteRotation2')
const whiteRotation3 = document.getElementById('whiteRotation3')
const whiteSide = document.getElementById('whiteSide')


var num = 0
// var pogList = ['cpPog', 'Silver']
var pogList = ['cpPog']

class Pog {
    constructor(face, speed, slammer) {
        this.face = face
        this.speed = speed
        this.slammer = slammer
        this.aniFrame = 0
    }
    animate() {
        if (this.face === 'up' && this.speed == 0) {
            ctx.drawImage(whiteSide, 470, 470)
        }
        if (this.face === 'down' && this.speed == 0) {
            ctx.drawImage(blackSide, 570, 500)
        }

        if (this.speed != 0) {
            this.aniFrame++;
            if (this.aniFrame >= 40) ctx.drawImage(whiteSide, 470, 470)
            else if (this.aniFrame >= 30) ctx.drawImage(whiteRotation3, 470, 470)
            else if (this.aniFrame >= 20) ctx.drawImage(whiteRotation2, 470, 470)
            else if (this.aniFrame >= 10) ctx.drawImage(whiteRotation1, 470, 470)
            else ctx.drawImage(blackSide, 470, 460)

            if (this.aniFrame >= 50) this.aniFrame = 0;
        }
    }


}

/*
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
*/
for (i of pogList) {
    num++
    var i = new Pog('up', 1, false)
    console.log(i)
    pogList.shift()
    pogList.push(i)
    console.log(pogList)
    if (num == 2) {
        var i = new Pog('up', 0, false)
        console.log(i)
        pogList.shift()
        pogList.push(i)
        console.log(pogList)
    }

}
const gameLoop = () => {
    window.requestAnimationFrame(gameLoop)
    ctx.fillStyle = "silver"
    ctx.fillRect(0, 0, width, height)
    for (i of pogList) {
        i.animate()
    }

}

gameLoop()
