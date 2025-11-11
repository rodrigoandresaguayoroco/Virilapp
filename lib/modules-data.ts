// Módulo 1: Arsenal del Amante
export const arsenalData = {
  title: "Arsenal del Amante",
  subtitle: "7 tácticas para aumentar resistencia y placer",
  tactics: [
    {
      id: "ancla",
      title: "Táctica 1: El Ancla Mental",
      mission: "Controlar la ansiedad y activar el sistema parasimpático.",
      protocol: ["Inhala 4s nariz (diafragma)", "Pausa 2s", "Exhala 6s boca", "Sincroniza movimiento"],
      proTip: "Practica 5 min/día fuera del dormitorio.",
      science: "La respiración lenta reduce frecuencia cardiaca vía parasimpático.",
    },
    {
      id: "kegel",
      title: "Táctica 2: El Músculo Secreto",
      mission: "Dominar relajación del músculo PC para controlar reflejo eyaculatorio.",
      protocol: ["Identifica PC al cortar flujo", "Realiza movimiento opuesto", "Entrena 2s contracción, 10s relajación"],
      proTip: "Aplica Kegel inverso cuando excitación suba rápido.",
      science: "Mayor control neuromuscular eleva el umbral del reflejo.",
    },
    {
      id: "pausa",
      title: "Táctica 3: La Pausa Estratégica",
      mission: "Resetear niveles de excitación para prolongar acto.",
      protocol: ["Usa medidor interno 1-10", "En 7-8 detén estimulación", "Respira hasta 3-4", "Reanuda con control"],
      proTip: "Comunícalo y conviértelo en juego de pareja.",
      science: "Práctica recalibra umbral y mejora detección de señales.",
    },
    {
      id: "foco",
      title: "Táctica 4: El Cambio de Foco",
      mission: "Redirigir atención al placer de tu pareja.",
      protocol: ["Observa respiración, sonidos, expresiones", "Escucha y mira conscientemente", "Haz placer de tu pareja tu objetivo"],
      proTip: "Durante pausa usa manos/boca para mantener conexión.",
      science: "Recursos atencionales limitados; redirigirlos reduce escalada propia.",
    },
    {
      id: "ritmo",
      title: "Táctica 5: El Ritmo del Maestro",
      mission: "Modular excitación con variaciones velocidad/profundidad.",
      protocol: ["Evita ritmo constante prolongado", "Alterna rápido/superficial con lento/profundo", "Sincroniza fases lentas con respiración"],
      proTip: "Ceder ritmo a pareja reduce tu carga de control.",
      science: "Ritmo correlaciona con activación autonómica; lento frena escalada.",
    },
    {
      id: "mapa",
      title: "Táctica 6: El Mapa del Placer",
      mission: "Usar descansos activos y explorar rutas sensoriales.",
      protocol: ["Identifica puntos calientes", "Cambia posición para modificar ángulo", "Activa zonas erógenas con manos/boca"],
      proTip: "Posturas erguidas/recostadas hacia atrás dan más control.",
      science: "Diversificación sensorial distribuye carga neuronal.",
    },
    {
      id: "comunicacion",
      title: "Táctica 7: La Comunicación Cómplice",
      mission: "Convertir a tu pareja en aliada para control y placer mutuo.",
      protocol: ["Habla antes en contexto relajado", "Acordad señal discreta", "Agradece y refuerza tras intimidad"],
      proTip: "Reformula pausas como momentos de conexión intensa.",
      science: "Menos ansiedad de rendimiento = menos cortisol + más presencia.",
    },
  ],
}

// Módulo 2: Acondicionamiento Masculino
export const acondicionamientoData = {
  title: "Acondicionamiento Masculino",
  subtitle: "Técnicas manuales seguras para vitalidad",
  safety: {
    title: "PROTOCOLO DE SEGURIDAD",
    rules: [
      "✓ Calentar siempre con paño tibio 5 minutos",
      "✓ Usar lubricante de calidad (no jabón)",
      "✓ Nunca forzar ni causar dolor",
      "✓ Parar ante cualolor",
      "✓ Sesiones máx 20 minutos",
      "✓ Descansar 48h entre sesiones",
    ],
  },
  techniques: [
    {
      id: "jelqing",
      title: "Técnica Jelqing Mejorada",
      objective: "Mejorar circulación sanguínea sin dañar tejidos.",
      steps: [
        "Lubricación generosa",
        "Formar OK con pulgar e índice",
        "Presión SUAVE (nunca dolorosa)",
        "Deslizar de base a glande (3-5s)",
        "Cambiar mano, repetir 10-15 veces",
      ],
      frequency: "3x semana, 48h de descanso",
      warning: "✗ NO usar si tienes priapismo, lesiones o enfermedades vasculares.",
    },
    {
      id: "stretching",
      title: "Stretching Controlado",
      objective: "Manteniflácido sin forzar.",
      steps: [
        "Calentar con paño tibio 5 min",
        "Tomar glande con toalla entre piel",
        "Estirar SUAVEMENTE (nunca dolor)",
        "Mantener 10-30 segundos",
        "Descansar 10 segundos entre repeticiones",
        "Máximo 10 repeticiones por sesión",
      ],
      frequency: "2-3x semana",
      warning: "✗ Suspender ante dolor, hematomas o entumecimiento.",
    },
  ],
  progression: {
    weeks: "Semanas 1-4: 10 min/sesión | Semanas 5-8: 15 min | Semanas 9+: 20 min",
    notes: "Resultados requieren 8-12 semanas de consistencia.",
  },
  faq: [
    { q: "¿Cuándo veré resultados?", a: "8-12 semanas con consistencia." },
    { q: "¿Es seguro?", a: "Sí, si sigues el protocolo de seguridad." },
    { q: "¿Puedo combinar técnicas?", a: "Sí, pero nunca en la misma sesión." },
  ],
}

