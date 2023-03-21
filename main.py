choice = 0
questions = ["What is a fluid?",
    "What is viscosity?",
    "What is the density of pure gold?",
    "True or False D=M/V",
    "What is more viscous oil or water?",
    "What is the density of water?"]

def on_forever():
    global choice
    if input.button_is_pressed(Button.B):
        led.stop_animation()
        choice = randint(0, 5)
basic.forever(on_forever)

def on_forever2():
    global choice
    if input.button_is_pressed(Button.A):
        choice = randint(0, 5)
        basic.show_string("" + (questions[choice]))
basic.forever(on_forever2)
