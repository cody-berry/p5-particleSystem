

class Tissue extends Confetti {
    constructor(x, y) {
        super(x, y)
        this.xAngle = 0
        this.initialVelocity = this.vel.x
        this.yAngle = 0
        this.sine = 0
        this.startMillis = millis()
    }

    show() {
        // the viewer is looking with a y position of height/2. It makes
        // sens that the y cale is going to be height/2 - this.pos.y. This
        // is going to be between -1 and 1, so we divide by height and
        // multiply by 2.
        this.yAngle = (height/2 - this.posTemp.y)/height * 2

        // the viewer is looking with an x position of width/2.
        this.xAngle = (width/2 - this.posTemp.x)/width * 2

        push()
        fill(0, 0, 100, this.lifetime)
        noStroke()
        translate(this.posTemp.x, this.posTemp.y)
        scale(this.xAngle, this.yAngle)
        rotate(this.angle)
        rect(0, 0, this.r*2, this.r*2)
        pop()
        this.angle += 0.01
    }

    deathAnimation() {
        // have a random explosion with a random amount of particles around
        // a random circle
        let max = random(9, 19)
        for (let i = 0; i < max; i++) {
            fill(random(360), 100, 100)
            noStroke()
            let angle = radians(i*360/max)
            push()
            translate(cos(angle) * 50, sin(angle) * 50)
            circle(this.posTemp.x, this.posTemp.y, 10)
            pop()
        }
    }

    // this one only applies a third of the force
    applyForce(f) {
        this.acc.add(f.mult(1/3))
    }

    // this one moves in a sine wave and limits velocity very low
    update() {
        this.vel.add(this.acc)
        this.vel.limit(1)
        this.pos.add(this.vel)
        this.sine = sin(radians(millis() - this.startMillis)/3)*this.initialVelocity
        this.posTemp = new p5.Vector(this.pos.x + this.sine, this.pos.y)
        this.acc = new p5.Vector(0, 0)
        this.lifetime -= random(1)
    }
}

