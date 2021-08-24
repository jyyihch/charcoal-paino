let frequency: number[] = []
let keynote = 0
input.onButtonPressed(Button.A, function () {
    frequency = [
    262,
    294,
    330,
    349,
    392,
    440,
    494,
    523
    ]
    keynote = pins.analogReadPin(AnalogPin.P1) / 128
    music.playTone(frequency[Math.abs(keynote)], music.beat(BeatFraction.Half))
})
basic.forever(function () {
	
})
