#Chekpoint 3

# ========================================
#     EJERCICIO 1: Create a string, number, list, and boolean, each stored in their own variable.
# ======================================== 


# String 
string = "Texto de ejemplo"

# Número
numero = 111 

# Lista 
lista = [1, 2, 3, "texto Lista", True]

# Booleano 
boolean = True


# ========================================
#     EJERCICIO 2: Use an index to grab the first 3 letters in your string, store that in a variable. 
# ======================================== 

primeros_3 = string[0:3]  

print(primeros_3)  


# ========================================
#     EJERCICIO 3: Use an index to grab the first element from your list.
# ======================================== 

primer_elemento_lista = lista[0]  

print(primer_elemento_lista) 


# ========================================
#     EJERCICIO 4: Create a new number variable that adds 10 to your original number.
# ======================================== 

numero_mas_10 = numero + 10  

print(numero_mas_10)  


# ========================================
#     EJERCICIO 5:  Use an index to get the last element in your list.
# ======================================== 

ultimo_elemento_lista = lista[-1]  

print(ultimo_elemento_lista) 


# ========================================
#     EJERCICIO 6: Use split to transform the following string into a list.
#                 names = 'harry,alex,susie,jared,gail,conner'
# ========================================

names = 'harry,alex,susie,jared,gail,conner'
names_lista = names.split(',')

print(names_lista)


# ========================================
#     EJERCICIO 7: Get the first word from your string using indexes. Use the upper function to transform the letters into uppercase. Create a new string that takes the uppercase word and the rest of the original string.
# ========================================


localizador = string.find(' ')  
primera_palabra = string[0:localizador] 
primera_palabra_upper = primera_palabra.upper()
resto_string = string[localizador:] 
nuevo_string = primera_palabra_upper + resto_string

print(nuevo_string)  



# ========================================
#     EJERCICIO 8: Use string interpolation to print out a sentence that contains your number variable.
# ========================================

frase_numero = f"El número es: {numero}"

print(frase_numero)


# ========================================
#     EJERCICIO 9: Print"hello world"
# ========================================

print("hello world")

# ========================================
#     EJERCICIO Anexo: Además necesito que me crees una cadena que contenga la palabra "Hola". Usando la palabra clave en el método de búsqueda o el índice, busque y seleccione "Hola" en su cadena. Y usando la función de reemplazo, reemplace "Hola" en su cadena con "adiós".
# ========================================

cadena = "Hola mundo"
clave = "Hola"
posicion = cadena.index(clave)
seleccion = cadena[posicion:posicion + len(clave)]
print(f"Palabra clave: {seleccion}")

reemplazo = cadena.replace(clave, "Adiós")
print(f"{reemplazo}")

