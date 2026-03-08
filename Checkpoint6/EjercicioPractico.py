# ========================================
# Clase Usuario con método __init__
# ========================================

class Usuario:
    def __init__(self, nombre_usuario, contraseña):
        self.nombre_usuario = nombre_usuario
        self.contraseña = contraseña
        
        print(f"✓ Usuario '{self.nombre_usuario}' creado exitosamente")


# ========================================
# Crear objetos usando la clase Usuario
# ========================================

# Crear primer usuario
print("=" * 50)
print("CREANDO OBJETOS DE LA CLASE USUARIO")
print("=" * 50)

usuario1 = Usuario("juan_perez", "contraseña123")
print(f"\nUsuario creado:")
print(f"  Nombre de usuario: {usuario1.nombre_usuario}")
print(f"  Contraseña: {usuario1.contraseña}")

# Crear segundo usuario
print("\n" + "=" * 50)
usuario2 = Usuario("ana_garcia", "miPassSeguro2024")
print(f"\nUsuario creado:")
print(f"  Nombre de usuario: {usuario2.nombre_usuario}")
print(f"  Contraseña: {usuario2.contraseña}")

# Crear tercer usuario
print("\n" + "=" * 50)
usuario3 = Usuario("carlos_martinez", "Carlos@2024")
print(f"\nUsuario creado:")
print(f"  Nombre de usuario: {usuario3.nombre_usuario}")
print(f"  Contraseña: {usuario3.contraseña}")

# ========================================
# Acceder y modificar atributos de los objetos
# ========================================

print("\n" + "=" * 50)
print("ACCEDIENDO Y MODIFICANDO ATRIBUTOS")
print("=" * 50)

# Acceder a los atributos
print(f"\nUsuario 1: {usuario1.nombre_usuario}")
print(f"Usuario 2: {usuario2.nombre_usuario}")
print(f"Usuario 3: {usuario3.nombre_usuario}")

# Modificar un atributo
print(f"\nCambiando contraseña del usuario 1...")
usuario1.contraseña = "nuevaContraseñaSegura"
print(f"✓ Contraseña actualizada para {usuario1.nombre_usuario}")

# Verificar el cambio
print(f"\nVerificación:")
print(f"  Nombre: {usuario1.nombre_usuario}")
print(f"  Nueva contraseña: {usuario1.contraseña}")
