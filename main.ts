let sonor = 0
basic.showIcon(IconNames.Sword)
wuKong.setAllMotor(-80, -80)
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P1)
    if (sonor < 200 && sonor > 10) {
        wuKong.setAllMotor(-50, 100)
        basic.pause(randint(0, 10))
    } else if (sonor < 10) {
        wuKong.setAllMotor(10, 10)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(-80, -80)
    }
})
