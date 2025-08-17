// ### 10. **Calcular factorial**
// - **Tarea**: Crea una función que calcule el factorial de un número.
// - **Tipo de función**: Función recursiva
// - **Ejemplo**: `factorial(5)` → `120`

function factorial(numero) {
  if (numero === 0) {
    return 1
    return numero * factorial(numero - 1)
}
}