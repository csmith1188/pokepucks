
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
const gravity = 0.5
var m = 0
var num = 0
var pogList = ['cpPog']
class Pog {
    constructor(face, speed, slammer) {
        this.face = face
        this.speed = speed
        this.slammer = slammer
        this.aniFrame = 0
        this.y = 450
        this.ySpeed = 0
        this.x = 450
        this.xSpeed = 0
    }
    animate() {

        if (this.face === 'up' && this.speed == 0) {
            ctx.drawImage(whiteSide, this.x, this.y)
        }
        if (this.face === 'down' && this.speed == 0) {
            ctx.drawImage(blackSide, this.x, this.y)

        }

        if (this.speed != 0) {
            this.aniFrame += this.speed
            this.ySpeed += gravity
            if (this.aniframe >= 70) ctx.drawImage(blackRotation3, this.x += this.xSpeed, this.y += this.ySpeed)
            else if (this.aniframe >= 60) ctx.drawImage(blackRotation2, this.x += this.xSpeed, this.y += this.ySpeed)
            else if (this.aniFrame >= 50) ctx.drawImage(blackRotation1, this.x += this.xSpeed, this.y += this.ySpeed)
            else if (this.aniFrame >= 40) ctx.drawImage(whiteSide, this.x += this.xSpeed, this.y += this.ySpeed)
            else if (this.aniFrame >= 30) ctx.drawImage(whiteRotation3, this.x += this.xSpeed, this.y += this.ySpeed)
            else if (this.aniFrame >= 20) ctx.drawImage(whiteRotation2, this.x += this.xSpeed, this.y += this.ySpeed)
            else if (this.aniFrame >= 10) ctx.drawImage(whiteRotation1, this.x += this.xSpeed, this.y  += this.ySpeed);

            /*
                */
            else ctx.drawImage(blackSide, this.x += this.xSpeed, this.y += this.ySpeed)


            if (this.aniFrame >= 80) this.aniFrame = 0
            if (this.ySpeed >= 10) {this.ySpeed = 0;this.speed = 0 ;this.xSpeed = 0}
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
    powerHit() {
        let power = Math.floor(Math.random() * 100) + testingSlammer.weight
        if (power > 100) { power = 100 }
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
var testingList = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8']
for (i of testingList) {
    var i = new Pog('down', 0, false)
    num += 5
    i.y -= num
    console.log(i.y)
    testingList.shift()
    testingList.push(i)
    i.animate()
}
var testingSlammer = new Slammer('down', 0, true, 'fire', 6, 0)

function attempt1() {

    const power = testingSlammer.powerHit()
    var pogStack = testingList.length
    for(i of testingList){
        final =Math.floor(Math.random()*10) + Math.floor(Math.random()*-10) 
        flipNum = Math.floor(Math.random()*100) + pogStack
        yNum = Math.floor(Math.random()*-15)-1
        xNum = final
        i.speed = Math.floor(Math.random()*5)+1
        if(flipNum <= power){
            i.face = 'up'
            console.log('Pog has been flipped')
            i.ySpeed = yNum
            i.xSpeed = xNum
            

        
        }
        i.ySpeed = yNum
        i.xSpeed = xNum
       
        
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
    /*
     for (i of pogList) {
         i.animate()
     }
     */
    
    //sort testinglist by each object's y value (low to high)

    testingList.sort(function(a,b){return b-a})
    for (i of testingList) {
        
        i.animate()
    }

}

gameLoop()
