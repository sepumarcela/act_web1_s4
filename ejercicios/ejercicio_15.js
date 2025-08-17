// ### 15. **Invertir una cadena**
// - **Tarea**: Crea una función que invierta una cadena de texto.
// - **Tipo de función**: Función recursiva
// - **Ejemplo**: `invertir("hola")` → `aloh`


function invertir(texto) {
  if (texto === "") {
    return ""
  } else {
    return invertir(texto.slice(1)) + texto[0]
  }
}