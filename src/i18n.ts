export type Lang = "en" | "es" | "de";

const en = {
  nav: { about: "About", classes: "Classes", pricing: "Pricing", booking: "Book", faq: "FAQ" },
  cta_book: "Book a class",
  cta_free: "Free 20-min intro",

  hero_kicker: "Online Spanish · From Valencia",
  hero_title_1: "Hola, I’m Julia.",
  hero_title_2: "Let’s learn Spanish",
  hero_title_3: "together.",
  hero_sub:
    "I’m a real qualified teacher — not just a native speaker. Private classes from A1 to C1, exam prep & tutoring. Conversations that feel like coffee with a friend, but with grammar that actually sticks.",
  hero_pill_1: "4+ years teaching",
  hero_pill_2: "A1 — C1",
  hero_pill_3: "DELE / SIELE",
  hero_pill_4: "from €40€ / hour",

  cred_kicker: "Why me",
  cred_title_1: "Not just a native speaker —",
  cred_title_2: "a real teacher.",
  cred_intro:
    "Anyone who grew up in Madrid speaks Spanish. Teaching it well is something else. Here’s how I trained for it.",
  cred_1_label: "01 / DEGREE",
  cred_1_t: "BA in Translation & Interpreting",
  cred_1_d: "Spanish ↔ English, French. Three languages, deep grammar.",
  cred_2_label: "02 / MASTER",
  cred_2_t: "Master’s in Teaching + ELE specialization",
  cred_2_d: "Trained specifically to teach Spanish as a foreign language.",
  cred_3_label: "03 / EXPERIENCE",
  cred_3_t: "4+ years, group + private",
  cred_3_d: "Hundreds of hours, all levels, dozens of nationalities.",

  ele_label: "ELE — Español como Lengua Extranjera",
  ele_title: "What does ELE mean?",
  ele_desc:
    "ELE stands for Español como Lengua Extranjera — the official Spanish qualification for teaching Spanish as a foreign language. It's not a language proficiency certificate. It means Julia has been formally trained in language acquisition theory, communicative methodology, curriculum design for non-native speakers, and error analysis. Most native speakers don't have it. Julia does.",

  cert_kicker: "Official certifications",
  cert_title_1: "Certified for the",
  cert_title_2: "real exams.",
  cert_intro:
    "Trained to prepare students for the three official Spanish-language certifications. Targeted prep, mock papers, feedback that maps to the actual marking criteria.",
  cert_for_label: "Levels",
  cert_format_label: "Format",
  certs: [
    {
      code: "DELE",
      org: "Instituto Cervantes",
      desc: "The official Spanish diploma. Recognized worldwide for university, work and residency.",
      levels: "A1 · A2 · B1 · B2 · C1 · C2",
      format: "Reading · Listening · Writing · Speaking",
    },
    {
      code: "SIELE",
      org: "Cervantes · Salamanca · UNAM",
      desc: "Modern online exam, single-test, results in 3 weeks. Modular by skill.",
      levels: "Aligned A1 — C1",
      format: "Online · 4 modular skills",
    },
    {
      code: "CCSE",
      org: "Instituto Cervantes",
      desc: "Knowledge test for Spanish nationality. Constitution, geography, culture.",
      levels: "Pass / Fail",
      format: "25 questions · multiple choice",
    },
  ],
  cert_disclaimer: "Logos shown for reference. Official artwork from Instituto Cervantes & SIELE.",

  levels_kicker: "What we can work on",
  levels_title_1: "From your first",
  levels_title_2: "hola",
  levels_title_3: "to fluent conversations.",
  levels_intro: "Any level. Communicative-first, but never lazy with grammar.",
  levels: [
    {
      tag: "A1 · A2",
      title: "Survival Spanish",
      desc: "Greetings, present tense, ordering coffee, asking for directions. The fun starts.",
    },
    {
      tag: "B1",
      title: "Real conversations",
      desc: "Past tenses, opinions, your daily life — in Spanish, not in your head.",
    },
    {
      tag: "B2 · C1",
      title: "Fluency & nuance",
      desc: "Subjunctive, idioms, debates. Sound like yourself, in Spanish.",
    },
    {
      tag: "DELE / SIELE",
      title: "Exam preparation",
      desc: "Targeted practice for every section. Mock exams. Feedback that actually helps.",
    },
  ],

  story_kicker: "A little about me",
  story_title: "My favorite part of teaching is meeting you.",
  story_p1:
    "I grew up in Zamora — a small city in Castilla with a lot of history and very good wine — but I’ve lived in Valencia for years now and the city has completely won me over. My favorite part of being a Spanish teacher is the chance to meet so many people from different cultures. I love teaching the language, but I love hearing about your country, your traditions, and your food just as much.",
  story_p2:
    "That’s why my classes aren’t verb photocopies. They’re conversations about your routines, your hobbies, and your experiences. Spanish becomes the way we get to know each other.",
  story_caption_1: "la profe ✿",
  story_caption_2: "naranjos · Valencia",
  story_caption_3: "Zamora",

  first_kicker: "Your first class",
  first_title: "A meeting, not a test.",
  first_letter_open: "Querido estudiante,",
  first_letter_body:
    "Don’t worry about your first class — at all. I’ll ask you a few questions to get a feel for where you’re starting, and from there we plan together. Never opened a Spanish book before? Perfect. We start with survival Spanish.\n\nThe class is mostly communicative. Spanish is our working language. We adapt the materials to what you actually care about — that doesn’t mean we skip grammar (it matters!), it means grammar shows up where it’s useful.\n\nClasses are conversations about your life, not photocopies of verbs. See you soon.",
  first_letter_sign: "— Julia ✿",

  pricing_kicker: "Pricing",
  pricing_title: "Simple & honest.",
  pricing_amount: "from €40€",
  pricing_unit: "per hour · 1-on-1",
  pricing_b1: "Group rates available",
  pricing_b2: "Class packs save more",
  pricing_b3: "First 20 minutes free",

  book_kicker: "Book your class",
  book_title: "Pick a time that works.",
  book_sub: "Free 20-minute intro call. We chat, find your level, and see if we click.",
  book_open: "Open booking →",
  book_no_slots: "No slots currently available online.",
  book_contact_instead: "Reach out directly to book:",
  book_whatsapp: "WhatsApp",
  book_email_cta: "Send an email",

  test_kicker: "Students say",
  testimonials: [
    {
      q: "Julia turns grammar into conversation. After three months I was actually thinking in Spanish on my morning commute.",
      name: "Mark",
      loc: "Berlin · B1",
    },
    {
      q: "I came in for DELE prep and stayed for the chats about Valencia. Passed the exam, made a friend.",
      name: "Lucy",
      loc: "London · B2",
    },
    {
      q: "Patient, structured, and never boring. She adapts to what you actually need that week.",
      name: "Anna",
      loc: "Zürich · A2",
    },
  ],

  faq_kicker: "Questions",
  faq_title: "Things people ask me.",
  faq: [
    {
      q: "I’ve never studied Spanish — is that okay?",
      a: "Completely. We start with survival Spanish — greetings, ordering food, getting around. By the end of the first month you’ll be having short conversations.",
    },
    {
      q: "How long is a class?",
      a: "Standard classes are 60 minutes. We can also do 45 or 90 if that fits better — just tell me.",
    },
    {
      q: "What platform do you use?",
      a: "Zoom or Google Meet, your choice. I send a calendar invite with the link after we book.",
    },
    {
      q: "Can we focus on conversation only?",
      a: "Yes — but I’ll sneak grammar in where it helps. You can speak fluently and still know why a sentence works.",
    },
    {
      q: "Do you prepare for DELE / SIELE?",
      a: "Yes, all levels. Targeted practice for each exam section, plus mock papers and feedback.",
    },
    {
      q: "How do I cancel or reschedule?",
      a: "24 hours notice and there’s no charge. Life happens.",
    },
  ],

  cta_title_1: "¿Empezamos?",
  cta_title_2: "Shall we start?",
  cta_sub: "Book a free 20-minute intro call. No commitment, just a chat.",

  footer_tag: "Online Spanish classes from Valencia.",
  footer_contact: "Get in touch",
  footer_follow: "Follow",
  footer_legal: "Legal",
  footer_priv: "Privacy",
  footer_terms: "Terms",

  bk_whatsapp_bar: "Prefer to just send a message?",
  bk_whatsapp_btn: "Chat on WhatsApp",

  bk_back: "← Back home",
  bk_title_1: "Let’s find a",
  bk_title_2: "time.",
  bk_intro:
    "A free 20-minute intro call. We get to know each other, see your level, and figure out a plan together.",
  bk_step1: "01 · About you",
  bk_step2: "02 · Pick a time",
  bk_step3: "03 · Confirm",
  bk_field_name: "Your name",
  bk_field_email: "Email",
  bk_field_level: "Current Spanish level",
  bk_levels: [
    "No idea",
    "A1 · Beginner",
    "A2 · Elementary",
    "B1 · Intermediate",
    "B2 · Upper int.",
    "C1 · Advanced",
    "DELE / SIELE prep",
  ],
  bk_field_goal: "Why are you learning?",
  bk_goals: ["Travel", "Work", "Exam", "For fun", "Other"],
  bk_field_when: "Preferred day & time (rough)",
  bk_when_ph: "e.g. weekday evenings, CET",
  bk_field_msg: "Anything I should know about you?",
  bk_msg_ph: "Hobbies, why Spanish, anything that helps me prep.",
  bk_calendar: "Pick a slot",
  bk_confirm: "Confirm booking",
  bk_disclaimer: "You won’t be charged. I’ll email a confirmation with the call link.",
  bk_done_title: "¡Hecho!",
  bk_done_sub: "Talk soon — I’ll send a confirmation email shortly.",
};

