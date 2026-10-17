/* i18n: português (padrão), inglês e espanhol.
   O HTML permanece em pt-BR; as traduções são aplicadas via data-i18n.
   data-i18n        → texto (innerHTML) do elemento
   data-i18n-alt    → atributo alt
   data-i18n-aria   → atributo aria-label
   data-i18n-caption→ atributo data-caption
   data-i18n-title  → atributo title
*/
const I18N = {
  "meta.title": {
    en: "Portfolio — Data & development · Anahi Narieli",
    es: "Portafolio — Datos & desarrollo · Anahi Narieli",
  },
  "meta.description": {
    en: "Portfolio of Anahi Narieli Guarachi Mamani: data engineering, software development, education and projects.",
    es: "Portafolio de Anahi Narieli Guarachi Mamani: ingeniería de datos, desarrollo de software, formación y proyectos.",
  },
  "nav.skip": { en: "Skip to content", es: "Saltar al contenido" },
  "nav.brand-aria": {
    en: "Anahi Narieli — home page",
    es: "Anahi Narieli — página inicial",
  },
  "nav.menu.open": { en: "Menu +", es: "Menú +" },
  "nav.menu.close": { en: "Close ×", es: "Cerrar ×" },
  "nav.about": { en: "About me", es: "Sobre mí" },
  "nav.projects": { en: "Projects", es: "Proyectos" },
  "nav.trajectory": { en: "Journey", es: "Trayectoria" },
  "nav.contact": { en: "Let's talk ↗", es: "Hablemos ↗" },
  "nav.lang": { en: "Language", es: "Idioma" },
  "nav.main": { en: "Main navigation", es: "Navegación principal" },
  "word.sobre": { en: "About", es: "Sobre" },
  "word.projetos": { en: "Projects", es: "Proyectos" },
  "word.traj": { en: "Journey", es: "Trayectoria" },
  "word.tech": { en: "Technologies", es: "Tecnologías" },

  "hero.eyebrow": {
    en: "Data · Software · Creativity",
    es: "Datos · Software · Creatividad",
  },
  "hero.topline": {
    en: "São Paulo, Brazil<br />Portfolio / 2026",
    es: "São Paulo, Brasil<br />Portafolio / 2026",
  },
  "hero.title": {
    en: 'Hello, I am <span class="outline">Anahi.</span>',
    es: 'Hola, soy <span class="outline">Anahi.</span>',
  },
  "hero.pill-top": { en: "Data engineering", es: "Ingeniería de datos" },
  "hero.pill-bottom": { en: "Dev · Fatec ZL", es: "Dev · Fatec ZL" },
  "hero.photo-alt": {
    en: "Anahi Narieli smiling, wearing glasses and a dark blazer.",
    es: "Anahi Narieli sonriendo, con gafas y blazer oscuro.",
  },
  "hero.caption-1": {
    en: "Curiosity to understand.",
    es: "Curiosidad para entender.",
  },
  "hero.caption-2": { en: "Code to build. ↗", es: "Código para construir. ↗" },
  "hero.copy-eyebrow": {
    en: "Data engineering & development",
    es: "Ingeniería de datos & desarrollo",
  },
  "hero.intro": {
    en: "Software Development student and Data Engineering intern at IBM. I explore how applications, databases and pipelines connect.",
    es: "Estudiante de Desarrollo de Software Multiplataforma y pasante de Ingeniería de Datos en IBM. Exploro cómo se conectan las aplicaciones, las bases de datos y los pipelines.",
  },
  "hero.cta-projects": {
    en: 'Check out my projects <span aria-hidden="true">↘</span>',
    es: 'Conoce mis proyectos <span aria-hidden="true">↘</span>',
  },
  "hero.cta-about": { en: "More about me ↓", es: "Más sobre mí ↓" },
  "hero.ribbon-1": { en: "Data engineering", es: "Ingeniería de datos" },
  "hero.ribbon-2": {
    en: "Software development",
    es: "Desarrollo de software",
  },
  "hero.ribbon-3": {
    en: "Hands-on learning",
    es: "Aprendizaje en la práctica",
  },
  "hero.scroll": { en: "Scroll down", es: "Desliza" },
  "hero.scroll-aria": {
    en: "Scroll down to About me",
    es: "Desplázate a Sobre mí",
  },

  "about.eyebrow": { en: "01 / About me", es: "01 / Sobre mí" },
  "about.title": {
    en: 'Between the data<br />and the solution<span class="star" aria-hidden="true"> ✦</span>',
    es: 'Entre el dato<br />y la solución<span class="star" aria-hidden="true"> ✦</span>',
  },
  "about.p1": {
    en: "I like to understand the whole path: from the application that generates a piece of data to the process that turns that data into useful information.",
    es: "Me gusta entender el camino completo: desde la aplicación que genera un dato hasta el proceso que lo convierte en información útil.",
  },
  "about.p2": {
    en: "My education combines software development, databases and team projects. Today, my focus is on data engineering, cloud and pipelines, with interest also in backend and systems architecture.",
    es: "Mi formación combina desarrollo de software, bases de datos y proyectos en equipo. Hoy mi foco está en ingeniería de datos, cloud y pipelines, con interés también en backend y arquitectura de sistemas.",
  },
  "about.p3": {
    en: "In team projects, I also take care of organizing the work: I facilitate meetings, keep track of the backlog and help turn requirements into sprint deliverables. Since Peregrine, I have acted as Scrum Master in academic projects.",
    es: "En los proyectos en equipo también asumo la organización del trabajo: facilito reuniones, acompaño el backlog y ayudo a convertir requisitos en entregas por sprint. Desde Peregrine, actúo como Scrum Master en los proyectos académicos.",
  },
  "about.how": { en: "How I work", es: "Cómo trabajo" },
  "about.how-p": {
    en: "Data modeling, backend and work organization with Scrum: backlog, sprints, documentation and deliverable tracking.",
    es: "Modelado de datos, backend y organización del trabajo con Scrum: backlog, sprints, documentación y seguimiento de las entregas.",
  },
  "about.beyond": { en: "Beyond the code", es: "Más allá del código" },
  "about.beyond-p": {
    en: "Drawing, books, video games and tabletop RPG are also part of my repertoire.",
    es: "El dibujo, los libros, los videojuegos y el RPG de mesa también forman parte de mi repertorio.",
  },

  "projects.eyebrow": {
    en: "02 / Academic projects",
    es: "02 / Proyectos académicos",
  },
  "projects.title": {
    en: "A journey through projects.",
    es: "Una trayectoria en proyectos.",
  },
  "projects.muted": {
    en: "From the first prototype to the multiplatform application: six semesters building solutions in a team.",
    es: "Del primer prototipo a la aplicación multiplataforma: seis semestres construyendo soluciones en equipo.",
  },
  "projects.filters-aria": {
    en: "Filter academic projects",
    es: "Filtrar proyectos académicos",
  },
  "filter.all": { en: "All", es: "Todos" },
  "filter.web": { en: "Web", es: "Web" },
  "filter.mobile": { en: "Mobile", es: "Móvil" },
  "filter.desktop": { en: "Desktop", es: "Escritorio" },
  "filter.status": {
    en: "{n} projects shown.",
    es: "{n} proyectos mostrados.",
  },
  "filter.status-1": { en: "{n} project shown.", es: "{n} proyecto mostrado." },

  "sv.cover-aria": { en: "Discover Super Válido", es: "Conocer Super Válido" },
  "sv.cover-alt": {
    en: "Super Válido home screen with category menu and offers banner.",
    es: "Pantalla inicial de Super Válido con menú de categorías y banner de ofertas.",
  },
  "sv.badge-1": { en: "1st semester · 2024", es: "1.er semestre · 2024" },
  "sv.badge-2": { en: "Prototype completed", es: "Prototipo concluido" },
  "sv.desc": {
    en: "Deals on food nearing its expiration date, bringing supermarkets and consumers closer together.",
    es: "Ofertas de alimentos próximos al vencimiento para acercar supermercados y consumidores.",
  },
  "sv.role": {
    en: "My role: Technical planning & organization",
    es: "Mi rol: Planificación técnica & organización",
  },

  "pg.cover-aria": { en: "Discover Peregrine", es: "Conocer Peregrine" },
  "pg.cover-alt": {
    en: "Peregrine home page with a call to plan trips.",
    es: "Página inicial de Peregrine con llamada a planificar viajes.",
  },
  "pg.badge-1": { en: "2nd semester · 2024", es: "2.º semestre · 2024" },
  "pg.badge-2": { en: "Completed", es: "Concluido" },
  "pg.desc": {
    en: "Trip planning for women who want to travel with other women.",
    es: "Planificación de viajes para mujeres que quieren viajar con otras mujeres.",
  },
  "pg.role": {
    en: "My role: Backend, database & Scrum",
    es: "Mi rol: Backend, base de datos & Scrum",
  },

  "se.cover-aria": { en: "Discover Seren", es: "Conocer Seren" },
  "se.cover-alt": {
    en: "Seren home page presenting how it organizes appointments.",
    es: "Página inicial de Seren con la propuesta de organizar citas.",
  },
  "se.badge-1": { en: "3rd semester · 2025", es: "3.er semestre · 2025" },
  "se.badge-2": { en: "Completed", es: "Concluido" },
  "se.desc": {
    en: "Appointments, patients and payments in one place to support psychologists' routines.",
    es: "Citas, pacientes y pagos reunidos para apoyar la rutina de los psicólogos.",
  },
  "se.role": {
    en: "My role: Backend, database & Scrum",
    es: "Mi rol: Backend, base de datos & Scrum",
  },

  "pi.cover-aria": { en: "Discover Pindorama", es: "Conocer Pindorama" },
  "pi.cover-alt": {
    en: "Pindorama home page highlighting Bumba-meu-boi.",
    es: "Página inicial de Pindorama con destaque para el Bumba-meu-boi.",
  },
  "pi.badge-1": { en: "4th semester · 2025", es: "4.º semestre · 2025" },
  "pi.badge-2": { en: "Completed", es: "Concluido" },
  "pi.desc": {
    en: "Articles, events and images to discover Brazil's intangible cultural heritage.",
    es: "Artículos, eventos e imágenes para conocer el patrimonio cultural inmaterial brasileño.",
  },
  "pi.role": {
    en: "My role: API, integrations & Scrum",
    es: "Mi rol: API, integraciones & Scrum",
  },

  "po.cover-aria": { en: "Discover Poupas", es: "Conocer Poupas" },
  "po.cover-alt": {
    en: "Poupas app welcome screen.",
    es: "Pantalla de bienvenida de la aplicación Poupas.",
  },
  "po.badge-1": { en: "5th semester · 2026", es: "5.º semestre · 2026" },
  "po.badge-2": { en: "Completed", es: "Concluido" },
  "po.desc": {
    en: "Financial education for children and teenagers, with lessons and gamification features.",
    es: "Educación financiera para el público infantojuvenil, con lecciones y recursos de gamificación.",
  },
  "po.role": {
    en: "My role: Flutter frontend & Scrum",
    es: "Mi rol: Frontend Flutter & Scrum",
  },

  "gh.cover-aria": { en: "Discover Greenhouse", es: "Conocer Greenhouse" },
  "gh.cover-eyebrow": {
    en: "Grow · Organize · Connect",
    es: "Cultivar · Organizar · Conectar",
  },
  "gh.cover-sub": { en: "Flower shop management", es: "Gestión de floricultura" },
  "gh.badge-1": { en: "6th semester · 2026", es: "6.º semestre · 2026" },
  "gh.badge-2": { en: "In development", es: "En desarrollo" },
  "gh.desc": {
    en: "Flower shop management in a multiplatform application, currently in development.",
    es: "Gestión de floricultura en una aplicación multiplataforma, actualmente en desarrollo.",
  },
  "gh.role": {
    en: "My role: Database, backend & Scrum",
    es: "Mi rol: Base de datos, backend & Scrum",
  },

  "card.view": {
    en: 'View project <span aria-hidden="true">→</span>',
    es: 'Ver proyecto <span aria-hidden="true">→</span>',
  },
  "others.summary": {
    en: 'Other projects and studies <span aria-hidden="true">+</span>',
    es: 'Otros proyectos y estudios <span aria-hidden="true">+</span>',
  },
  "others.muted": {
    en: "Additional projects, outside the six-semester sequence.",
    es: "Proyectos adicionales, fuera de la secuencia de los seis semestres.",
  },

  "pl.cover-aria": {
    en: "Discover SQL Server → BigQuery",
    es: "Conocer SQL Server → BigQuery",
  },
  "pl.cover-tag": { en: "Data engineering", es: "Ingeniería de datos" },
  "pl.cover-title": {
    en: "From source<br />to insight.",
    es: "Del origen<br />al análisis.",
  },
  "pl.cover-label": { en: "Project flow", es: "Flujo del proyecto" },
  "pl.meta": { en: "Data engineering · Cloud", es: "Ingeniería de datos · Cloud" },
  "pl.desc": {
    en: "Incremental ingestion and data transformation in a Medallion architecture.",
    es: "Ingestión incremental y transformación de datos en una arquitectura Medallion.",
  },

  "cs.cover-aria": { en: "Discover ConnectStudents", es: "Conocer ConnectStudents" },
  "cs.cover-alt": {
    en: "Snapshot of the ConnectStudents interface preserved in the project repository.",
    es: "Registro de la interfaz de ConnectStudents preservado en el repositorio del proyecto.",
  },
  "cs.cover-label": { en: "Project interface", es: "Interfaz del proyecto" },
  "cs.meta": { en: "Android app · Education", es: "Aplicación Android · Educación" },
  "cs.desc": {
    en: "Communication between students, teachers and the educational institution.",
    es: "Comunicación entre estudiantes, profesores y la institución educativa.",
  },

  "rc.cover-aria": { en: "Discover Rosycoffee", es: "Conocer Rosycoffee" },
  "rc.cover-alt": {
    en: "Rosycoffee home page with menu and photo composition.",
    es: "Página inicial de Rosycoffee con menú y composición de fotografías.",
  },
  "rc.cover-label": { en: "Project interface", es: "Interfaz del proyecto" },
  "rc.meta": { en: "Website · Coffee shop", es: "Sitio web · Cafetería" },
  "rc.desc": {
    en: "A landing page presenting the menu and atmosphere of a coffee shop.",
    es: "Una landing page que presenta el menú y el ambiente de una cafetería.",
  },

  "pc.cover-aria": { en: "Discover PetCare", es: "Conocer PetCare" },
  "pc.cover-alt": {
    en: "PetCare home page presenting pet care services.",
    es: "Página inicial de PetCare con presentación de los servicios para animales.",
  },
  "pc.cover-label": { en: "Project interface", es: "Interfaz del proyecto" },
  "pc.meta": { en: "Website · Pet care", es: "Sitio web · Cuidado de animales" },
  "pc.desc": {
    en: "A proposal to bring pet owners and pet sitters closer together.",
    es: "Una propuesta para acercar a los dueños de mascotas y a los cuidadores.",
  },

  "traj.eyebrow": { en: "03 / Journey", es: "03 / Trayectoria" },
  "traj.title": { en: "Learn. Apply. Grow.", es: "Aprender. Aplicar. Evolucionar." },
  "traj.muted": {
    en: "Technical education, group projects and professional experience come together here.",
    es: "La formación técnica, los proyectos en grupo y la experiencia profesional se encuentran aquí.",
  },
  "traj.col-edu": { en: "Education", es: "Formación" },
  "traj.col-exp": { en: "Experience", es: "Experiencia" },
  "traj.edu1-date": {
    en: "2024 / 1st semester → 2026",
    es: "2024 / 1.er semestre → 2026",
  },
  "traj.edu1-role": {
    en: "Degree in Multiplatform Software Development",
    es: "Tecnología en Desarrollo de Software Multiplataforma",
  },
  "traj.edu1-p": {
    en: "Started in February 2024. Expected graduation in December 2026.",
    es: "Inicio en febrero de 2024. Previsión de conclusión en diciembre de 2026.",
  },
  "traj.edu2-date": {
    en: "July 2022 → November 2023",
    es: "Julio de 2022 → Noviembre de 2023",
  },
  "traj.edu2-role": {
    en: "Systems Development Technician",
    es: "Técnica en Desarrollo de Sistemas",
  },
  "traj.edu2-p": {
    en: "Technical degree in systems development.",
    es: "Formación técnica en desarrollo de sistemas.",
  },
  "traj.exp1-date": {
    en: "November 2025 → Present",
    es: "Noviembre de 2025 → Actualidad",
  },
  "traj.exp1-role": {
    en: "Data Engineering Intern",
    es: "Pasante de Ingeniería de Datos",
  },
  "traj.exp1-p1": {
    en: "Development and maintenance of pipelines with Python, SQL and PySpark, supporting data modeling, systems integration and the use of Google Cloud for processing and storage.",
    es: "Desarrollo y mantenimiento de pipelines con Python, SQL y PySpark, con apoyo en modelado de datos, integración entre sistemas y uso de Google Cloud para procesamiento y almacenamiento.",
  },
  "traj.exp1-p2": {
    en: "Since March 2026, working on the Data Recovery project (Vale): governance and standardization of historical data, code migration and versioning in Azure DevOps, and preparation of training materials for the team.",
    es: "Desde marzo de 2026, actuación en el proyecto Data Recovery (Vale): gobernanza y estandarización de datos históricos, migración y versionado de código en Azure DevOps y preparación de materiales de capacitación para el equipo.",
  },
  "traj.exp2-date": {
    en: "March 2023 → July 2023",
    es: "Marzo de 2023 → Julio de 2023",
  },
  "traj.exp2-role": { en: "IT Technician", es: "Técnica en TI" },
  "traj.exp2-p": {
    en: "IT infrastructure maintenance across three buildings: Wi-Fi networks, computers, projectors and electronic devices. Teaching support in Mechatronics with programming logic in C++ and Tinkercad, technical support for students and teachers, and assistance with internal events.",
    es: "Mantenimiento de la infraestructura de TI en tres edificios: redes Wi-Fi, computadoras, proyectores y dispositivos electrónicos. Apoyo pedagógico en Mecatrónica con lógica de programación en C++ y Tinkercad, soporte técnico a alumnos y profesores y apoyo en eventos internos.",
  },

  "skills.eyebrow": {
    en: "04 / Tools & technologies",
    es: "04 / Herramientas & tecnologías",
  },
  "skills.title": { en: "My technical repertoire.", es: "Mi repertorio técnico." },
  "skills.muted": {
    en: "Technologies present in my education, my professional profile and my projects.",
    es: "Tecnologías presentes en mi formación, en mi perfil profesional y en los proyectos.",
  },
  "skills.g1-h": { en: "Data & databases", es: "Datos & bases de datos" },
  "skills.g1-p": {
    en: "Python, PySpark, SQL, PostgreSQL, SQL Server and BigQuery.",
    es: "Python, PySpark, SQL, PostgreSQL, SQL Server y BigQuery.",
  },
  "skills.g2-h": { en: "Web & backend", es: "Web & backend" },
  "skills.g2-p": {
    en: "HTML, CSS, JavaScript, Node.js, Ruby and Ruby on Rails.",
    es: "HTML, CSS, JavaScript, Node.js, Ruby y Ruby on Rails.",
  },
  "skills.g3-h": { en: "Mobile", es: "Móvil" },
  "skills.g3-p": {
    en: "Kotlin Multiplatform, Flutter, Dart and Android Studio.",
    es: "Kotlin Multiplatform, Flutter, Dart y Android Studio.",
  },
  "skills.g4-h": { en: "Cloud & tools", es: "Cloud & herramientas" },
  "skills.g4-p": {
    en: "Google Cloud, Docker, Git, GitHub, Jira and Figma.",
    es: "Google Cloud, Docker, Git, GitHub, Jira y Figma.",
  },

  "learn.eyebrow": {
    en: "05 / Continuous learning",
    es: "05 / Aprendizaje continuo",
  },
  "learn.title": { en: "Courses & certifications.", es: "Cursos & certificaciones." },
  "learn.details": {
    en: "Other courses and training",
    es: "Otros cursos y capacitaciones",
  },
  "learn.details-p": {
    en: "Data Engineering with Python and SQL, Data Modeling and Relational Database and Data Warehouse Concepts, recorded in my professional profile. Exact workloads and dates are on the certificates and can be added.",
    es: "Data Engineering with Python and SQL, Data Modeling and Relational Database y Data Warehouse Concepts, registrados en mi perfil profesional. Las cargas horarias y fechas exactas constan en los certificados y pueden complementarse.",
  },
  "lang.eyebrow": { en: "06 / Connections", es: "06 / Conexiones" },
  "lang.title": { en: "Languages.", es: "Idiomas." },
  "lang.pt": { en: "Portuguese", es: "Portugués" },
  "lang.pt-lvl": { en: "Native or bilingual", es: "Nativo o bilingüe" },
  "lang.es": { en: "Spanish", es: "Español" },
  "lang.es-lvl": {
    en: "Full professional proficiency",
    es: "Competencia profesional completa",
  },
  "lang.en": { en: "English", es: "Inglés" },
  "lang.en-lvl": {
    en: "Limited professional proficiency",
    es: "Competencia profesional limitada",
  },
  "lang.note": {
    en: '<span class="star" aria-hidden="true">✦</span> Different languages, new ways to understand the world.',
    es: '<span class="star" aria-hidden="true">✦</span> Diferentes lenguas, nuevas formas de entender el mundo.',
  },

  "footer.eyebrow": { en: "Contact", es: "Contacto" },
  "footer.title": { en: "Shall we exchange ideas?", es: "¿Intercambiamos ideas?" },
  "footer.p": {
    en: "About data, software development and the paths between these two areas.",
    es: "Sobre datos, desarrollo de software y los caminos entre esas dos áreas.",
  },
  "footer.code": {
    en: "This portfolio's code ↗",
    es: "Código de este portafolio ↗",
  },
  "footer.top": { en: "Back to top ↑", es: "Volver arriba ↑" },

  /* Páginas de projeto — elementos compartilhados */
  "case.back": { en: "← All projects", es: "← Todos los proyectos" },
  "case.index-title": { en: "In this project", es: "En este proyecto" },
  "case.idx-project": { en: "01 / The project", es: "01 / El proyecto" },
  "case.idx-role": { en: "02 / My role", es: "02 / Mi participación" },
  "case.idx-stack": { en: "03 / Technologies", es: "03 / Tecnologías" },
  "case.idx-gallery": { en: "04 / Gallery", es: "04 / Galería" },
  "case.idx-code": { en: "05 / Source code", es: "05 / Código fuente" },
  "case.the-project": { en: "The project", es: "El proyecto" },
  "case.my-role": { en: "My role", es: "Mi participación" },
  "case.stack": { en: "Technologies", es: "Tecnologías" },
  "case.stack-mine": { en: "In my role", es: "En mi actuación" },
  "case.stack-all": { en: "In the full project", es: "En el proyecto completo" },
  "case.gallery": { en: "The project in screens", es: "El proyecto en pantallas" },
  "case.explore": { en: "Explore the project", es: "Explora el proyecto" },
  "case.repo": { en: "Project repository ↗", es: "Repositorio del proyecto ↗" },
  "case.next": { en: "Keep exploring", es: "Sigue explorando" },
  "case.code-btn": { en: "Explore the code ↗", es: "Explorar el código ↗" },
  "case.demo-btn": { en: "Open prototype ↗", es: "Abrir prototipo ↗" },
  "case.demo-btn-live": { en: "View live demo ↗", es: "Ver demostración ↗" },
  "viewer.title": { en: "Project gallery", es: "Galería del proyecto" },
  "viewer.close": { en: "Close ×", es: "Cerrar ×" },
  "viewer.close-aria": { en: "Close image", es: "Cerrar imagen" },
  "viewer.prev": { en: "← Previous", es: "← Anterior" },
  "viewer.prev-aria": { en: "Previous image", es: "Imagen anterior" },
  "viewer.next": { en: "Next →", es: "Siguiente →" },
  "viewer.next-aria": { en: "Next image", es: "Siguiente imagen" },
  "gallery.zoom": { en: "Enlarge: ", es: "Ampliar: " },

  /* Conteúdo das páginas de projeto */
  "case.explore-code": { en: "Explore the code", es: "Explora el código" },
  "case.gallery-p": { en: "Records of the application built by the team. The images show the full product; my contribution is described in the section above.", es: "Registros de la aplicación desarrollada por el equipo. Las imágenes muestran el producto completo; mi contribución está descrita en la sección anterior." },
  "case.index-aria": { en: "On this page", es: "En esta página" },
  "case.learned": { en: "What this experience added", es: "Lo que esta experiencia aportó" },
  "case.open-app": { en: "Open application ↗", es: "Abrir aplicación ↗" },
  "case.records": { en: "Visual records", es: "Registros visuales" },
  "case.repo-p": { en: "Structure, files and project documentation on GitHub.", es: "Estructura, archivos y documentación del proyecto en GitHub." },
  "case.repos-p": { en: "TheLovelace organization repositories with the project files and documentation.", es: "Repositorios de la organización TheLovelace con los archivos y la documentación del proyecto." },
  "case.restricted-btn": { en: "Code · restricted access ↗", es: "Código · acceso restringido ↗" },
  "case.scrum": { en: "Scrum and collaboration", es: "Scrum y colaboración" },
  "case.scrum-p": { en: "I acted as Scrum Master organizing the work: backlog structuring, sprint planning aligned with the college deadlines, task division and deliverable tracking.", es: "Actué como Scrum Master en la organización del trabajo: estructuración del backlog, planificación de sprints según los plazos de la facultad, división de tareas y seguimiento de las entregas." },
  "case.stack2": { en: "Project technologies", es: "Tecnologías del proyecto" },
  "case.stack2-p": { en: "Tools identified in the code and repository documentation.", es: "Herramientas identificadas en el código y la documentación del repositorio." },
  "case.structure": { en: "Proposal and structure", es: "Propuesta y estructura" },
  "cs.meta.description": { en: "Communication between students, teachers and the educational institution.", es: "Comunicación entre estudiantes, profesores y la institución educativa." },
  "cs.t1": { en: "Android app · Education", es: "Aplicación Android · Educación" },
  "cs.t2": { en: "Communication between students, teachers and the educational institution.", es: "Comunicación entre estudiantes, profesores y la institución educativa." },
  "cs.t3": { en: "ConnectStudents was designed to improve communication between students, teachers and school administration. Posts, notifications and information sharing make up the app's proposal.", es: "ConnectStudents fue planificado para mejorar la comunicación entre alumnos, profesores y la administración escolar. Publicaciones, notificaciones e intercambio de información componen la propuesta de la aplicación." },
  "cs.t4": { en: "The project combines Android development in Kotlin, Firebase and UML documentation, including use case, activity, class and sequence diagrams.", es: "El proyecto combina desarrollo Android en Kotlin, Firebase y documentación UML, incluyendo diagramas de casos de uso, actividades, clases y secuencia." },
  "cs.t5": { en: "I took part in the planning and development of the app, as recorded in my previous portfolio.", es: "Participé en la planificación y el desarrollo de la aplicación, según el registro de mi portafolio anterior." },
  "cs.t6": { en: "The screens, features and technologies under my responsibility still need to be detailed.", es: "Falta detallar las pantallas, funcionalidades y tecnologías que quedaron bajo mi responsabilidad." },
  "cs.t7": { en: "Snapshot of the app version. Open the image to enlarge.", es: "Registro de la versión de la aplicación. Abre la imagen para ampliar." },
  "cs.t8": { en: "Publishing interface. Open the image to enlarge.", es: "Interfaz de publicación. Abre la imagen para ampliar." },
  "cs.records-p": { en: "Screenshot preserved in the repository's “Prints tirados” folder. Historical record of the app, without a new Android run.", es: "Captura preservada en la carpeta “Prints tirados” del repositorio. Registro histórico de la aplicación, sin una nueva ejecución en Android." },
  "cs.alt1": { en: "Snapshot of the app version — ConnectStudents", es: "Registro de la versión de la aplicación — ConnectStudents" },
  "cs.alt2": { en: "Publishing interface — ConnectStudents", es: "Interfaz de publicación — ConnectStudents" },
  "cs.open1": { en: "Open image: snapshot of the app version", es: "Abrir imagen: registro de la versión de la aplicación" },
  "cs.open2": { en: "Open image: publishing interface", es: "Abrir imagen: interfaz de publicación" },
  "gh.meta.description": { en: "Flower shop management in a multiplatform application, currently in development.", es: "Gestión de floricultura en una aplicación multiplataforma, actualmente en desarrollo." },
  "gh.t1": { en: "Multiplatform application · Flower shop", es: "Aplicación multiplataforma · Floricultura" },
  "gh.t2": { en: "Flower shop management in a multiplatform application, currently in development.", es: "Gestión de floricultura en una aplicación multiplataforma, actualmente en desarrollo." },
  "gh.t3": { en: "Grow · Organize · Connect", es: "Cultivar · Organizar · Conectar" },
  "gh.t4": { en: "Flower shop management", es: "Gestión de floricultura" },
  "gh.t5": { en: "Editorial cover. The project is under development; this image does not represent an app screen.", es: "Portada editorial. El proyecto está en desarrollo; esta imagen no representa una pantalla de la aplicación." },
  "gh.t6": { en: "Greenhouse is a platform to support flower shop management. The backend provides an API to register and manage employees, customers, suppliers, categories, products, payment methods, discounts and inventory. The database model also covers orders and purchases, plant species, IoT devices, environmental readings and alert configuration.", es: "Greenhouse es una plataforma para apoyar la gestión de floriculturas. El backend ofrece una API para registrar y gestionar empleados, clientes, proveedores, categorías, productos, formas de pago, descuentos e inventario. El modelo de la base de datos también contempla pedidos y compras, especies de plantas, dispositivos IoT, lecturas ambientales y configuración de alertas." },
  "gh.t7": { en: "The project contributes to the UN Sustainable Development Goals (SDGs 8, 9 and 12) through the digitization of management, inventory control and monitoring of plant conditions.", es: "El proyecto contribuye a los Objetivos de Desarrollo Sostenible de la ONU (ODS 8, 9 y 12) mediante la digitalización de la gestión, el control de inventario y el monitoreo de las condiciones de las plantas." },
  "gh.t8": { en: "Clients share code with Kotlin Multiplatform and Compose Multiplatform, targeting Android, iOS, Desktop (JVM) and Web (JS/Wasm). The independent backend uses Kotlin/JVM, Spring Boot and Spring Data JPA, with PostgreSQL on Neon, JWT authentication and OpenAPI/Swagger documentation. Database changes are versioned with Flyway.", es: "Los clientes comparten código con Kotlin Multiplatform y Compose Multiplatform, con destinos Android, iOS, Desktop (JVM) y Web (JS/Wasm). El backend independiente utiliza Kotlin/JVM, Spring Boot y Spring Data JPA, con PostgreSQL en Neon, autenticación JWT y documentación OpenAPI/Swagger. Los cambios de la base de datos se versionan con Flyway." },
  "gh.t9": { en: "Database, backend & Scrum", es: "Base de datos, backend & Scrum" },
  "gh.t10": { en: "I am responsible for the Purchasing block: the Supplier and Purchase entities, their CRUDs and the backend flow.", es: "Soy responsable del bloque de Compras: las entidades Proveedor y Compra, sus CRUD y el flujo en el backend." },
  "gh.t11": { en: "I structured and versioned the PostgreSQL database, with SQL migrations integrated into Flyway.", es: "Estructuré y versioné la base de datos PostgreSQL, con migraciones SQL integradas a Flyway." },
  "gh.t12": { en: "I recorded the initial data load (seed) and validation queries for the database CHECK rules.", es: "Registré la carga inicial de datos (seed) y consultas de validación de las reglas CHECK de la base de datos." },
  "gh.t13": { en: "I take part in developing and organizing the Kotlin backend together with the team.", es: "Participo del desarrollo y de la organización del backend en Kotlin junto al equipo." },
  "gh.t14": { en: "I organize the project in Jira, structuring backlog, responsibilities, deadlines and deliverable tracking.", es: "Organizo el proyecto en Jira, estructurando backlog, responsabilidades, plazos y seguimiento de las entregas." },
  "gh.t15": { en: "The project brings together my work in planning, backend and data. Database versioning helps keep the structure consistent across environments and across the team's work.", es: "El proyecto reúne mi actuación en planificación, backend y datos. El versionado de la base de datos ayuda a mantener la estructura consistente entre los entornos y el trabajo del equipo." },
  "gh.t16": { en: "Work in progress", es: "Proyecto en curso" },
  "gh.t17": { en: "Greenhouse is under development. The gallery will be added as the app's screens and flows become available.", es: "Greenhouse está en desarrollo. La galería se añadirá a medida que las pantallas y los flujos de la aplicación estén disponibles." },
  "gh.t18": { en: "The repository is private. Access to the code depends on authorization from the TheLovelace organization.", es: "El repositorio es privado. El acceso al código depende de la autorización de la organización TheLovelace." },
  "gh.t19": { en: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/Greenhouse\" >Private repository · authorized access ↗</a >", es: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/Greenhouse\" >Repositorio privado · acceso autorizado ↗</a >" },
  "pc.meta.description": { en: "A proposal to bring pet owners and pet sitters closer together.", es: "Una propuesta para acercar a los dueños de mascotas y a los cuidadores." },
  "pc.t1": { en: "Website · Pet care", es: "Sitio web · Cuidado de animales" },
  "pc.t2": { en: "A proposal to bring pet owners and pet sitters closer together.", es: "Una propuesta para acercar a los dueños de mascotas y a los cuidadores." },
  "pc.t3": { en: "PetCare is a website designed to make it easier to hire pet sitters. The proposal brings together the service presentation and pages related to finding and registering participants.", es: "PetCare es un sitio web pensado para facilitar la contratación de cuidadores de animales. La propuesta reúne la presentación del servicio y páginas relacionadas con la búsqueda y el registro de participantes." },
  "pc.t4": { en: "The repository contains pages for owners and partners, search, contacts and sitter profiles. The interface presents the services and navigation paths for each audience.", es: "El repositorio contiene páginas para dueños y socios, búsqueda, contactos y perfiles de cuidadores. La interfaz presenta los servicios y caminos de navegación para cada público." },
  "pc.t5": { en: "I worked on the planning and development of the website, as described in my previous portfolio.", es: "Actué en la planificación y el desarrollo del sitio web, como se describe en mi portafolio anterior." },
  "pc.t6": { en: "The pages and tasks I developed and the technologies I personally used still need to be confirmed.", es: "Falta confirmar las páginas y tareas que desarrollé y las tecnologías que utilicé personalmente." },
  "pc.t7": { en: "Service presentation. Open the image to enlarge.", es: "Presentación del servicio. Abre la imagen para ampliar." },
  "pc.records-p": { en: "Home page rendered locally from the repository. The screenshot does not imply validation of hiring or backend services.", es: "Página inicial renderizada localmente desde el repositorio. La captura no implica validación de la contratación ni de los servicios de backend." },
  "pc.alt1": { en: "Service presentation — PetCare", es: "Presentación del servicio — PetCare" },
  "pc.open1": { en: "Open image: service presentation", es: "Abrir imagen: presentación del servicio" },
  "pg.g1": { en: "Site home screen, with Sign up and Login buttons.", es: "Pantalla inicial del sitio, con botones de Registro e Inicio de sesión." },
  "pg.g2": { en: "Password recovery page, using a code received by e-mail.", es: "Página de recuperación de contraseña mediante un código recibido por correo electrónico." },
  "pg.g3": { en: "Trip search page. You can search by filling in Origin, Destination, Departure Date and Return Date.", es: "Página de búsqueda de viajes. Se puede buscar completando Origen, Destino, Fecha de ida y Fecha de regreso." },
  "pg.g4": { en: "Trip and organizer details page, with a 'Sign me up' button at the bottom.", es: "Página de detalles del viaje y de la organizadora, con el botón 'Inscribirme' en la parte inferior." },
  "pg.g5": { en: "Page for creating a new trip listing.", es: "Página para crear un nuevo anuncio de viaje." },
  "pg.g6": { en: "Page showing the trips the user is signed up for, the ones she created or already completed.", es: "Página que muestra los viajes en los que la usuaria está inscrita, los que creó o ya concluyó." },
  "pg.hero-cap": { en: "Project home page developed as a team.", es: "Página inicial del proyecto desarrollado en equipo." },
  "pg.meta.description": { en: "Trip planning for women who want to travel with other women.", es: "Planificación de viajes para mujeres que quieren viajar con otras mujeres." },
  "pg.t1": { en: "Web application · Travel", es: "Aplicación web · Viajes" },
  "pg.t2": { en: "Trip planning for women who want to travel with other women.", es: "Planificación de viajes para mujeres que quieren viajar con otras mujeres." },
  "pg.t3": { en: "Peregrine brings together trip planning, promotion and search. The proposal allows women to organize itineraries and find other travelers to join, with registration, profile validation and administration steps.", es: "Peregrine reúne planificación, difusión y búsqueda de viajes. La propuesta permite que las mujeres organicen itinerarios y encuentren otras viajeras para participar, con etapas de registro, validación de perfil y administración." },
  "pg.t4": { en: "The JavaScript backend uses Node.js and Express. Handlebars templates render the pages, and the data layer uses MySQL with Sequelize. The interface includes trip search, details and management, plus the access flows.", es: "El backend en JavaScript utiliza Node.js y Express. Las plantillas Handlebars renderizan las páginas y la capa de datos utiliza MySQL con Sequelize. La interfaz incluye búsqueda, detalles y gestión de viajes, además de los flujos de acceso." },
  "pg.t5": { en: "Backend, database & Scrum", es: "Backend, base de datos & Scrum" },
  "pg.t6": { en: "I worked on structuring the relational database and integrating the data with the backend.", es: "Trabajé en la estructuración de la base de datos relacional y en la integración de los datos con el backend." },
  "pg.t7": { en: "I took part in the login, validation flows and the operations to query and update information.", es: "Participé en los flujos de inicio de sesión, validación y en las operaciones de consulta y actualización de información." },
  "pg.t8": { en: "I implemented and adjusted trip flows, including search, details, data display and integration of the Handlebars pages.", es: "Implementé y ajusté flujos de viajes, incluyendo búsqueda, detalles, visualización de datos e integración de las páginas Handlebars." },
  "pg.t9": { en: "I helped establish a commit standard to make changes easier to follow.", es: "Ayudé a establecer una estandarización de commits para facilitar el seguimiento de los cambios." },
  "pg.t10": { en: "I deepened my modeling and integration between database, business logic and dynamic pages. I also consolidated the organization of functional and non-functional requirements, diagrams and sprint deliverables.", es: "Profundicé el modelado y la integración entre base de datos, lógica de negocio y páginas dinámicas. También consolidé la organización de requisitos funcionales y no funcionales, diagramas y entregas por sprint." },
  "pi.g1": { en: "Opening screen with featured articles gallery (carousel).", es: "Pantalla de apertura con galería de artículos destacados (carrusel)." },
  "pi.g2": { en: "Article listing screen with title search bar.", es: "Pantalla de listado de artículos con barra de búsqueda por título." },
  "pi.g3": { en: "Gallery of images attached to articles and events.", es: "Galería de imágenes adjuntas en artículos y eventos." },
  "pi.g4": { en: "Article view screen, with audio reading option (accessibility feature).", es: "Pantalla de visualización del artículo, con opción de lectura por audio (recurso de accesibilidad)." },
  "pi.g5": { en: "Map of articles related to regions of Brazil.", es: "Mapa de artículos relacionados con regiones de Brasil." },
  "pi.g6": { en: "New article registration screen.", es: "Pantalla de registro de un nuevo artículo." },
  "pi.hero-cap": { en: "Project home page developed as a team.", es: "Página inicial del proyecto desarrollado en equipo." },
  "pi.meta.description": { en: "Articles, events and images to discover Brazil's intangible cultural heritage.", es: "Artículos, eventos e imágenes para conocer el patrimonio cultural inmaterial brasileño." },
  "pi.t1": { en: "Web application · Brazilian culture", es: "Aplicación web · Cultura brasileña" },
  "pi.t2": { en: "Articles, events and images to discover Brazil's intangible cultural heritage.", es: "Artículos, eventos e imágenes para conocer el patrimonio cultural inmaterial brasileño." },
  "pi.t3": { en: "Pindorama presents manifestations of Brazil's intangible cultural heritage through articles, events and visual resources. The proposal brings the public closer to these cultural references and highlights their preservation.", es: "Pindorama presenta manifestaciones del patrimonio cultural inmaterial brasileño a través de artículos, eventos y recursos visuales. La propuesta acerca al público a esas referencias culturales y destaca su preservación." },
  "pi.t4": { en: "Frontend and backend were organized in separate repositories. The React interface consumes a Ruby on Rails API with PostgreSQL. The API includes resources for articles, events, images and contact, with Cloudinary for the image flow.", es: "El frontend y el backend se organizaron en repositorios separados. La interfaz React consume una API en Ruby on Rails con PostgreSQL. La API incluye recursos para artículos, eventos, imágenes y contacto, con Cloudinary para el flujo de imágenes." },
  "pi.t5": { en: "API, integrations & Scrum", es: "API, integraciones & Scrum" },
  "pi.t6": { en: "I joined the backend team with Isabella and Amanda, working on the Ruby on Rails API.", es: "Integré el equipo de backend con Isabella y Amanda, trabajando en la API en Ruby on Rails." },
  "pi.t7": { en: "I refactored article methods and flows and took part in implementing and adjusting image upload and information storage with Cloudinary.", es: "Refactoricé métodos y flujos de artículos y participé en la implementación y los ajustes de carga y almacenamiento de información de imágenes con Cloudinary." },
  "pi.t8": { en: "I implemented the e-mail contact flow.", es: "Implementé el flujo de contacto por correo electrónico." },
  "pi.t9": { en: "I added and organized models, migrations and controllers, including structures related to authors.", es: "Añadí y organicé models, migrations y controllers, incluyendo estructuras relacionadas con autores." },
  "pi.t10": { en: "I made targeted interface adjustments to connect features to the API.", es: "Hice ajustes puntuales en la interfaz para conectar recursos a la API." },
  "pi.t11": { en: "I worked with an API separate from the frontend and external integrations, reinforcing the organization between persistence, services and interface.", es: "Trabajé con una API separada del frontend y con integraciones externas, reforzando la organización entre persistencia, servicios e interfaz." },
  "pi.t18": { en: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/api-pindorama\" >API · my main contribution ↗</a >", es: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/api-pindorama\" >API · mi principal actuación ↗</a >" },
  "pi.t19": { en: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/sistema-web-pindorama\" >Web interface ↗</a >", es: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/sistema-web-pindorama\" >Interfaz web ↗</a >" },
  "pl.meta.description": { en: "Incremental ingestion and data transformation in a Medallion architecture.", es: "Ingestión incremental y transformación de datos en una arquitectura Medallion." },
  "pl.t1": { en: "Data engineering · Cloud", es: "Ingeniería de datos · Cloud" },
  "pl.t2": { en: "Incremental ingestion and data transformation in a Medallion architecture.", es: "Ingestión incremental y transformación de datos en una arquitectura Medallion." },
  "pl.t3": { en: "Data engineering", es: "Ingeniería de datos" },
  "pl.t4": { en: "From source<br />to insight.", es: "Del origen<br />al análisis." },
  "pl.t5": { en: "This pipeline simulates synchronizing a SQL Server source with BigQuery. Python ingestion identifies new, changed and removed records; Dataform organizes the analytical transformations.", es: "Este pipeline simula la sincronización de un origen SQL Server con BigQuery. La ingestión en Python identifica registros nuevos, modificados y eliminados; Dataform organiza las transformaciones analíticas." },
  "pl.t6": { en: "The Bronze layer receives the source data. Silver normalizes and types the records. Gold consolidates the data for analysis, including temporal dimensions and metrics.", es: "La capa Bronze recibe los datos de origen. Silver normaliza y tipifica los registros. Gold consolida los datos para el análisis, incluyendo dimensiones temporales y métricas." },
  "pl.t7": { en: "The description of my contribution is under review.", es: "La descripción de mi contribución está en revisión." },
  "pl.t8": { en: "My specific contribution to ingestion, transformations and cloud configuration still needs to be described.", es: "Falta describir mi contribución específica en la ingestión, las transformaciones y la configuración cloud." },
  "pl.records-p": { en: "Editorial diagram based on the flow documented in the README; it is not an execution capture.", es: "Esquema editorial basado en el flujo documentado en el README; no es una captura de ejecución." },
  "po.g1": { en: "App opening screen, with buttons for the Sign up and Login screens (mobile).", es: "Pantalla de apertura de la aplicación, con botones para las pantallas de Registro e Inicio de sesión (móvil)." },
  "po.g2": { en: "Learning Path screen, with lessons organized by modules (mobile).", es: "Pantalla de Ruta de Aprendizaje, con lecciones organizadas por módulos (móvil)." },
  "po.g3": { en: "Financial math terms Dictionary screen, with interactive flashcards (mobile).", es: "Pantalla de Diccionario de términos de matemática financiera, con flashcards interactivas (móvil)." },
  "po.g4": { en: "User profile Edit screen (mobile).", es: "Pantalla de Edición de perfil de usuario (móvil)." },
  "po.g5": { en: "Modal to change the user's avatar (mobile).", es: "Modal para cambiar el avatar del usuario (móvil)." },
  "po.g6": { en: "Administrator Login form (desktop).", es: "Formulario de Inicio de sesión del Administrador (escritorio)." },
  "po.hero-cap": { en: "Welcome screen of the team-developed project.", es: "Pantalla de bienvenida del proyecto desarrollado en equipo." },
  "po.meta.description": { en: "Financial education for children and teenagers, with lessons and gamification features.", es: "Educación financiera para el público infantojuvenil, con lecciones y recursos de gamificación." },
  "po.t1": { en: "Mobile & desktop · Financial education", es: "Móvil & escritorio · Educación financiera" },
  "po.t2": { en: "Financial education for children and teenagers, with lessons and gamification features.", es: "Educación financiera para el público infantojuvenil, con lecciones y recursos de gamificación." },
  "po.t3": { en: "Poupas turns financial math content into a learning experience for children and teenagers. The app brings together a lesson path, exercises, achievements and a terms dictionary.", es: "Poupas transforma contenidos de matemática financiera en una experiencia de aprendizaje para niños y adolescentes. La aplicación reúne una ruta de lecciones, ejercicios, logros y un diccionario de términos." },
  "po.t4": { en: "The frontend was developed in Flutter/Dart, with experiences for mobile and desktop. The project also has a C#/.NET API and PostgreSQL, developed by other team members.", es: "El frontend fue desarrollado en Flutter/Dart, con experiencias para móvil y escritorio. El proyecto también tiene una API en C#/.NET y PostgreSQL, desarrollada por otras integrantes del equipo." },
  "po.t5": { en: "Flutter frontend & Scrum", es: "Frontend Flutter & Scrum" },
  "po.t6": { en: "I developed frontend screens and interactions in Flutter/Dart, including welcome, login and avatar change.", es: "Desarrollé pantallas e interacciones del frontend en Flutter/Dart, incluyendo bienvenida, inicio de sesión y cambio de avatar." },
  "po.t7": { en: "I adjusted styles, pop-ups, navigation and responsive behavior between mobile and desktop.", es: "Ajusté estilos, pop-ups, navegación y comportamiento responsivo entre móvil y escritorio." },
  "po.t8": { en: "I contributed to the dictionary pages and flashcard widgets, per the implementation records in the repository.", es: "Contribuí con las páginas del diccionario y los widgets de flashcards, según los registros de implementación en el repositorio." },
  "po.t9": { en: "I kept the deliverables and teamwork organized.", es: "Mantuve la organización de las entregas y del trabajo en equipo." },
  "po.t10": { en: "This semester, I concentrated my technical work entirely on the frontend. It was an opportunity to learn Flutter and build responsive interfaces; I did not work on Poupas' backend or database.", es: "Este semestre concentré mi actuación técnica íntegramente en el frontend. Fue una oportunidad para aprender Flutter y construir interfaces responsivas; no trabajé en el backend ni en la base de datos de Poupas." },
  "po.t17": { en: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/Poupas\" >Flutter app · my contribution ↗</a >", es: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/Poupas\" >Aplicación Flutter · mi actuación ↗</a >" },
  "po.t18": { en: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/Extrato_API\" >API developed by the team ↗</a >", es: "<a class=\"text-link\" href=\"https://github.com/TheLovelace/Extrato_API\" >API desarrollada por el equipo ↗</a >" },
  "rc.meta.description": { en: "A landing page presenting the menu and atmosphere of a coffee shop.", es: "Una landing page que presenta el menú y el ambiente de una cafetería." },
  "rc.t1": { en: "Website · Coffee shop", es: "Sitio web · Cafetería" },
  "rc.t2": { en: "A landing page presenting the menu and atmosphere of a coffee shop.", es: "Una landing page que presenta el menú y el ambiente de una cafetería." },
  "rc.t3": { en: "Rosycoffee presents a coffee shop and its products on a landing page with a striking identity. The goal is to bring visitors closer to the brand and offer a first contact with the menu and the atmosphere.", es: "Rosycoffee presenta una cafetería y sus productos en una landing page de identidad marcante. El objetivo es acercar a los visitantes a la marca y ofrecer un primer contacto con el menú y el ambiente." },
  "rc.t4": { en: "The site organizes the coffee shop presentation, menu, news, reviews and location. The repository also contains registration and confirmation pages.", es: "El sitio organiza la presentación de la cafetería, el menú, novedades, reseñas y ubicación. El repositorio también contiene páginas de registro y confirmación." },
  "rc.t5": { en: "The description of my contribution is under review.", es: "La descripción de mi contribución está en revisión." },
  "rc.t6": { en: "Which parts of the layout, implementation and interactions were developed by me still needs to be confirmed.", es: "Falta confirmar qué partes del layout, de la implementación y de las interacciones fueron desarrolladas por mí." },
  "rc.t7": { en: "Home page and start of the menu. Open the image to enlarge.", es: "Página inicial e inicio del menú. Abre la imagen para ampliar." },
  "rc.records-p": { en: "Home page run locally from the repository code.", es: "Página inicial ejecutada localmente desde el código del repositorio." },
  "rc.alt1": { en: "Home page and start of the menu — Rosycoffee", es: "Página inicial e inicio del menú — Rosycoffee" },
  "rc.open1": { en: "Open image: home page and start of the menu", es: "Abrir imagen: página inicial e inicio del menú" },
  "se.g1": { en: "Seren opening screen, with a button that leads to the Login screen.", es: "Pantalla de apertura de Seren, con botón que dirige a la pantalla de Inicio de sesión." },
  "se.g2": { en: "Home page with side menu, indicators, shortcut buttons and calendar.", es: "Página inicial (Home) con menú lateral, indicadores, botones de atajo y calendario." },
  "se.g3": { en: "Patients table, with Filters, Export and options to Add, Edit or Delete a patient.", es: "Tabla de Pacientes, con Filtros, Exportación y opciones para Añadir, Editar o Eliminar un paciente." },
  "se.g4": { en: "Session scheduling form.", es: "Formulario de programación de sesión." },
  "se.g5": { en: "Appointments list. Clicking 'Start consultation' redirects the user to the registered virtual session link.", es: "Lista de Citas. Al hacer clic en 'Iniciar atención' el usuario es redirigido al enlace de la sesión virtual registrada." },
  "se.g6": { en: "Settings screen with Accessibility features (Screen reading and Libras).", es: "Pantalla de Configuración con recursos de Accesibilidad (Lectura de pantalla y Libras)." },
  "se.hero-cap": { en: "Project home page developed as a team.", es: "Página inicial del proyecto desarrollado en equipo." },
  "se.meta.description": { en: "Appointments, patients and payments in one place to support psychologists' routines.", es: "Citas, pacientes y pagos reunidos para apoyar la rutina de los psicólogos." },
  "se.t1": { en: "Web application · Psychology", es: "Aplicación web · Psicología" },
  "se.t2": { en: "Appointments, patients and payments in one place to support psychologists' routines.", es: "Citas, pacientes y pagos reunidos para apoyar la rutina de los psicólogos." },
  "se.t3": { en: "Seren is a management platform for psychology professionals. The proposal centralizes appointment organization, patient registration and payment control, with features to follow the professional routine.", es: "Seren es una plataforma de gestión para profesionales de psicología. La propuesta centraliza la organización de las citas, el registro de pacientes y el control de pagos, con recursos para acompañar la rutina profesional." },
  "se.t4": { en: "The application combines a React interface with a JavaScript, Node.js and Express backend. MongoDB was adopted to meet the academic requirement of using a non-relational database.", es: "La aplicación combina una interfaz React con un backend en JavaScript, Node.js y Express. MongoDB fue adoptado para cumplir el requisito académico de usar una base de datos no relacional." },
  "se.t5": { en: "Backend, database & Scrum", es: "Backend, base de datos & Scrum" },
  "se.t6": { en: "I took part in developing the JavaScript backend and the MongoDB integration.", es: "Participé del desarrollo del backend en JavaScript y de la integración con MongoDB." },
  "se.t7": { en: "I collaborated on organizing the application's routes, controllers and services.", es: "Colaboré en la organización de las rutas, controllers y servicios de la aplicación." },
  "se.t8": { en: "I kept a strong role in planning and documentation, aligning the team's responsibilities and deliverables.", es: "Mantuve una actuación fuerte en planificación y documentación, alineando las responsabilidades y entregas del equipo." },
  "se.t9": { en: "I expanded my experience to a non-relational database and deepened the separation of responsibilities in the backend. My technical contribution focused on backend and data; the interface was developed by the team's colleagues.", es: "Amplié mi experiencia a una base de datos no relacional y profundicé la separación de responsabilidades en el backend. Mi contribución técnica se concentró en backend y datos; la interfaz fue desarrollada por las compañeras del equipo." },
  "sv.g1": { en: "Home screen showing the product categories menu and featured banner.", es: "Pantalla inicial con el menú de categorías de productos y banner destacado." },
  "sv.g2": { en: "List of products nearing their expiration date.", es: "Lista de productos próximos al vencimiento." },
  "sv.g3": { en: "Site's introductory page (About Super Válido).", es: "Página introductoria del sitio (Sobre Super Válido)." },
  "sv.g4": { en: "User registration form (as consumer or business).", es: "Formulario de registro del usuario (como consumidor o empresa)." },
  "sv.g5": { en: "User login form.", es: "Formulario de inicio de sesión del usuario." },
  "sv.g6": { en: "Frequently Asked Questions (FAQ) and user support page.", es: "Página de Preguntas Frecuentes (FAQ) y soporte al usuario." },
  "sv.hero-cap": { en: "Home screen of the team-developed project.", es: "Pantalla inicial del proyecto desarrollado en equipo." },
  "sv.meta.description": { en: "Deals on food nearing its expiration date, bringing supermarkets and consumers closer together.", es: "Ofertas de alimentos próximos al vencimiento para acercar supermercados y consumidores." },
  "sv.t1": { en: "Web prototype · Conscious consumption", es: "Prototipo web · Consumo consciente" },
  "sv.t2": { en: "Deals on food nearing its expiration date, bringing supermarkets and consumers closer together.", es: "Ofertas de alimentos próximos al vencimiento para acercar supermercados y consumidores." },
  "sv.t3": { en: "Super Válido was born from the proposal to reduce food waste and make access to deals easier. The prototype presents products nearing expiration and the navigation paths for consumers and establishments.", es: "Super Válido nació de la propuesta de reducir el desperdicio de alimentos y facilitar el acceso a ofertas. El prototipo presenta productos próximos al vencimiento y los caminos de navegación para consumidores y establecimientos." },
  "sv.t4": { en: "The first semester's deliverable was a static prototype in HTML, CSS and JavaScript. The screens represent catalog, registration, login and information about the proposal; integration with inventories and database persistence remained as evolution possibilities.", es: "La entrega del primer semestre fue un prototipo estático en HTML, CSS y JavaScript. Las pantallas representan catálogo, registro, inicio de sesión e información sobre la propuesta; la integración con inventarios y la persistencia en base de datos quedaron como posibilidades de evolución." },
  "sv.t5": { en: "Technical planning & organization", es: "Planificación técnica & organización" },
  "sv.t6": { en: "I supported the planning of the solution's logic and flows, with interest in the future backend and data structure.", es: "Apoyé la planificación de la lógica y los flujos de la solución, con interés en la futura estructura de backend y de datos." },
  "sv.t7": { en: "I took part in organizing the work and aligning the team's tasks.", es: "Participé de la organización del trabajo y de la alineación de las tareas del equipo." },
  "sv.t8": { en: "Project organization", es: "Organización del proyecto" },
  "sv.t9": { en: "It was my first contact with organizing a team project in college. The more formal structuring of backlog and sprints came in the following projects.", es: "Fue mi primer contacto con la organización de un proyecto en equipo en la universidad. La estructuración más formal de backlog y sprints llegó en los proyectos siguientes." },
  "sv.t10": { en: "This project marked the beginning of my interest in backend and databases, still in the context of a proposal without an implemented server or database.", es: "Este proyecto marcó el inicio de mi interés por el backend y las bases de datos, aún en el contexto de una propuesta sin servidor ni base de datos implementados." },
  "sv.t11": { en: "Technical planning, flow definition and team organization, in an HTML/CSS/JavaScript prototype.", es: "Planificación técnica, definición de flujos y organización del equipo, en un prototipo HTML/CSS/JavaScript." },
  "sv.t12": { en: "Project organization", es: "Organización del proyecto" },
  "pl.t9": { en: "A real capture of the pipeline execution or its results still needs to be added.", es: "Falta añadir una captura real de la ejecución del pipeline o de sus resultados." },
};

