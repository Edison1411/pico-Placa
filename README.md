# Pico y Placa Predictor

## Descripción

Este es un proyecto hecho en **JavaScript** que predice si un vehículo puede circular bajo el sistema de restricción vehicular **"Pico y Placa"** para Quito-Ecuador. Basado en el número de placa, la fecha y la hora, el predictor determina si el vehículo está autorizado para circular en la ciudad durante ciertos periodos de tiempo.

## Reglas de Pico y Placa

- **Restricción por día y último dígito de la placa**: Dependiendo del último dígito de la placa del vehículo se restringira la circulación de acuerdo al siguiente horario:
  - Lunes: dígitos terminados en 1 y 2.
  - Martes: dígitos terminados en 3 y 4.
  - Miércoles: dígitos terminados en 5 y 6.
  - Jueves: dígitos terminados en 7 y 8.
  - Viernes: dígitos terminados en 9 y 0.
  
- **Restricción por horario**:
  - Mañanas: de 06:00 am a 09:30 am.
  - Tardes: de 04:00 pm a 08:00 pm.

## Estructura del Proyecto

```bash
pico-y-placa-js/
├── src/
│   └── picoYPlacaPredictor.js    # Código fuente principal que contiene la clase PicoYPlacaPredictor.
├── tests/
│   └── testPredictor.js          # Pruebas unitarias para validar la funcionalidad del predictor.
├── README.md                     # Este archivo de documentación.
└── package.json                  # Archivo de configuración de npm.
