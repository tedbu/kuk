let sonor = 0
basic.showIcon(IconNames.Sword)
wuKong.setAllMotor(-100, -100)
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (sonor < 20 && sonor > 1) {
        wuKong.setAllMotor(-50, 100)
        basic.showNumber(sonor)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
