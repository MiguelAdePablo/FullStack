# ![](./Images/Github.png) &nbsp;&nbsp;   Menu Restaurante


El ejercicio consiste en construir un menú de restaurante funcional utilizando JavaScript puro, sin el uso de plantillas externas. La lógica se basa en la interacción con el usuario a través de ventanas emergentes (comandos de mensaje y de entrada de datos) para simular la experiencia de pedir comida.
A continuación, se detallan los requisitos específicos divididos por fases:
1. Selección del Menú según la Hora
El programa debe iniciar preguntando al usuario la hora actual (se recomienda el formato hh:mm). Dependiendo de la hora ingresada, el sistema debe ofrecer uno de los tres menús disponibles: desayuno, comida o cena. Cada menú debe contar con:

   - Tres categorías de platos (por ejemplo: plato principal, segundo plato y postre).
   - Al menos tres opciones de comida por cada categoría, cada una con su respectivo precio.

1. Interacción y Selección de Platos
Una vez asignado el menú, el usuario seleccionará sus platos siguiendo estas reglas:

   - Validación y gestión de errores: Si el usuario escribe una opción que no existe, el programa debe mostrar un mensaje de error y repetir la pregunta hasta que la entrada sea válida. Se sugiere el uso de un bucle while para esto.
   - Insensibilidad a mayúsculas/minúsculas: El sistema debe aceptar la opción elegida sin importar si el usuario escribe en mayúsculas, minúsculas o una combinación de ambas, siempre que el nombre sea correcto.
   - Comentarios aleatorios: Cada vez que el usuario elija un plato correctamente, el programa debe mostrar un comentario aleatorio de una "caja de mensajes" (por ejemplo: "¡Buena elección!" o "Eso está de locos").


2. Resultado Final (Factura)
Al finalizar la selección de todos los platos, el programa debe mostrar un resumen detallado o factura que incluya:

   - El nombre de cada plato seleccionado.
   - El precio individual de cada elección.
   - La suma total de todos los elementos consumidos.

Este ejercicio busca poner en práctica conceptos avanzados de programación como condicionales, bucles, gestión de errores, funciones aleatorias y manipulación de variables.