const es: typeof en = {
  nav: { about: "Sobre mí", classes: "Clases", pricing: "Precios", booking: "Reservar", faq: "FAQ" },
  cta_book: "Reservar clase",
  cta_free: "Charla gratis 20min",

  hero_kicker: "Español online · Desde Valencia",
  hero_title_1: "Hola, soy Julia.",
  hero_title_2: "¿Aprendemos español",
  hero_title_3: "juntos?",
  hero_sub:
    "Soy profesora cualificada de verdad — no solo nativa. Clases privadas de A1 a C1, preparación de exámenes y tutorías. Conversaciones como un café con un amigo, pero con gramática que se queda.",
  hero_pill_1: "+4 años enseñando",
  hero_pill_2: "A1 — C1",
  hero_pill_3: "DELE / SIELE",
  hero_pill_4: "desde 40€ / hora",

  cred_kicker: "Por qué yo",
  cred_title_1: "No solo soy nativa —",
  cred_title_2: "soy profesora de verdad.",
  cred_intro:
    "Cualquiera que crece en Madrid habla español. Enseñarlo bien es otra cosa. Aquí te cuento cómo me he formado.",
  cred_1_label: "01 / GRADO",
  cred_1_t: "Grado en Traducción e Interpretación",
  cred_1_d: "Español ↔ inglés, francés. Tres idiomas, gramática a fondo.",
  cred_2_label: "02 / MÁSTER",
  cred_2_t: "Máster de Profesorado + formación ELE",
  cred_2_d: "Formada específicamente para enseñar español como lengua extranjera.",
  cred_3_label: "03 / EXPERIENCIA",
  cred_3_t: "+4 años, grupo + privado",
  cred_3_d: "Cientos de horas, todos los niveles, decenas de nacionalidades.",

  ele_label: "ELE — Español como Lengua Extranjera",
  ele_title: "¿Qué es el ELE?",
  ele_desc:
    "ELE son las siglas de Español como Lengua Extranjera — la titulación oficial para enseñar español a extranjeros. No es un certificado de nivel de idioma. Significa que Julia ha sido formada específicamente en adquisición de lenguas, metodología comunicativa, diseño curricular para hablantes no nativos y análisis de errores. La mayoría de los nativos no lo tiene. Julia sí.",

  cert_kicker: "Certificaciones oficiales",
  cert_title_1: "Preparada para los",
  cert_title_2: "exámenes reales.",
  cert_intro:
    "Formada para preparar a estudiantes en las tres certificaciones oficiales de español. Práctica dirigida, simulacros y feedback alineado con los criterios reales de calificación.",
  cert_for_label: "Niveles",
  cert_format_label: "Formato",
  certs: [
    {
      code: "DELE",
      org: "Instituto Cervantes",
      desc: "El diploma oficial de español. Reconocido mundialmente para universidad, trabajo y residencia.",
      levels: "A1 · A2 · B1 · B2 · C1 · C2",
      format: "Lectura · Audición · Escritura · Oral",
    },
    {
      code: "SIELE",
      org: "Cervantes · Salamanca · UNAM",
      desc: "Examen online moderno, una sola prueba, resultados en 3 semanas. Modular por destreza.",
      levels: "Alineado A1 — C1",
      format: "Online · 4 destrezas modulares",
    },
    {
      code: "CCSE",
      org: "Instituto Cervantes",
      desc: "Prueba de conocimientos para la nacionalidad española. Constitución, geografía, cultura.",
      levels: "Apto / No apto",
      format: "25 preguntas · opción múltiple",
    },
  ],
  cert_disclaimer: "Logos a título informativo. Marcas oficiales del Instituto Cervantes y SIELE.",

  levels_kicker: "En qué trabajamos",
  levels_title_1: "Desde tu primer",
  levels_title_2: "hola",
  levels_title_3: "hasta conversaciones fluidas.",
  levels_intro: "Cualquier nivel. Enfoque comunicativo, pero sin descuidar la gramática.",
  levels: [
    {
      tag: "A1 · A2",
      title: "Español de supervivencia",
      desc: "Saludos, presente, pedir un café, preguntar la dirección. Empieza la diversión.",
    },
    {
      tag: "B1",
      title: "Conversaciones reales",
      desc: "Pasados, opiniones, tu día a día — en español, no en tu cabeza.",
    },
    {
      tag: "B2 · C1",
      title: "Fluidez y matiz",
      desc: "Subjuntivo, modismos, debates. Ser tú, en español.",
    },
    {
      tag: "DELE / SIELE",
      title: "Preparación de exámenes",
      desc: "Práctica dirigida para cada sección. Simulacros y feedback útil.",
    },
  ],

  story_kicker: "Un poco sobre mí",
  story_title: "Mi parte favorita es conocerte.",
  story_p1:
    "Soy de Zamora — una ciudad pequeña en Castilla con mucha historia y muy buen vino — pero llevo años viviendo en Valencia y la ciudad me ha conquistado del todo. Mi parte favorita de ser profesora de español es conocer a tantas personas de culturas diferentes. Me encanta enseñar la lengua, pero también conocer cómo es la vida en otros países, sus costumbres, tradiciones y gastronomía.",
  story_p2:
    "Por eso mis clases no son fotocopias de verbos. Son conversaciones sobre tus rutinas, tus aficiones y tus experiencias. El español se convierte en la forma de conocernos.",
  story_caption_1: "la profe ✿",
  story_caption_2: "naranjos · Valencia",
  story_caption_3: "Zamora",

  first_kicker: "Tu primera clase",
  first_title: "Una toma de contacto, no un examen.",
  first_letter_open: "Querido estudiante,",
  first_letter_body:
    "No te preocupes por tu primera clase — para nada. Te haré unas preguntas para ver tu nivel inicial, y desde ahí planeamos juntos. ¿Nunca has abierto un libro de español? Perfecto. Empezamos con español de supervivencia.\n\nLa clase es mayormente comunicativa. El español es nuestra lengua vehicular. Adaptamos los materiales a lo que te interesa — esto no significa saltarnos la gramática (¡es igual de importante!), significa que la gramática aparece donde es útil.\n\nLas clases son conversaciones sobre tu vida, no fotocopias de verbos. ¡Nos vemos pronto!",
  first_letter_sign: "— Julia ✿",

  pricing_kicker: "Precios",
  pricing_title: "Sencillo y honesto.",
  pricing_amount: "desde 40€",
  pricing_unit: "por hora · 1 a 1",
  pricing_b1: "Tarifas de grupo disponibles",
  pricing_b2: "Bonos con descuento",
  pricing_b3: "Primeros 20 minutos gratis",

  book_kicker: "Reserva tu clase",
  book_title: "Elige una hora.",
  book_sub: "Charla introductoria gratis de 20 minutos. Hablamos, vemos tu nivel y si encajamos.",
  book_open: "Abrir reserva →",
  book_no_slots: "No hay horas disponibles online ahora mismo.",
  book_contact_instead: "Escíbeme directamente para reservar:",
  book_whatsapp: "WhatsApp",
  book_email_cta: "Enviar email",

  test_kicker: "Dicen mis estudiantes",
  testimonials: [
    {
      q: "Julia convierte la gramática en conversación. A los tres meses pensaba en español en mi camino al trabajo.",
      name: "Mark",
      loc: "Berlín · B1",
    },
    {
      q: "Vine para preparar el DELE y me quedé por las charlas sobre Valencia. Aprobé el examen y gané una amiga.",
      name: "Lucy",
      loc: "Londres · B2",
    },
    {
      q: "Paciente, estructurada y nunca aburrida. Adapta cada clase a lo que necesitas esa semana.",
      name: "Anna",
      loc: "Zúrich · A2",
    },
  ],

  faq_kicker: "Preguntas",
  faq_title: "Lo que me preguntan.",
  faq: [
    {
      q: "Nunca he estudiado español, ¿pasa algo?",
      a: "Para nada. Empezamos con español de supervivencia — saludos, pedir comida, moverte. Al final del primer mes tendrás conversaciones cortas.",
    },
    {
      q: "¿Cuánto dura una clase?",
      a: "Las clases estándar son de 60 minutos. También podemos hacer de 45 o 90 si te encaja mejor.",
    },
    {
      q: "¿Qué plataforma usas?",
      a: "Zoom o Google Meet, tú eliges. Te mando una invitación de calendario con el enlace tras reservar.",
    },
    {
      q: "¿Solo conversación?",
      a: "Claro — pero meteré gramática donde ayude. Hablar con fluidez y entender por qué funciona la frase.",
    },
    {
      q: "¿Preparas DELE / SIELE?",
      a: "Sí, todos los niveles. Práctica dirigida por sección, simulacros y feedback.",
    },
    {
      q: "¿Cómo cancelo o cambio?",
      a: "24 horas de antelación y sin coste. La vida pasa.",
    },
  ],

  cta_title_1: "¿Empezamos?",
  cta_title_2: "Te espero en la primera clase.",
  cta_sub: "Reserva una charla gratis de 20 minutos. Sin compromiso, solo charlamos.",

  footer_tag: "Clases de español online desde Valencia.",
  footer_contact: "Contacto",
  footer_follow: "Sígueme",
  footer_legal: "Legal",
  footer_priv: "Privacidad",
  footer_terms: "Términos",

  bk_whatsapp_bar: "¿Prefieres enviar un mensaje directamente?",
  bk_whatsapp_btn: "Escribir por WhatsApp",

  bk_back: "← Volver",
  bk_title_1: "Encontremos una",
  bk_title_2: "hora.",
  bk_intro:
    "Una charla introductoria gratis de 20 minutos. Nos conocemos, vemos tu nivel y planeamos juntos.",
  bk_step1: "01 · Sobre ti",
  bk_step2: "02 · Elige hora",
  bk_step3: "03 · Confirmar",
  bk_field_name: "Tu nombre",
  bk_field_email: "Email",
  bk_field_level: "Nivel actual de español",
  bk_levels: [
    "Ni idea",
    "A1 · Principiante",
    "A2 · Elemental",
    "B1 · Intermedio",
    "B2 · Intermedio alto",
    "C1 · Avanzado",
    "DELE / SIELE",
  ],
  bk_field_goal: "¿Por qué estudias español?",
  bk_goals: ["Viajar", "Trabajo", "Examen", "Por gusto", "Otro"],
  bk_field_when: "Día y hora preferidos (aprox.)",
  bk_when_ph: "p. ej. tardes entre semana, hora CET",
  bk_field_msg: "¿Algo que deba saber sobre ti?",
  bk_msg_ph: "Aficiones, por qué español, cualquier cosa útil.",
  bk_calendar: "Elige un hueco",
  bk_confirm: "Confirmar reserva",
  bk_disclaimer: "No se cobra nada. Te envío email con el enlace de la llamada.",
  bk_done_title: "¡Hecho!",
  bk_done_sub: "Hablamos pronto — te mando un email de confirmación enseguida.",
};

