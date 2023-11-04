/*
 * Crea una función que simule las condiciones climáticas (temperatura y probabilidad de lluvia)
 * de un lugar ficticio al pasar un número concreto de días según estas reglas:
 * - La temperatura inicial y el % de probabilidad de lluvia lo define el usuario.
 * - Cada día que pasa:
 *   - 10% de posibilidades de que la temperatura aumente o disminuya 2 grados.
 *   - Si la temperatura supera los 25 grados, la probabilidad de lluvia al día 
 *     siguiente aumenta en un 20%.
 *   - Si la temperatura baja de 5 grados, la probabilidad de lluvia al día 
 *     siguiente disminuya en un 20%.
 *   - Si llueve (100%), la temperatura del día siguiente disminuye en 1 grado.
 * - La función recibe el número de días de la predicción y muestra la temperatura
 *   y si llueve durante todos esos días.
 * - También mostrará la temperatura máxima y mínima de ese periodo y cuántos días va a llover.
 */
function matrixWeather(num_dias) {
  let temp = prompt("temperatura inicial");
  let percentRain = prompt("Probabilidad de lluvia");
  const dias = 0;
  const temp_max = 0, temp_min = 0;
  
  for (let i = 0; i <= num_dias.length; i++) {
    dias += num_dias[i];
    temp += 2;
    if (temp > 25) {
      percentRain += 0.2 * 100;
    } else if (temp < 5) {
      percentRain -= 0.2 * 100;
    } else if (percentRain === 100) {
      temp += 1;
    }
  }
  
}
