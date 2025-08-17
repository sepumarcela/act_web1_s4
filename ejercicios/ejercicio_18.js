// ### 18. **Validar correo electrónico**
// - **Tarea**: Crea una función que valide si una cadena es un correo electrónico básico (contiene @ y .com).
// - **Tipo de función**: Declaración de función
// - **Ejemplo**: `esCorreo("test@example.com")` → `true`

function esCorreo(texto) {
  return texto.includes("@") && texto.includes(".com")
}
