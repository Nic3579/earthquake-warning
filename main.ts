input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
})
basic.forever(function () {
    // clears screen
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // only runs if there is an earthquake or the test button is pressed (button B)
    if (input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B)) {
        // stops repeating when button A is pressed 
        while (!(input.buttonIsPressed(Button.A))) {
            // displays image and plays alert tone 4 times
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
