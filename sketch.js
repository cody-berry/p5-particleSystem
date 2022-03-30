/**
 *  @author
 *  @date 2022.03.
 *
 *
 */
let font
let instructions

// a list of particles
let particles = []


function preload() {
    font = loadFont('data/consola.ttf')
}


function setup() {
    let cnv = createCanvas(600, 300)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function
        z → freeze sketch</pre>`)
}


function draw() {
    background(234, 34, 24)

    for (let i = particles.length - 1; i > -1; i--) {
        let p = particles[i]
        p.show()
        p.update()
        p.applyForce(new p5.Vector(0, 9.8/frameRate()))
        p.edges()

        if (p.finished()) {
            // make sure to show the death animation!
            p.deathAnimation()
            particles.splice(i, 1)
        }
    }

    displayDebugCorner()
}


/** 🧹 shows debugging info using text() 🧹 */
function displayDebugCorner() {
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_SPACING = 2
    const LINE_HEIGHT = textAscent() + textDescent() + LINE_SPACING
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)

    text(`particle list length: ${particles.length}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`frameRate: ${frameRate().toFixed(1)}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
    /* add particle */
    if (key === 'p') {
        particles.push(new Particle(mouseX, mouseY))
    }
    /* add confetti */
    if (key === 'c') {
        particles.push(new Confetti(mouseX, mouseY))
    }
    /* add tissue */
    if (key === 't') {
        particles.push(new Tissue(mouseX, mouseY))
    }
    /* reset */
    if (key === 'r') {
        particles = []
        for (let i = 0; i < 10; i++) {
            // particles.push(new Particle(random(width), random(height)))
        // } for (let i = 0; i < 10; i++) {
            // particles.push(new Confetti(random(width), random(height)))
        } for (let i = 0; i < 10; i++) {
            particles.push(new Tissue(random(width), random(height)))
        }
    }
}