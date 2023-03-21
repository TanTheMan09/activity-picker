let choice = 0
let questions = [
"Qu'est-ce qu'un fluide?",
"Qu'est-ce que la viscosité?",
"Quelle est la densité de l'or pur?",
"Vrai ou faux D=M/V",
"Qu'est-ce qui est le plus visqueux : l'huile ou l'eau?",
"Quelle est la densité de l'eau?"
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
