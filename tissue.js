

class Tissue extends Confetti {
    constructor(x, y) {
        super(x, y)
        this.xAngle = 0
        this.initialVelocity = this.vel.x
        this.yAngle = 0
    }

    show() {
        //
        this.yAngle = (height/2 - this.pos.y)/height
        push()
        fill(0, 0, 100, this.lifetime)
        noStroke()
        translate(this.pos.x, this.pos.y)
        scale(1, this.yAngle)
        rotate(this.angle)
        rect(0, 0, this.r*2, this.r*2)
        pop()
        this.angle += 0.01
    }
}

