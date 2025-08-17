// ### 13. **Reemplazar espacios por guiones**
// - **Tarea**: Crea una función que reemplace los espacios en una cadena por guiones.
// - **Tipo de función**: Expresión de función
// - **Ejemplo**: `reemplazarEspacios("Hola Mundo")` → `Hola-Mundo`

const reemplazarEspacios = function(texto) {
  return texto.replace(/ /g, "-")
}