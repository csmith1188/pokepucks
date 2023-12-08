
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

var m = 0
var num = 0
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
            this.aniFrame += this.speed
            if (this.aniFrame >= 40) ctx.drawImage(whiteSide, 470, 470)
            else if (this.aniFrame >= 30) ctx.drawImage(whiteRotation3, 470, 470)
        else if (this.aniFrame >= 20) ctx.drawImage(whiteRotation2, 470, 470)
    else if (this.aniFrame >= 10) ctx.drawImage(whiteRotation1, 470, 470)
            else ctx.drawImage(blackSide, 470, 460)
        
        if (this.aniFrame >= 50) this.aniFrame = 0;
    }
}


}

class Slammer extends Pog {
    constructor(face, speed, slammer, typing, weight, id) {
        super()
        this.face = face,
        this.speed = speed,
        this.slammer = slammer,
        this.typing = typing,
        this.weight = weight,
        this.id = id
        
    }
    powerHit(){
        let power = Math.floor(Math.random()*100)+ testingSlammer.weight
        if(power > 100){power = 100}
        return power
    }
}
class PokeBall extends Pog {
    constructor(face, speed, slammer, type, id, weight) {
        super()
        this.face = face,
        this.speed = speed,
        this.slammer = slammer,
        this.type = type,
        this.id = id,
        this.weight = weight
    }
}
var testingList =['P1','P2','P3','P4','P5','P6','P7','P8']
for (i of testingList){
    var i = new Pog('down', 0+i, false)
    console.log(i)
    testingList.shift()
    testingList.push(i)
}
var testingSlammer = new Slammer('down',0,true,'fire',6,0)
function attempt1() {
    const power = testingSlammer.powerHit()
    for(i in testingList){
        flipNum = Math.floor(Math.random()*100) + testingList.length
        if(flipNum <= power){
            i.face = 'up'
            console.log('Pog has been flipped')

        testingList.pop()
        }
        
        console.log("You still have " + testingList.length + ' To knock over!"')
        
    }
}
for (i of pogList) {
    num++
    var i = new Pog('down', 1, false)
    console.log(i)
    pogList.shift()
    pogList.push(i)
    if (num == 2) {
        var i = new Pog('up', 0, false)
        console.log(i)
        pogList.shift()
        pogList.push(i)

    }
 attempt1()
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
