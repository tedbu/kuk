input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(-100, -100)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopMotor(wuKong.MotorList.M2)
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
})
let sonor = 0
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . # . #
    . # . # .
    `)
bluetooth.startButtonService()
wuKong.setAllMotor(-26, -26)
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (sonor < 20 && sonor > 2) {
        wuKong.stopAllMotor()
        wuKong.setAllMotor(-25, 50)
        basic.pause(randint(20, 50))
    } else {
        wuKong.setAllMotor(-26, -26)
    }
})
