input.onButtonPressed(Button.A, function () {
    choice = randint(0, options.length - 1)
    basic.showString("" + (options[choice]))
})
let choice = 0
let options: string[] = []
options = [
"\"play video games",
"watch a movie",
"play a board game",
"tidy our rooms",
"Practice your instrument",
"Study"
]
