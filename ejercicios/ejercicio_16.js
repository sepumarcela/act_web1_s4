// ### 16. **Sumar argumentos variables**
// - **Tarea**: Crea una función que sume un número variable de argumentos.
// - **Tipo de función**: Función flecha con parámetro rest
// - **Ejemplo**: `sumar(1, 2, 3, 4)` → `10`

const sumar = (...numeros) => {
  let total = 0

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i]
  }

  return total
}
