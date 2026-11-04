const modulosData = [
  {
    id: "mod-3-0",
    nombre: "Módulo 3.0: Orientación de estudiantes al proceso educativo del tercer año",
    docente: "INDEL",
    resumen: "Inducción y lineamientos generales para el desarrollo del tercer año de bachillerato técnico vocacional.",
    aprendizajes: [
      "Conocimiento de normativas institucionales y pautas de convivencia.",
      "Planificación y organización de las metas académicas y técnicas del año."
    ],
    instrumentos: ["Guía de orientación institucional", "Registro de asistencia y acuerdos"],
    programas: ["Google Classroom", "Google Meet"],
    herramientas: ["Documentos institucionales", "Plataformas educativas"],
    recursos: [{ nombre: "Portal Educativo INDEL", url: "https://clases.edu.sv" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  },
  {
    id: "mod-3-2",
    nombre: "Módulo 3.2: Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "INDEL",
    resumen: "Diagnóstico, prevención y corrección de fallas en equipos informáticos y sistemas de software.",
    aprendizajes: [
      "Mantenimiento preventivo y correctivo de hardware y software.",
      "Resguardo de información y aseguramiento de respaldos (backups)."
    ],
    instrumentos: ["Bitácora de mantenimiento técnico", "Lista de cotejo para diagnóstico de equipos"],
    programas: ["Herramientas de diagnóstico de sistema", "Sistemas operativos"],
    herramientas: ["Software de respaldo", "Utilidades del sistema"],
    recursos: [{ nombre: "Microsoft Learn", url: "https://learn.microsoft.com/es-es/" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  },
  {
    id: "mod-3-3",
    nombre: "Módulo 3.3: Administración de Bases de Datos",
    docente: "Javier Mineros",
    resumen: "Gestión avanzada, optimización, seguridad y control de acceso en sistemas de bases de datos relacionales.",
    aprendizajes: [
      "Configuración de usuarios, roles y permisos de seguridad en bases de datos.",
      "Optimización de consultas y creación de respaldos automatizados."
    ],
    instrumentos: ["Rúbrica de administración y seguridad SQL", "Guía práctica de respaldos"],
    programas: ["MySQL Workbench", "SQL Server Management Studio", "XAMPP"],
    herramientas: ["SQL", "MySQL", "phpMyAdmin"],
    recursos: [{ nombre: "Documentación de MySQL", url: "https://dev.mysql.com/doc/" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  },
  {
    id: "mod-3-4",
    nombre: "Módulo 3.4: Elaboración de documentación de Sistemas informáticos",
    docente: "INDEL",
    resumen: "Redacción de manuales técnicos, manuales de usuario y especificaciones funcionales de software.",
    aprendizajes: [
      "Estructuración de manuales técnicos y guías de usuario claras.",
      "Documentación de flujos de procesos y diagramas de arquitectura de software."
    ],
    instrumentos: ["Guía de estandarización de documentos", "Rúbrica de manual técnico"],
    programas: ["Visual Studio Code", "Markdown Editors", "Microsoft Word"],
    herramientas: ["Markdown", "Plantillas de documentación", "Git"],
    recursos: [{ nombre: "Docs de GitHub", url: "https://docs.github.com/es" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  },
  {
    id: "mod-3-8",
    nombre: "Módulo 3.8: Proyecto innovador de Desarrollo de Software",
    docente: "INDEL",
    resumen: "Diseño y construcción de una solución tecnológica integral orientada a solventar una necesidad real.",
    aprendizajes: [
      "Aplicación del ciclo de vida del desarrollo de software en un proyecto real.",
      "Integración de bases de datos, interfaces web y lógica de negocio."
    ],
    instrumentos: ["Evaluación de prototipo funcional", "Rúbrica de defensa del proyecto"],
    programas: ["Visual Studio Code", "Git", "GitHub Pages"],
    herramientas: ["HTML5", "CSS3", "JavaScript", "Control de versiones"],
    recursos: [{ nombre: "MDN Web Docs", url: "https://developer.mozilla.org/es/" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  },
  {
    id: "mod-btv-3-1",
    nombre: "BTVDS 3.1: Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Arcides Canales",
    resumen: "Creación de aplicaciones funcionales enfocadas en resolver problemáticas específicas del entorno.",
    aprendizajes: [
      "Programación estructurada y orientada a objetos para la lógica de aplicaciones.",
      "Validación de requerimientos del usuario y pruebas de software."
    ],
    instrumentos: ["Guía de desarrollo de software", "Lista de pruebas unitarias"],
    programas: ["Visual Studio Code", "Navegador Web"],
    herramientas: ["JavaScript", "HTML/CSS", "Git"],
    recursos: [{ nombre: "MDN Web Docs", url: "https://developer.mozilla.org/es/" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  },
  {
    id: "mod-movil-2",
    nombre: "Módulo 2: Desarrollo de componentes para dispositivos móviles",
    docente: "Arcides Canales",
    resumen: "Construcción de interfaces y módulos adaptados para plataformas móviles.",
    aprendizajes: [
      "Diseño adaptable y responsivo enfocado en pantallas táctiles.",
      "Estructuración de componentes reutilizables."
    ],
    instrumentos: ["Guía de diseño móvil responsivo", "Rúbrica de componentes"],
    programas: ["Visual Studio Code", "Emuladores móviles"],
    herramientas: ["CSS Flexbox/Grid", "Media Queries"],
    recursos: [{ nombre: "Google Developers", url: "https://developers.google.com/" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  },
  {
    id: "mod-ingles-3",
    nombre: "Módulo 3: Conversación de inglés sobre mantenimiento de sistemas informáticos",
    docente: "INDEL",
    resumen: "Vocabulario técnico en inglés aplicado al soporte técnico y mantenimiento de equipos.",
    aprendizajes: [
      "Términos técnicos en inglés para hardware, software y redes.",
      "Simulación de atención a usuarios y reporte de fallas en inglés."
    ],
    instrumentos: ["Lista de vocabulario técnico", "Evaluación oral de soporte"],
    programas: ["Google Meet", "Plataformas de comunicación"],
    herramientas: ["Diccionarios técnicos", "Glosarios bilingües"],
    recursos: [{ nombre: "Microsoft Learn Inglés", url: "https://learn.microsoft.com/" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  },
  {
    id: "mod-empresa-4",
    nombre: "Modúlo 4: Puesta en marcha de la empresa en asociatividad cooperativa",
    docente: "INDEL",
    resumen: "Fundamentos de asociatividad cooperativa y creación de modelos de emprendimiento tecnológico.",
    aprendizajes: [
      "Estructuración de planes de negocio bajo el modelo cooperativo.",
      "Organización administrativa y financiera básica de una empresa."
    ],
    instrumentos: ["Guía de plan de negocio cooperativo", "Evaluación de proyecto empresarial"],
    programas: ["Hojas de cálculo", "Editores de texto"],
    herramientas: ["Modelos Canvas", "Presupuestos"],
    recursos: [{ nombre: "Portal MIPYME", url: "https://www.minec.gob.sv" }],
    evidencias: "https://github.com/marvinlop/GitHubPage"
  }
];
