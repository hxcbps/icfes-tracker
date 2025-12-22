export const modules = [
  {
    id: 'num-var',
    title: 'Componente numérico–variacional',
    objective: 'Dominar tarifas por tramos, puntos de equilibrio de funciones lineales, patrones y conteo usando regla del producto.',
    items: [
      {
        context: 'Transporte (Sim. 1)',
        subtopic: 'Reglas con estado (ventanas de 120 min). Validar reinicios: si t_i - t0 > 120 entonces RESET y t0 = t_i.',
        trap: 'Contar validaciones acumuladas en el día e ignorar el reinicio de la ventana.',
        antidote: 'Dibuja línea de tiempo: marca t0 (1ra validación) y para cada t_i verifica t_i - t0 <= 120; si no, escribe RESET.'
      },
      {
        context: 'Agua (Sim. 2) / Mensajería (Sim. 1) / Parqueadero (Sim. 2)',
        subtopic: 'Función a trozos (umbral). Forma: base + tarifa1*U + tarifa2*(x-U) cuando x > U.',
        trap: 'Cobrar tarifa alta a todo el consumo, no solo al excedente.',
        antidote: 'Calcula primero el exceso (x-U) y multiplícalo por la tarifa2. Deja escrito (x-U) para no olvidarlo.'
      },
      {
        context: 'Cafetería (Sim. 2)',
        subtopic: 'Sistemas 2x2 con variables s (sándwich) y j (jugo). Interpretar ecuaciones.',
        trap: 'Signos incorrectos o permutar variables al plantear.',
        antidote: 'Prueba rápida: sustituye opciones en las dos ecuaciones. Formal: eliminación/sustitución cuando no hay opción directa.'
      },
      {
        context: 'Planes de datos (Sim. 1) / Ingresos (Sim. 2)',
        subtopic: 'Igualación de funciones lineales para hallar el punto de equilibrio. Pendiente = costo/pago por unidad; intercepto = fijo.',
        trap: 'Confundir pendiente con fijo o leer mal el cruce.',
        antidote: 'Subraya “fijo” y “por cada”. Iguala y verifica reemplazando el valor hallado en ambas expresiones.'
      },
      {
        context: 'Patrones (fichas / mosaicos)',
        subtopic: 'Secuencias y verificación por sustitución.',
        trap: 'Aceptar fórmulas “bonitas” sin probar.',
        antidote: 'Prueba n=1 y n=2 en la fórmula propuesta; si falla, descártala.'
      },
      {
        context: 'Claves (Sim. 1 y 2)',
        subtopic: 'Conteo con regla del producto. Con repetición: potencias; sin repetición: opciones decrecientes.',
        trap: 'Sumar en vez de multiplicar o usar factorial donde no aplica.',
        antidote: 'Método de casillas (_ _ _ _): pon opciones por casilla. Sin repetir: 10,9,8,7; LLLDD con dígitos distintos: 26^3 * 10 * 9.'
      }
    ],
    lessons: [
      {
        title: 'Lección maestra: Aritmética en contexto (Parte 1)',
        body: `Nivel: básico -> avanzado (ICFES)
Tema: Unidades, conversiones, porcentajes y dinero.

Introducción
- El fallo típico no es multiplicar mal, sino mezclar unidades. Ej: precio por gramo, compra en kilos.

Módulo 1: Sistema métrico
- Prefijos: kilo=1000, centi=1/100, mili=1/1000.
- Regla de oro: de grande a pequeño multiplicas; de pequeño a grande divides. El tiempo va de 60 en 60.
- Mini-quiz 1:
  1) 5 L -> mL? A)50 B)500 C)5000 D)0.005
  2) 400 cm -> m? A)0.4 B)4 C)40 D)4000
  3) 120 min -> horas? A)1.2 B)1.5 C)2 D)12

Módulo 2: Porcentajes
- % significa dividido por 100. Usa decimal: 10% =0.1, 25%=0.25, 5%=0.05, 100%=1.
- Palabra "de" es multiplicación. Ej: 25% de 400 -> 0.25*400.
- Porcentajes mentales: 50% (divide entre 2), 25% (entre 4), 10% (quita un cero), 20% (10% y duplica).
- Mini-quiz 2:
  4) Camiseta $50.000 con 20% desc: ¿descuento? A)5k B)8k C)10k D)20k
  5) 40 estudiantes, 25% mujeres: ¿cuántas? A)10 B)15 C)20 D)25
  6) Precio 100, sube 10%, luego baja 10% del nuevo precio: ¿final? A)100 B)99 C)90 D)110

Módulo 3: Dinero y proporcionalidad
- Fórmula general: Total = Precio unitario * Cantidad (mismas unidades).
- Promedio: suma dividido entre cantidad.
- Comparar ofertas: iguala cantidades antes de decidir.
- Mini-quiz 3:
  7) 3 bolsas de 500g a $4.000 c/u: costo total y peso total? A)12k y 1000g B)12k y 1500g C)4k y 1500g D)12k y 15000g
  8) Paquete 6 jugos cuesta $12.000: precio unitario? A)500 B)1000 C)2000 D)3000

Soluciones parte 1:
 1)C 2)B 3)C 4)C 5)A 6)B 7)B 8)C.

Ejercicio final (integración):
- Paredes: 4 paredes, 300 cm de ancho (3 m de alto). Caneca cubre 50 m2, cuesta 100k, promo 2x3. Pregunta 1: área total paredes. Pregunta 2: costo mínimo para cubrir 120 m2.
Solución: P1 ancho 3 m, alto 3 m -> 9 m2 por pared -> 36 m2 total (opción A). Para 120 m2 necesitas 3 canecas (150 m2 de cobertura), pagas 2 por la promo: $200.000 (opción B).

Entrenamiento rápido:
- Reto supermercado: calcula precio por gramo/mL.
- Reto IVA: divide precio entre 1.19 para saber base e impuesto.`
      },
      {
        title: 'Lección maestra: Aritmética en contexto (Parte 2, nivel pro)',
        body: `Enfoque: porcentajes inversos, cambios compuestos y promedios ponderados.

Módulo 4: Porcentaje inverso
- Precio final = base * (1 + r). Para quitar IVA 19%: divide por 1.19.
- Mini-quiz 4: Rebaja deja un artículo en 80.000 con 20% aplicado. Precio original? (Pista: 80k = 0.8 del original).

Módulo 5: Cambios compuestos
- Usa base 100 cuando no hay valor inicial. Subir 50% y bajar 50% no deja igual.
- Mini-quiz 5: Crece 10% cada hora, inicia en 100. ¿Cuántas tras 2 horas? (No sumes porcentajes, aplica sucesivo).

Módulo 6: Promedios ponderados
- No promediar promedios. Usa bolsa total: suma de valores sobre total de elementos.
- Mini-quiz 6: 10 gerentes ganan 5M c/u, 90 obreros 1M c/u. ¿Promedio salarial?

Módulo 7: Lectura de tablas
- Revisa escala: “en miles” o “en millones”. Convierte antes de operar.

Soluciones parte 2:
- Inverso: precio original = 100.000.
- Cambios sucesivos: 121 (crece 10% y 10%).
- Ponderado salarios: 1.4M (se acerca a la mayoría).

Jefe final (unidades + porcentajes + comparación):
- Carro Eco: 15 km/L -> 60 km/galón (4 L). Carro Turbo: 40 km/galón. Viaje 600 km. Galones: Eco 10, Turbo 15. Costo Eco = 10*precioGalón; Turbo = 15*precioGalón. Ahorro: 5*precioGalón. Respuesta: el Eco ahorra esa cantidad (opción B si precio galón = 20k, ahorro 100k).`
      },
      {
        title: 'Lección maestra: Modelación lineal (Tema 2 y 2-B)',
        body: `Objetivo: dominar y = b + mx, traducir textos a ecuaciones, decidir entre planes, leer gráficas/tablas, manejar pendientes negativas.

Módulo 1: Anatomía de la fórmula
- Taxi mental: b = costo fijo (banderazo), m = costo por unidad (km, GB, hora).
- Diccionario: b = "cargo básico", "cuota de manejo", "inscripción"; m = "por cada", "adicional", "por hora", "por unidad"; x = variable independiente (minutos, GB, proyectos); y = resultado (costo total).
- Mini-quiz 1 (traducción):
  1) Gimnasio cobra inscripción I y mensualidad M. Costo C(meses): respuesta correcta: C = I + M*m (b = I, m = M).
  2) Tanque con 5 L inicial y llena 2 L/min: V(t) = 5 + 2t.

Módulo 2: Guerra de planes (igualación)
- Dos planes: A: bA + mA*x, B: bB + mB*x.
- Punto de equilibrio: bA + mA*x = bB + mB*x -> x = (bB - bA)/(mA - mB).
- Regla de extremos: antes del cruce gana el menor fijo; después del cruce gana la menor pendiente.
- Mini-quiz 2:
  3) Con equilibrio en 6 GB, consumo 10 GB: elijo el plan con menor pendiente (Plan A).
  4) Gráfica que arranca en origen y sube rápido: b=0 (sin fijo), pendiente alta. Línea que arranca arriba y sube lento: fijo alto, pendiente baja.

Módulo 3: Estrategia de decisión
- Para bajo consumo: importa b (elige menor fijo).
- Para alto consumo: importa m (elige menor pendiente).
- Trampa: no olvides sumar el fijo al comparar.

Módulo 4: Trampas comunes
- Pregunta con y vs x: si te dan GB y piden costo, sustituyes x y sacas y; si te dan costo y piden GB, sustituyes y y despejas x.
- No olvidar el fijo: costo total = fijo + variable*consumo.

Módulo 5: Lectura de gráficas (Parte 2-B)
- Intercepto b: donde la línea corta el eje Y; si pasa por (0,0) no hay fijo.
- Pendiente m: inclinación. Subida empinada = m alto; subida suave = m bajo; horizontal = m = 0 (tarifa plana).

Módulo 6: Pendiente negativa (cuando baja)
- Fórmula: y = b + m x con m < 0 para consumos o depreciación.
- Palabras clave: se consume, se vacía, desciende, se deprecia.
- Ejemplo: saldo 100k, gasto 5k/min: S(t) = 100000 - 5000 t. Se acaba cuando S=0 -> t=20 min.

Módulo 7: De tabla a ecuación
- Paso 1: pendiente m es el salto constante entre filas.
- Paso 2: fijo b es el valor en x=0; si la tabla inicia en x=1, retrocede un paso: b = y1 - m*1.
- Ejemplo tabla: (1,5000), (2,8000), (3,11000): m=3000, b=2000, ecuación y = 2000 + 3000x.

Mini-quiz profundización:
 1) Gráfica que empieza arriba y baja hasta eje X: piscina vaciándose (pendiente negativa).
 2) Tabla Mes1=60, Mes2=60, Mes3=60: pendiente 0, función constante y=60 (respuesta C).
 3) Máquina 10M, pierde 1M/año: se agota en 10 años (respuesta C).

Jefe final modelación:
- Dos sustancias: A inicia 20 y sube 5 por minuto -> T_A = 20 + 5t. B inicia 80 y baja 5 por minuto -> T_B = 80 - 5t. Igualando: 20+5t = 80-5t -> 10t=60 -> t=6. Coinciden en minuto 6.

Tarea práctica:
- Dibuja dos líneas: una que sube desde 20 y otra que baja desde 100; marca el punto de cruce como equilibrio. O toma un recibo de servicios y escribe la ecuación: C = fijo + tarifa*kWh.`
      },
      {
        title: 'Lección maestra: Funciones a trozos (Tema 3 y 3-B)',
        body: `Objetivo: calcular costos cuando cambian las reglas (umbral) y resolver al revés cuando te dan el total. Contexto: agua/luz, parqueaderos, envíos, impuestos.

Módulo 1: Lógica del umbral (palo de hockey)
- Antes del límite: zona segura. En el umbral cambian reglas. Después: cobro extra por exceso.
- Analogía del balde: los primeros litros los pagas con tarifa base; el exceso se cobra aparte.

Módulo 2: Algoritmo del exceso (paso a paso)
1) Identifica el umbral U. 2) Calcula exceso: x-U si x>U. 3) Cobra por partes: base + tarifa_exceso*(exceso). 4) Suma.
- Mini-quiz 1:
  1) Parqueadero 5k la primera hora, 2k hora extra. 4 horas -> responde con base+exceso.
  2) Plan datos 2 GB por 10k, extra 3k/GB. Consumo 5 GB.

Módulo 3: Fórmula a trozos
- Estructura: y = { base si x<=U ; base + tarifa*(x-U) si x>U }.
- Paréntesis (x-U) indica “cobra solo el exceso”.
- Mini-quiz 2:
  3) Agua: hasta 20 m3 cobra 5000; extra 1000 por m3. ¿Cuál fórmula? Respuesta: base + 1000*(x-20) para x>20.

Módulo 4: Gráficas
- Primer tramo: plano o suave. Quiebre en el umbral. Segundo tramo: más empinado. Pista visual: “codo” de la gráfica.

Soluciones parciales:
- Mini-quiz 1: (1) B: 5k + 3*2k = 11k. (2) C: 10k + 3*3k = 19k.
- Mini-quiz 2: correcta la que usa (x-20) en el tramo extra.

Jefe final (a trozos vs lineal simple):
- Tarifa Económica: base 8k hasta 3 kg, extra 4k/kg; Tarifa Plana: 3k/kg. Para 6 kg: Económica 20k, Plana 18k. Conviene Plana, ahorro 2k (opción A).

Parte 3-B: Inverso y escalonadas
- Algoritmo inverso (de dinero a consumo): Total -> resta base -> divide por tarifa extra -> suma el umbral.
- Mini-quiz inverso: plan de 200 min por 10k, extra 100/min. Factura 15k: exceso dinero 5k -> 50 min extra -> total 250 min.
- Función escalera (hora o fracción): redondea hacia arriba. 2h59 paga 3 horas; 3h01 paga 4 horas.
- Mini-quiz escalera: parqueadero 4k/h. A: 2h59 -> 12k; B: 3h01 -> 16k.
- Lectura de gráficas complejas: distingue lineal simple, trozos (palo de hockey), escalonada (escaleras), tope máximo (sube y luego se vuelve horizontal).
- Jefe final gráfico: cargo fijo 10k, 200/kWh hasta 100, luego 500/kWh. Gráfica correcta: empieza en 10k, sube suave hasta 100, se quiebra y sube más empinada (no escalera, no una sola recta).`
      },
      {
        title: 'Lección maestra: Lógica algorítmica (Ventanas de tiempo, Tema 4 y 4-B)',
        body: `Objetivo: dominar reglas dependientes del tiempo/estado (ventanas fijas), decidir si esperar o pagar, y manejar frecuencia/MCM y formatos de hora.

Tema 4-A: Ventanas de tiempo (transporte)
- Ventana fija de 120 min: el cronómetro arranca en la 1ra validación; todo se compara contra la 1ra, no contra la última.
- Método de la hora límite: toma la hora inicial y suma 2 horas; todo antes o igual es “dentro”, después es RESET.
- Algoritmo de reset (Sim 1): 1ra paga pleno, 2da=0, 3ra=mitad si está en ventana; si vence, se reinicia y la siguiente es nueva 1ra.
- Mini-quiz 1 (límites): suma 2h a 06:40, 08:55, 11:10 -> 08:40, 10:55, 13:10.
- Mini-quiz 2 (costos): ventana 120 min, tarifas 1ra=2000, 2da=0, 3ra=1000. Validaciones 8:00, 9:50, 10:10 -> total 4000 (reset en la última).
- Regla del minuto 120: suele ser inclusivo (“dentro”), 121 es fuera.

Tema 4-B: Optimización y frecuencia (profundización)
- Decisión de esperar vs pagar: compara hora actual, hora de ventana barata, tiempo de viaje y compromisos.
- Mini-quiz decisión: Hora valle 9:00-16:00; llegar 3:55 PM -> entra ya, sigue siendo valle.
- Ventana de transbordo + frecuencias: calcula hora fin de diligencia y alinea con buses; cuida el límite.
- Frecuencia y encuentros: usa MCM de tiempos. Ej: 6h y 4h -> MCM 12h; si coinciden a las 8:00 AM, próxima coincidencia 8:00 PM.
- Formato de hora: pasa a 24h para evitar restas absurdas; sumar minutos que cruzan la hora: rellena hasta la siguiente hora y sigue.

Jefes finales:
- Ventana múltiple con topes de transbordo: si se vence por tiempo o por número de transbordos, reinicia y cobra pleno.
- Logística total (dos buses, límite 60 min para transbordo): cronograma 07:15 pago Bus1, viaje 40 min, caminata 10 min, buses cada 15 min; valida 08:05, límite 08:15 -> transbordo aplica; total = 2.500 + 0.

Tarea de cierre num-var: resolver en Simulacro 1 los ítems de transporte (1-4) y mensajería (23-25) aplicando ventanas, umbrales y lineales.`
      }
    ]
  },
  {
    id: 'geo-metr',
    title: 'Componente geométrico–métrico',
    objective: 'Interpretar pendiente, distancias y escalas, evitando errores de signo y de factor de área.',
    items: [
      {
        context: 'Parque (Sim. 1) / Barrio (Sim. 2)',
        subtopic: 'Pendiente m = Delta y / Delta x. Horizontal: m=0. Vertical: no existe. Misma y: horizontal. Misma x: vertical.',
        trap: 'Decidir el signo “a ojo” sin revisar Delta x.',
        antidote: 'Calcula siempre Delta y / Delta x; si Delta x < 0, controla el signo.'
      },
      {
        context: 'Distancias (parque/barrio)',
        subtopic: 'Distancia euclidiana d = sqrt((Delta x)^2 + (Delta y)^2).',
        trap: 'Sumar diferencias sin cuadrar o perder la raíz.',
        antidote: 'Identifica catetos (|Delta x|, |Delta y|), aplica Pitágoras y conserva la raíz si no piden decimal.'
      },
      {
        context: 'Escalas (lote/habitación)',
        subtopic: 'Escala lineal 1:n. Para áreas, factor k^2 cuando las longitudes cambian por k.',
        trap: 'Pensar que reducir a la mitad la longitud reduce a la mitad el área (debe ser a la cuarta parte).',
        antidote: 'Convierte a metros reales antes de calcular área. Si el factor lineal es k, área cambia por k^2.'
      }
    ]
  },
  {
    id: 'aleatorio',
    title: 'Componente aleatorio (estadística y probabilidad)',
    objective: 'Elegir la medida de tendencia adecuada y manejar eventos dependientes usando complemento.',
    items: [
      {
        context: 'Estudio / Sueño / Puntajes',
        subtopic: 'Media vs mediana: la media es sensible a atípicos; la mediana es robusta.',
        trap: 'Usar la media “por defecto” cuando hay extremos.',
        antidote: 'Si ves un extremo, prioriza mediana para “típico/centro” y justifica por sensibilidad a extremos.'
      },
      {
        context: 'Dulces / Bombillos',
        subtopic: 'Probabilidad sin reemplazo (eventos dependientes). El denominador cambia en la segunda extracción.',
        trap: 'Tratar “sin reemplazo” como si fuera “con reemplazo”.',
        antidote: 'Piensa en “saqué uno y no vuelve”: total baja en 1; favorables cambian según lo extraído.'
      },
      {
        context: 'Ítems de “al menos uno”',
        subtopic: 'Uso del complemento: P(>=1) = 1 - P(0).',
        trap: 'Enumerar casos uno a uno.',
        antidote: 'Calcula primero P(0) (ej. ambos buenos) y resta a 1.'
      }
    ]
  },
  {
    id: 'continuidad',
    title: 'Tema transversal: continuidad / límite básico',
    objective: 'Reconocer discontinuidad evitable mediante factorización y comparación con el valor definido.',
    items: [
      {
        context: 'Ítems 48–50',
        subtopic: 'Factorización (x^2 - a^2 = (x-a)(x+a)). Simplificar y comparar el límite con el valor definido.',
        trap: 'Concluir “no existe” al ver 0/0 sin simplificar.',
        antidote: 'Factoriza, cancela (x-a) (x!=a), evalúa el límite en a y verifica que coincide con el valor asignado.'
      }
    ]
  }
];
