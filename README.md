# Pico y Placa Predictor

## Descripción

This is a JavaScript project that predicts whether a vehicle can circulate under the vehicle restriction system "Pico y Placa" for Quito-Ecuador. Based on the license plate number, date, and time, the predictor determines if the vehicle is authorized to circulate in the city during certain periods.

## Reglas de Pico y Placa

- **Restriction by day and last digit of the plate**: Depending on the last digit of the vehicle's license plate, circulation will be restricted according to the following schedule:

    Monday: digits ending in 1 and 2.
    Tuesday: digits ending in 3 and 4.
    Wednesday: digits ending in 5 and 6.
    Thursday: digits ending in 7 and 8.
    Friday: digits ending in 9 and 0.
  
- **Time restriction**:
  - Mornings: from 6:00 AM to 9:30 AM.
  - Afternoons: from 4:00 PM to 8:00 PM.

## Project Structure

```bash
pico-y-placa-js/
├── src/
│   └── picoYPlacaPredictor.js    # Código fuente principal que contiene la clase PicoYPlacaPredictor.
├── tests/
│   └── testPredictor.test.js          # Pruebas unitarias para validar la funcionalidad del predictor.
├── README.md                     # Este archivo de documentación.
└── package.json                  # Archivo de configuración de npm.

```
## To run the application, you need to install the program's dependencies.
```
npm install
```

## To run the tests, type the following command in the terminal:
````
npm test 
````

## Finally, to finish to run the program you need to run the following command:

``` 
npm start
```