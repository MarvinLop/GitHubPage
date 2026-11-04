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
      { nombre: "Documentación oficial de .NET", url: "https://learn.microsoft.com/es-es/dotnet/" },
      { nombre: "MDN Web Docs - C# & Web", url: "https://developer.mozilla.org/es/" }
    ],
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Qué patrón o enfoque de bases de datos se utiliza comúnmente con ASP.NET para mapear clases a tablas de forma automática?",
      opciones: ["Code First", "Manual Directo con Archivos Planos", "Consultas directas sin modelo", "Estructura NoSQL Estática"],
      correcta: 0,
      explicacion: "Code First permite definir el modelo de datos escribiendo clases en C# y generando la base de datos a partir de ellas."
    }
  },
  {
    id: "mod-2-moviles",
    nombre: "Módulo 2: Desarrollo de componentes para dispositivos móviles",
    docente: "Francisco Arcides",
    resumen: "Diseño y desarrollo de interfaces y componentes interactivos para plataformas móviles utilizando .NET MAUI y XAML.",
    aprendizajes: [
      "Creación de interfaces multiplataforma eficientes con .NET MAUI.",
      "Desarrollo y estructuración de prácticas enfocadas en componentes móviles (Prácticas 6 a 9).",
      "Optimización y pruebas de rendimiento en emuladores de dispositivos."
    ],
    instrumentos: ["Lista de cotejo para Prácticas .NET MAUI", "Autoevaluación Práctica 9"],
    programas: ["Visual Studio", "Emulador de Android / iOS"],
    herramientas: [".NET MAUI", "C#", "XAML"],
    recursos: [
      { nombre: "Documentación oficial de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" }
    ],
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Qué framework multiplataforma moderno de Microsoft se utiliza para desarrollar aplicaciones móviles y de escritorio en este módulo?",
      opciones: ["Flutter", ".NET MAUI", "React Native", "Xamarin Classic"],
      correcta: 1,
      explicacion: ".NET MAUI es la evolución moderna de Xamarin.Forms para crear apps nativas multiplataforma con C# y XAML."
    }
  },
  {
    id: "mod-3-ingles",
    nombre: "Módulo 3: Conversación de inglés sobre mantenimiento de sistemas informáticos",
    docente: "Francisco Arcides",
    resumen: "Aplicación de vocabulario técnico en inglés enfocado en metodologías ágiles de desarrollo y soporte informático.",
    aprendizajes: [
      "Dominio de términos técnicos en inglés para soporte y mantenimiento de sistemas.",
      "Aplicación de marcos de trabajo ágiles (Scrum) y operaciones CRUD con enfoque técnico bilingüe."
    ],
    instrumentos: ["Evaluación de Práctica 10 (Scrum)", "Guía de Práctica 11 (Base de datos CRUD-IA)"],
    programas: ["Plataformas de desarrollo y comunicación"],
    herramientas: ["Scrum Framework", "Glosarios técnicos bilingües"],
    recursos: [
      { nombre: "Microsoft Learn Documentation", url: "https://learn.microsoft.com/es-es/" }
    ],
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Qué marco de trabajo ágil se aborda en las prácticas y terminología de este módulo?",
      opciones: ["Scrum", "Waterfall Tradicional", "Prince2", "Modelo en Cascada Estricto"],
      correcta: 0,
      explicacion: "Scrum es el framework ágil estándar basado en sprints, roles y reuniones para gestionar proyectos de software."
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
      { nombre: "Prestashop DevDocs", url: "https://devdocs.prestashop-project.org/" },
      { nombre: "Portal MIPYME", url: "https://www.minec.gob.sv" }
    ],
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Qué plataforma de comercio electrónico open-source se implementa para la creación de tiendas virtuales?",
      opciones: ["Prestashop", "WordPress Básico", "Excel Sheets", "Access DB"],
      correcta: 0,
      explicacion: "Prestashop es una robusta solución de comercio electrónico de código abierto para la gestión de tiendas online."
    }
  },

  // --- MÓDULOS DE PROFESOR JAVIER MINEROS ---
  {
    id: "mod-3-0",
    nombre: "Módulo 3.0: Orientación de estudiantes al proceso educativo del tercer año",
    docente: "Javier Mineros",
    resumen: "Inducción, organización de equipos de trabajo y lineamientos generales del proceso educativo del tercer año de bachillerato.",
    aprendizajes: [
      "Establecimiento y organización de equipos de trabajo efectivos.",
      "Manejo de normativas, portafolios y espacios de códigos QR institucionales."
    ],
    instrumentos: ["Guía de orientación", "Portafolio del Módulo 3.0"],
    programas: ["Google Classroom", "Google Drive"],
    herramientas: ["Plataformas institucionales", "Herramientas colaborativas"],
    recursos: [
      { nombre: "Portal Clases INDEL", url: "https://clases.edu.sv" }
    ],
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Cuál es el propósito principal de este módulo de orientación inicial?",
      opciones: ["Establecer lineamientos y equipos de trabajo del tercer año", "Programar en C++ avanzado", "Instalar redes físicas de fibra óptica", "Configurar servidores DNS globales"],
      correcta: 0,
      explicacion: "Permite alinear las expectativas, normativas y organización de equipos para todo el año académico."
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
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Qué significan las siglas SLA en el contexto de aseguramiento de la operación y soporte técnico?",
      opciones: ["Service Level Agreement (Acuerdo de Nivel de Servicio)", "System Local Architecture", "Secure Log Access", "Standard Line Application"],
      correcta: 0,
      explicacion: "Un SLA es un contrato que compromete al proveedor de servicios a cumplir ciertos niveles de calidad y tiempo de respuesta."
    }
  },
  {
    id: "mod-3-3",
    nombre: "Módulo 3.3: Administración de Bases de Datos",
    docente: "Javier Mineros",
    resumen: "Gestión, optimización y ejecución de bases de datos relacionales, herramientas de análisis con Power BI y actividades remediales.",
    aprendizajes: [
      "Instalación y configuración de motores de bases de datos y Power BI.",
      "Ejecución de consultas avanzadas, reportes y actividades de recuperación.",
      "Implementación de dashboards analíticos y control de datos."
    ],
    instrumentos: ["Rúbrica de Ejecución de Base de Datos", "Evaluación de Actividad Power BI"],
    programas: ["SQL Server", "Power BI", "MySQL Workbench"],
    herramientas: ["SQL", "Power BI Desktop", "Transact-SQL"],
    recursos: [
      { nombre: "Documentación oficial de MySQL", url: "https://dev.mysql.com/doc/" },
      { nombre: "Microsoft Power BI Docs", url: "https://learn.microsoft.com/es-es/power-bi/" }
    ],
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Qué herramienta líder de Microsoft se utiliza para el análisis de datos y la creación de dashboards visuales interactivos?",
      opciones: ["Power BI", "Bloc de notas", "MS Paint", "Notepad++"],
      correcta: 0,
      explicacion: "Power BI permite conectar múltiples fuentes de datos para generar visualizaciones y reportes gerenciales en tiempo real."
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
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Qué lenguaje de programación versátil se emplea en las guías individuales y automatización de este módulo?",
      opciones: ["Python", "Assembly", "Fortran 77", "COBOL"],
      correcta: 0,
      explicacion: "Python es ampliamente utilizado por su legibilidad, potencia y extensibilidad en scripts y desarrollo backend."
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
      { nombre: "MDN Web Docs", url: "https://developer.mozilla.org/es/" },
      { nombre: "GitHub Pages Documentation", url: "https://docs.github.com/es/pages" }
    ],
    evidencias: "https://github.com/MarvinLop/GitHubPage",
    quiz: {
      pregunta: "¿Qué servicio gratuito de hospedaje se utiliza para publicar este portal web interactivo?",
      opciones: ["GitHub Pages", "Un disco duro local sin red", "FTP anónimo básico", "Servidor de pruebas offline"],
      correcta: 0,
      explicacion: "GitHub Pages permite alojar sitios web estáticos directamente desde un repositorio de GitHub de forma rápida y segura."
    }
  }
];
