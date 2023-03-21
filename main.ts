input.onButtonPressed(Button.AB, function () {
    Hard_Questions = ["Qu'est-ce que le principe de Pascal?", "Citez les 6 règles de la théorie des particules", "Quelle est la densité du fer?"]
})
let choice_2 = 0
let choice = 0
let Hard_Questions: string[] = []
let questions = [
"Qu'est-ce qu'un fluide?",
"Qu'est-ce que c'est la viscosité?",
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
    if (input.buttonIsPressed(Button.AB)) {
        choice_2 = randint(0, 2)
        basic.showString("" + (Hard_Questions[choice_2]))
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        choice = randint(0, 5)
        basic.showString("" + (questions[choice]))
    }
})
