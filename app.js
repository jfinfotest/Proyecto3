let costoTotal = 0;

for (let dia = 1; dia <= 7; dia++) {
    let consumo = Math.floor(Math.random() * 5) + 1; // Consumo aleatorio entre 1 y 5
    let costoDiario = consumo > 3 ? 2 : 1;
    costoTotal += costoDiario;

    console.log(`Día ${dia}: Consumo ${consumo} litros, Costo: $${costoDiario}, Total acumulado: $${costoTotal}`);

    if (costoTotal > 10) {
        console.log("Costo total superó $10, deteniendo el seguimiento");
        break;
    }
}

console.log(`Costo total final: $${costoTotal}`);
// Ejemplo de salida (varía por aleatoriedad):
// Día 1: Consumo 2 litros, Costo: $1, Total acumulado: $1
// Día 2: Consumo 4 litros, Costo: $2, Total acumulado: $3
// Día 3: Consumo 3 litros, Costo: $1, Total acumulado: $4
// Día 4: Consumo 5 litros, Costo: $2, Total acumulado: $6
// Día 5: Consumo 4 litros, Costo: $2, Total acumulado: $8
// Día 6: Consumo 3 litros, Costo: $1, Total acumulado: $9
// Día 7: Consumo 4 litros, Costo: $2, Total acumulado: $11
// Costo total superó $10, deteniendo el seguimiento
// Costo total final: $11