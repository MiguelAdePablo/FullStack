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

# # Crear segundo usuario
# print("\n" + "=" * 50)
# usuario2 = Usuario("ana_garcia", "miPassSeguro2024")
# print(f"\nUsuario creado:")
# print(f"  Nombre de usuario: {usuario2.nombre_usuario}")
# print(f"  Contraseña: {usuario2.contraseña}")

# # Crear tercer usuario
# print("\n" + "=" * 50)
# usuario3 = Usuario("carlos_martinez", "Carlos@2024")
# print(f"\nUsuario creado:")
# print(f"  Nombre de usuario: {usuario3.nombre_usuario}")
# print(f"  Contraseña: {usuario3.contraseña}")


