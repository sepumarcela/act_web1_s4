// ### 5. **Contar vocales en una cadena**
// - **Tarea**: Crea una función que cuente las vocales (a, e, i, o, u) en una cadena.
// - **Tipo de función**: Función recursiva
// - **Ejemplo**: `contarVocales("hola")` → `2`

function contarVocales(cadena) {
  let contador = 0
  let vocales = "aeiou"

  for (let letra of cadena.toLowerCase()) {
    if (vocales.includes(letra)) {
      contador++
    }
  }

  return contador
}
