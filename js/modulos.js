const modulosData = [
  // --- MÓDULOS DE PROFESOR FRANCISCO ARCIDES ---
  {
    id: "btv-3-1",
    nombre: "BTVDS 3.1: Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Francisco Arcides",
    resumen: "Construcción de soluciones de software robustas aplicando programación orientada a objetos, acceso a datos y Razor Pages.",
    aprendizajes: [
      "Implementación de Programación Orientada a Objetos (POO), herencia y polimorfismo.",
      "Acceso a datos y conexión con bases de datos relacionales.",
      "Desarrollo de aplicaciones utilizando Code First y ASP.NET Razor."
    ],
    instrumentos: ["Rúbrica de Prácticas de POO", "Evaluación de Prototipo Funcional de Software"],
    programas: ["Visual Studio", "Visual Studio Code", "SQL Server"],
    herramientas: ["C#", ".NET", "ASP.NET Razor", "Entity Framework"],
    recursos: [
      { nombre: "Documentación de .NET", url: "https://learn.microsoft.com/es-es/dotnet/" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Qué patrón o enfoque de bases de datos se utiliza comúnmente con ASP.NET para mapear clases a tablas?",
      opciones: ["Code First", "Manual Directo", "Solo Archivos TXT"],
      correcta: 0
    }
  },
  {
    id: "mod-2-moviles",
    nombre: "Módulo 2: Desarrollo de componentes para dispositivos móviles",
    docente: "Francisco Arcides",
    resumen: "Diseño y desarrollo de interfaces y componentes interactivos para plataformas móviles utilizando .NET MAUI.",
    aprendizajes: [
      "Creación de interfaces multiplataforma con .NET MAUI.",
      "Desarrollo y estructuración de prácticas enfocadas en componentes móviles (Prácticas 6 a 9).",
      "Optimización y pruebas de rendimiento en emuladores."
    ],
    instrumentos: ["Lista de cotejo para Prácticas .NET MAUI", "Autoevaluación Práctica 9"],
    programas: ["Visual Studio", "Emulador de Android / iOS"],
    herramientas: [".NET MAUI", "C#", "XAML"],
    recursos: [
      { nombre: "Documentación de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Qué framework multiplataforma se utiliza en este módulo para desarrollar componentes móviles?",
      opciones: ["Flutter", ".NET MAUI", "React Native"],
      correcta: 1
    }
  },
  {
    id: "mod-3-ingles",
    nombre: "Módulo 3: Conversación de inglés sobre mantenimiento de sistemas informáticos",
    docente: "Francisco Arcides",
    resumen: "Aplicación de vocabulario técnico en inglés enfocado en metodologías ágiles de desarrollo y soporte informático.",
    aprendizajes: [
      "Dominio de términos técnicos en inglés para soporte y mantenimiento de sistemas.",
      "Aplicación de marcos de trabajo ágiles (Scrum) y operaciones CRUD con enfoque técnico."
    ],
    instrumentos: ["Evaluación de Práctica 10 (Scrum)", "Guía de Práctica 11 (Base de datos CRUD-IA)"],
    programas: ["Plataformas de desarrollo y comunicación"],
    herramientas: ["Scrum Framework", "Glosarios técnicos bilingües"],
    recursos: [
      { nombre: "Microsoft Learn", url: "https://learn.microsoft.com/es-es/" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Qué marco de trabajo ágil se aborda en las prácticas de este módulo?",
      opciones: ["Scrum", "Waterfall", "Prince2"],
      correcta: 0
    }
  },
  {
    id: "mod-4-empresa",
    nombre: "Módulo 4: Puesta en marcha de la empresa en asociatividad cooperativa",
    docente: "Francisco Arcides",
    resumen: "Estructuración de modelos de negocio tecnológicos, plataformas de comercio electrónico y proyectos de desarrollo integral.",
    aprendizajes: [
      "Implementación de tiendas virtuales y plataformas de comercio electrónico con Prestashop.",
      "Desarrollo de proyectos utilizando WinForms, ASPX y .NET MAUI en un entorno cooperativo.",
      "Integración de prototipos con hardware (Proyectos tipo Arduino y Agusine)."
    ],
    instrumentos: ["Rúbrica de Proyecto Final .NET MAUI", "Evaluación de Prestashop Individual", "Guía de Proyecto Winform y ASPX"],
    programas: ["Visual Studio", "Prestashop", "XAMPP"],
    herramientas: ["PHP", "MySQL", "WinForms", "ASPX", "Arduino"],
    recursos: [
      { nombre: "Prestashop Documentation", url: "https://devdocs.prestashop-project.org/" },
      { nombre: "Portal MIPYME", url: "https://www.minec.gob.sv" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Qué plataforma de comercio electrónico se implementa para tiendas virtuales?",
      opciones: ["Prestashop", "WordPress básico", "Excel"],
      correcta: 0
    }
  },

  // --- MÓDULOS DE PROFESOR JAVIER MINEROS ---
  {
    id: "mod-3-0",
    nombre: "Módulo 3.0: Orientación de estudiantes al proceso educativo del tercer año",
    docente: "Javier Mineros",
    resumen: "Inducción, organización de equipos de trabajo y lineamientos generales del proceso educativo del tercer año.",
    aprendizajes: [
      "Establecimiento y organización de equipos de trabajo efectivos.",
      "Manejo de normativas, portafolios y espacios de códigos QR institucionales."
    ],
    instrumentos: ["Guía de orientación", "Portafolio del Módulo 3.0"],
    programas: ["Google Classroom", "Google Drive"],
    herramientas: ["Plataformas institucionales", "Herramientas colaborativas"],
    recursos: [
      { nombre: "Clases INDEL", url: "https://clases.edu.sv" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Cuál es el propósito principal de este módulo de orientación?",
      opciones: ["Establecer lineamientos y equipos de trabajo del tercer año", "Programar en C++ avanzado", "Instalar redes físicas"],
      correcta: 0
    }
  },
  {
    id: "mod-3-2",
    nombre: "Módulo 3.2: Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "Javier Mineros",
    resumen: "Diagnóstico, modelado UML, plantillas SLA, control de monitoreo y creación de dashboards y planes de contingencia.",
    aprendizajes: [
      "Modelado de software mediante diagramas UML y uso de plantillas SLA.",
      "Creación de dashboards de monitoreo, registro y planes de contingencia técnica.",
      "Ejecución de prácticas de mantenimiento preventivo y correctivo."
    ],
    instrumentos: ["Rúbrica de Dashboard y Práctica", "Evaluación de Modelado UML y Plantilla SLA"],
    programas: ["Visual Studio Code", "Herramientas de Monitoreo", "Herramientas de Diagramación"],
    herramientas: ["UML", "SLA", "Dashboards técnicos"],
    recursos: [
      { nombre: "Microsoft Learn", url: "https://learn.microsoft.com/es-es/" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Qué tipo de diagramas se utilizan para el modelado de software en este módulo?",
      opciones: ["Diagramas UML", "Mapas conceptuales simples", "Hojas de cálculo"],
      correcta: 0
    }
  },
  {
    id: "mod-3-3",
    nombre: "Módulo 3.3: Administración de Bases de Datos",
    docente: "Javier Mineros",
    resumen: "Gestión, optimización y ejecución de bases de datos relacionales, herramientas de análisis con Power BI y actividades remediales.",
    aprendizajes: [
      "Instalación y configuración de motores de bases de datos y Power BI.",
      "Ejecución de consultas avanzadas, reportes y actividades de recuperación (Semanas 8, 9, 10 y final).",
      "Implementación de dashboards analíticos y control de datos."
    ],
    instrumentos: ["Rúbrica de Ejecución de Base de Datos", "Evaluación de Actividad Power BI"],
    programas: ["SQL Server", "Power BI", "MySQL Workbench"],
    herramientas: ["SQL", "Power BI Desktop", "Transact-SQL"],
    recursos: [
      { nombre: "Documentación de MySQL", url: "https://dev.mysql.com/doc/" },
      { nombre: "Microsoft Power BI Docs", url: "https://learn.microsoft.com/es-es/power-bi/" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Qué herramienta se utiliza para el análisis de datos y creación de reportes visuales?",
      opciones: ["Power BI", "Bloc de notas", "Paint"],
      correcta: 0
    }
  },
  {
    id: "mod-3-4",
    nombre: "Módulo 3.4: Elaboración de documentación de Sistemas informáticos",
    docente: "Javier Mineros",
    resumen: "Creación de guías en Python, arquitectura de software, arquitectura en fases y documentación técnica de proyectos.",
    aprendizajes: [
      "Desarrollo de aplicaciones y guías individuales utilizando Python.",
      "Documentación estructurada por fases: Arquitectura del software, desarrollo y documentos finales.",
      "Elaboración de manuales y especificaciones técnicas."
    ],
    instrumentos: ["Rúbrica de Fases de Documentación (Fase 1 a Fase 7)", "Evaluación de Guía Python"],
    programas: ["Visual Studio Code", "Python Interpreter", "Editores de Markdown"],
    herramientas: ["Python", "Markdown", "Diagramas de Arquitectura"],
    recursos: [
      { nombre: "Documentación oficial de Python", url: "https://docs.python.org/es/3/" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Qué lenguaje se emplea en las guías individuales de este módulo de documentación?",
      opciones: ["Python", "Assembly", "Fortran"],
      correcta: 0
    }
  },
  {
    id: "mod-3-8",
    nombre: "Módulo 3.8: Proyecto innovador de Desarrollo de Software",
    docente: "Javier Mineros",
    resumen: "Desarrollo, avance, prácticas semanales, manuales de sistema y entrega final del proyecto tecnológico innovador.",
    aprendizajes: [
      "Gestión de avances de proyectos (10%, 15% y entregas finales).",
      "Elaboración de manuales de sistema y prácticas orientadas a resultados.",
      "Defensa y exposición de proyectos de desarrollo de software."
    ],
    instrumentos: ["Rúbrica de Entrega Final de Proyecto", "Evaluación de Avances e Informes"],
    programas: ["Visual Studio Code", "Git", "GitHub Pages"],
    herramientas: ["Control de versiones", "HTML/CSS/JS", "Documentación de proyectos"],
    recursos: [
      { nombre: "MDN Web Docs", url: "https://developer.mozilla.org/es/" }
    ],
    evidencias: "https://github.com/marvinlop/GitHubPage",
    quiz: {
      pregunta: "¿Qué plataforma se utiliza para alojar y desplegar este portal de proyecto innovador?",
      opciones: ["GitHub Pages", "Un servidor local sin salida", "Disco duro local"],
      correcta: 0
    }
  }
];
