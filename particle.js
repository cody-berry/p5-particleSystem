

// A simple particle.
class Particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.vel = p5.Vector.random2D()
        this.acc = new p5.Vector(0, 0)
        this.r = 5
        this.lifetime = 100
    }

    show() {
        fill(0, 0, 100, this.lifetime)
        noStroke()
        circle(this.pos.x, this.pos.y, this.r*2)
    }

    // updates the particle's position, velocity, and acceleration
    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc = new p5.Vector(0, 0)
        this.lifetime -= random(1)
    }

    // is our particle finished?
    finished() {
        return this.lifetime <= 0
    }

    // shows our particle's death animation
    deathAnimation() {
        let hue = random(360)
        stroke(hue, 100, 100)
        fill(hue, 100, 100)
        circle(this.pos.x, this.pos.y, this.r*4)
    }

    // applies force f. F = m*a, but m = 1, so a = F.
    applyForce(f) {
        this.acc.add(f)
    }

    // applies edges
    edges() {
        if (this.pos.x - this.r < 0) {
            this.vel.x *= -1
        }
        if (this.pos.x + this.r > width) {
            this.vel.x *= -1
        }
        if (this.pos.y + this.r > height) {
            this.vel.y *= -1
        }
        if (this.pos.y - this.r < 0) {
            this.vel.y *= -1
        }
    }
}


