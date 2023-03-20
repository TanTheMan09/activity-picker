let choice = 0
let questions = [
"What is a fluid?",
"What is viscosity?",
"What is the density of pure gold?",
"True or False D=M/V",
"What is more viscous oil or water?",
"What is the density of water?"
]
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.stopAnimation()
        choice = randint(0, 5)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        choice = randint(0, 5)
        basic.showString("" + (questions[choice]))
    }
})
