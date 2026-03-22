// ========================================
// PARTE 1: Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”
// ========================================

// Definir la lista de nombres
const miLista = ["velma", "exploradora", "jane", "john", "harry"];
console.log("=== PARTE 1: Bucle FOR ===");

for (let i = 0; i < miLista.length; i++) {
    console.log(`Nombre ${i + 1}: ${miLista[i]}`);
}

// ========================================
// PARTE 2: Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.
// ========================================

console.log("\n=== PARTE 2: Bucle WHILE ===");
let contador = 0;

while (contador < miLista.length) {
    console.log(`Índice ${contador}: ${miLista[contador]}`);
    contador++; 
}

// ========================================
// PARTE 3: Cree una función de flecha que devuelva "Hola mundo".
// ========================================

console.log("\n=== PARTE 3: Función Flecha ===");

const saludar = () => {
    return "Hola mundo";
};
console.log(saludar());      