// Módulo 3: Dieta del Vigor
export const dietaData = {
  title: "Dieta del Vigor",
  subtitle: "15 alimentos clave para potenciar virilidad",
  categories: [
    {
      title: "PROTEÍNAS Y GRASAS SALUDABLES",
      foods: [
        { name: "Huevos", description: "Colesterol para testosterona + vitamina D", servings: "2-3 huevos/día", cooking: "Cocidos o tortillas con vegetales", evidence: "Estudio: 20% ↑ testosterona en 3 semanas" },
        { name: "Salmón", description: "Omega-3, vitamina D, proteína", servings: "150-200g, 3x semana", cooking: "Al horno con hierbas", evidence: "Reduce inflamación, mejora flujo sanguíneo" },
        { name: "Aguacate", description: "Grasas monoinsaturadas + E", servings: "½ unidad/día", cooking: "En ensaladas o tostadas", evidence: "Mejora perfil lipídico" },
        { name: "Carne de Res Orgánica", description: "Zinc, hierro, creatina", servings: "200g, 2-3x semana", cooking: "A la plancha o asada", evidence: "Zinc esencial para producción de testosterona" },
      ],
    },
    {
      title: "MINERALES CRÍTICOS",
      foods: [
        { name: "Ostras", description: "Zinc (más alto que cualquier alimento)", servings: "6-12 unidades, 1x semana", cooking: "Crudas con limón o al vapor", evidence: "Zinc directamente correlacionado con testosterona libre" },
        { name: "Espinacas", description: "Magnesio, folato, nitratos", servings: "2 tazas frescas/día", cooking: "Sauté con ajo y aceite de oliva", evidence: "Magnesio mejora función endotelial" },
        { name: "Nueces Brasileñas", description: "Selenio (1 nuez cubre día)", servings: "1-2 unidades/día", cooking: "Cruda como snack", evidence: "Selenio: antioxidante esencial para producción espermatozoide" },
        { name: "Chocolate Negro 85%", description: "Flavonoides, magnesio", servings: "30-40g/día", cooking: "Directo o en batidos", evidence: "Mejora flujo sanguíneo periférico" },
      ],
    },
    {
      title: "PRECURSORES HORMONALES",
      foods: [
        { name: "Ajo", description: "Allicina + selenio", servings: "2-3 dientes/día", cooking: "Crudo en ensaladas o cocido", evidence: "Reduce cortisol, mejora perfil hormonal" },
        { name: "Pomelo", description: "Vitamina C, antioxidantes", servings: "½ unidad/día", cooking: "Directo o en jugo", warning: "Precaución con medicamentos" },
        { name: "Granada", description: "Polifenoles, nitratos", servings: "1 taza de granos o 200ml jugo", cooking: "Jugo natural o en ensalada", evidence: "Estudio: 24% ↑ testosterona en 2 semanas" },
        { name: "Brócoli", description: "Indoles (regulan estrogeno)", servings: "1 taza cocida/día", cooking: "Al vapor o salteado", evidence: "Aumenta 2-hidroxiestrona (buena)" },
      ],
    },
    {
      title: "ENERGÍA SOSTENIDA",
      foods: [
        { name: "Quinoa", description: "Proteína completa + magnesio", servings: "½ taza cocida/día", cooking: "Como arroz o en ensaladas", benefit: "Energía estable sin picos de glucosa" },
        { name: "Camote", description: "Beta-caroteno, fibra", servings: "150-200g/día", cooking: "Horno o vapor", benefit: "Carbohidratos complejos para energía sostenida" },
        { name: "Café (moderado)", description: "Cafeína + antioxidantes", servings: "1-2 tazas/día", timing: "Antes de entrenamiento", benefit: "Mejora rendimiento físico (no exceder)" },
        { name: "Matcha", description: "L-teanina + cafeína", servings: "1 taza/día", cooking: "Té tradicional", benefit: "Energía con calma, sin ansiedad" },
        { name: "Cúrcuma", description: "Curcumina antiinflamatoria", servings: "1-2g con pimienta", cooking: "En batidos o cocción", boost: "Absorción ↑ 2000% con pimienta negra" },
      ],
    },
  ],
  smoothie: {
    title: "SMOOTHIE VIRIL DIARIO",
    ingredients: [
      "1 taza leche de almendra sin azúcar",
      "1 plátano",
      "2 cucharadas mantequilla maní natural",
      "1 huevo crudo (orgánico)",
      "1 cucharada cacao puro",
      "1 cucharada miel",
      "¼ taza arándanos",
      "1 cucharada semillas chía",
      "1 cucharada polvo proteína suero",
    ],
    instructions: "Procesar 60s. Consumir inmediatamente.",
    benefits: "Precursores hormonales + energía + antioxidantes en un vaso",
  },
  forbidden: [
    "❌ Azúcar añadido (fructosa baja testosterona)",
    "❌ Alcohol excesivo (inhibe síntesis hormonal)",
    "❌ Plásticos BPA (xenoestrógenos)",
    "❌ Soja no fermentada (isoflavonas)",
  ],
}