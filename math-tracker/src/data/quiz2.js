export const quiz2Questions = [
  // Sesión 1 — Bloque A
  {
    id: 1,
    session: 1,
    block: "A — Factura de agua",
    prompt: "Factura por consumo c (m3): 0<=c<=15: 18.000 + 1.200 por m3. Si c>15: 18.000 + 1.200*15 + 1.800 por cada m3 adicional. ¿Cuál expresion representa F(c)?",
    options: [
      { id: "A", text: "F(c)=18.000+1.800c para todo c" },
      { id: "B", text: "F(c)=18.000+1.200c si c<=15; F(c)=18.000+1.200(15)+1.800(c-15) si c>15" },
      { id: "C", text: "F(c)=18.000+1.200(c-15) si c>15" },
      { id: "D", text: "F(c)=1.200c si c<=15; F(c)=1.800c si c>15" }
    ],
    answer: "B"
  },
  {
    id: 2,
    session: 1,
    block: "A — Factura de agua",
    prompt: "¿Cuanto paga una familia que consumio c=12 m3?",
    options: [
      { id: "A", text: "$30.000" },
      { id: "B", text: "$31.800" },
      { id: "C", text: "$32.400" },
      { id: "D", text: "$36.000" }
    ],
    answer: "C"
  },
  {
    id: 3,
    session: 1,
    block: "A — Factura de agua",
    prompt: "Un usuario consumio c=20 m3 y dice: “Debo pagar 18.000 + 1.800*20 porque supere 15 m3”. ¿Que evaluacion es correcta?",
    options: [
      { id: "A", text: "Correcta: al superar 15 m3 se cobra todo a 1.800." },
      { id: "B", text: "Incorrecta: solo los m3 adicionales despues de 15 se cobran a 1.800." },
      { id: "C", text: "Correcta: los 15 primeros m3 no se cobran." },
      { id: "D", text: "Incorrecta: la factura no tiene costo fijo." }
    ],
    answer: "B"
  },
  {
    id: 4,
    session: 1,
    block: "A — Factura de agua",
    prompt: "Para consumos mayores a 15 m3, el costo por cada m3 adicional es:",
    options: [
      { id: "A", text: "$1.200" },
      { id: "B", text: "$1.500" },
      { id: "C", text: "$1.800" },
      { id: "D", text: "$18.000" }
    ],
    answer: "C"
  },
  // Bloque B
  {
    id: 5,
    session: 1,
    block: "B — Cafeteria escolar",
    prompt: "Sistema de ecuaciones para 2 sanduches + 1 jugo = 19.000 y 1 sanduche + 2 jugos = 17.000:",
    options: [
      { id: "A", text: "{ 2s - j = 19.000 ; s - 2j = 17.000 }" },
      { id: "B", text: "{ 2s + j = 19.000 ; s + 2j = 17.000 }" },
      { id: "C", text: "{ s + j = 19.000 ; 2s + 2j = 17.000 }" },
      { id: "D", text: "{ 2s + 2j = 19.000 ; s + j = 17.000 }" }
    ],
    answer: "B"
  },
  {
    id: 6,
    session: 1,
    block: "B — Cafeteria escolar",
    prompt: "Precio del jugo j segun el sistema:",
    options: [
      { id: "A", text: "$4.000" },
      { id: "B", text: "$5.000" },
      { id: "C", text: "$6.000" },
      { id: "D", text: "$7.000" }
    ],
    answer: "B"
  },
  {
    id: 7,
    session: 1,
    block: "B — Cafeteria escolar",
    prompt: "La ecuacion 2s + j = 19.000 significa:",
    options: [
      { id: "A", text: "2 jugos y 1 sanduche cuestan 19.000." },
      { id: "B", text: "2 sanduches cuestan 19.000." },
      { id: "C", text: "2 sanduches y 1 jugo cuestan 19.000." },
      { id: "D", text: "1 sanduche y 2 jugos cuestan 19.000." }
    ],
    answer: "C"
  },
  {
    id: 8,
    session: 1,
    block: "B — Cafeteria escolar",
    prompt: "Un estudiante afirma: “3 sanduches y 1 jugo cuestan 26.000”. Evalua:",
    options: [
      { id: "A", text: "Correcto: s=7.000 y j=5.000, entonces 3(7.000)+5.000=26.000." },
      { id: "B", text: "Incorrecto: 3s+j siempre es mayor que 30.000." },
      { id: "C", text: "Correcto: porque 3+1=4 y 19.000+17.000=36.000." },
      { id: "D", text: "Incorrecto: en combos no se puede calcular por separado." }
    ],
    answer: "A"
  },
  {
    id: 9,
    session: 1,
    block: "B — Cafeteria escolar",
    prompt: "Costo de 2 sanduches y 5 jugos:",
    options: [
      { id: "A", text: "$32.000" },
      { id: "B", text: "$35.000" },
      { id: "C", text: "$37.000" },
      { id: "D", text: "$39.000" }
    ],
    answer: "D"
  },
  // Bloque C
  {
    id: 10,
    session: 1,
    block: "C — Mapa del barrio",
    prompt: "¿Que dos lugares estan alineados verticalmente (misma x)?",
    options: [
      { id: "A", text: "A y B" },
      { id: "B", text: "B y C" },
      { id: "C", text: "A y D" },
      { id: "D", text: "C y D" }
    ],
    answer: "B"
  },
  {
    id: 11,
    session: 1,
    block: "C — Mapa del barrio",
    prompt: "Distancia entre A(1,1) y B(7,1):",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "7" },
      { id: "C", text: "8" },
      { id: "D", text: "sqrt(36)" }
    ],
    answer: "A"
  },
  {
    id: 12,
    session: 1,
    block: "C — Mapa del barrio",
    prompt: "Pendiente del segmento BC:",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "-1" },
      { id: "D", text: "No existe" }
    ],
    answer: "D"
  },
  {
    id: 13,
    session: 1,
    block: "C — Mapa del barrio",
    prompt: "Punto medio del segmento A(1,1)-D(3,5):",
    options: [
      { id: "A", text: "(1,3)" },
      { id: "B", text: "(2,3)" },
      { id: "C", text: "(4,6)" },
      { id: "D", text: "(2,2)" }
    ],
    answer: "B"
  },
  {
    id: 14,
    session: 1,
    block: "C — Mapa del barrio",
    prompt: "Un estudiante dice: “La pendiente de BD es -1 porque y aumenta 4 y x disminuye 4”. Evalua:",
    options: [
      { id: "A", text: "Correcta: m = Delta y / Delta x = 4 / -4 = -1." },
      { id: "B", text: "Incorrecta: si y aumenta la pendiente siempre es positiva." },
      { id: "C", text: "Correcta: la pendiente se calcula Delta x / Delta y." },
      { id: "D", text: "Incorrecta: B y D no estan en el mismo cuadrante." }
    ],
    answer: "A"
  },
  // Bloque D
  {
    id: 15,
    session: 1,
    block: "D — Resultados de una prueba",
    prompt: "Datos: 52, 55, 55, 58, 60, 61, 62, 64, 65, 90. ¿Que afirmacion describe mejor?",
    options: [
      { id: "A", text: "No hay valores repetidos." },
      { id: "B", text: "Hay un valor mucho mas alto que el resto." },
      { id: "C", text: "Todos los valores estan cerca de 90." },
      { id: "D", text: "La mayoria de valores es menor que 55." }
    ],
    answer: "B"
  },
  {
    id: 16,
    session: 1,
    block: "D — Resultados de una prueba",
    prompt: "Mediana del conjunto:",
    options: [
      { id: "A", text: "60" },
      { id: "B", text: "60.5" },
      { id: "C", text: "61" },
      { id: "D", text: "62" }
    ],
    answer: "B"
  },
  {
    id: 17,
    session: 1,
    block: "D — Resultados de una prueba",
    prompt: "Media (promedio) del conjunto:",
    options: [
      { id: "A", text: "60.5" },
      { id: "B", text: "61.0" },
      { id: "C", text: "62.2" },
      { id: "D", text: "65.0" }
    ],
    answer: "C"
  },
  {
    id: 18,
    session: 1,
    block: "D — Resultados de una prueba",
    prompt: "Para describir el puntaje tipico del grupo, ¿que medida es mas adecuada?",
    options: [
      { id: "A", text: "Maximo, porque muestra el mejor resultado." },
      { id: "B", text: "Rango, porque mide cuanto varian." },
      { id: "C", text: "Mediana, porque un valor extremo (90) afecta mas a la media." },
      { id: "D", text: "Media, porque no cambia con valores extremos." }
    ],
    answer: "C"
  },
  // Bloque E
  {
    id: 19,
    session: 1,
    block: "E — Control de calidad",
    prompt: "Caja con 12 bombillos: 9 buenos y 3 defectuosos. Probabilidad de seleccionar un defectuoso en un intento:",
    options: [
      { id: "A", text: "1/4" },
      { id: "B", text: "1/3" },
      { id: "C", text: "3/4" },
      { id: "D", text: "9/12" }
    ],
    answer: "A"
  },
  {
    id: 20,
    session: 1,
    block: "E — Control de calidad",
    prompt: "Seleccionar 2 bombillos sin reemplazo. Probabilidad de que ambos sean buenos:",
    options: [
      { id: "A", text: "3/11" },
      { id: "B", text: "6/11" },
      { id: "C", text: "8/11" },
      { id: "D", text: "9/11" }
    ],
    answer: "B"
  },
  {
    id: 21,
    session: 1,
    block: "E — Control de calidad",
    prompt: "Seleccionar 2 bombillos sin reemplazo. Probabilidad de que al menos uno sea defectuoso:",
    options: [
      { id: "A", text: "1/11" },
      { id: "B", text: "3/11" },
      { id: "C", text: "4/11" },
      { id: "D", text: "5/11" }
    ],
    answer: "C"
  },
  {
    id: 22,
    session: 1,
    block: "E — Control de calidad",
    prompt: "Un estudiante dice: “La probabilidad de al menos un defectuoso en dos selecciones es 2*(3/12)=1/2”. Evalua:",
    options: [
      { id: "A", text: "Correcta: en dos intentos se duplica la probabilidad." },
      { id: "B", text: "Incorrecta: sin reemplazo son dependientes y es mejor usar el complemento de ambos buenos." },
      { id: "C", text: "Correcta: 3/12 ya incluye las dos selecciones." },
      { id: "D", text: "Incorrecta: el resultado debe ser menor que 1/4." }
    ],
    answer: "B"
  },
  // Bloque F
  {
    id: 23,
    session: 1,
    block: "F — Parqueadero",
    prompt: "Tiempo total 60+30k minutos (k entero, k>=0). Costo P(k):",
    options: [
      { id: "A", text: "P(k)=5.000k+1.500" },
      { id: "B", text: "P(k)=1.500(60+30k)" },
      { id: "C", text: "P(k)=5.000+1.500k" },
      { id: "D", text: "P(k)=5.000+30k" }
    ],
    answer: "C"
  },
  {
    id: 24,
    session: 1,
    block: "F — Parqueadero",
    prompt: "Costo por 150 minutos:",
    options: [
      { id: "A", text: "$9.500" },
      { id: "B", text: "$8.000" },
      { id: "C", text: "$10.000" },
      { id: "D", text: "$11.500" }
    ],
    answer: "A"
  },
  {
    id: 25,
    session: 1,
    block: "F — Parqueadero",
    prompt: "Despues de la primera hora, el costo aumenta en:",
    options: [
      { id: "A", text: "$500 por minuto" },
      { id: "B", text: "$1.500 por hora" },
      { id: "C", text: "$5.000 por cada 30 minutos" },
      { id: "D", text: "$1.500 por cada 30 minutos" }
    ],
    answer: "D"
  },
  // Sesion 2 — Bloque G
  {
    id: 26,
    session: 2,
    block: "G — Plano de una habitacion",
    prompt: "Escala 1:50 significa:",
    options: [
      { id: "A", text: "1 cm real representa 50 cm en el plano." },
      { id: "B", text: "1 cm en el plano representa 50 cm reales." },
      { id: "C", text: "50 cm en el plano representan 1 cm real." },
      { id: "D", text: "1 m en el plano representa 50 cm reales." }
    ],
    answer: "B"
  },
  {
    id: 27,
    session: 2,
    block: "G — Plano de una habitacion",
    prompt: "Largo real (m) si en el plano mide 8 cm a escala 1:50:",
    options: [
      { id: "A", text: "0.4 m" },
      { id: "B", text: "2.0 m" },
      { id: "C", text: "4.0 m" },
      { id: "D", text: "8.0 m" }
    ],
    answer: "C"
  },
  {
    id: 28,
    session: 2,
    block: "G — Plano de una habitacion",
    prompt: "Ancho real (m) si en el plano mide 5 cm a escala 1:50:",
    options: [
      { id: "A", text: "0.25 m" },
      { id: "B", text: "2.5 m" },
      { id: "C", text: "5.0 m" },
      { id: "D", text: "25 m" }
    ],
    answer: "B"
  },
  {
    id: 29,
    session: 2,
    block: "G — Plano de una habitacion",
    prompt: "Un estudiante dice: “Si la escala pasa de 1:50 a 1:100, las longitudes se reducen a la mitad y las areas a la cuarta parte”. Evalua:",
    options: [
      { id: "A", text: "Correcta: reducir longitud a la mitad reduce area por el cuadrado del factor." },
      { id: "B", text: "Incorrecta: el area se reduce a la mitad, igual que las longitudes." },
      { id: "C", text: "Incorrecta: el cambio de escala no afecta areas." },
      { id: "D", text: "Correcta solo si la habitacion es cuadrada." }
    ],
    answer: "A"
  },
  {
    id: 30,
    session: 2,
    block: "G — Plano de una habitacion",
    prompt: "Area real de la habitacion (m2) con largo 4.0 m y ancho 2.5 m:",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "8" },
      { id: "C", text: "9" },
      { id: "D", text: "10" }
    ],
    answer: "D"
  },
  // Bloque H
  {
    id: 31,
    session: 2,
    block: "H — Ingresos por proyectos",
    prompt: "Ofertas: IX = 1.200.000 + 35.000p, IY = 1.450.000 + 25.000p. ¿Para que p son iguales?",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "24" },
      { id: "C", text: "25" },
      { id: "D", text: "30" }
    ],
    answer: "C"
  },
  {
    id: 32,
    session: 2,
    block: "H — Ingresos por proyectos",
    prompt: "En IX = 1.200.000 + 35.000p, 35.000 representa:",
    options: [
      { id: "A", text: "Ingreso fijo mensual en X." },
      { id: "B", text: "Pago adicional por cada proyecto en X." },
      { id: "C", text: "Numero minimo de proyectos." },
      { id: "D", text: "Total de proyectos posibles." }
    ],
    answer: "B"
  },
  {
    id: 33,
    session: 2,
    block: "H — Ingresos por proyectos",
    prompt: "Si p=10, ¿que oferta da mayor ingreso?",
    options: [
      { id: "A", text: "X" },
      { id: "B", text: "Y" },
      { id: "C", text: "Dan lo mismo" },
      { id: "D", text: "No se puede determinar" }
    ],
    answer: "B"
  },
  {
    id: 34,
    session: 2,
    block: "H — Ingresos por proyectos",
    prompt: "Si p=30, ¿que oferta da mayor ingreso?",
    options: [
      { id: "A", text: "X" },
      { id: "B", text: "Y" },
      { id: "C", text: "Dan lo mismo" },
      { id: "D", text: "No se puede determinar" }
    ],
    answer: "A"
  },
  {
    id: 35,
    session: 2,
    block: "H — Ingresos por proyectos",
    prompt: "Un estudiante dice: “Si se hacen mas de 25 proyectos, conviene X porque su pendiente es mayor”. Evalua:",
    options: [
      { id: "A", text: "Correcta: despues del cruce, la oferta con mayor pendiente crece mas rapido." },
      { id: "B", text: "Incorrecta: la oferta con mayor fijo siempre conviene." },
      { id: "C", text: "Correcta: 1.450.000 es menor que 1.200.000." },
      { id: "D", text: "Incorrecta: si p aumenta, ambas crecen igual." }
    ],
    answer: "A"
  },
  // Bloque I
  {
    id: 36,
    session: 2,
    block: "I — Diseno con mosaicos",
    prompt: "Secuencia de baldosas de borde: 8, 12, 16,... ¿como se obtiene?",
    options: [
      { id: "A", text: "Multiplicar por 2 cada termino." },
      { id: "B", text: "Sumar 2 cada vez." },
      { id: "C", text: "Sumar 4 cada vez." },
      { id: "D", text: "Restar 4 cada vez." }
    ],
    answer: "C"
  },
  {
    id: 37,
    session: 2,
    block: "I — Diseno con mosaicos",
    prompt: "Numero de baldosas de borde cuando n=5:",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "22" },
      { id: "C", text: "24" },
      { id: "D", text: "28" }
    ],
    answer: "C"
  },
  {
    id: 38,
    session: 2,
    block: "I — Diseno con mosaicos",
    prompt: "Expresion para el numero de baldosas de borde en funcion de n:",
    options: [
      { id: "A", text: "4n" },
      { id: "B", text: "4n+4" },
      { id: "C", text: "n^2+4" },
      { id: "D", text: "2n+4" }
    ],
    answer: "B"
  },
  {
    id: 39,
    session: 2,
    block: "I — Diseno con mosaicos",
    prompt: "Un estudiante propone B(n)=2n+6. ¿Que verificacion muestra que no coincide con el patron?",
    options: [
      { id: "A", text: "Para n=1, B(1)=8 y coincide." },
      { id: "B", text: "Para n=2, B(2)=10 pero el patron indica 12." },
      { id: "C", text: "Para n=3, B(3)=12 y coincide." },
      { id: "D", text: "Para n=4, B(4)=14 y coincide." }
    ],
    answer: "B"
  },
  {
    id: 40,
    session: 2,
    block: "I — Diseno con mosaicos",
    prompt: "Si el borde tiene 44 baldosas, ¿cual es n?",
    options: [
      { id: "A", text: "9" },
      { id: "B", text: "10" },
      { id: "C", text: "11" },
      { id: "D", text: "12" }
    ],
    answer: "B"
  },
  // Bloque J
  {
    id: 41,
    session: 2,
    block: "J — Entrenamiento y tiempo",
    prompt: "A mas horas de entrenamiento, el tiempo en 100 m tiende a ser menor. La correlacion es:",
    options: [
      { id: "A", text: "Positiva" },
      { id: "B", text: "Nula" },
      { id: "C", text: "Negativa" },
      { id: "D", text: "No se puede describir" }
    ],
    answer: "C"
  },
  {
    id: 42,
    session: 2,
    block: "J — Entrenamiento y tiempo",
    prompt: "Conclusion mas valida con la informacion dada:",
    options: [
      { id: "A", text: "Entrenar mas causa automaticamente mejores tiempos en todos los casos." },
      { id: "B", text: "Se observa una relacion, pero no basta para afirmar causalidad sin otras variables." },
      { id: "C", text: "Entrenar menos mejora el rendimiento porque evita cansancio." },
      { id: "D", text: "No existe ninguna relacion entre entrenamiento y tiempo." }
    ],
    answer: "B"
  },
  {
    id: 43,
    session: 2,
    block: "J — Entrenamiento y tiempo",
    prompt: "Tiempos (s): 13.1, 13.3, 13.4, 13.4, 13.6, 13.7, 13.8, 14.0, 15.2. La mediana es:",
    options: [
      { id: "A", text: "13.4" },
      { id: "B", text: "13.5" },
      { id: "C", text: "13.6" },
      { id: "D", text: "13.7" }
    ],
    answer: "C"
  },
  {
    id: 44,
    session: 2,
    block: "J — Entrenamiento y tiempo",
    prompt: "Para describir un tiempo tipico del grupo, ¿que medida es mas adecuada?",
    options: [
      { id: "A", text: "Maximo, porque muestra el peor desempeño." },
      { id: "B", text: "Media, porque no cambia con valores extremos." },
      { id: "C", text: "Mediana, porque un valor extremo como 15.2 afecta mas la media." },
      { id: "D", text: "Rango, porque es el tiempo mas frecuente." }
    ],
    answer: "C"
  },
  // Bloque K
  {
    id: 45,
    session: 2,
    block: "K — Claves alfanumericas",
    prompt: "Clave formato LLLDD (L letra A-Z, D digito 0-9). ¿Cuantas opciones hay para el primer caracter?",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "25" },
      { id: "C", text: "26" },
      { id: "D", text: "36" }
    ],
    answer: "C"
  },
  {
    id: 46,
    session: 2,
    block: "K — Claves alfanumericas",
    prompt: "¿Cuantas claves posibles hay si se permite repetir letras y digitos?",
    options: [
      { id: "A", text: "26^5" },
      { id: "B", text: "26^3 * 10^2" },
      { id: "C", text: "26^3 * 10 * 9" },
      { id: "D", text: "3! * 10^2" }
    ],
    answer: "B"
  },
  {
    id: 47,
    session: 2,
    block: "K — Claves alfanumericas",
    prompt: "Ahora los dos digitos finales deben ser distintos. Un estudiante dice: “Se corrige restando 10 al resultado anterior”. Evalua:",
    options: [
      { id: "A", text: "Correcta, porque hay 10 digitos y se elimina uno." },
      { id: "B", text: "Incorrecta: el conteo correcto es 26^3 * 10 * 9, no una resta simple." },
      { id: "C", text: "Correcta: la probabilidad cambia pero el conteo no." },
      { id: "D", text: "Incorrecta: ahora no se puede repetir ninguna letra." }
    ],
    answer: "B"
  },
  // Bloque L
  {
    id: 48,
    session: 2,
    block: "L — Funcion por casos",
    prompt: "g(x) = (x^2-9)/(x-3) si x!=3; g(3)=6. ¿Que afirma continuidad en x=3?",
    options: [
      { id: "A", text: "Para x!=3, (x^2-9)/(x-3)=x+3; al acercar x a 3 se obtiene 6, coincide con g(3)." },
      { id: "B", text: "Es continua porque g(3) esta definida; eso garantiza continuidad." },
      { id: "C", text: "Es continua porque 0/0 siempre se reemplaza por el valor definido." },
      { id: "D", text: "Es continua porque (x^2-9)/(x-3)=x-3 para todo x." }
    ],
    answer: "A"
  },
  {
    id: 49,
    session: 2,
    block: "L — Funcion por casos",
    prompt: "Para x!=3, (x^2-9)/(x-3) es equivalente a:",
    options: [
      { id: "A", text: "x-3" },
      { id: "B", text: "x+3" },
      { id: "C", text: "x^2-9" },
      { id: "D", text: "(x-3)/(x+3)" }
    ],
    answer: "B"
  },
  {
    id: 50,
    session: 2,
    block: "L — Funcion por casos",
    prompt: "Segun la definicion, g(3) es:",
    options: [
      { id: "A", text: "No existe" },
      { id: "B", text: "0" },
      { id: "C", text: "3" },
      { id: "D", text: "6" }
    ],
    answer: "D"
  }
];

export const quiz2AnswerKey = quiz2Questions.reduce((acc, q) => {
  acc[q.id] = q.answer;
  return acc;
}, {});
