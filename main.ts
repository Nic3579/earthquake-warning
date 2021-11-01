basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
