# Checkpoint 5: Ejercicio Práctico


# =====================================
# 1. Cree un bucle For de Python.
# =====================================
print("=> Ejercicio 1: Cree un bucle For de Python ")
alimento = ["chocolate", "pastal", "chorizo", "jamón", "queso"]

for comida in alimento:
    print(f"- Me gusta el {comida}")

# =====================================
# 2. Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3.
# =====================================
print("\n=> Ejercicio 2: Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3. ")

def suma(a, b, c):
    return a + b + c

# Prueba de la función
resultado = suma(5, 10, 15)
print(f"- Suma(5, 10, 15) = {resultado}")  

# =====================================
# 3. Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear.
# =====================================
print("\n=> Ejercicio 3: Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear. ")

suma_lambda = lambda a, b, c: a + b + c

resultado_lambda = suma_lambda(5, 10, 15)
print(f"- Suma_lambda(5, 10, 15) = {resultado_lambda}")  

# =====================================
# 4. Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.
# =====================================
print("\n=> Ejercicio 4: Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.")

nombre = 'Enrique'
lista_nombre = ('Jessica', 'Paul', 'George', 'Henry', 'Adán')  


if nombre in lista_nombre:
    print(f"- Verificación: {nombre} está en la lista.")
else:
    print(f"- Verificación: {nombre} NO está en la lista.")