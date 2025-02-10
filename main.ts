let DIRECAO = 0
basic.forever(function () {
    if (DIRECAO < 45 || DIRECAO == 300) {
        basic.showString("S")
    } else {
        basic.showString("N")
    }
    DIRECAO = input.compassHeading()
})
