input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B)) {
        while (!(input.buttonIsPressed(Button.A))) {
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    # . . . #
                    . # . # .
                    . . # . .
                    `)
                music.playTone(262, music.beat(BeatFraction.Half))
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            basic.showString("ALERT: *EARTHQUAKE*")
        }
        music.playMelody("E F - E F - B C ", 120)
        basic.showString("alert over")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(100)
})