let i18nLang = "pt";

function i18nT(key, lang) {
  const entry = I18N[key];
  if (!entry) return null;
  const l = lang || i18nLang;
  return l === "pt" ? null : entry[l] || null;
}

function applyLang(lang) {
  i18nLang = lang;
  const isPt = lang === "pt";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el._i18nOrig === undefined) el._i18nOrig = el.innerHTML;
    el.innerHTML = isPt ? el._i18nOrig : i18nT(el.dataset.i18n, lang) || el._i18nOrig;
  });
  const attrMap = [
    ["i18nAlt", "alt"],
    ["i18nAria", "aria-label"],
    ["i18nCaption", "data-caption"],
    ["i18nTitle", "title"],
    ["i18nContent", "content"],
  ];
  document
    .querySelectorAll(
      "[data-i18n-alt],[data-i18n-aria],[data-i18n-caption],[data-i18n-title],[data-i18n-content]",
    )
    .forEach((el) => {
      attrMap.forEach(([dataKey, attr]) => {
        const key = el.dataset[dataKey];
        if (!key) return;
        const store = "_i18n_" + attr;
        if (el[store] === undefined) el[store] = el.getAttribute(attr);
        const value = isPt ? el[store] : i18nT(key, lang) || el[store];
        if (value === null) el.removeAttribute(attr);
        else el.setAttribute(attr, value);
      });
    });
  document.querySelectorAll("[data-i18n-caption]").forEach((el) => {
    const cap = el.getAttribute("data-caption");
    if (cap == null) return;
    el.setAttribute(
      "aria-label",
      (isPt ? "Ampliar: " : i18nT("gallery.zoom") || "Ampliar: ") + cap,
    );
  });

  document.documentElement.lang = { pt: "pt-BR", en: "en", es: "es" }[lang];

  const menuButton = document.querySelector(".menu-toggle");
  if (menuButton) {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.textContent = isPt
      ? open ? "Fechar ×" : "Menu +"
      : i18nT(open ? "nav.menu.close" : "nav.menu.open", lang);
  }
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang } }));
}

function setLang(lang, persist) {
  applyLang(lang);
  if (persist !== false) {
    try {
      localStorage.setItem("portfolio-lang", lang);
    } catch (e) {}
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const saved =
    params.get("lang") ||
    (() => {
      try {
        return localStorage.getItem("portfolio-lang");
      } catch (e) {
        return null;
      }
    })();
  if (saved && saved !== "pt") applyLang(saved);
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang)),
  );
});

window.i18n = { t: i18nT, lang: () => i18nLang };
