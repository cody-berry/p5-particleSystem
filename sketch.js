/**
 *  @author
 *  @date 2022.03.
 *
 *
 */
let font
let instructions

// our emitter
let emitter

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

    emitter = new Emitter(mouseX, mouseY, [])

    noCursor()
}


function draw() {
    background(234, 34, 24)

    emitter.pos = new p5.Vector(mouseX, mouseY)
    emitter.show()
    emitter.update()

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

    text(`particle list length: ${emitter.particles.length}`,
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
        emitter.emit('p', 10)
    }
    /* add confetti */
    if (key === 'c') {
        emitter.emit('c', 10)
    }
    /* add tissue */
    if (key === 't') {
        emitter.emit('t', 10)
    }
    /* reset */
    if (key === 'r') {
        emitter.particles = []
        emitter.emit('p', 10)
        emitter.emit('c', 10)
        emitter.emit('t', 10)
    }
    /* add reset state */
    if (key === 'a') {
        emitter.emit('p', 10)
        emitter.emit('c', 10)
        emitter.emit('t', 10)
    }
}