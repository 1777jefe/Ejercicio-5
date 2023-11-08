// Pedir al usuario que ingrese los valores de D, H, M y S
let dias=2
 
// Calcular el total de segundos

var totalHora=(24*dias)
var totalminutos=(totalHora*60)
var totalSegundos=(totalminutos*60)
// Imprimir el resultado

console.log("total de horas es: ",totalHora);
console.log("total de minutos es:",totalminutos);
console.log("total de segundos es:",totalSegundos);




// Pedir al usuario que ingrese la temperatura en grados Fahrenheit
let temperaturaFahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));

// Realizar las conversiones

var temperaturaCelsius = (temperaturaFahrenheit - 32) * (5/9);
var temperaturaKelvin = temperaturaCelsius + 273.15;
var temperaturaRankine = temperaturaFahrenheit + 459.67;

 // Imprimir los resultados
console.log("Temperatura en grados Celsius: " + temperaturaCelsius.toFixed(2) + " °C");
console.log("Temperatura en Kelvin: " + temperaturaKelvin.toFixed(2) + " K");
console.log("Temperatura en Rankine: " + temperaturaRankine.toFixed(2) + " °R"); 



// Definir las tarifas
let tarifa
const prompt=requiere("prompt-sync")({sigint:true})

const tarifaBase = 850; // Tarifa base para las primeras 10 toneladas
const tarifaExtra = 500; // Tarifa por tonelada adicional

// Pedir al usuario que ingrese la cantidad de toneladas
const t = parseFloat(prompt("Ingrese la cantidad de toneladas a transportar:"));

// Calcular el costo total
let costoTotal;

if (N <= 10) {
  costoTotal = N * tarifaBase;
} 
  costoTotal = N * tarifa
 { 
  const toneladasBase = 10;
  const toneladasExtras = N - toneladasBase;
  costoTotal = toneladasBase * tarifaBase + toneladasExtras * tarifaExtra;
}
  costoTotal = toneladasBase * tarifaBase + toneladas
// Imprimir el resultado
console.log(`El costo total del cargamento de ${N} toneladas es: $${costoTotal.toFixed(2)} pesos`);




// Pedir al usuario que ingrese la hora de inicio y la hora de finalización del trabajo
let horaInicio = ("Ingrese la hora de inicio del trabajo (en formato de 24 horas, ej. 9 para las 9:00 AM):");
const horaFinalizacion = parseInt(prompt("Ingrese la hora de finalización del trabajo (en formato de 24 horas, ej. 22 para las 10:00 PM):"));

// Validar que la hora de finalización no sea después de las 12 PM (medianoche)
if (horaFinalizacion > 24) {
  console.log("La hora de finalización no puede ser después de las 12 PM.");
} else {
  // Definir las tarifas por hora
  const tarifaAntesDeLas10PM = 75;
  const tarifaDespuesDeLas10PM = 85;

  // Calcular el sueldo
  let sueldo = 0;

for (let hora = horaInicio; hora < horaFinalizacion; hora++) {
    if (hora < 22) {
      sueldo += tarifaAntesDeLas10PM;
    } else {
      sueldo += tarifaDespuesDeLas10PM;   
  }
      sueldo += tarifaDespuesDeLas10PM;
    }
  }
      sueldo += tar
// Imprimir el resultado
  console.log(`El sueldo por la noche de trabajo es: $${sueldo.toFixed(2)} pesos.`);



  // Población estudiantil actual
let poblacionActual = 5460;

// Tasa de crecimiento anual (9%)
const tasaCrecimientoAnual = 0.09;

// Número de años en el futuro
const añosEnElFuturo = 10;

// Función para calcular la población futura
function calcularPoblacionFutura(poblacionActual, tasaCrecimiento, años) {
  for (let i = 1; i <= años; i++) {
    poblacionActual += poblacionActual * tasaCrecimiento;
  }
    poblacionActual += poblacionActual
return poblacionActual;
}
// Calcular la población futura
const poblacionFutura = calcularPoblacionFutura(poblacionActual, tasaCrecimientoAnual, añosEnElFuturo);

// Imprimir el resultado
console.log(`La población estudiantil de Atlanta dentro de ${añosEnElFuturo} años será de ${poblacionFutura.toFixed(0)} alumnos.`);



// Pedir al usuario que ingrese el valor de N
let N=("Ingrese el número de términos de la serie de Fibonacci que desea generar:");

// Inicializar los primeros dos términos de la serie
let a = 0;
let b = 1;

// Imprimir los primeros N términos de la serie
console.log("Serie de Fibonacci de los primeros " + N + " términos:");
for (let i = 0; i < N; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}
