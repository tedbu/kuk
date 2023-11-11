let sonor = 0
basic.showLeds(`
    . # # . .
    # # # . .
    . # # # #
    . # # # .
    . . . . .
    `)
basic.showString("Hello!How are you?I'm good thanks bye! ")
wuKong.setAllMotor(-50, -50)
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (sonor < 20 && sonor > 2) {
        wuKong.stopAllMotor()
        wuKong.setAllMotor(-25, 50)
        basic.pause(randint(20, 50))
    } else {
        wuKong.setAllMotor(-50, -50)
    }
})
