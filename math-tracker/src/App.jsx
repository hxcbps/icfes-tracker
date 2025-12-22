
import React, { useState, useEffect } from 'react';
import {
  Rocket,
  Map as MapIcon,
  BookOpen,
  Trophy,
  AlertTriangle,
  CheckCircle2,
  Circle,
  BarChart3,
  ExternalLink,
  Brain,
  Calculator,
  Shapes,
  Variable,
  PieChart as PieChartIcon,
  NotebookPen,
  RefreshCw,
  CheckCircle,
  XCircle,
  Layers
} from 'lucide-react';
import { icfesData } from './data/icfes_data';
import { resources } from './data/content'; // Keeping resources for now
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { quizQuestions, answerKey } from './data/quiz';
import { quiz2Questions, quiz2AnswerKey } from './data/quiz2';


// --- Components ---

const Sidebar = ({ activeTab, setActiveTab, level, points }) => {
  const menu = [
    { id: 'dashboard', label: 'Tablero de Control', icon: <BarChart3 size={20} /> },
    { id: 'tracker', label: 'Matriz de Estudio', icon: <MapIcon size={20} /> },
    { id: 'resources', label: 'Arsenal', icon: <BookOpen size={20} /> },
    { id: 'bitacora', label: 'Bitácora de Errores', icon: <AlertTriangle size={20} /> },
    { id: 'quiz', label: 'Simulacro', icon: <NotebookPen size={20} /> },
    { id: 'modules', label: 'Módulos', icon: <Layers size={20} /> },
  ];

  return (
    <div className="w-64 bg-pro-card border-r border-slate-700 flex flex-col h-screen fixed">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
          <Rocket className="text-violet-400" />
          ICFES PRO MATH
        </h1>
        <div className="mt-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
          <div className="text-xs text-pro-muted uppercase tracking-wider font-semibold">Nivel de Desempeño</div>
          <div className="text-lg font-bold text-white flex justify-between items-center">
            Nivel {level}
            <Trophy size={16} className="text-yellow-400" />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {icfesData.performanceLevels.find(l => l.level === level)?.description || "Iniciando"}
          </p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
              ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30 shadow-lg shadow-violet-900/20'
              : 'text-pro-muted hover:bg-slate-800 hover:text-white'
              }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-pro-muted text-center">
          Modelo Basado en Evidencias
          <br />2024-2025
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ progress }) => {
  // Calculate progress per component
  const components = Object.values(icfesData.components);
  const data = components.map(comp => {
    let total = 0;
    let checked = 0;
    comp.topics.forEach(cat => {
      cat.items.forEach(item => {
        total++;
        if (progress.checkedItems.includes(item.id)) checked++;
      });
    });
    return {
      name: comp.title,
      total,
      checked,
      percentage: total === 0 ? 0 : Math.round((checked / total) * 100),
      color: comp.id === 'algebra' ? '#8b5cf6' : comp.id === 'geometry' ? '#ec4899' : '#10b981'
    };
  });

  const totalProgress = Math.round(data.reduce((acc, curr) => acc + curr.percentage, 0) / 3);

  // Calculate Competency Distribution (Simple Approximation based on items checked)
  // In a real app we'd map items to competencies more strictly, here we simulate the report's weights
  const competencyData = icfesData.competencies.map(c => ({
    name: c.name,
    value: Number(c.percentage) || 0, // Goal weight
    color: c.color
  }));


  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold text-white">Tablero de Mando</h2>
        <p className="text-pro-muted mt-2">Monitoreo de competencias y componentes curriculares.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.name} className="bg-pro-card p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: item.color }}></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-pro-muted text-sm">{item.name}</div>
                <div className="text-3xl font-bold text-white mt-1">{item.percentage}%</div>
              </div>
              <div className={`p-2 rounded-lg bg-[${item.color}]/10`}>
                {item.name.includes("Álgebra") && <Variable size={24} style={{ color: item.color }} />}
                {item.name.includes("Geometría") && <Shapes size={24} style={{ color: item.color }} />}
                {item.name.includes("Estadística") && <PieChartIcon size={24} style={{ color: item.color }} />}
              </div>
            </div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-1000"
                style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
              ></div>
            </div>
            <div className="text-xs text-slate-400 mt-2 text-right">
              {item.checked} / {item.total} temas dominados
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-pro-card p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6">Matriz de Evaluación (Meta ICFES)</h3>
          <p className="text-sm text-pro-muted mb-4">
            El examen está diseñado con estos pesos específicos. Tu preparación debe alinearse con esta distribución.
          </p>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={competencyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {competencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
            {competencyData.map(item => (
              <div key={item.name} className="flex items-center gap-2 text-pro-muted">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                {item.name} ({item.value}%)
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Brain className="text-violet-400" size={20} />
              Estructura & Estrategia (Oficial 2025)
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                <div className="text-xs text-green-400 font-bold uppercase mb-1">Sesión 1 (Mañana)</div>
                <div className="text-2xl font-bold text-white">25 Items</div>
                <p className="text-[10px] text-slate-400 mt-1">Alta energía. Aprovecha para asegurar Interpretación.</p>
              </div>
              <div className="bg-slate-800/50 p-3 rounded-lg border border-rose-900/20 relative overflow-hidden">
                <div className="absolute -right-2 -top-2 w-8 h-8 bg-rose-500/20 blur-xl rounded-full"></div>
                <div className="text-xs text-rose-400 font-bold uppercase mb-1">Sesión 2 (Tarde)</div>
                <div className="text-2xl font-bold text-white">25 Items</div>
                <p className="text-[10px] text-slate-400 mt-1">¡Alerta Fatiga! Aquí suele caer el Álgebra pesada.</p>
              </div>
            </div>

            <div className="bg-violet-900/20 p-4 rounded-xl border border-violet-500/20">
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "El Icfes divide los temas en dos bolsas. No basta con sumar y restar. Debes dominar <strong>Funciones, Trigonometría y Probabilidad Condicional</strong> (No Genéricos) para superar el promedio."
              </p>
            </div>
          </div>

          <div className="bg-pro-card p-6 rounded-2xl border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">Progreso Global</h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-bold text-white">{totalProgress}%</span>
              <span className="text-slate-400 mb-1">de cobertura total</span>
            </div>
            <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-1000"
                style={{ width: `${totalProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tracker = ({ progress, toggleItem }) => {
  const [activeComponent, setActiveComponent] = useState('algebra');

  const components = Object.values(icfesData.components);
  const activeData = components.find(c => c.id === activeComponent);

  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-right duration-500">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Matriz de Estudio</h2>
          <p className="text-pro-muted mt-2">Lista de chequeo detallada (Genérico vs No Genérico). ¡Que no se escape nada!</p>
        </div>
        <div className="flex bg-slate-800 rounded-lg p-1">
          {components.map(comp => (
            <button
              key={comp.id}
              onClick={() => setActiveComponent(comp.id)}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${activeComponent === comp.id
                ? 'bg-violet-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              {comp.title}
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-8">
        <div className="bg-pro-card border border-slate-700 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-violet-900/30 rounded-xl text-violet-400">
              {activeData.id === 'algebra' && <Variable size={32} />}
              {activeData.id === 'geometry' && <Shapes size={32} />}
              {activeData.id === 'statistics' && <PieChartIcon size={32} />}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{activeData.title}</h3>
              <p className="text-slate-400">{activeData.subtitle}</p>
            </div>
          </div>

          <div className="space-y-8">
            {activeData.topics.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-violet-300 mb-4 pb-2 border-b border-violet-500/20">
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.items.map(item => {
                    const isChecked = progress.checkedItems.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 group relative overflow-hidden ${isChecked
                          ? 'bg-green-500/10 border-green-500/30'
                          : 'bg-slate-800/30 border-slate-700 hover:border-violet-500/50'
                          }`}
                      >
                        <div className={`mt-0.5 transition-colors ${isChecked ? 'text-green-400' : 'text-slate-600 group-hover:text-violet-400'}`}>
                          {isChecked ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-medium transition-colors ${isChecked ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                            {item.text}
                          </div>
                          <div className="flex gap-2 mt-2">
                            {item.type === 'generico' && (
                              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-900/20 px-1.5 py-0.5 rounded">Genérico</span>
                            )}
                            {item.type === 'no-generico' && (
                              <span className="text-[10px] uppercase font-bold text-rose-400 bg-rose-900/20 px-1.5 py-0.5 rounded">Disciplinar</span>
                            )}
                            <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
                              Nivel {item.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Resources = () => {
  // Reuse existing resources logic but styled similarly
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom duration-500">
      <header>
        <h2 className="text-3xl font-bold text-white">Arsenal Estratégico</h2>
        <p className="text-pro-muted mt-2">Recursos alineados con las competencias probadas.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => (
          <a
            key={res.id}
            href={res.url}
            target="_blank"
            rel="noreferrer"
            className="group block bg-pro-card p-6 rounded-2xl border border-slate-700 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-900/20 transition-all text-left"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-violet-900/30 transition-colors">
                <BookOpen className="text-violet-400" />
              </div>
              <ExternalLink size={16} className="text-slate-500 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">{res.title}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {res.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const Bitacora = ({ progress, addError, deleteError }) => {
  const [newError, setNewError] = useState({
    topic: '',
    description: '',
    competency: 'interpretacion',
    level: '1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newError.description) return;
    addError({ ...newError, id: Date.now(), date: new Date().toLocaleDateString() });
    setNewError({ topic: '', description: '', competency: 'interpretacion', level: '1' });
  };

  const competencies = icfesData.competencies;

  return (
    <div className="p-8 space-y-8 animate-in scale-95 duration-300 fade-in">
      <header>
        <h2 className="text-3xl font-bold text-white">Bitácora de Errores (Análisis de Causa)</h2>
        <p className="text-pro-muted mt-2">En el MBE, el error es evidencia de aprendizaje. Regístralo para mejorar.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario */}
        <div className="lg:col-span-1">
          <form onSubmit={handleSubmit} className="bg-pro-card p-6 rounded-2xl border border-slate-700 space-y-4">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-yellow-400" size={20} />
              Registrar Fallo
            </h3>

            <div>
              <label className="block text-xs font-semibold text-pro-muted uppercase mb-1">Tema / Ítem</label>
              <input
                type="text"
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-violet-500"
                placeholder="Ej. Límites en gráfica"
                value={newError.topic}
                onChange={e => setNewError({ ...newError, topic: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-pro-muted uppercase mb-1">Descripción del Error</label>
              <textarea
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-violet-500 h-24"
                placeholder="No supe leer el eje Y..."
                value={newError.description}
                onChange={e => setNewError({ ...newError, description: e.target.value })}
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-pro-muted uppercase mb-1">Competencia Fallada</label>
              <select
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-violet-500"
                value={newError.competency}
                onChange={e => setNewError({ ...newError, competency: e.target.value })}
              >
                {competencies.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 rounded-lg transition-colors">
              Guardar Evidencia
            </button>
          </form>
        </div>

        {/* Lista */}
        <div className="lg:col-span-2 space-y-4">
          {progress.errors.length === 0 ? (
            <div className="text-center text-pro-muted py-12 bg-slate-800/20 rounded-2xl border border-dashed border-slate-700">
              No hay errores registrados.
            </div>
          ) : (
            progress.errors.map((error) => {
              const compColor = competencies.find(c => c.id === error.competency)?.color || '#fff';
              return (
                <div key={error.id} className="bg-pro-card p-5 rounded-xl border border-slate-700 hover:border-violet-500/30 transition-all flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-slate-500">{error.date}</span>
                      <h4 className="font-bold text-white">{error.topic}</h4>
                      <span
                        className="text-[10px] uppercase border px-2 py-0.5 rounded-full"
                        style={{ borderColor: compColor, color: compColor }}
                      >
                        {competencies.find(c => c.id === error.competency)?.name}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm">{error.description}</p>
                  </div>
                  <button
                    onClick={() => deleteError(error.id)}
                    className="text-slate-600 hover:text-red-400 transition-colors"
                  >
                    &times;
                  </button>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  );
};

const Modules = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold text-white">Traductor Matemático</h2>
        <p className="text-pro-muted">
          Herramienta interactiva para desarrollar intuición algebraica y practicar traducción de lenguaje natural a lenguaje matemático.
        </p>
      </header>

      <div className="bg-pro-card border border-slate-700 rounded-2xl p-8 text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-violet-400" />
        </div>

        <h3 className="text-2xl font-bold text-white">Entrenamiento Intensivo</h3>
        <p className="text-slate-300 max-w-lg mx-auto">
          Accede a nuestra herramienta especializada que combina lecciones estructuradas con un generador infinito de ejercicios.
        </p>

        <a
          href="/traductor.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-violet-900/20"
        >
          <span>Abrir Traductor Matemático</span>
          <ExternalLink className="w-5 h-5" />
        </a>

        <p className="text-xs text-slate-500 mt-4">
          Se abrirá en una nueva pestaña para mejor experiencia visual
        </p>
      </div>
    </div>
  );
};

const Quiz = ({
  answers,
  submitted,
  setAnswer,
  clearAnswers,
  finalizeQuiz,
  quizMeta,
  activeQuiz,
  switchQuiz,
  availableQuizzes
}) => {
  // Mostrar solo enlace externo para Simulacro 1 y 2
  if (quizMeta.id === 'sim1' || quizMeta.id === 'sim2') {
    const link = quizMeta.id === 'sim1' ? '/simulacro1.html' : '/simulacro2.html';
    const label = quizMeta.id === 'sim1' ? 'Simulacro 1' : 'Simulacro 2';
    return (
      <div className="p-8 space-y-6 animate-in fade-in duration-500">
        <header className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-white">{label} (vista completa)</h2>
            <p className="text-pro-muted mt-2">
              Abre el cuadernillo con cronómetro y calificación en la página dedicada.
            </p>
          </div>

          <div className="bg-slate-800/60 p-1 rounded-xl flex gap-1 w-fit mb-6 border border-slate-700/50">
            {availableQuizzes.map(q => (
              <button
                key={q.id}
                onClick={() => switchQuiz(q.id)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeQuiz === q.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
              >
                Simulacro {q.label}
              </button>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 border border-violet-500/60 rounded-lg px-4 py-2 shadow-sm shadow-violet-900/30 transition"
          >
            {label}
            <ExternalLink size={16} />
          </a>
        </header>
      </div>
    );
  }

  const questions = quizMeta.questions;
  const key = quizMeta.answerKey;
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter(q => answers[q.id] === key[q.id]).length;
  const incorrectCount = answeredCount - correctCount;

  const sessionStats = [1, 2].map(session => {
    const sessionQuestions = questions.filter(q => q.session === session);
    const sessionAnswered = sessionQuestions.filter(q => answers[q.id]).length;
    const sessionCorrect = sessionQuestions.filter(q => answers[q.id] === key[q.id]).length;
    return {
      session,
      total: sessionQuestions.length,
      answered: sessionAnswered,
      correct: sessionCorrect
    };
  });

  const wrongItems = questions.filter(q => answers[q.id] && answers[q.id] !== key[q.id]);

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <div>
            <h2 className="text-3xl font-bold text-white">Simulacro {quizMeta.label} (50 ítems)</h2>
            <p className="text-pro-muted mt-2">
              Selección múltiple con única respuesta. Guarda en tu navegador y evalúa contra la clave oficial.
            </p>
            {quizMeta.id === 'sim1' && (
              <div className="mt-2">
                <a
                  href="/simulacro1.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white underline-offset-4 hover:underline"
                >
                  Abrir Simulacro 1 en vista completa
                </a>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {availableQuizzes.map(q => (
              <button
                key={q.id}
                onClick={() => switchQuiz(q.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold border transition-all ${activeQuiz === q.id
                  ? 'bg-violet-600 text-white border-violet-500 shadow-sm shadow-violet-900/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-violet-500/50'
                  }`}
              >
                Simulacro {q.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-2 text-center">
            <div className="text-xs text-pro-muted uppercase">Respondidas</div>
            <div className="text-lg font-bold text-white">{answeredCount}/{totalQuestions}</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-2 text-center">
            <div className="text-xs text-green-400 uppercase font-semibold">Correctas</div>
            <div className="text-lg font-bold text-white">{submitted ? correctCount : '-'}</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-2 text-center">
            <div className="text-xs text-rose-400 uppercase font-semibold">Incorrectas</div>
            <div className="text-lg font-bold text-white">
              {submitted ? (incorrectCount < 0 ? 0 : incorrectCount) : '-'}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sessionStats.map(stat => (
          <div key={stat.session} className="bg-pro-card border border-slate-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-white">Sesión {stat.session}</div>
              <div className="text-xs text-pro-muted">{stat.answered}/{stat.total} respondidas</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${(stat.correct / stat.total) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-slate-400">{stat.correct} correctas</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-3">
        <div className="text-sm text-pro-muted">
          Tus respuestas se guardan localmente en este navegador. Marca “Finalizar” para ver calificación; puedes limpiar para reiniciar.
        </div>
        <div className="flex gap-2">
          <button
            onClick={clearAnswers}
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white border border-slate-500/50"
          >
            <RefreshCw size={16} />
            Nuevo intento
          </button>
          {!submitted ? (
            <button
              onClick={() => finalizeQuiz(totalQuestions)}
              disabled={answeredCount < totalQuestions}
              className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg ${answeredCount < totalQuestions
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed border border-slate-600'
                : 'bg-violet-600 hover:bg-violet-700 text-white border border-violet-500/50'
                }`}
            >
              <CheckCircle2 size={16} />
              Finalizar simulacro
            </button>
          ) : (
            <span className="text-sm text-green-300 flex items-center gap-2">
              <CheckCircle size={16} />
              Simulacro finalizado
            </span>
          )}
        </div>
      </div>

      {submitted && (
        <div className="bg-pro-card border border-slate-700 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="text-green-400" size={18} />
            <div>
              <div className="text-lg font-bold text-white">Resultados finales</div>
              <div className="text-sm text-pro-muted">
                {correctCount} correctas, {incorrectCount < 0 ? 0 : incorrectCount} incorrectas.
              </div>
            </div>
          </div>
          {wrongItems.length === 0 ? (
            <div className="text-sm text-green-300">¡Todo correcto! Excelente.</div>
          ) : (
            <div className="text-sm text-slate-300">
              Ítems a revisar:
              <div className="mt-2 space-y-2">
                {wrongItems.map(item => (
                  <div key={item.id} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700">
                    <div className="text-xs text-pro-muted mb-1">
                      Ítem {item.id} - Sesión {item.session} ({item.block})
                    </div>
                    <div className="text-white font-semibold">{item.prompt}</div>
                    <div className="text-xs text-rose-300 mt-1">
                      Tu respuesta: {answers[item.id]} · Correcta: {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="space-y-6">
        {quizQuestions.map((q) => {
          const selected = answers[q.id];
          const isCorrect = submitted && selected === q.answer;
          const showFeedback = submitted && selected;
          return (
            <div
              key={q.id}
              className={`border rounded-2xl p-5 bg-pro-card transition-colors ${submitted && selected
                ? isCorrect
                  ? 'border-green-500/50 bg-green-500/5'
                  : 'border-rose-500/50 bg-rose-500/5'
                : 'border-slate-700'
                }`}
            >
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className="text-xs font-bold px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Ítem {q.id} - Sesión {q.session}
                </span>
                <span className="text-xs text-pro-muted">{q.block}</span>
                {showFeedback && (
                  <span
                    className={`flex items-center gap-1 text-xs font-semibold ${isCorrect ? 'text-green-400' : 'text-rose-400'
                      }`}
                  >
                    {isCorrect ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    {isCorrect ? 'Correcto' : 'Incorrecto'}
                  </span>
                )}
              </div>
              <p className="text-white font-medium mb-3">{q.prompt}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((opt) => {
                  const isSelected = selected === opt.id;
                  const isAnswer = q.answer === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setAnswer(q.id, opt.id)}
                      disabled={submitted}
                      className={`w-full text-left px-3 py-3 rounded-xl border transition-all ${submitted
                        ? isSelected
                          ? isAnswer
                            ? 'border-green-500 bg-green-500/10 text-white'
                            : 'border-rose-500 bg-rose-500/10 text-white'
                          : 'border-slate-700 bg-slate-800/30 text-slate-300'
                        : isSelected
                          ? 'border-violet-500 bg-violet-600/15 text-white shadow-sm shadow-violet-900/40'
                          : 'border-slate-700 hover:border-violet-500/60 bg-slate-800/50 text-slate-200'
                        } ${submitted ? 'cursor-not-allowed' : ''}`}
                    >
                      <div className="flex items-start gap-2">
                        <span className={`text-sm font-bold ${isSelected ? '' : 'text-violet-300'}`}>{opt.id}.</span>
                        <span className="text-sm leading-relaxed">{opt.text}</span>
                      </div>
                      {showFeedback && isSelected && !isCorrect && isAnswer && (
                        <div className="mt-2 text-xs text-green-300">Esta era la clave correcta.</div>
                      )}
                    </button>
                  );
                })}
              </div>
              {showFeedback && (
                <div className="mt-3 text-xs text-pro-muted">
                  Tu respuesta: {selected}. Clave oficial: {q.answer}.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};


// --- Main App ---

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const safeLoad = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? { ...fallback, ...parsed } : fallback;
    } catch (err) {
      console.warn('No se pudo leer localStorage', err);
      return fallback;
    }
  };

  const quizCatalog = {
    sim1: { id: 'sim1', label: '1', questions: quizQuestions, answerKey },
    sim2: { id: 'sim2', label: '2', questions: quiz2Questions, answerKey: quiz2AnswerKey }
  };

  const defaultQuizState = {
    activeQuiz: 'sim1',
    data: {
      sim1: { answers: {}, submitted: false },
      sim2: { answers: {}, submitted: false }
    }
  };

  const normalizeQuizState = (raw) => {
    if (raw && raw.answers) {
      return {
        activeQuiz: 'sim1',
        data: {
          sim1: { answers: raw.answers || {}, submitted: !!raw.submitted },
          sim2: { answers: {}, submitted: false }
        }
      };
    }
    const base = raw && typeof raw === 'object' ? raw : {};
    const mergedData = {
      ...defaultQuizState.data,
      ...(base.data || {})
    };
    if (!mergedData.sim1) mergedData.sim1 = { answers: {}, submitted: false };
    if (!mergedData.sim2) mergedData.sim2 = { answers: {}, submitted: false };
    const activeQuiz = quizCatalog[base.activeQuiz] ? base.activeQuiz : 'sim1';
    return { activeQuiz, data: mergedData };
  };

  // Persisted Logic
  const [progress, setProgress] = useState(() =>
    safeLoad('icfes-progress-v2', { checkedItems: [], errors: [] })
  );

  const [quizState, setQuizState] = useState(() =>
    normalizeQuizState(safeLoad('icfes-quiz-v1', defaultQuizState))
  );

  useEffect(() => {
    try {
      localStorage.setItem('icfes-progress-v2', JSON.stringify(progress));
    } catch (err) {
      console.warn('No se pudo guardar progreso', err);
    }
  }, [progress]);

  const quizOptions = Object.values(quizCatalog).map(q => ({ id: q.id, label: q.label }));
  const activeQuizId = quizState.activeQuiz;
  const activeQuizMeta = quizCatalog[activeQuizId] || quizCatalog.sim1;
  const activeQuizData = quizState.data[activeQuizId] || { answers: {}, submitted: false };

  useEffect(() => {
    try {
      localStorage.setItem('icfes-quiz-v1', JSON.stringify(quizState));
    } catch (err) {
      console.warn('No se pudo guardar simulacro', err);
    }
  }, [quizState]);

  const toggleItem = (itemId) => {
    const isChecked = progress.checkedItems.includes(itemId);
    let newItems = [];
    if (isChecked) {
      newItems = progress.checkedItems.filter(id => id !== itemId);
    } else {
      newItems = [...progress.checkedItems, itemId];
    }
    setProgress(prev => ({ ...prev, checkedItems: newItems }));
  };

  const addError = (error) => {
    setProgress(prev => ({ ...prev, errors: [error, ...prev.errors] }));
  };

  const deleteError = (id) => {
    setProgress(prev => ({ ...prev, errors: prev.errors.filter(e => e.id !== id) }));
  };

  const setAnswer = (questionId, optionId) => {
    setQuizState(prev => {
      const activeId = prev.activeQuiz;
      const quizData = prev.data[activeId] || { answers: {}, submitted: false };
      if (quizData.submitted) return prev;
      return {
        ...prev,
        data: {
          ...prev.data,
          [activeId]: { ...quizData, answers: { ...quizData.answers, [questionId]: optionId } }
        }
      };
    });
  };

  const clearAnswers = () => {
    setQuizState(prev => {
      const activeId = prev.activeQuiz;
      return {
        ...prev,
        data: { ...prev.data, [activeId]: { answers: {}, submitted: false } }
      };
    });
  };

  const finalizeQuiz = (questionCount) => {
    setQuizState(prev => {
      const activeId = prev.activeQuiz;
      const quizData = prev.data[activeId] || { answers: {}, submitted: false };
      if (quizData.submitted) return prev;
      if (Object.keys(quizData.answers).length < questionCount) return prev;
      return {
        ...prev,
        data: {
          ...prev.data,
          [activeId]: { ...quizData, submitted: true }
        }
      };
    });
  };

  const switchQuiz = (quizId) => {
    if (!quizCatalog[quizId]) return;
    setQuizState(prev => {
      const nextData = {
        ...defaultQuizState.data,
        ...(prev.data || {})
      };
      if (!nextData[quizId]) {
        nextData[quizId] = { answers: {}, submitted: false };
      }
      return {
        ...prev,
        activeQuiz: quizId,
        data: nextData
      };
    });
  };

  // Calculate fake level based on item count for now
  // Total items is approx 65
  const totalItems = Object.values(icfesData.components).reduce((acc, comp) => {
    return acc + comp.topics.reduce((tAcc, cat) => tAcc + cat.items.length, 0);
  }, 0);
  const checkedCount = progress.checkedItems.length;
  const percentage = (checkedCount / totalItems) * 100;

  let currentLevel = 1;
  if (percentage > 35) currentLevel = 2;
  if (percentage > 50) currentLevel = 3;
  if (percentage > 70) currentLevel = 4;

  const points = Math.round(percentage * 10); // Dummy XP

  return (
    <div className="flex h-screen bg-pro-bg text-slate-50 font-sans overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        level={currentLevel}
        points={points}
      />

      <main className="flex-1 ml-64 overflow-y-auto h-full">
        {activeTab === 'dashboard' && <Dashboard progress={progress} />}
        {activeTab === 'tracker' && <Tracker progress={progress} toggleItem={toggleItem} />}
        {activeTab === 'resources' && <Resources />}
        {activeTab === 'bitacora' && <Bitacora progress={progress} addError={addError} deleteError={deleteError} />}
        {activeTab === 'quiz' && (
          <Quiz
            answers={activeQuizData.answers}
            submitted={activeQuizData.submitted}
            setAnswer={setAnswer}
            clearAnswers={clearAnswers}
            finalizeQuiz={finalizeQuiz}
            quizMeta={activeQuizMeta}
            activeQuiz={activeQuizId}
            switchQuiz={switchQuiz}
            availableQuizzes={quizOptions}
          />
        )}
        {activeTab === 'modules' && <Modules />}
      </main>
    </div>
  );
}

export default App;
