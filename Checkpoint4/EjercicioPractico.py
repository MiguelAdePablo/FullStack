#========================================
#   EJERCICIO 1: Create a list, tuple, float, integer, decimal, and dictionary.
#======================================== 

# Lista 
lista = ["Pepe", "Pepa", "Pepin", "Hola", "True"]

# Tupla 
tupla = ("1", 2, 3, "hola", True)

# Float
float = 1.1111

#integer
integer = 111

#Decimal 
from decimal import Decimal
decimal = Decimal('1.1111')

# Diccionario 
diccionario = {"nombre": "Pepe","edad": 18,"activo": True,"le gusta":"leer"}

print(lista)
print(tupla)
print(float)
print(integer)
print(decimal)
print(diccionario)

#========================================
#   EJERCICIO 2: Round your float up.
#======================================== 

import math
float_redondeado = math.ceil(float)
print("\nFloat redondeado hacia arriba:", float_redondeado)  


#========================================
#   EJERCICIO 3: Get the square root of your float.
#======================================== 

print(f"\nRaíz cuadrada del float ({float}): {math.sqrt(float)}")   

#========================================
#   EJERCICIO 4: Select the first element from your dictionary.
#========================================

primer_elemento = list(diccionario.items())[0]
print("\nPrimer elemento del diccionario:", primer_elemento) 

#========================================
#   EJERCICIO 5: Select the second element from your tuple.
#========================================
segundo_elemento = tupla[1]
print("\nSegundo elemento de la tupla:", segundo_elemento) 

#========================================
#   EJERCICIO 6: Add an element to the end of your list.
#========================================
lista.append("Nuevo_elemento")
print("\nLista actualizada:", lista)

#========================================
#   EJERCICIO 7: Replace the first element in your list.
#========================================
lista[0] = "Reemplazado"
print("\nLista con primer elemento reemplazado:", lista)

#========================================
#   EJERCICIO 8: Sort your list alphabetically.
#========================================
lista.sort()
print("\nLista ordenada alfabéticamente:", lista)

#========================================
#   EJERCICIO 9: Use reassignment to add an element to your tuple.
#========================================
tupla = tupla + ("Ejercicio 9",)  # Concatenar una tupla con un nuevo elemento
print("\nTupla nueva:", tupla)
