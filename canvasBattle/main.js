
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
        this.x = 850
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
            else if (this.aniFrame >= 10) ctx.drawImage(whiteRotation1, this.x += this.xSpeed, this.y += this.ySpeed);

            /*
                */
            else ctx.drawImage(blackSide, this.x += this.xSpeed, this.y += this.ySpeed)


            if (this.aniFrame >= 80) this.aniFrame = 0
            if (this.ySpeed >= 10) { this.ySpeed = 0; this.speed = 0; this.xSpeed = 0 }
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

    /**
    + * Generates a power hit based on the testing slammer weight.
    + * The power hit is a random number between 0 and 100, 
    + * plus the testing slammer weight.
    + * If the power hit exceeds 100, it is capped at 100.
    + * 
    + * returns {number} The power hit value.
    + */
    powerHit() {
        // Generate a random number between 0 and 100
        let power = Math.floor(Math.random() * 100);
        // Add the testing slammer weight to the power hit
        power += testingSlammer.weight;
        // Cap the power hit at 100 if it exceeds 100
        if (power > 100) {
            power = 100;
        }

        return power;
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
class Player {
    constructor(hp, slammer, winPogs, id) {
        this.hp = hp
        this.slammer = slammer
        this.winPogs = winPogs
        this.id = id
    }
}
var player1 = new Player([], 0, [], 1)
var player2 = new Player([], 0, [], 2)
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
var startTurn = Math.floor(Math.random() * 2) + 1

for (i = 0; i < 10; i++) {
    num += 5
    var L = new Pog('down', 0, false)
    player1.hp.push(L)
    console.log(player1.hp)
    L.y = 900 - num
    L.x = 1100

    console.log(L)
    console.log(player1.hp.length)
}
for (i = 0; i <= 10; i++) {
    num += 5
    var k = new Pog('down', 0, false)
    player2.hp.push(k)
    k.y = 300 - num
    k.x = 100


}
function attempt1() {

    const power = testingSlammer.powerHit()
    var pogStack = testingList.length
    for (i of testingList) {
        final = Math.floor(Math.random() * 11) + Math.floor(Math.random() * -10)
        flipNum = Math.floor(Math.random() * 100) + pogStack
        yNum = Math.floor(Math.random() * -15) - 1
        xNum = final
        i.speed = Math.floor(Math.random() * 5) + 1
        if (flipNum <= power) {
            i.face = 'up'
            console.log('Pog has been flipped')
            i.ySpeed = yNum
            i.xSpeed = xNum



        }
        i.ySpeed = yNum
        i.xSpeed = xNum


    }
}
var num1 = -1
function results() {
    for (let i = testingList.length - 1; i >= 0; i--) {
        if (startTurn == 1) {
            if (testingList[i].face === 'up') {
                player1.winPogs.push(testingList[i])
                console.log(testingList)
            }
        }
        if (startTurn == 2) {
            if (testingList[i].face === 'up') {
                player2.winPogs.push(testingList[i])
                console.log(testingList)
            }
        }
        if (testingList[i].face === 'up') {
            testingList.splice(i, 1)
            console.log(testingList)
        }
    }
}

function isWinningPog(pog) {
    return player1.winPogs.includes(pog) || player2.winPogs.includes(pog);
}

Pog.prototype.animate = function() {
    if (isWinningPog(this)) {
        // Adjust animation for winning pogs
        // For example, you might change the y coordinate based on the index in the winPogs list
        let index = player1.winPogs.includes(this) ? player1.winPogs.indexOf(this) : player2.winPogs.indexOf(this);
        this.y = index * 10; // Adjust as needed
    } else {
        // Existing animation code
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
            else if (this.aniFrame >= 10) ctx.drawImage(whiteRotation1, this.x += this.xSpeed, this.y += this.ySpeed);

            /*
                */
            else ctx.drawImage(blackSide, this.x += this.xSpeed, this.y += this.ySpeed)


            if (this.aniFrame >= 80) this.aniFrame = 0
            if (this.ySpeed >= 10) { this.ySpeed = 0; this.speed = 0; this.xSpeed = 0 }
        }
    }
}
attempt1()
results()
isWinningPog()
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

    testingList.sort(function (a, b) { return b - a })
    for (i of testingList) {

        i.animate()
    }
    for (i of player1.hp) {
        i.animate()
    }

    for (i of player2.hp) {
        i.animate()
    }
    
    for(i of player1.winPogs){
        i.animate()
        
    }
    for(i of player2.winPogs){
        i.animate()
        
    }
    
}

gameLoop()
