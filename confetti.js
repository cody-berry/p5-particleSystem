

class Confetti extends Particle {
    constructor(x, y) {
        super(x, y)
        this.angle = PI
    }

    show() {
        push()
        fill(0, 0, 100, this.lifetime)
        noStroke()
        translate(this.pos.x, this.pos.y)
        rotate(this.angle)
        square(0, 0, this.r*2)
        pop()
        this.angle += 0.01
    }

    // shows our particle's death animation
    deathAnimation() {
        let hue = random(360)
        stroke(hue, 100, 100)
        fill(hue, 100, 100)
        rect(this.pos.x - 50, this.pos.y, 100 + this.r*2, this.r*2)
        rect(this.pos.x, this.pos.y - 50, this.r*2, 100 + this.r*2)
    }
}