const de: typeof en = {
  nav: { about: "Über mich", classes: "Kurse", pricing: "Preise", booking: "Buchen", faq: "FAQ" },
  cta_book: "Stunde buchen",
  cta_free: "Gratis 20-Min-Gespräch",

  hero_kicker: "Spanisch online · Aus Valencia",
  hero_title_1: "Hola, ich bin Julia.",
  hero_title_2: "Lernen wir Spanisch",
  hero_title_3: "zusammen?",
  hero_sub:
    "Ich bin echte qualifizierte Lehrerin — nicht nur Muttersprachlerin. Einzelunterricht von A1 bis C1, Prüfungsvorbereitung & Nachhilfe. Gespräche wie ein Kaffee mit einer Freundin, aber mit Grammatik, die hängenbleibt.",
  hero_pill_1: "4+ Jahre Erfahrung",
  hero_pill_2: "A1 — C1",
  hero_pill_3: "DELE / SIELE",
  hero_pill_4: "ab 40€ / Stunde",

  cred_kicker: "Warum ich",
  cred_title_1: "Nicht nur Muttersprachlerin —",
  cred_title_2: "echte Lehrerin.",
  cred_intro:
    "Wer in Madrid aufwächst, spricht Spanisch. Es gut zu unterrichten ist etwas anderes. So habe ich mich ausgebildet.",
  cred_1_label: "01 / STUDIUM",
  cred_1_t: "BA Übersetzen & Dolmetschen",
  cred_1_d: "Spanisch ↔ Englisch, Französisch. Drei Sprachen, tiefe Grammatik.",
  cred_2_label: "02 / MASTER",
  cred_2_t: "Master Lehramt + ELE-Spezialisierung",
  cred_2_d: "Speziell ausgebildet, Spanisch als Fremdsprache zu unterrichten.",
  cred_3_label: "03 / ERFAHRUNG",
  cred_3_t: "4+ Jahre, Gruppe + Einzel",
  cred_3_d: "Hunderte Stunden, alle Niveaus, dutzende Nationalitäten.",

  ele_label: "ELE — Español como Lengua Extranjera",
  ele_title: "Was bedeutet ELE?",
  ele_desc:
    "ELE steht für Español como Lengua Extranjera — die offizielle spanische Qualifikation, um Spanisch als Fremdsprache zu unterrichten. Es ist kein Sprachniveau-Zertifikat. Es bedeutet, dass Julia gezielt ausgebildet wurde in Spracherwerb-Theorie, kommunikativer Methodik, Lehrplanentwicklung für Nicht-Muttersprachler und Fehleranalyse. Die meisten Muttersprachler haben das nicht. Julia schon.",

  cert_kicker: "Offizielle Zertifizierungen",
  cert_title_1: "Vorbereitet für die",
  cert_title_2: "echten Prüfungen.",
  cert_intro:
    "Ausgebildet, Schüler für die drei offiziellen Spanisch-Zertifikate vorzubereiten. Gezielte Übung, Probeprüfungen und Feedback nach echten Bewertungskriterien.",
  cert_for_label: "Niveaus",
  cert_format_label: "Format",
  certs: [
    {
      code: "DELE",
      org: "Instituto Cervantes",
      desc: "Das offizielle Spanisch-Diplom. Weltweit anerkannt für Studium, Beruf und Aufenthalt.",
      levels: "A1 · A2 · B1 · B2 · C1 · C2",
      format: "Lesen · Hören · Schreiben · Sprechen",
    },
    {
      code: "SIELE",
      org: "Cervantes · Salamanca · UNAM",
      desc: "Moderne Online-Prüfung, einmalig, Ergebnisse in 3 Wochen. Modular nach Fertigkeit.",
      levels: "Angelehnt A1 — C1",
      format: "Online · 4 modulare Fertigkeiten",
    },
    {
      code: "CCSE",
      org: "Instituto Cervantes",
      desc: "Kenntnistest für die spanische Staatsbürgerschaft. Verfassung, Geografie, Kultur.",
      levels: "Bestanden / Nicht bestanden",
      format: "25 Fragen · Multiple Choice",
    },
  ],
  cert_disclaimer: "Logos zur Veranschaulichung. Offizielle Marken des Instituto Cervantes und SIELE.",

  levels_kicker: "Woran wir arbeiten",
  levels_title_1: "Vom ersten",
  levels_title_2: "Hola",
  levels_title_3: "bis zu fließenden Gesprächen.",
  levels_intro: "Jedes Niveau. Kommunikation zuerst — aber Grammatik kommt nicht zu kurz.",
  levels: [
    {
      tag: "A1 · A2",
      title: "Überlebens-Spanisch",
      desc: "Begrüßung, Präsens, Kaffee bestellen, nach dem Weg fragen. Hier fängt der Spaß an.",
    },
    {
      tag: "B1",
      title: "Echte Gespräche",
      desc: "Vergangenheiten, Meinungen, dein Alltag — auf Spanisch, nicht im Kopf.",
    },
    {
      tag: "B2 · C1",
      title: "Fluss & Nuance",
      desc: "Subjuntivo, Idiome, Debatten. Du selbst, auf Spanisch.",
    },
    {
      tag: "DELE / SIELE",
      title: "Prüfungsvorbereitung",
      desc: "Gezielte Übung für jeden Teil. Probeprüfungen, hilfreiches Feedback.",
    },
  ],

  story_kicker: "Ein bisschen über mich",
  story_title: "Mein Lieblingsteil ist, dich kennenzulernen.",
  story_p1:
    "Ich komme aus Zamora — einer kleinen Stadt in Kastilien mit viel Geschichte und sehr gutem Wein — aber ich lebe seit Jahren in Valencia, und die Stadt hat mich vollständig gewonnen. Mein Lieblingsteil am Spanischunterrichten ist die Chance, so viele Menschen aus verschiedenen Kulturen kennenzulernen. Ich liebe es, die Sprache zu lehren — aber genauso gerne höre ich von deinem Land, deinen Traditionen und deinem Essen.",
  story_p2:
    "Deshalb sind meine Stunden keine Verb-Kopien. Es sind Gespräche über deine Routinen, Hobbys und Erfahrungen. Spanisch wird zur Art, wie wir uns kennenlernen.",
  story_caption_1: "la profe ✿",
  story_caption_2: "naranjos · Valencia",
  story_caption_3: "Zamora",

  first_kicker: "Deine erste Stunde",
  first_title: "Ein Kennenlernen, kein Test.",
  first_letter_open: "Lieber Schüler,",
  first_letter_body:
    "Mach dir keine Sorgen wegen der ersten Stunde — wirklich nicht. Ich stelle ein paar Fragen, um dein Niveau zu erfassen, und ab da planen wir zusammen. Noch nie ein Spanischbuch geöffnet? Perfekt. Wir starten mit Überlebens-Spanisch.\n\nDer Unterricht ist hauptsächlich kommunikativ. Spanisch ist unsere Arbeitssprache. Wir passen die Materialien an das an, was dich interessiert — das heißt nicht, dass wir Grammatik überspringen (sie ist genauso wichtig!), sondern dass sie da auftaucht, wo sie nützlich ist.\n\nStunden sind Gespräche über dein Leben, keine Verb-Kopien. Bis bald!",
  first_letter_sign: "— Julia ✿",

  pricing_kicker: "Preise",
  pricing_title: "Einfach & ehrlich.",
  pricing_amount: "ab 40€",
  pricing_unit: "pro Stunde · 1:1",
  pricing_b1: "Gruppenpreise verfügbar",
  pricing_b2: "Pakete mit Rabatt",
  pricing_b3: "Erste 20 Minuten gratis",

  book_kicker: "Stunde buchen",
  book_title: "Wähle eine Zeit.",
  book_sub:
    "Kostenloses 20-Min-Erstgespräch. Wir reden, finden dein Niveau, und schauen ob wir uns verstehen.",
  book_open: "Buchung öffnen →",
  book_no_slots: "Aktuell keine Online-Termine verfügbar.",
  book_contact_instead: "Schreib mir direkt:",
  book_whatsapp: "WhatsApp",
  book_email_cta: "E-Mail senden",

  test_kicker: "Stimmen von Schülern",
  testimonials: [
    {
      q: "Julia macht aus Grammatik Gespräche. Nach drei Monaten dachte ich auf dem Weg zur Arbeit auf Spanisch.",
      name: "Mark",
      loc: "Berlin · B1",
    },
    {
      q: "Kam für DELE-Vorbereitung, blieb wegen der Gespräche über Valencia. Prüfung bestanden, Freundin gewonnen.",
      name: "Lucy",
      loc: "London · B2",
    },
    {
      q: "Geduldig, strukturiert und nie langweilig. Sie passt sich an, was du diese Woche brauchst.",
      name: "Anna",
      loc: "Zürich · A2",
    },
  ],

  faq_kicker: "Fragen",
  faq_title: "Was Leute mich fragen.",
  faq: [
    {
      q: "Ich hab noch nie Spanisch gelernt — geht das?",
      a: "Klar. Wir starten mit Überlebens-Spanisch — Begrüßung, Essen bestellen, sich zurechtfinden. Nach dem ersten Monat führst du kurze Gespräche.",
    },
    {
      q: "Wie lange dauert eine Stunde?",
      a: "Standard sind 60 Minuten. 45 oder 90 geht auch — sag einfach Bescheid.",
    },
    {
      q: "Welche Plattform?",
      a: "Zoom oder Google Meet, du wählst. Ich schicke nach der Buchung eine Kalendereinladung mit Link.",
    },
    {
      q: "Nur Konversation?",
      a: "Ja — aber ich schmuggle Grammatik rein, wo es hilft. Flüssig sprechen und verstehen, warum ein Satz funktioniert.",
    },
    {
      q: "Bereitest du auf DELE / SIELE vor?",
      a: "Ja, alle Niveaus. Gezielte Übung für jeden Prüfungsteil, plus Probeprüfungen und Feedback.",
    },
    {
      q: "Wie storniere oder verschiebe ich?",
      a: "24 Stunden vorher kostenlos. Das Leben passiert.",
    },
  ],

  cta_title_1: "¿Empezamos?",
  cta_title_2: "Fangen wir an?",
  cta_sub: "Buche ein kostenloses 20-Min-Gespräch. Keine Verpflichtung, einfach reden.",

  footer_tag: "Online-Spanischunterricht aus Valencia.",
  footer_contact: "Kontakt",
  footer_follow: "Folgen",
  footer_legal: "Rechtliches",
  footer_priv: "Datenschutz",
  footer_terms: "AGB",

  bk_whatsapp_bar: "Lieber direkt eine Nachricht schicken?",
  bk_whatsapp_btn: "WhatsApp schreiben",

  bk_back: "← Zurück",
  bk_title_1: "Finden wir eine",
  bk_title_2: "Zeit.",
  bk_intro:
    "Ein kostenloses 20-Min-Erstgespräch. Wir lernen uns kennen, schauen dein Niveau an und planen zusammen.",
  bk_step1: "01 · Über dich",
  bk_step2: "02 · Zeit wählen",
  bk_step3: "03 · Bestätigen",
  bk_field_name: "Dein Name",
  bk_field_email: "E-Mail",
  bk_field_level: "Aktuelles Spanischniveau",
  bk_levels: [
    "Keine Ahnung",
    "A1 · Anfänger",
    "A2 · Grundstufe",
    "B1 · Mittel",
    "B2 · Mittel hoch",
    "C1 · Fortgeschritten",
    "DELE / SIELE",
  ],
  bk_field_goal: "Warum lernst du Spanisch?",
  bk_goals: ["Reisen", "Arbeit", "Prüfung", "Spaß", "Anderes"],
  bk_field_when: "Bevorzugter Tag & Zeit (ungefähr)",
  bk_when_ph: "z.B. werktags abends, MEZ",
  bk_field_msg: "Was sollte ich über dich wissen?",
  bk_msg_ph: "Hobbys, warum Spanisch, alles was hilft.",
  bk_calendar: "Slot wählen",
  bk_confirm: "Buchung bestätigen",
  bk_disclaimer: "Kostenlos. Ich schicke eine Bestätigungs-E-Mail mit dem Link.",
  bk_done_title: "Fertig!",
  bk_done_sub: "Bis bald — ich schicke gleich eine Bestätigungs-E-Mail.",
};

export const I18N: Record<Lang, typeof en> = { en, es, de };

export type T = typeof en;

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("julia_lang") as Lang | null;
    if (saved && I18N[saved]) return saved;
    const nav = (navigator.language ?? "en").slice(0, 2).toLowerCase() as Lang;
    if (I18N[nav]) return nav;
  } catch {
    // ignore
  }
  return "en";
}

export function setLang(l: Lang): void {
  try {
    localStorage.setItem("julia_lang", l);
  } catch {
    // ignore
  }
}
