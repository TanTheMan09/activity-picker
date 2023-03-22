def on_button_pressed_a():
    music.play_melody("A B A B A A F - ", 199)
    music.play_melody("F G F G F F D D ", 199)
    for index in range(2):
        while input.button_is_pressed(Button.B):
            music.stop_all_sounds()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global Hard_Questions
    Hard_Questions = ["Qu'est-ce que est le principe de Pascal?",
        "Citez les 6 règles de la théorie des particules",
        "Quelle est la densiter du fer?"]
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

choice_2 = 0
choice = 0
Hard_Questions: List[str] = []
questions = ["Qu'est-ce qu'un fluide?",
    "Qu'est-ce que c'est la viscosité?",
    "Quelle est la densiter de l'or pur?",
    "Vrai ou faux D=M/V",
    "Qu'est-ce qui est le plus visqueux : l'huile ou l'eau?",
    "Quelle est la densiter de l'eau?"]

def on_forever():
    if input.button_is_pressed(Button.B):
        led.stop_animation()
        music.stop_all_sounds()
        music.stop_melody(MelodyStopOptions.ALL)
basic.forever(on_forever)

def on_forever2():
    global choice
    if input.button_is_pressed(Button.A):
        choice = randint(0, 5)
        basic.show_string("" + (questions[choice]))
basic.forever(on_forever2)

def on_forever3():
    global choice_2
    if input.is_gesture(Gesture.SHAKE):
        choice_2 = randint(0, 2)
        basic.show_string("" + (Hard_Questions[choice_2]))
basic.forever(on_forever3)
