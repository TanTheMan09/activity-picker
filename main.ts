input.onButtonPressed(Button.A, function () {
    music.playMelody("A B A B A A F - ", 199)
    music.playMelody("F G F G F F D D ", 199)
    for (let index = 0; index < 2; index++) {
        while (input.buttonIsPressed(Button.B)) {
            music.stopAllSounds()
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    Hard_Questions = ["Qu'est-ce que est le principe de Pascal?", "Citez les 6 règles de la théorie des particules", "Quelle est la densiter du fer?"]
})
let choice_2 = 0
let choice = 0
let Hard_Questions: string[] = []
let questions = [
"Qu'est-ce qu'un fluide?",
"Qu'est-ce que c'est la viscosité?",
"Quelle est la densiter de l'or pur?",
"Vrai ou faux D=M/V",
"Qu'est-ce qui est le plus visqueux : l'huile ou l'eau?",
"Quelle est la densiter de l'eau?"
]
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.stopAnimation()
        music.stopAllSounds()
        music.stopMelody(MelodyStopOptions.All)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        choice = randint(0, 5)
        basic.showString("" + (questions[choice]))
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        choice_2 = randint(0, 2)
        basic.showString("" + (Hard_Questions[choice_2]))
    }
})
