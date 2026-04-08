/**
 * Cree una función JS que acepte 4 argumentos. 
 * Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
 * Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
 * Si es más pequeño, la consola registra "¡El número es menor que 50!"
 * 
 *  a - Primer número
 *  b - Segundo número
 *  c - Tercer número
 *  d - Cuarto número
 */
function calcularYComparar(a, b, c, d) {
    // Sumar los dos primeros argumentos
    const suma1 = a + b;
    
    // Sumar los dos segundos argumentos
    const suma2 = c + d;
    
    // Multiplicar los resultados
    const resultado = suma1 * suma2;
    
    // Comparar con 50 y mostrar mensaje
    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
    return resultado;
}

// ========== VERIFICAR ==========

console.log("=== Ejemplo 1 ===");
const resultado1 = calcularYComparar(10, 5, 3, 2);
console.log(`Resultado: ${resultado1}\n`);

console.log("=== Ejemplo 2 ===");
const resultado2 = calcularYComparar(2, 3, 4, 1);
console.log(`Resultado: ${resultado2}\n`);
