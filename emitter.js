
class Emitter {
    constructor(x, y, particles) {
        this.particles = particles
        this.pos = new p5.Vector(x, y)
    }


    // emits particles
    emit(type, emitCapacity) {
        for (let i = 0; i < emitCapacity; i++) {
            if (type === 't') {
                this.particles.push(new Tissue(this.pos.x, this.pos.y))
            } if (type === 'c') {
                this.particles.push(new Confetti(this.pos.x, this.pos.y))
            } if (type === 'p') {
                this.particles.push(new Particle(this.pos.x, this.pos.y))
            }
        }
    }


    // shows the emitter
    show() {
        noStroke()
        fill(0, 0, 50)
        rect(this.pos.x - 50, this.pos.y - 30, 100, 60)
        fill(234, 34, 24)
        ellipse(this.pos.x, this.pos.y, 60, 36)
        rect(this.pos.x - 50, this.pos.y - 1, 100, 2)
    }


    // shows and updates our particles. basically does everything a normal
    // particle system with one emitter does with its current particles
    update() {
        for (let i = this.particles.length - 1; i > -1; i--) {
            let p = this.particles[i]
            p.update()
            p.show()
            p.applyForce(new p5.Vector(0, 9.8/frameRate()))
            p.edges()

            if (p.finished()) {
                // make sure to show the death animation!
                p.deathAnimation()
                this.particles.splice(i, 1)
            }
        }
    }
}
