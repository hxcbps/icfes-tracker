
export const syllabus = [
    {
        id: 'fase0',
        title: 'Fase 0: Lanzamiento 🚀',
        description: 'Calibración de instrumentos y diagnóstico inicial.',
        weeks: [
            {
                id: 'w0',
                title: 'Semana de Diagnóstico',
                tasks: [
                    { id: 't0_1', title: 'Descargar Cuadernillo 2021', type: 'resource', points: 10 },
                    { id: 't0_2', title: 'Simulacro Diagnóstico (30 preguntas)', type: 'action', points: 50 },
                    { id: 't0_3', title: 'Análisis de Errores (Bitácora)', type: 'reflection', points: 30 },
                    { id: 't0_4', title: 'Crear Bitácora Física', type: 'setup', points: 10 }
                ]
            }
        ]
    },
    {
        id: 'fase1',
        title: 'Fase 1: Fundamentos 🧱',
        description: 'Dominando el lenguaje de los datos y la aritmética básica.',
        weeks: [
            {
                id: 'w1',
                title: 'Semana 1: Aritmética Visual',
                tasks: [
                    { id: 't1_1', title: 'Video: Regla de Tres (Profe Alex)', type: 'interpretacion', points: 20 },
                    { id: 't1_2', title: '10 Ejercicios de Porcentajes', type: 'formulacion', points: 30 },
                    { id: 't1_3', title: 'Lectura de Infografía DANE', type: 'interpretacion', points: 25 },
                    { id: 't1_4', title: 'Mini-Simulacro: Tablas', type: 'action', points: 40 }
                ]
            },
            {
                id: 'w2',
                title: 'Semana 2: Estadística Descriptiva',
                tasks: [
                    { id: 't2_1', title: 'Video: Media, Mediana, Moda', type: 'interpretacion', points: 20 },
                    { id: 't2_2', title: 'Cálculo de Promedios Ponderados', type: 'formulacion', points: 30 },
                    { id: 't2_3', title: 'Argumentación: ¿Cuándo usar la Mediana?', type: 'argumentacion', points: 40 },
                    { id: 't2_4', title: 'Auditoría de Errores Semanal', type: 'reflection', points: 20 }
                ]
            },
            {
                id: 'w3',
                title: 'Semana 3: Geometría del Espacio',
                tasks: [
                    { id: 't3_1', title: 'Video: Áreas y Perímetros', type: 'interpretacion', points: 20 },
                    { id: 't3_2', title: 'Problema del Baldosín (Formulación)', type: 'formulacion', points: 35 },
                    { id: 't3_3', title: 'Ejercicio: Calcular Área de tu Sala', type: 'action', points: 30 }
                ]
            },
            {
                id: 'w4',
                title: 'Semana 4: El Lenguaje Álgebraico',
                tasks: [
                    { id: 't4_1', title: 'Video: Traduciendo Español a Álgebra', type: 'interpretacion', points: 20 },
                    { id: 't4_2', title: 'Ecuaciones Lineales Simples', type: 'formulacion', points: 30 },
                    { id: 't4_3', title: 'Uso de Photomath como Tutor', type: 'tool', points: 15 },
                    { id: 't4_4', title: 'Simulacro Mensual (20 preguntas)', type: 'action', points: 100 }
                ]
            }
        ]
    },
    {
        id: 'fase2',
        title: 'Fase 2: Profundización 🌊',
        description: 'Entrando en aguas profundas: Funciones y Probabilidad.',
        weeks: [
            {
                id: 'w5',
                title: 'Semana 5: Funciones Lineales',
                tasks: [
                    { id: 't5_1', title: 'Graficar y=mx+b en GeoGebra', type: 'tool', points: 20 },
                    { id: 't5_2', title: 'Problemas de Costo Lineal', type: 'formulacion', points: 35 }
                ]
            },
            // ... more weeks can be added here
        ]
    }
];

export const resources = [
    {
        id: 'r1',
        title: 'Cuadernillos ICFES Oficiales',
        type: 'pdf',
        url: 'https://www.icfes.gov.co',
        tags: ['Oficial', 'Banco de Preguntas']
    },
    {
        id: 'r2',
        title: 'Khan Academy: Preálgebra',
        type: 'course',
        url: 'https://es.khanacademy.org/math/pre-algebra',
        tags: ['Interactivo', 'Fundamentos']
    },
    {
        id: 'r3',
        title: 'Matemáticas Profe Alex',
        type: 'youtube',
        url: 'https://www.youtube.com/c/MatematicasprofeAlex',
        tags: ['Video', 'Explicación Clara']
    },
    {
        id: 'r4',
        title: 'Julioprofe',
        type: 'youtube',
        url: 'https://www.youtube.com/user/julioprofe',
        tags: ['Video', 'Avanzado']
    },
    {
        id: 'r5',
        title: 'ThatQuiz',
        type: 'practice',
        url: 'https://www.thatquiz.org/es/',
        tags: ['Velocidad', 'Cálculo Mental']
    },
    {
        id: 'r6',
        title: 'GeoGebra Calculator',
        type: 'tool',
        url: 'https://www.geogebra.org/calculator',
        tags: ['Visualización', 'Gráficas']
    }
];
