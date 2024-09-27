const PicoYPlacaPredictor = require('./picoYPlacaPredictor');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function runPicoYPlaca() {
    rl.question('Ingrese el número de placa (ejemplo: PBX-1234): ', (licensePlate) => {
        rl.question('Ingrese la fecha (formato YYYY-MM-DD): ', (date) => {
            rl.question('Ingrese la hora (formato HH:MM, por ejemplo 08:00): ', (time) => {
                const predictor = new PicoYPlacaPredictor(licensePlate, date, time);
                const canDrive = predictor.canDrive();

                if (canDrive) {
                    console.log('PUEDE CIRCULAR');
                } else {
                    console.log('NO PUEDE CIRCULAR');
                }
                rl.close();
            });
        });
    });
}

runPicoYPlaca();
