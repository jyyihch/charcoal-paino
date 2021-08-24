input.onButtonPressed(Button.A, function () {
    music.playTone(frequency[Math.abs(pins.analogReadPin(AnalogPin.P1) / 128)], music.beat(BeatFraction.Half))
})
let frequency: number[] = []
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
basic.forever(function () {
	
})
