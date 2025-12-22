
export const icfesData = {
    meta: {
        title: "Matemáticas Saber 11°: Matriz de Evaluación",
        version: "2024-2025",
        description: "Modelo Basado en Evidencias (MBE) para la prueba de Matemáticas."
    },
    competencies: [
        {
            id: "interpretacion",
            name: "Interpretación y Representación",
            percentage: "~34",
            color: "#8b5cf6",
            description: "Capacidad de comprender y transformar información cuantitativa y esquemática.",
            evidences: [
                "Leer datos explícitos de tablas, gráficos y diagramas.",
                "Transformar representaciones (Tabla → Gráfica, Texto → Símbolo).",
                "Comprender escalas, formatos y sistemas de coordenadas."
            ]
        },
        {
            id: "formulacion",
            name: "Formulación y Ejecución",
            percentage: "~43",
            color: "#10b981",
            description: "Habilidad para plantear y resolver problemas matemáticos.",
            evidences: [
                "Modelar situaciones con ecuaciones o funciones adecuades.",
                "Diseñar estrategias heurísticas para problemas complejos.",
                "Ejecutar algoritmos aritméticos y algebraicos sin errores.",
                "Validar resultados en el contexto real."
            ]
        },
        {
            id: "argumentacion",
            name: "Argumentación",
            percentage: "~23",
            color: "#f59e0b",
            description: "Capacidad de justificar propiedades y validar afirmaciones.",
            evidences: [
                "Validar o refutar afirmaciones propuestas.",
                "Usar contraejemplos para falsar generalizaciones.",
                "Justificar procedimientos conceptualmente.",
                "Detectar falacias lógicas."
            ]
        }
    ],
    components: {
        algebra: {
            id: "algebra",
            title: "Álgebra y Cálculo",
            subtitle: "Pensamiento Variacional y Sistemas Numéricos",
            icon: "Variable",
            topics: [
                {
                    category: "Números y Operaciones (Genérico)",
                    items: [
                        { id: "alg_1", text: "Conjuntos Numéricos (N, Z, Q, R) y sus propiedades.", type: "generico", level: 1 },
                        { id: "alg_2", text: "Jerarquía de operaciones (Paréntesis, Exponentes, Mult/Div, Suma/Resta).", type: "generico", level: 1 },
                        { id: "alg_3", text: "Operaciones con fracciones (Homogéneas y Heterogéneas) y decimales.", type: "generico", level: 2 },
                        { id: "alg_4", text: "Razones y Proporciones.", type: "generico", level: 2 },
                        { id: "alg_5", text: "Regla de tres simple (Directa e Inversa).", type: "generico", level: 2 },
                        { id: "alg_6", text: "Regla de tres compuesta.", type: "generico", level: 3 },
                        { id: "alg_7", text: "Porcentajes: Descuentos, IVA, Interés simple.", type: "generico", level: 2 },
                        { id: "alg_8", text: "Aumentos sucesivos (Ej. +10% y luego -10%).", type: "generico", level: 3 },
                        { id: "alg_9", text: "MCM y MCD, Números primos y descomposición factorial.", type: "generico", level: 2 },
                        { id: "alg_10", text: "Notación Científica: Operaciones y conversión.", type: "generico", level: 2 },
                        { id: "alg_ext_1", text: "Relaciones Lineales: Tasas de interés simple y cambio de divisas.", type: "generico", level: 2 },
                        { id: "alg_ext_2", text: "Velocidad constante como tasa de cambio lineal.", type: "generico", level: 2 }
                    ]
                },
                {
                    category: "Álgebra y Funciones",
                    items: [
                        { id: "alg_11", text: "Lenguaje simbólico y Expresiones Algebraicas.", type: "no-generico", level: 2 },
                        { id: "alg_12", text: "Operaciones con Polinomios.", type: "no-generico", level: 2 },
                        { id: "alg_13", text: "Productos Notables (Binomio al cuadrado, Diferencia cuadrados).", type: "no-generico", level: 3 },
                        { id: "alg_14", text: "Factorización (Trinomios, Factor común).", type: "no-generico", level: 3 },
                        { id: "alg_15", text: "Ecuaciones Lineales de una incógnita.", type: "generico", level: 2 },
                        { id: "alg_16", text: "Sistemas de Ecuaciones 2x2 (Sustitución, Igualación, Reducción).", type: "no-generico", level: 3 },
                        { id: "alg_17", text: "Interpretación geométrica de sistemas 2x2 (Cruce de rectas).", type: "no-generico", level: 3 },
                        { id: "alg_18", text: "Ecuaciones Cuadráticas (Fórmula general).", type: "no-generico", level: 3 },
                        { id: "alg_19", text: "El Discriminante y número de soluciones reales.", type: "no-generico", level: 4 },
                        { id: "alg_20", text: "Inecuaciones Lineales y Cuadráticas (Intervalos).", type: "no-generico", level: 3 },
                        { id: "alg_21", text: "Concepto de Función: Dominio, Rango, Imagen.", type: "no-generico", level: 3 },
                        { id: "alg_22", text: "Función Lineal: Pendiente (m) como razón de cambio.", type: "generico", level: 3 },
                        { id: "alg_23", text: "Rectas Paralelas y Perpendiculares.", type: "no-generico", level: 3 },
                        { id: "alg_24", text: "Función Cuadrática: Vértice, Eje de simetría, Concavidad.", type: "no-generico", level: 3 },
                        { id: "alg_25", text: "Función Exponencial (Crecimiento poblacional).", type: "no-generico", level: 4 },
                        { id: "alg_26", text: "Función Logarítmica y su relación inversa.", type: "no-generico", level: 4 },
                        { id: "alg_27", text: "Propiedades de los Logaritmos.", type: "no-generico", level: 4 },
                        { id: "alg_28", text: "Funciones a Trozos (Interpretación gráfica).", type: "no-generico", level: 3 },
                        { id: "alg_29", text: "Sucesiones Aritméticas y Geométricas.", type: "no-generico", level: 3 },
                        { id: "alg_ext_3", text: "Análisis de Funciones: Asíntotas, Periodicidad y Puntos de Corte.", type: "no-generico", level: 4 }
                    ]
                },
                {
                    category: "Cálculo (Concepto Variacional)",
                    items: [
                        { id: "alg_30", text: "Límites: Concepto intuitivo y tendencia (comportamiento al infinito).", type: "no-generico", level: 3 },
                        { id: "alg_31", text: "Continuidad de funciones (Lectura gráfica).", type: "no-generico", level: 3 },
                        { id: "alg_32", text: "Razón de Cambio Promedio (Pendiente de la secante).", type: "no-generico", level: 4 },
                        { id: "alg_33", text: "Razón de Cambio Instantánea (Velocidad, Aceleración - Concepto).", type: "no-generico", level: 4 },
                        { id: "alg_34", text: "Interpretación de la pendiente en gráficas de movimiento.", type: "no-generico", level: 4 },
                        { id: "alg_35", text: "Acumulación de Cambio (Área bajo la curva - Concepto).", type: "no-generico", level: 4 }
                    ]
                }
            ]
        },
        geometry: {
            id: "geometry",
            title: "Geometría",
            subtitle: "Pensamiento Espacial y Métrico",
            icon: "Shapes",
            topics: [
                {
                    category: "Geometría Euclidiana",
                    items: [
                        { id: "geo_1", text: "Elementos básicos: Puntos, rectas, segmentos, ángulos.", type: "generico", level: 1 },
                        { id: "geo_2", text: "Tipos de Triángulos (Lados y Ángulos).", type: "generico", level: 1 },
                        { id: "geo_3", text: "Suma de ángulos internos (180°).", type: "generico", level: 2 },
                        { id: "geo_4", text: "Teorema de Pitágoras (2D y 3D).", type: "generico", level: 3 },
                        { id: "geo_5", text: "Teorema de Tales (Proporcionalidad).", type: "no-generico", level: 3 },
                        { id: "geo_6", text: "Semejanza y Congruencia de triángulos.", type: "no-generico", level: 3 },
                        { id: "geo_7", text: "Desigualdad Triangular.", type: "no-generico", level: 3 },
                        { id: "geo_8", text: "Áreas y Perímetros: Cuadrados, Rectángulos, Triángulos.", type: "generico", level: 2 },
                        { id: "geo_9", text: "Círculo: Radio, Diámetro, Área, Perímetro.", type: "generico", level: 2 },
                        { id: "geo_10", text: "Volumen de Prismas y Cilindros.", type: "generico", level: 3 },
                        { id: "geo_11", text: "Área superficial y desarrollos planos.", type: "generico", level: 3 },
                        { id: "geo_12", text: "Transformaciones: Traslación, Rotación, Reflexión.", type: "generico", level: 3 },
                        { id: "geo_13", text: "Homotecia (Ampliación/Reducción).", type: "no-generico", level: 3 }
                    ]
                },
                {
                    category: "Geometría Analítica y Trigonometría",
                    items: [
                        { id: "geo_14", text: "Plano Cartesiano: Distancia y Punto Medio.", type: "generico", level: 2 },
                        { id: "geo_15", text: "Ecuación de la Circunferencia.", type: "no-generico", level: 3 },
                        { id: "geo_16", text: "Razones Trigonométricas (Seno, Coseno, Tangente).", type: "no-generico", level: 3 },
                        { id: "geo_17", text: "Ángulos Notables (30°, 45°, 60°).", type: "no-generico", level: 3 },
                        { id: "geo_18", text: "Ley del Seno.", type: "no-generico", level: 4 },
                        { id: "geo_19", text: "Ley del Coseno.", type: "no-generico", level: 4 },
                        { id: "geo_20", text: "Identidad Pitagórica Fundamental.", type: "no-generico", level: 4 },
                        { id: "geo_21", text: "Gráficas de funciones trigonométricas (Periodo, Amplitud).", type: "no-generico", level: 4 },
                        { id: "geo_ext_1", text: "Sistemas de Coordenadas: Polares (Radio y Ángulo).", type: "no-generico", level: 4 },
                        { id: "geo_ext_2", text: "Coordenadas Tridimensionales (x, y, z).", type: "no-generico", level: 4 }
                    ]
                }
            ]
        },
        statistics: {
            id: "statistics",
            title: "Estadística",
            subtitle: "Pensamiento Aleatorio",
            icon: "ChartPie",
            topics: [
                {
                    category: "Estadística Descriptiva",
                    items: [
                        { id: "est_1", text: "Interpretación de Gráficos (Barras, Circulares, Líneas).", type: "generico", level: 1 },
                        { id: "est_2", text: "Histogramas y Polígonos de Frecuencia.", type: "generico", level: 2 },
                        { id: "est_3", text: "Diagramas de Caja y Bigotes (Box-plot).", type: "no-generico", level: 3 },
                        { id: "est_4", text: "Tablas de Frecuencia (Absoluta, Relativa, Acumulada).", type: "generico", level: 2 },
                        { id: "est_5", text: "Media (Promedio) simple y ponderado.", type: "generico", level: 2 },
                        { id: "est_6", text: "Mediana y Moda.", type: "generico", level: 2 },
                        { id: "est_7", text: "Rango y Desviación Estándar (Concepto).", type: "no-generico", level: 3 },
                        { id: "est_8", text: "Medidas de Posición: Cuartiles, Percentiles.", type: "no-generico", level: 3 },
                        { id: "est_ext_1", text: "Teoría de Conjuntos: Unión, Intersección, Contenencia.", type: "generico", level: 2 },
                        { id: "est_ext_2", text: "Población vs Muestra (Diferencias conceptuales).", type: "generico", level: 2 }
                    ]
                },
                {
                    category: "Probabilidad y Conteo",
                    items: [
                        { id: "est_9", text: "Principio Multiplicativo y Aditivo.", type: "generico", level: 2 },
                        { id: "est_10", text: "Permutaciones (Orden importa).", type: "no-generico", level: 4 },
                        { id: "est_11", text: "Combinaciones (Orden no importa).", type: "no-generico", level: 4 },
                        { id: "est_12", text: "Probabilidad Simple (Laplace).", type: "generico", level: 2 },
                        { id: "est_13", text: "Unión e Intersección de eventos.", type: "no-generico", level: 3 },
                        { id: "est_14", text: "Eventos Independientes vs Dependientes.", type: "no-generico", level: 3 },
                        { id: "est_15", text: "Probabilidad Condicional.", type: "no-generico", level: 4 },
                        { id: "est_ext_3", text: "Correlación (Relación entre variables).", type: "no-generico", level: 4 },
                        { id: "est_ext_4", text: "Estimación del error.", type: "no-generico", level: 4 }
                    ]
                }
            ]
        }
    },
    performanceLevels: [
        { level: 1, range: "0-35", description: "Lectura Literal", evidence: "Información explícita, reconocimiento visual simple." },
        { level: 2, range: "36-50", description: "Comparación y Algoritmo Simple", evidence: "Operaciones básicas, comparación directa, promedio simple." },
        { level: 3, range: "51-70", description: "Inferencia y Relación", evidence: "Selección de gráficas, medidas de dispersión, Teorema de Tales/Pitágoras, Argumentación básica." },
        { level: 4, range: "71-100", description: "Modelación y Abstracción", evidence: "Probabilidad Condicional, Funciones complejas, Derivadas conceptuales, Argumentación formal." }
    ]
};
