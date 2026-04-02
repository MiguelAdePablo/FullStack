/**
 * BOTTEGA DINER - Selección híbrida (número o nombre)
 */

// ============================================================================
// CONFIGURACIÓN Y DATOS
// ============================================================================

// DECISIÓN: Mensajes aleatorios para feedback post-selección
const COMENTARIO_CAMARERO = [
    "¡Excelente elección! \n", "Eso está de locos.\n", "Buen gusto.\n",
    "La mejor opción del menú.\n", "¡Una delicia para el paladar! \n",
    "Yo pediría lo mismo.\n", "¡Vas a disfrutar cada bocado! \n",
    "¡Una elección digna de un verdadero foodie!\n",
    "¡Eso es lo que llamo un pedido con estilo! \n",
    "¡Una opción que nunca falla! \n",
    "¡Una elección que hará que tu estómago baile de alegría! \n",
    "¡El chef estará orgulloso! \n", "Una selección clásica y segura.\n",
    "¡Uff, qué antojo!\n"
];

// DECISIÓN: Estructura anidada por menú > categoría > items para acceso rápido
const RESTAURANTE_DATO = {
    desayuno: {
        "Bebidas Calientes": [
            { nombre: "Café Cortado", precio: 1.50 },
            { nombre: "Café Cappuccino", precio: 2.00 },
            { nombre: "Té Chai", precio: 2.00 }
        ],
        "Platos Fuertes": [
            { nombre: "Huevos con Chistorra", precio: 2.00 },
            { nombre: "Tortilla de Patatas", precio: 2.50 },
            { nombre: "Croissant", precio: 2.00 }
        ],
        "Acompañamientos": [
            { nombre: "Tostada Francesa", precio: 2.00 },
            { nombre: "Fruta de Temporada", precio: 1.50 },
            { nombre: "Yogur con Granola", precio: 1.50 }
        ]
    },
    comida: {
        "Entradas": [
            { nombre: "Ensalada César", precio: 4.00 },
            { nombre: "Sopa del Día", precio: 3.00 },
            { nombre: "Fabada", precio: 4.50 }
        ],
        "Platos Principales": [
            { nombre: "Hamburguesa Miguel", precio: 15.00 },
            { nombre: "Pasta Carbonara", precio: 14.50 },
            { nombre: "Salmón a la Plancha", precio: 18.00 }
        ],
        "Postres": [
            { nombre: "Tiramisú", precio: 7.00 },
            { nombre: "Brownie con Helado", precio: 6.50 },
            { nombre: "Flan de la Casa", precio: 5.00 }
        ]
    },
    cena: {
        "Aperitivos": [
            { nombre: "Bruschetta", precio: 7.50 },
            { nombre: "Carpaccio", precio: 12.00 },
            { nombre: "Aceitunas Marinadas", precio: 5.00 }
        ],
        "Especialidades": [
            { nombre: "Filete Mignon", precio: 28.00 },
            { nombre: "Risotto de Setas", precio: 22.00 },
            { nombre: "Lubina al Horno", precio: 24.00 }
        ],
        "Cierre Dulce": [
            { nombre: "Mousse de Chocolate", precio: 8.00 },
            { nombre: "Cheesecake de Frutos Rojos", precio: 9.00 },
            { nombre: "Copa de Sorbete", precio: 6.00 }
        ]
    }
};

// ============================================================================
// FUNCIONES AUXILIARES
// ============================================================================

// DECISIÓN: Aleatoriedad simple sin dependencias externas
function getRandomComment() {
    const randomIndex = Math.floor(Math.random() * COMENTARIO_CAMARERO.length);
    return COMENTARIO_CAMARERO[randomIndex];
}

// DECISIÓN: Franjas solapadas en cena para cubrir horario nocturno (17:00-04:59)
function getMenuTypeByTime(timeString) {
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(timeString)) return null;
    
    const [horas] = timeString.split(':').map(Number);
    
    // DECISIÓN: Orden de evaluación crítico para evitar solapamientos
    if (horas >= 5 && horas < 11) return 'desayuno';
    if (horas >= 11 && horas < 17) return 'comida';
    if (horas >= 17 || horas < 5) return 'cena';
    
    return null;
}

