const PicoYPlacaPredictor = require('../src/picoYPlacaPredictor');

describe('PicoYPlacaPredictor Tests', () => {
    test('Puedes circular en este horario', () => {
        const predictor = new PicoYPlacaPredictor('ABC-1234', '2024-09-27', '10:00'); 
        expect(predictor.canDrive()).toBe(true); 
    });
    test('No puedes circular en este horario', () => {
        const predictor = new PicoYPlacaPredictor('ABC-1230', '2024-09-27', '08:00');
        expect(predictor.canDrive()).toBe(false);
    });
});
