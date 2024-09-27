class PicoYPlacaPredictor {
    constructor(licensePlate, date, time) {
        this.licensePlate = licensePlate;
        this.date = new Date(date + ' ' + time);
        this.lastDigit = licensePlate.slice(-1);
    }

    canDrive() {
        const dayOfWeek = this.date.getDay();
        const hour = this.date.getHours();
        const minutes = this.date.getMinutes();

        const restrictions = {
            1: ['1', '2'],
            2: ['3', '4'],
            3: ['5', '6'],
            4: ['7', '8'],
            5: ['9', '0']
        };

        const restrictedDigits = restrictions[dayOfWeek];
        const isRestricted = restrictedDigits?.includes(this.lastDigit);
        const isMorningRestricted = (hour === 6 && minutes >= 0) || (hour === 7) || (hour === 8) || (hour === 9 && minutes <= 30);
        const isAfternoonRestricted = (hour === 16) || (hour === 17) || (hour === 18) || (hour === 19) || (hour === 20 && minutes === 0);

        if (isRestricted && (isMorningRestricted || isAfternoonRestricted)) {
            return false;
        }
        return true;
    }
}

module.exports = PicoYPlacaPredictor;