// DECISIÓN: Búsqueda por número primero (O(1)) antes que por nombre (O(n))
// DECISIÓN: Bucle while obligatorio para validar entrada antes de continuar
function selectItemFromCategory(categorynombre, items) {
    let selectedOption = null;
    let isValidSelection = false;
    let userInput = "";

    let optionsText = `--- ${categorynombre.toUpperCase()} ---\n\n`;
    items.forEach((item, index) => {
        optionsText += `${index + 1}. ${item.nombre} (${item.precio.toFixed(2)} €)\n`;
    });
    optionsText += "\nEscribe el NÚMERO o el NOMBRE del plato:";

    while (!isValidSelection) {
        userInput = prompt(optionsText);
        
        // DECISIÓN: Confirmar cancelación para evitar abortos accidentales
        if (userInput === null) {
            const confirmExit = confirm("¿Deseas cancelar todo el pedido?");
            if (confirmExit) {
                alert("Pedido cancelado. ¡Hasta luego!");
                return null;
            }
            continue;
        }

        const normalizedInput = userInput.trim();
        const normalizedInputLower = normalizedInput.toLowerCase();

        // DECISIÓN: Rechazar entradas vacías antes de procesar
        if (normalizedInput === "") {
            alert("Error: No puedes dejar el campo vacío.\nPor favor escribe un número o el nombre del plato.");
            continue;
        }

        // DECISIÓN: Ajuste de índice (usuario: 1-based, array: 0-based)
        const choiceIndex = parseInt(normalizedInput, 10);
        if (!isNaN(choiceIndex) && choiceIndex >= 1 && choiceIndex <= items.length) {
            selectedOption = items[choiceIndex - 1];
            isValidSelection = true;
            alert(`${getRandomComment()}\nHas seleccionado: ${selectedOption.nombre}`);
            continue;
        }

        // DECISIÓN: Comparación case-insensitive para flexibilidad de entrada
        const foundItem = items.find(item => 
            item.nombre.toLowerCase() === normalizedInputLower
        );

        if (foundItem) {
            selectedOption = foundItem;
            isValidSelection = true;
            alert(`${getRandomComment()}\nHas seleccionado: ${selectedOption.nombre}`);
        } else {
            // DECISIÓN: Mostrar opciones disponibles tras error para guiar al usuario
            let errorMsg = `Error: "${userInput}" no es válido.\n\n`;
            errorMsg += "Puedes seleccionar por:\n  - NÚMERO: 1, 2, 3...\n  - NOMBRE completo del plato\n\n";
            errorMsg += "Opciones disponibles:\n";
            items.forEach((item, index) => {
                errorMsg += `  [${index + 1}] ${item.nombre}\n`;
            });
            alert(errorMsg);
        }
    }

    return selectedOption;
}

// DECISIÓN: toFixed(2) para precisión monetaria en todos los cálculos
function generateBill(order) {
    if (!order || order.length === 0) return;

    let billText = "  FACTURA BOTTEGA DINER\n";
    billText += " =========================\n\n";
    let totalAmount = 0;

    order.forEach((item, index) => {
        const lineTotal = item.precio;
        totalAmount += lineTotal;
        billText += `${index + 1}. ${item.nombre.padEnd(30)} ${lineTotal.toFixed(2)} €\n`;
    });

    billText += "\n---------------------\n";
    billText += `TOTAL A PAGAR:                    ${totalAmount.toFixed(2)} €\n`;
    billText += "---------------------\n";
    billText += "¡Gracias por tu visita!\n";

    alert(billText);
}

// ============================================================================
// FLUJO PRINCIPAL
// ============================================================================

// DECISIÓN: Validación en cada fase para evitar estados inconsistentes
function startBottegaDiner() {
    console.log("Iniciando Bottega Diner System - Versión Híbrida...");
    
    let currentMenuType = null;
    let timeInput = "";
    let isTimeValid = false;

    // DECISIÓN: Bucle hasta obtener hora válida o cancelación explícita
    while (!isTimeValid) {
        timeInput = prompt("Bienvenido a Bottega Diner.\n\nPor favor, ingrese la hora actual (formato hh:mm):\nEjemplos: 08:30, 14:00, 20:15");
        
        if (timeInput === null) {
            alert("Sistema cerrado. Gracias por visitarnos.");
            return; 
        }

        currentMenuType = getMenuTypeByTime(timeInput.trim().toLowerCase());

        if (currentMenuType) {
            isTimeValid = true;
            alert(`¡Menú de ${currentMenuType.toUpperCase()} activado!\n\nHora registrada: ${timeInput}`);
        } else {
            alert("Hora inválida o fuera de horario de servicio.\n\nHorarios:\n- Desayuno: 05:00 - 10:59\n- Comida: 11:00 - 16:59\n- Cena: 17:00 - 04:59");
        }
    }

    // DECISIÓN: Propagar cancelación desde selección para abortar flujo completo
    const pedido_usuario = [];
    const currentMenu = RESTAURANTE_DATO[currentMenuType];
    const categorias = Object.keys(currentMenu);

    for (const category of categorias) {
        const ItemsenCategoria = currentMenu[category];
        const selectedItem = selectItemFromCategory(category, ItemsenCategoria);
        
        if (selectedItem === null) return;
        
        pedido_usuario.push(selectedItem);
    }

    generateBill(pedido_usuario);
}