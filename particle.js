

// A simple particle.
class Particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.vel = p5.Vector.random2D()
        this.acc = new p5.Vector(0, 0)
        this.r = 5
    }

    show() {
        fill(0, 0, 100)
        noStroke()
        circle(this.pos.x, this.pos.y, this.r*2)
    }

    // updates the particle's position, velocity, and acceleration
    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc = new p5.Vector(0, 0)
    }

    // applies force f. F = m*a, but m = 1, so a = F.
    applyForce(f) {
        this.acc.add(f)
    }

    // applies edges
    edges() {
        if (this.pos.x - this.r < 0) {
            this.pos.x = width - this.r
        }
        if (this.pos.x + this.r > width) {
            this.pos.x = this.r
        }
        if (this.pos.y + this.r > height) {
            this.pos.y = this.r
        }
        if (this.pos.y - this.r < 0) {
            this.pos.y = height - this.r
        }
    }
}


