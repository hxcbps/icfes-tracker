export const quizQuestions = [
  {
    id: 1,
    session: 1,
    block: "A — Tarjeta de transporte",
    prompt:
      "Costo por validaciones en ventana de 120 minutos. Si C(n) es el costo total por n validaciones en la misma ventana (máximo 3), ¿qué tabla es correcta?",
    options: [
      { id: "A", text: "C(1)=3200, C(2)=0, C(3)=1600" },
      { id: "B", text: "C(1)=3200, C(2)=3200, C(3)=4800" },
      { id: "C", text: "C(1)=0, C(2)=3200, C(3)=4800" },
      { id: "D", text: "C(1)=3200, C(2)=1600, C(3)=0" }
    ],
    answer: "B"
  },
  {
    id: 2,
    session: 1,
    block: "A — Tarjeta de transporte",
    prompt: "Ana valida a las 7:10, 7:50 y 8:40 (todas dentro de 120 min). ¿Cuánto paga?",
    options: [
      { id: "A", text: "$3.200" },
      { id: "B", text: "$4.800" },
      { id: "C", text: "$6.400" },
      { id: "D", text: "$1.600" }
    ],
    answer: "B"
  },
  {
    id: 3,
    session: 1,
    block: "A — Tarjeta de transporte",
    prompt:
      "Pedro valida a las 6:00 y 6:30. Luego valida a las 8:10 y dice: “la de 8:10 es la tercera de mi ventana, cuesta $1.600”. ¿Qué evaluación es correcta?",
    options: [
      { id: "A", text: "Correcta: son tres validaciones en la mañana." },
      { id: "B", text: "Incorrecta: 8:10 es después de 120 min desde 6:00 y reinicia." },
      { id: "C", text: "Correcta: el conteo depende del día, no del tiempo." },
      { id: "D", text: "Incorrecta: la segunda validación nunca puede costar $0." }
    ],
    answer: "B"
  },
  {
    id: 4,
    session: 1,
    block: "A — Tarjeta de transporte",
    prompt: "Luisa hizo 3 validaciones en una ventana y pagó $4.800. ¿Cuál fue el costo promedio por validación?",
    options: [
      { id: "A", text: "$1.200" },
      { id: "B", text: "$1.600" },
      { id: "C", text: "$2.400" },
      { id: "D", text: "$3.200" }
    ],
    answer: "B"
  },
  {
    id: 5,
    session: 1,
    block: "B — Empaque de café",
    prompt: "¿Cuántos gramos hay en 10 kg?",
    options: [
      { id: "A", text: "1.000 g" },
      { id: "B", text: "10.000 g" },
      { id: "C", text: "100.000 g" },
      { id: "D", text: "1.000.000 g" }
    ],
    answer: "B"
  },
  {
    id: 6,
    session: 1,
    block: "B — Empaque de café",
    prompt: "Si x es número de bolsas de 250 g y y de 500 g, ¿cuál ecuación representa la masa total (en gramos) para 10 kg?",
    options: [
      { id: "A", text: "250x + 500y = 10" },
      { id: "B", text: "250x + 500y = 10.000" },
      { id: "C", text: "x + y = 10.000" },
      { id: "D", text: "500x + 250y = 10.000" }
    ],
    answer: "B"
  },
  {
    id: 7,
    session: 1,
    block: "B — Empaque de café",
    prompt: "En otro lote hay 25 bolsas y el 40% son de 500 g. ¿Cuántas bolsas de 500 g hay?",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "10" },
      { id: "C", text: "12" },
      { id: "D", text: "15" }
    ],
    answer: "B"
  },
  {
    id: 8,
    session: 1,
    block: "B — Empaque de café",
    prompt: "Un estudiante dice: “Para pasar de gramos a kilogramos, debo multiplicar por 1000”. ¿Cuál razón lo refuta correctamente?",
    options: [
      { id: "A", text: "Incorrecto: se divide entre 1000 porque 1000 g forman 1 kg." },
      { id: "B", text: "Correcto: el kilo es más grande, por eso se multiplica." },
      { id: "C", text: "Correcto solo si hay decimales." },
      { id: "D", text: "Incorrecto: se divide entre 100 porque 100 g forman 1 kg." }
    ],
    answer: "A"
  },
  {
    id: 9,
    session: 1,
    block: "B — Empaque de café",
    prompt: "Si los 10 kg se empacan usando solo un tipo de bolsa, ¿cuál opción da el menor costo?",
    options: [
      { id: "A", text: "40 bolsas de 250 g -> $260.000" },
      { id: "B", text: "20 bolsas de 500 g -> $240.000" },
      { id: "C", text: "10 bolsas de 500 g -> $120.000" },
      { id: "D", text: "10 bolsas de 250 g -> $65.000" }
    ],
    answer: "B"
  },
  {
    id: 10,
    session: 1,
    block: "C — Plano de un parque",
    prompt: "¿Cuál punto está a la misma altura que la cancha C(2,6)?",
    options: [
      { id: "A", text: "P(0,0)" },
      { id: "B", text: "L(6,2)" },
      { id: "C", text: "K(8,6)" },
      { id: "D", text: "Ninguno" }
    ],
    answer: "C"
  },
  {
    id: 11,
    session: 1,
    block: "C — Plano de un parque",
    prompt: "La pendiente del segmento que une C(2,6) con K(8,6) es:",
    options: [
      { id: "A", text: "Positiva" },
      { id: "B", text: "Negativa" },
      { id: "C", text: "Cero" },
      { id: "D", text: "No existe" }
    ],
    answer: "C"
  },
  {
    id: 12,
    session: 1,
    block: "C — Plano de un parque",
    prompt: "La distancia PL es:",
    options: [
      { id: "A", text: "sqrt(40)" },
      { id: "B", text: "sqrt(20)" },
      { id: "C", text: "sqrt(10)" },
      { id: "D", text: "sqrt(8)" }
    ],
    answer: "A"
  },
  {
    id: 13,
    session: 1,
    block: "C — Plano de un parque",
    prompt:
      "Un estudiante afirma: “Como C y K tienen la misma y, el recorrido es horizontal”. ¿Cuál justificación es correcta?",
    options: [
      { id: "A", text: "Si dos puntos tienen la misma x, la recta es horizontal." },
      { id: "B", text: "Si dos puntos tienen la misma y, la recta es horizontal y su pendiente es 0." },
      { id: "C", text: "Toda recta en el plano es horizontal." },
      { id: "D", text: "La pendiente se calcula como Delta x/Delta y." }
    ],
    answer: "B"
  },
  {
    id: 14,
    session: 1,
    block: "C — Plano de un parque",
    prompt: "El punto medio del segmento CK es:",
    options: [
      { id: "A", text: "(5,6)" },
      { id: "B", text: "(10,12)" },
      { id: "C", text: "(6,2)" },
      { id: "D", text: "(3,3)" }
    ],
    answer: "A"
  },
  {
    id: 15,
    session: 1,
    block: "D — Horas de estudio",
    prompt: "Conjunto de horas: [4, 6, 6, 7, 7, 8, 8, 9, 10, 15]. ¿Cuál afirmación describe mejor?",
    options: [
      { id: "A", text: "La mayoría estudia más de 12 horas." },
      { id: "B", text: "Hay un valor mucho más alto que el resto." },
      { id: "C", text: "No hay valores repetidos." },
      { id: "D", text: "Todos estudian casi lo mismo." }
    ],
    answer: "B"
  },
  {
    id: 16,
    session: 1,
    block: "D — Horas de estudio",
    prompt: "Mediana del conjunto [4, 6, 6, 7, 7, 8, 8, 9, 10, 15] es:",
    options: [
      { id: "A", text: "7" },
      { id: "B", text: "7,5" },
      { id: "C", text: "8" },
      { id: "D", text: "8,5" }
    ],
    answer: "B"
  },
  {
    id: 17,
    session: 1,
    block: "D — Horas de estudio",
    prompt: "Un docente prefiere la mediana porque hay un valor alto (15). ¿Cuál razón lo apoya?",
    options: [
      { id: "A", text: "La media no usa todos los datos." },
      { id: "B", text: "La mediana cambia más que la media con valores extremos." },
      { id: "C", text: "La mediana es menos sensible a valores extremos que la media." },
      { id: "D", text: "Media y mediana siempre coinciden." }
    ],
    answer: "C"
  },
  {
    id: 18,
    session: 1,
    block: "D — Horas de estudio",
    prompt: "¿Qué porcentaje de estudiantes estudia 8 horas o más?",
    options: [
      { id: "A", text: "40%" },
      { id: "B", text: "50%" },
      { id: "C", text: "60%" },
      { id: "D", text: "70%" }
    ],
    answer: "B"
  },
  {
    id: 19,
    session: 1,
    block: "E — Promoción de dulces",
    prompt: "Bolsa con 10 dulces: 5 fresa, 3 limón, 2 uva. Probabilidad de tomar un dulce de uva:",
    options: [
      { id: "A", text: "2/10" },
      { id: "B", text: "2/5" },
      { id: "C", text: "1/2" },
      { id: "D", text: "3/10" }
    ],
    answer: "A"
  },
  {
    id: 20,
    session: 1,
    block: "E — Promoción de dulces",
    prompt: "Probabilidad de NO tomar un dulce de fresa:",
    options: [
      { id: "A", text: "5/10" },
      { id: "B", text: "3/10" },
      { id: "C", text: "2/10" },
      { id: "D", text: "8/10" }
    ],
    answer: "A"
  },
  {
    id: 21,
    session: 1,
    block: "E — Promoción de dulces",
    prompt: "“Es más probable limón que uva porque hay 3 de limón y 2 de uva”. ¿Qué argumento lo sustenta?",
    options: [
      { id: "A", text: "Correcto: comparar 3/10 y 2/10 muestra que 3/10 > 2/10." },
      { id: "B", text: "Incorrecto: 3 es menor que 10, no se puede comparar." },
      { id: "C", text: "Incorrecto: siempre son iguales porque ambos son sabores." },
      { id: "D", text: "Correcto: porque limón pesa más que uva." }
    ],
    answer: "A"
  },
  {
    id: 22,
    session: 1,
    block: "E — Promoción de dulces",
    prompt: "Se toman 2 dulces sin reemplazo. Probabilidad de que ambos sean de fresa:",
    options: [
      { id: "A", text: "1/4" },
      { id: "B", text: "2/9" },
      { id: "C", text: "1/2" },
      { id: "D", text: "5/18" }
    ],
    answer: "B"
  },
  {
    id: 23,
    session: 1,
    block: "F — Mensajería",
    prompt: "Costo T(p): $8.000 hasta 2 kg; luego $8.000 + $2.500 por cada kg adicional. ¿Cuál expresión es correcta?",
    options: [
      { id: "A", text: "T(p)=8000+2500p para todo p" },
      { id: "B", text: "T(p)=8000 si p<=2; T(p)=8000+2500(p-2) si p>2" },
      { id: "C", text: "T(p)=2500(p-2) si p>2" },
      { id: "D", text: "T(p)=8000 si p<2; T(p)=2500p si p>=2" }
    ],
    answer: "B"
  },
  {
    id: 24,
    session: 1,
    block: "F — Mensajería",
    prompt: "Costo de enviar un paquete de 3,6 kg:",
    options: [
      { id: "A", text: "$10.000" },
      { id: "B", text: "$11.500" },
      { id: "C", text: "$12.000" },
      { id: "D", text: "$13.000" }
    ],
    answer: "C"
  },
  {
    id: 25,
    session: 1,
    block: "F — Mensajería",
    prompt: "Para paquetes de más de 2 kg, el costo por cada kg adicional es:",
    options: [
      { id: "A", text: "$2.500 por kg" },
      { id: "B", text: "$8.000 por kg" },
      { id: "C", text: "$10.500 por kg" },
      { id: "D", text: "No es constante" }
    ],
    answer: "A"
  },
  {
    id: 26,
    session: 2,
    block: "G — Escala en un plano",
    prompt: "Escala 1:200 significa:",
    options: [
      { id: "A", text: "1 cm real representa 200 cm en el plano." },
      { id: "B", text: "1 cm en el plano representa 200 cm reales." },
      { id: "C", text: "200 cm en el plano representan 1 cm real." },
      { id: "D", text: "1 m en el plano representa 200 cm reales." }
    ],
    answer: "B"
  },
  {
    id: 27,
    session: 2,
    block: "G — Escala en un plano",
    prompt: "El frente real (en metros) si en el plano mide 7,5 cm:",
    options: [
      { id: "A", text: "1,5 m" },
      { id: "B", text: "7,5 m" },
      { id: "C", text: "15 m" },
      { id: "D", text: "150 m" }
    ],
    answer: "C"
  },
  {
    id: 28,
    session: 2,
    block: "G — Escala en un plano",
    prompt:
      "Un estudiante obtiene 1500 m para el frente real porque multiplicó 7,5 por 200 y lo dejó en metros. ¿Por qué es incorrecto?",
    options: [
      { id: "A", text: "Porque debía dividir, no multiplicar." },
      { id: "B", text: "Porque 1500 está en centímetros y debe convertir a metros dividiendo entre 100." },
      { id: "C", text: "Porque la escala se aplica solo al fondo." },
      { id: "D", text: "Porque 1 m equivale a 200 cm." }
    ],
    answer: "B"
  },
  {
    id: 29,
    session: 2,
    block: "G — Escala en un plano",
    prompt: "Dimensiones reales: 15 m por 8 m. Área real (m²):",
    options: [
      { id: "A", text: "120" },
      { id: "B", text: "60" },
      { id: "C", text: "30" },
      { id: "D", text: "240" }
    ],
    answer: "A"
  },
  {
    id: 30,
    session: 2,
    block: "G — Escala en un plano",
    prompt: "Si la escala cambia a 1:400 (mismo lote), el dibujo en el plano:",
    options: [
      { id: "A", text: "Se ve más grande." },
      { id: "B", text: "Se ve igual." },
      { id: "C", text: "Se ve más pequeño." },
      { id: "D", text: "Se invierte." }
    ],
    answer: "C"
  },
  {
    id: 31,
    session: 2,
    block: "H — Planes de datos móviles",
    prompt: "Plan A: 18.000 + 3.000g. Plan B: 12.000 + 4.000g. ¿Para qué g cuestan lo mismo?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "6" },
      { id: "D", text: "8" }
    ],
    answer: "C"
  },
  {
    id: 32,
    session: 2,
    block: "H — Planes de datos móviles",
    prompt: "En un gráfico, el punto donde se cruzan CA y CB representa:",
    options: [
      { id: "A", text: "Consumo mínimo permitido." },
      { id: "B", text: "Valor de g donde ambos cuestan lo mismo." },
      { id: "C", text: "El plan que siempre es más barato." },
      { id: "D", text: "El costo fijo más alto." }
    ],
    answer: "B"
  },
  {
    id: 33,
    session: 2,
    block: "H — Planes de datos móviles",
    prompt: "Si g=8 GB, ¿cuál plan es más económico?",
    options: [
      { id: "A", text: "Plan A" },
      { id: "B", text: "Plan B" },
      { id: "C", text: "Cuestan lo mismo" },
      { id: "D", text: "No se puede determinar" }
    ],
    answer: "A"
  },
  {
    id: 34,
    session: 2,
    block: "H — Planes de datos móviles",
    prompt: "En C_A = 18.000 + 3.000g, el número 3.000 representa:",
    options: [
      { id: "A", text: "Costo fijo del plan A." },
      { id: "B", text: "Costo por cada GB adicional." },
      { id: "C", text: "Número de GB incluidos." },
      { id: "D", text: "Impuesto mensual." }
    ],
    answer: "B"
  },
  {
    id: 35,
    session: 2,
    block: "H — Planes de datos móviles",
    prompt: "Costo del Plan B para g=4 GB es:",
    options: [
      { id: "A", text: "16.000" },
      { id: "B", text: "24.000" },
      { id: "C", text: "28.000" },
      { id: "D", text: "32.000" }
    ],
    answer: "C"
  },
  {
    id: 36,
    session: 2,
    block: "I — Patrón con fichas",
    prompt: "Secuencia 3, 6, 10, 15. ¿Cómo se obtiene?",
    options: [
      { id: "A", text: "Sumar 3 siempre." },
      { id: "B", text: "Multiplicar por 2 siempre." },
      { id: "C", text: "Sumar 3, luego 4, luego 5, …" },
      { id: "D", text: "Restar 1 siempre." }
    ],
    answer: "C"
  },
  {
    id: 37,
    session: 2,
    block: "I — Patrón con fichas",
    prompt: "¿Cuántas fichas usa la figura 5?",
    options: [
      { id: "A", text: "18" },
      { id: "B", text: "20" },
      { id: "C", text: "21" },
      { id: "D", text: "22" }
    ],
    answer: "C"
  },
  {
    id: 38,
    session: 2,
    block: "I — Patrón con fichas",
    prompt: "F(n)=(n(n+1))/2 + 2. ¿Qué verificación muestra que no coincide con el patrón dado?",
    options: [
      { id: "A", text: "Para n=1, F(1)=3 coincide." },
      { id: "B", text: "Para n=2, F(2)=5 pero el patrón indica 6." },
      { id: "C", text: "Para n=3, F(3)=8 coincide." },
      { id: "D", text: "Para n=4, F(4)=12 coincide." }
    ],
    answer: "B"
  },
  {
    id: 39,
    session: 2,
    block: "I — Patrón con fichas",
    prompt: "Una fórmula que sí coincide con 3, 6, 10, 15 para n=1,2,3,4 es:",
    options: [
      { id: "A", text: "F(n)=((n+1)(n+2))/2" },
      { id: "B", text: "F(n)=n(n+1)/2" },
      { id: "C", text: "F(n)=n^2+2" },
      { id: "D", text: "F(n)=2n+1" }
    ],
    answer: "A"
  },
  {
    id: 40,
    session: 2,
    block: "I — Patrón con fichas",
    prompt:
      "Un estudiante afirma: “El patrón crece más rápido porque los incrementos aumentan en 1 (3, 4, 5, 6, …)”. ¿Cuál razón lo apoya?",
    options: [
      { id: "A", text: "Correcto: si los incrementos crecen, la sucesión no aumenta de forma constante." },
      { id: "B", text: "Incorrecto: si los incrementos aumentan, la sucesión disminuye." },
      { id: "C", text: "Correcto: porque entonces la sucesión es lineal." },
      { id: "D", text: "Incorrecto: porque todos los incrementos son iguales." }
    ],
    answer: "A"
  },
  {
    id: 41,
    session: 2,
    block: "J — Sueño y puntaje",
    prompt: "Relación observada: a más horas de sueño, mayor puntaje. La correlación es:",
    options: [
      { id: "A", text: "Negativa" },
      { id: "B", text: "Nula" },
      { id: "C", text: "Positiva" },
      { id: "D", text: "No se puede describir" }
    ],
    answer: "C"
  },
  {
    id: 42,
    session: 2,
    block: "J — Sueño y puntaje",
    prompt: "Conclusión más válida con la información dada:",
    options: [
      { id: "A", text: "Dormir más causa automáticamente mejores puntajes." },
      { id: "B", text: "Hay relación positiva observada, pero no basta para afirmar causalidad." },
      { id: "C", text: "Dormir menos mejora el desempeño porque obliga a estudiar más." },
      { id: "D", text: "No existe ninguna relación entre sueño y puntaje." }
    ],
    answer: "B"
  },
  {
    id: 43,
    session: 2,
    block: "J — Sueño y puntaje",
    prompt: "Si algunos tuvieron puntajes muy bajos por enfermedad, ¿qué medida describe mejor el puntaje típico?",
    options: [
      { id: "A", text: "Máximo" },
      { id: "B", text: "Media" },
      { id: "C", text: "Mediana" },
      { id: "D", text: "Rango" }
    ],
    answer: "C"
  },
  {
    id: 44,
    session: 2,
    block: "J — Sueño y puntaje",
    prompt: "Dos grupos con medianas 68 y 74. ¿Qué concluye correctamente?",
    options: [
      { id: "A", text: "El grupo de 74 tiene, en general, un centro más alto." },
      { id: "B", text: "En el grupo de 74 todos obtuvieron más de 68." },
      { id: "C", text: "El grupo de 68 tiene mayor máximo necesariamente." },
      { id: "D", text: "No se puede comparar nada con medianas." }
    ],
    answer: "A"
  },
  {
    id: 45,
    session: 2,
    block: "K — Claves numéricas",
    prompt: "Una clave tiene 4 dígitos (0–9) y se permite repetir salvo que se indique lo contrario. ¿Cuántas opciones hay para el primer dígito?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "9" },
      { id: "C", text: "10" },
      { id: "D", text: "40" }
    ],
    answer: "C"
  },
  {
    id: 46,
    session: 2,
    block: "K — Claves numéricas",
    prompt: "¿Cuántas claves posibles hay si se permite repetir dígitos?",
    options: [
      { id: "A", text: "10^4" },
      { id: "B", text: "9^4" },
      { id: "C", text: "4^{10}" },
      { id: "D", text: "10*4" }
    ],
    answer: "A"
  },
  {
    id: 47,
    session: 2,
    block: "K — Claves numéricas",
    prompt: "Si no se permite repetir dígitos, ¿cuántas claves posibles hay?",
    options: [
      { id: "A", text: "10^4" },
      { id: "B", text: "10*9*8*7" },
      { id: "C", text: "9^4" },
      { id: "D", text: "4!" }
    ],
    answer: "B"
  },
  {
    id: 48,
    session: 2,
    block: "L — Función definida por casos",
    prompt: "h(x)=(x^2-4)/(x-2) si x≠2; h(2)=4. ¿Qué afirma que h es continua en x=2?",
    options: [
      { id: "A", text: "Para x≠2, (x^2-4)/(x-2)=x+2; al acercar x a 2 se acerca a 4 y coincide con h(2)." },
      { id: "B", text: "Es continua porque h(2) está definida; eso garantiza continuidad." },
      { id: "C", text: "Es continua porque 0/0 se reemplaza por h(2) sin más condiciones." },
      { id: "D", text: "Es continua porque al simplificar se obtiene x-2; al acercar x a 2 da 0 y por eso h(2)=4." }
    ],
    answer: "A"
  },
  {
    id: 49,
    session: 2,
    block: "L — Función definida por casos",
    prompt: "Para x≠2, (x^2-4)/(x-2) es equivalente a:",
    options: [
      { id: "A", text: "x-2" },
      { id: "B", text: "x+2" },
      { id: "C", text: "x^2-4" },
      { id: "D", text: "(x-2)/(x+2)" }
    ],
    answer: "B"
  },
  {
    id: 50,
    session: 2,
    block: "L — Función definida por casos",
    prompt: "Según la definición, el valor h(2) es:",
    options: [
      { id: "A", text: "No existe" },
      { id: "B", text: "0" },
      { id: "C", text: "2" },
      { id: "D", text: "4" }
    ],
    answer: "D"
  }
];

export const answerKey = quizQuestions.reduce((acc, q) => {
  acc[q.id] = q.answer;
  return acc;
}, {});
