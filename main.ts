input.onButtonPressed(Button.A, function () {
    motor_running = 1
})
input.onSound(DetectedSound.Loud, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    motor_running = 0
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setLightMode(wuKong.LightMode.OFF)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    motor_running = 0
})
let sonor = 0
let motor_running = 0
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
    if (motor_running == 0) {
        wuKong.stopMotor(wuKong.MotorList.M2)
        wuKong.stopMotor(wuKong.MotorList.M1)
    } else if (sonor < 20 && sonor > 2) {
        wuKong.setAllMotor(-25, 50)
        basic.pause(randint(20, 50))
    } else {
        wuKong.setAllMotor(-26, -26)
    }
})
