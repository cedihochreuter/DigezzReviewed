/* ==================================================
   DIGEZZ REVIEWED
   Vollständige app.js
   Unabhängiger UX-Prototyp mit fiktiven Demodaten
   ================================================== */
// STUDIERENDENPROFILE
const CREATORS = [
  {
    id: 'leonie',
    name: 'Leonie Kramer',
    city: 'Zürich',
    semester: '4. Semester',
    bio: "Ich interessiere mich besonders für Menschen und ihre persönlichen Geschichten. Am liebsten entwickle ich dokumentarische Filme, die nah an den Protagonistinnen und Protagonisten bleiben und auch leise, unscheinbare Momente sichtbar machen.",
    interests: ['Dokumentarfilm', 'Menschen', 'Reisen']
  },
  {
    id: 'jonas',
    name: 'Jonas Frei',
    city: 'Chur',
    semester: '6. Semester',
    bio: "Mit meiner Kamera bin ich am liebsten draussen unterwegs. Mich fasziniert, wie sich Landschaften durch Licht, Wetter und Perspektive verändern. In meinen Fotoreportagen versuche ich, neben eindrücklichen Bildern auch die Geschichten hinter einem Ort einzufangen.",
    interests: ['Naturfotografie', 'Berge', 'Reportagen']
  },
  {
    id: 'lina',
    name: 'Lina Meier',
    city: 'Zürich',
    semester: '4. Semester',
    bio: "Mich interessieren Menschen, urbane Räume und die kleinen Momente des Alltags. Ich probiere gerne unterschiedliche Bildsprachen aus und verbinde Fotografie, Video und Gestaltung, um vertraute Orte aus einer neuen Perspektive zu zeigen.",
    interests: ['Fotografie', 'Städte', 'DaVinci Resolve']
  },
  {
    id: 'noah',
    name: 'Noah Keller',
    city: 'Bern',
    semester: '6. Semester',
    bio: "Ich experimentiere gerne mit 2D- und 3D-Animationen und erschaffe visuelle Welten, die im Alltag nicht existieren. Besonders spannend finde ich das Zusammenspiel von Bewegung, Sound und ungewöhnlichen Formen, mit denen sich Geschichten ganz ohne Worte erzählen lassen.",
    interests: ['3D-Animation', 'Games', 'Motion Design']
  },
  {
    id: 'sara',
    name: 'Sara Blättler',
    city: 'Chur',
    semester: '4. Semester',
    bio: "Ich mache Geschichten hörbar und beschäftige mich mit allem, was eine gute Aufnahme ausmacht: Stimmen, Atmosphäre und Sounddesign. Besonders gerne produziere ich Podcasts, in denen Menschen offen über ihre Erfahrungen sprechen und neue Perspektiven entstehen.",
    interests: ['Podcasts', 'Musik', 'Sounddesign']
  },
  {
    id: 'david',
    name: 'David Nguyen',
    city: 'Bern',
    semester: '5. Semester',
    bio: "Ich begeistere mich für Websites, interaktive Erlebnisse und gutes UX-Design. Mich reizt die Frage, wie sich komplexe Inhalte einfach und intuitiv vermitteln lassen. Meine Projekte verbinden technische Umsetzung mit Storytelling und einer klaren visuellen Gestaltung.",
    interests: ['Webdesign', 'Interaktion', 'UX']
  },
  {
    id: 'emilia',
    name: 'Emilia Rossi',
    city: 'Zürich',
    semester: '6. Semester',
    bio: "Ich liebe die besondere Ästhetik analoger Fotografie und arbeite gerne mit natürlichem Licht. Bei meinen Porträts interessieren mich nicht nur schöne Bilder, sondern auch die Persönlichkeit und Stimmung des Moments, den eine Aufnahme festhalten kann.",
    interests: ['Analoge Fotografie', 'Portraits', 'Kunst']
  },
  {
    id: 'timo',
    name: 'Timo Schneider',
    city: 'Bern',
    semester: '4. Semester',
    bio: "Ich produziere am liebsten Filme, die Bewegung, Menschen und aussergewöhnliche Orte zusammenbringen. Mich interessieren die Arbeit hinter der Kamera genauso wie Schnitt und Dramaturgie. Draussen zu drehen und neue Perspektiven zu entdecken, macht mir besonders Spass.",
    interests: ['Videografie', 'Outdoor', 'Reisen']
  },
  {
    id: 'mara',
    name: 'Mara Lichtenstein',
    city: 'Chur',
    semester: '5. Semester',
    bio: "Ich gestalte digitale Welten und experimentiere gerne mit Illustration, Animation und 3D-Design. Mich interessieren kräftige Farben, ungewohnte Materialien und surreale Bildideen. In meinen Projekten versuche ich, Technik und Kreativität spielerisch miteinander zu verbinden.",
    interests: ['Illustration', '3D', 'Design']
  }
];
// PROJEKTE
// Bildwechsel: nur den Wert hinter "image" ersetzen.
// Alle Projektdaten sind derzeit fiktiv.
const PROJECTS = [
  {
    id: 'zwischen-zwei-welten',
    title: 'Zwischen zwei Welten',
    category: 'Video',
    city: 'Zürich',
    creator: 'leonie',
    level: 'Studium',
    published: '2026-09-30',
    image: 'assets/hero.jpg',
    likes: 342,
    description: 'Eine dokumentarische Videoreportage über das Leben zwischen Stadt und Heimat.',
    body: [
      "Was bedeutet Heimat, wenn der Alltag an zwei ganz unterschiedlichen Orten stattfindet? Diese dokumentarische Arbeit geht der Frage nach, wie Menschen zwischen städtischem Leben und ihren persönlichen Wurzeln ihren eigenen Weg finden. Im Mittelpunkt stehen nicht grosse Schlagworte, sondern Begegnungen, Beobachtungen und die Geschichten, die sich oft erst im Gespräch eröffnen.",
      "Die Bildgestaltung setzt auf einen Kontrast zwischen der Hektik der Stadt und ruhigen, persönlichen Momenten. Durch Interviews und atmosphärische Aufnahmen entsteht ein Porträt von Zugehörigkeit, Veränderung und der Suche nach einem Ort, an dem man sich zuhause fühlt."
    ]
  },
  {
    id: 'stille-gipfel',
    title: 'Stille Gipfel in Leukerbad',
    category: 'Foto',
    city: 'Chur',
    creator: 'jonas',
    level: 'Studium',
    published: '2026-09-21',
    image: 'assets/animation_meta.jpg',
    likes: 198,
    description: 'Eine fotografische Reise durch die Schweizer Alpen.',
    body: [
      "Leukerbad und die umliegenden Berglandschaften bieten weit mehr als klassische Postkartenmotive. Für diese fotografische Serie richtet sich der Blick auf die stillen Zwischenräume: Spuren im Schnee, wechselnde Wolken, raue Oberflächen und das Licht, das die Berge innerhalb weniger Minuten völlig anders erscheinen lässt.",
      "Die Aufnahmen sind als zusammenhängende Bildstrecke gedacht. Unterschiedliche Distanzen und Perspektiven wechseln sich ab, um das Gefühl eines Tages in den Alpen zu vermitteln. Nicht die Höhe eines Gipfels ist entscheidend, sondern die Stimmung, die eine Landschaft auslösen kann."
    ]
  },
  {
    id: 'stadtgeraeusche',
    title: 'Stadtgeräusche, neu interpretiert',
    category: 'Video',
    city: 'Zürich',
    creator: 'lina',
    level: 'Studium',
    published: '2026-09-18',
    image: 'assets/neonface.jpg',
    likes: 521,
    description: 'Ein urbanes Porträt in Bewegung.',
    body: [
      "Eine Stadt erzählt ständig Geschichten – selbst dann, wenn niemand spricht. Für dieses Videoprojekt werden Bewegungen, Geräusche und alltägliche Situationen zu einer eigenen visuellen Erzählung verbunden. Strassenkreuzungen, vorbeiziehende Menschen und kleine Details zeigen, wie unterschiedlich ein und derselbe Ort wahrgenommen werden kann.",
      "Der Rhythmus des Films entsteht im Zusammenspiel aus Schnitt, Kamerabewegung und Ton. Bekannte Geräusche werden teilweise neu angeordnet und mit ungewohnten Bildern kombiniert. So lädt das Projekt dazu ein, kurz aus dem gewohnten Stadtalltag auszusteigen und genauer hinzusehen und hinzuhören."
    ]
  },
  {
    id: 'metamorphose',
    title: 'Metamorphose',
    category: 'Animation',
    city: 'Bern',
    creator: 'noah',
    level: 'Bachelor',
    published: '2026-08-14',
    image: 'assets/AdobeStock_2199079994_Preview.jpeg',
    likes: 287,
    description: 'Eine experimentelle visuelle Transformation.',
    body: [
      "Wie fühlt sich Veränderung an, wenn sie nicht mit Worten erklärt werden muss? Metamorphose übersetzt diesen Gedanken in eine visuelle Welt aus Formen, Farben und Bewegungen. Vertraute Strukturen lösen sich auf, wachsen neu zusammen und entwickeln sich im Verlauf der Animation zu überraschenden Bildern.",
      "Dabei geht es weniger um eine lineare Handlung als um das Erleben von Übergängen. Timing, Licht und Sound bestimmen, wie ruhig oder dynamisch eine Szene wirkt. Die Arbeit zeigt, welche erzählerischen Möglichkeiten Animation eröffnet, wenn das Medium seine eigenen Regeln nutzen darf."
    ]
  },
  {
    id: 'zerbrechliche-zukunft',
    title: 'Feierabendstalk',
    category: 'Audio',
    city: 'Chur',
    creator: 'sara',
    level: 'Studium',
    published: '2026-08-08',
    image: 'assets/animation_green.jpg',
    likes: 199,
    description: 'Ein Soundexperiment über unsere fragile Welt.',
    body: [
      "Feierabendstalk ist als lockeres Audioformat gedacht, in dem alltägliche Fragen plötzlich grösser werden dürfen. Ausgehend von persönlichen Beobachtungen entsteht ein Gespräch über Erwartungen, Veränderungen und Themen, die zwischen Studium, Beruf und Freizeit häufig zu kurz kommen.",
      "Das Format lebt von seiner direkten Sprache und einer angenehmen, nahen Klanggestaltung. Statt perfekt vorbereiteter Antworten stehen spontane Gedanken und unterschiedliche Sichtweisen im Vordergrund. Ein klarer Aufbau und sorgfältiger Tonschnitt sorgen dafür, dass Zuhörende dem Gespräch folgen können, ohne dessen Natürlichkeit zu verlieren."
    ]
  },
  {
    id: 'linie-vier',
    title: 'Linie 4 – Eine interaktive Reise',
    category: 'Web',
    city: 'Bern',
    creator: 'david',
    level: 'Bachelor',
    published: '2026-08-01',
    image: 'assets/AdobeStock_1906921050_Preview.jpeg',
    likes: 412,
    description: 'Eine interaktive Tramfahrt durch die Stadt.',
    body: [
      "Eine Tramlinie ist mehr als eine Verbindung zwischen zwei Haltestellen. Sie führt durch Quartiere, an Menschen vorbei und mitten in den Alltag einer Stadt. Diese interaktive Website macht aus einer gewöhnlichen Fahrt eine digitale Entdeckungsreise, bei der Besucherinnen und Besucher selbst entscheiden, welche Station sie genauer kennenlernen möchten.",
      "Bilder, kurze Texte und kleine Interaktionen ergänzen sich zu einem Erlebnis, das nicht wie eine klassische Reportage von Anfang bis Ende konsumiert werden muss. Im Zentrum stehen eine intuitive Navigation und die Frage, wie sich räumliche Geschichten im Browser lebendig erzählen lassen."
    ]
  },
  {
    id: 'licht-schatten',
    title: 'Licht und Schatten',
    category: 'Foto',
    city: 'Zürich',
    creator: 'emilia',
    level: 'Studium',
    published: '2026-07-24',
    image: 'assets/AdobeStock_374991009.jpg',
    likes: 276,
    description: 'Analoge Porträts auf 35-mm-Film.',
    body: [
      "Ein Porträt entsteht nicht allein dadurch, dass eine Kamera auf einen Menschen gerichtet wird. In dieser Serie steht der Umgang mit Licht im Mittelpunkt: helle Flächen, tiefe Schatten und bewusst reduzierte Hintergründe lenken den Blick auf Ausdruck und Haltung der fotografierten Personen.",
      "Der analoge Ansatz gibt dem Arbeiten einen eigenen Rhythmus. Jede Aufnahme muss bewusster vorbereitet werden, weil sich das Ergebnis nicht sofort überprüfen lässt. Daraus entsteht eine Bildsprache, die kleine Unschärfen und natürliche Momente zulässt und gerade dadurch persönlich wirkt."
    ]
  },
  {
    id: 'Profesionelle Videoproduktion',
    title: 'Profesionelle Videoproduktion',
    category: 'Video',
    city: 'Bern',
    creator: 'timo',
    level: 'Studium',
    published: '2026-07-09',
    image: 'assets/AdobeStock_564880994.jpg',
    likes: 368,
    description: 'Eine audiovisuelle Reise durch die Alpen.',
    body: [
      "Was unterscheidet eine spontane Videoaufnahme von einer durchdachten Produktion? Dieses Projekt beschäftigt sich mit den vielen Entscheidungen hinter überzeugenden Bewegtbildern. Von der ersten Idee über die Planung bis zur Aufnahme geht es darum, wie Bildausschnitt, Licht, Ton und Kamerabewegung eine Geschichte unterstützen.",
      "Anhand einer filmischen Reise durch eine eindrückliche Landschaft werden unterschiedliche Gestaltungsmöglichkeiten ausprobiert. Der Schwerpunkt liegt auf einer klaren visuellen Linie und dem bewussten Zusammenspiel von ruhigen Bildern und dynamischen Sequenzen. Auch die Nachbearbeitung gehört dazu, denn oft entsteht der endgültige Rhythmus erst im Schnitt."
    ]
  },
  {
    id: 'neontraeume',
    title: 'Neonträume',
    category: 'Animation',
    city: 'Chur',
    creator: 'mara',
    level: 'Studium',
    published: '2026-06-20',
    image: 'assets/AdobeStock_440128894.jpg',
    likes: 193,
    description: 'Eine animierte Stadt zwischen Realität und Fantasie.',
    body: [
      "Neonträume entwirft eine Stadt, die es so vielleicht nie geben wird. Zwischen leuchtenden Fassaden, künstlichem Licht und überraschenden Perspektiven verschwimmen die Grenzen zwischen einem vertrauten urbanen Raum und einer frei erfundenen Welt. Die Animation lädt dazu ein, für einen Moment in diese alternative Realität einzutauchen.",
      "Für das Projekt werden digitale Bildgestaltung und Bewegung bewusst miteinander verknüpft. Farbkontraste und räumliche Tiefe bestimmen die Atmosphäre, während kleine Veränderungen im Bild immer neue Details sichtbar machen. Im Vordergrund steht das Ausprobieren einer eigenständigen visuellen Sprache."
    ]
  },
  {
    id: 'stadtlichter',
    title: 'Stadtlichter',
    category: 'Foto',
    city: 'Zürich',
    creator: 'lina',
    level: 'Studium',
    published: '2026-06-13',
    image: 'assets/AdobeStock_2202930207_Preview.jpeg',
    likes: 276,
    description: 'Porträts einer Stadt im Wandel.',
    body: [
      "Wenn es dunkel wird, verändert sich das Gesicht einer Stadt. Schaufenster, Strassenlaternen und Spiegelungen auf nassem Asphalt schaffen Lichtinseln, in denen neue Motive entstehen. Diese fotografische Serie nimmt genau solche Augenblicke in den Blick und sucht nach besonderen Stimmungen im scheinbar gewöhnlichen Stadtleben.",
      "Die Bildstrecke kombiniert weitläufige Ansichten mit kleinen, fast übersehenen Details. Kontraste, Farbstiche und natürliche Unschärfen dürfen sichtbar bleiben. Die Serie versteht sich als Einladung, bekannte Wege langsamer zu gehen und auf die Geschichten zu achten, die nachts im Licht auftauchen."
    ]
  },
  {
    id: 'zwischen-raeumen',
    title: 'Zwischen den Räumen',
    category: 'Design',
    city: 'Zürich',
    creator: 'lina',
    level: 'Bachelor',
    published: '2026-06-07',
    image: 'assets/AdobeStock_665110164_Preview.jpeg',
    likes: 521,
    description: 'Eine interaktive Installation über Räume.',
    body: [
      "Wie nehmen wir einen Raum wahr, wenn er auf unsere Bewegungen reagiert? Zwischen den Räumen ist als interaktives Gestaltungskonzept angelegt, bei dem Besuchende nicht nur zuschauen, sondern durch ihre Entscheidungen Teil der Erfahrung werden. Formen, Licht und digitale Elemente verändern sich abhängig davon, wie man sich durch die Installation bewegt.",
      "Die Arbeit untersucht, wie physischer und virtueller Raum ineinandergreifen können. Besonders wichtig ist eine verständliche Interaktion, die ohne lange Anleitung funktioniert. So entsteht ein Experiment über Nähe, Orientierung und die Frage, wann ein Raum mehr ist als seine vier Wände."
    ]
  },
  {
    id: 'stimmen-der-stadt',
    title: 'Stimmen der Stadt',
    category: 'Audio',
    city: 'Zürich',
    creator: 'lina',
    level: 'Studium',
    published: '2026-05-20',
    image: 'assets/AdobeStock_2169328862_Preview.jpeg',
    likes: 199,
    description: 'Ein Podcast über Begegnungen.',
    body: [
      "In jeder Stadt treffen täglich unzählige Lebensgeschichten aufeinander. Dieser Podcast möchte einigen davon Raum geben und hört dort genauer hin, wo Gespräche im Alltag oft nur kurz stattfinden. Unterschiedliche Stimmen erzählen von Erinnerungen, Gewohnheiten und ganz persönlichen Beziehungen zu ihrem Lebensort.",
      "Neben den Interviews prägen auch Geräusche aus dem Stadtraum die Episoden. Sie helfen, Orte hörbar zu machen und die Aussagen der Menschen in eine Atmosphäre einzubetten. Ziel ist ein Audioporträt, das nicht nur informiert, sondern die Vielfalt des städtischen Zusammenlebens spürbar werden lässt."
    ]
  },
  {
    id: 'regenlicht',
    title: 'Probleme am Set',
    category: 'Video',
    city: 'Zürich',
    creator: 'lina',
    level: 'Studium',
    published: '2026-05-15',
    image: 'assets/AdobeStock_440154561.jpg',
    likes: 287,
    description: 'Analoge Porträts bei Nacht.',
    body: [
      "Bei einer Filmproduktion läuft selten alles genau nach Plan. Wetter, Zeitdruck, technische Fragen oder spontane Veränderungen am Drehort können ein sorgfältig vorbereitetes Konzept auf den Kopf stellen. Probleme am Set greift solche Situationen auf und zeigt, weshalb gerade in schwierigen Momenten klare Kommunikation und flexible Entscheidungen wichtig sind.",
      "Die Arbeit verbindet beispielhafte Drehsituationen mit Überlegungen zur praktischen Umsetzung. Im Mittelpunkt stehen die Zusammenarbeit im Team, die Vorbereitung von Alternativen und der Umgang mit unerwarteten Hindernissen. So wird sichtbar, dass eine gelungene Produktion nicht nur von guten Bildern, sondern auch vom Prozess dahinter abhängt."
    ]
  },
  {
    id: 'raeume-menschen',
    title: 'Räume. Menschen. Perspektiven.',
    category: 'Foto',
    city: 'Bern',
    creator: 'jonas',
    level: 'Bachelor',
    published: '2026-05-06',
    image: 'assets/AdobeStock_2219158100_Preview.jpeg',
    likes: 368,
    description: 'Architektur aus neuen Blickwinkeln.',
    body: [
      "Gebäude werden jeden Tag benutzt, doch ihre Formen und Zwischenräume nehmen wir oft kaum bewusst wahr. Für diese Bildserie wird Architektur aus ungewohnten Perspektiven betrachtet. Linien, Spiegelungen und die Beziehung zwischen Menschen und gebautem Raum schaffen Kompositionen, die bekannte Orte neu erscheinen lassen.",
      "Die Fotografien wechseln zwischen Übersicht und Detail. Statt die Architektur möglichst vollständig abzubilden, interessieren die Ausschnitte, in denen Material, Licht und Bewegung aufeinandertreffen. So entsteht eine visuelle Auseinandersetzung mit der Frage, wie Räume unsere Wahrnehmung und unseren Alltag prägen."
    ]
  },
  {
    id: 'farben-der-nacht',
    title: 'Farben der Nacht',
    category: 'Design',
    city: 'Chur',
    creator: 'mara',
    level: 'Studium',
    published: '2026-04-28',
    image: 'assets/neonface.jpg',
    likes: 180,
    description: 'Digitale Gesichter und neue Bildwelten.',
    body: [
      "Farben der Nacht ist ein visuelles Experiment über Licht und künstliche Bildwelten. Dunkle Flächen treffen auf intensive Farbakzente, digitale Formen auf scheinbar reale Strukturen. Daraus entstehen Bilder, die zwischen Design, Illustration und einer beinahe filmischen Atmosphäre angesiedelt sind.",
      "Das Projekt untersucht, wie sich Stimmungen allein durch Farbentscheidungen und Komposition verändern lassen. Einzelne Motive werden variiert und zu einer zusammenhängenden Serie kombiniert. Das Ergebnis soll nicht eine bestimmte Geschichte erklären, sondern Raum für Assoziationen und eigene Interpretationen lassen."
    ]
  },
  {
    id: 'voices',
    title: 'Voices',
    category: 'Audio',
    city: 'Bern',
    creator: 'sara',
    level: 'Studium',
    published: '2026-04-08',
    image: 'assets/AdobeStock_504514997.jpg',
    likes: 241,
    description: 'Stimmen, die man sonst nicht hört. Hör uns unseren neuen Podcast über die Stadt und Ihre Menschen an.',
    body: [
      "Voices bringt Menschen und ihre unterschiedlichen Sichtweisen zusammen. Das Audioformat geht der Frage nach, welche Stimmen im Alltag gehört werden und welche oft untergehen. In Gesprächen über persönliche Erfahrungen, Entscheidungen und Begegnungen entsteht ein vielschichtiges Porträt verschiedener Lebensrealitäten.",
      "Für die Gestaltung der Episoden spielen Gesprächsführung und Klang eine zentrale Rolle. Kurze atmosphärische Elemente verbinden die Aussagen miteinander und geben den Zuhörenden Orientierung. Das Format soll neugierig machen, neue Perspektiven eröffnen und zeigen, wie nah uns eine Geschichte kommen kann, wenn wir aufmerksam zuhören."
    ]
  }
];
const CATEGORIES = [
  'Alle', 'Foto', 'Video', 'Audio',
  'Web', 'Animation', 'Design'
];
const CITIES = ['Zürich', 'Bern', 'Chur'];
const DEMO_COMMENTS = {
  'zwischen-zwei-welten': [
    {
      id: 'demo-1',
      name: 'Lina Meier',
      date: 'vor 3 Tagen',
      body: 'Schöne Bildsprache! Wie habt ihr die Interviews organisiert?'
    },
    {
      id: 'demo-2',
      name: 'Noah Keller',
      date: 'vor 5 Tagen',
      body: 'Spannendes Thema. Welche Kamera habt ihr verwendet?'
    }
  ],
  'linie-vier': [
    {
      id: 'demo-3',
      name: 'Leonie Kramer',
      date: 'vor 2 Tagen',
      body: 'Sehr spannende Interaktion und klare Navigation!'
    }
  ]
};
// HILFSFUNKTIONEN
const $ = (selector, root = document) =>
  root.querySelector(selector);
const esc = value =>
  String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
const byId = id => PROJECTS.find(p => p.id === id);
const creator = id => CREATORS.find(p => p.id === id);
const dateCH = iso =>
  new Intl.DateTimeFormat('de-CH', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(iso + 'T12:00:00'));
function load(key, fallback) {
  try {
    return JSON.parse(
      localStorage.getItem('digezz2-' + key)
    ) ?? fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  try {
    localStorage.setItem(
      'digezz2-' + key,
      JSON.stringify(value)
    );
  } catch {}
}
const state = {
  category: 'Alle',
  city: 'Alle',
  level: 'Studium',
  sort: 'neu',
  query: '',
  studentQuery: '',
  likes: load('likes', []),
  saved: load('saved', []),
  comments: load('comments', {}),
  replies: load('replies', {}),
  openReply: null
};
const isLiked = id => state.likes.includes(id);
const isSaved = id => state.saved.includes(id);
const hearts = p => p.likes + (isLiked(p.id) ? 1 : 0);
const projectComments = id => [
  ...(DEMO_COMMENTS[id] || []),
  ...(state.comments[id] || [])
];
const route = () =>
  decodeURIComponent(
    location.hash.slice(1).split('?')[0] || '/'
  );
const AVATAR = (person, size = '') => `
  <span class="avatar ${size}" aria-hidden="true">
    ${esc(person.name.split(' ').map(s => s[0]).join(''))}
  </span>
`;
const IMG = (src, alt) => `
  <img
    src="${esc(src)}"
    alt="${esc(alt)}"
    loading="lazy"
    onerror="this.onerror=null;this.style.visibility='hidden'"
  >
`;
// SVG-ICONS
const ICONS = {
  chat: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8"
      stroke-linejoin="round" stroke-linecap="round"
      aria-hidden="true">
      <path d="M20 16.5c0 1.1-.9 2-2 2H8l-4 3V6.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2z"/>
      <circle cx="9" cy="12" r=".8" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="12" r=".8" fill="currentColor" stroke="none"/>
      <circle cx="15" cy="12" r=".8" fill="currentColor" stroke="none"/>
    </svg>
  `,
  heart: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8"
      stroke-linejoin="round" stroke-linecap="round"
      aria-hidden="true">
      <path d="M20.8 8.5c0 4-8.8 10.5-8.8 10.5S3.2 12.5 3.2 8.5a4.9 4.9 0 0 1 8.8-2.7 4.9 4.9 0 0 1 8.8 2.7Z"/>
    </svg>
  `,
  bookmark: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8"
      stroke-linejoin="round" aria-hidden="true">
      <path d="M6 3.8h12v17l-6-4-6 4z"/>
    </svg>
  `,
  pin: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/>
      <circle cx="12" cy="10" r="2.5"/>
    </svg>
  `,
backpack: `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M9.2 2.2c0-.7.6-1.2 1.2-1.2h3.2c.7 0 1.2.5 1.2 1.2v1.1c1.8.3 3.3 1.3 4.2 2.8l1.8 3c.4.6.6 1.4.6 2.1v8.9c0 1.6-1.3 2.9-2.9 2.9H5.5c-1.6 0-2.9-1.3-2.9-2.9v-8.9c0-.8.2-1.5.6-2.1l1.8-3c.9-1.5 2.4-2.5 4.2-2.8V2.2Zm2 .8v.6h1.6V3h-1.6Zm-3.7 6.5c0-.4.3-.7.7-.7h7.6c.4 0 .7.3.7.7v8.9c0 .4-.3.7-.7.7H8.2c-.4 0-.7-.3-.7-.7V9.5Zm1.5 1.4v6.1h6.1v-6.1H9Z"/>
    <path fill="currentColor" d="M5.5 7.1 4.4 9c-.2.4-.3.8-.3 1.2v8.9c0 .8.6 1.4 1.4 1.4h.7V7.1h-.7Zm13 0v13.4h.7c.8 0 1.4-.6 1.4-1.4v-8.9c0-.4-.1-.8-.3-1.2l-1.1-1.9h-.7Z"/>
  </svg>
`,
  cap: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.7"
      stroke-linejoin="round" aria-hidden="true">
      <path d="m2 9 10-5 10 5-10 5L2 9Z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5M22 9v7"/>
    </svg>
  `
};
const icon = name => ICONS[name] || '';
let toastTimer;
function toast(message) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove('show');
  }, 2600);
}
// HEADER
function header() {
  const items = [
    ['/', 'Entdecken'],
    ['/projekte', 'Projekte'],
    ['/beste', 'Top Picks'],
    ['/studierende', 'Students'],
    ['/gespeichert', 'Merkliste'],
    ['/ueber', 'Digezz Reviewed']
  ];
  return `
    <header class="header">
      <a href="#/" class="brand"
        aria-label="Digezz Reviewed – Startseite">
        ${IMG('assets/digezz-reviewed-logo.png', 'Digezz Reviewed')}
      </a>
      <nav class="main-nav" aria-label="Hauptnavigation">
        ${items.map(([url, label]) => `
          <a href="#${url}"
            class="${route() === url ? 'active' : ''}">
            ${label}
          </a>
        `).join('')}
      </nav>
      <label class="global-search"
        aria-label="Projekte suchen">
        <span aria-hidden="true">⌕</span>
        <input id="global-search" type="search"
          placeholder="Projekte suchen ..."
          value="${esc(state.query)}">
      </label>
      <a href="#/gespeichert"
        class="saved-shortcut" title="Merkliste">
        ${icon('heart')}
        <span>${state.saved.length}</span>
      </a>
    </header>
  `;
}
// FILTER
function filters() {
  return `
    <div class="filters">
      <div class="category-list">
        ${CATEGORIES.map(c => `
          <button type="button"
            class="filter-chip ${state.category === c ? 'selected' : ''}"
            data-category="${c}"
            aria-pressed="${state.category === c}">
            ${c}
          </button>
        `).join('')}
      </div>
      <div class="city-list">
        ${CITIES.map(c => `
          <button type="button"
            class="city-chip ${state.city === c ? 'selected' : ''}"
            data-city="${c}"
            aria-pressed="${state.city === c}">
            ${icon('pin')}
            ${c}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}
// STUDIUM / BACHELOR
function levelSwitch() {
  const levels = [
    ['Studium', 'backpack'],
    ['Bachelor', 'cap']
  ];
  return `
    <div class="level-switch"
      role="group"
      aria-label="Studium oder Bachelor">
      ${levels.map(([label, symbol]) => `
        <button type="button"
          data-level="${label}"
          aria-pressed="${state.level === label}"
          class="level-btn ${state.level === label ? 'active' : ''}">
          ${icon(symbol)}
          <span>${label.toUpperCase()}</span>
        </button>
      `).join('')}
    </div>
  `;
}
// FILTERN UND SORTIEREN
function filtered(mode = 'alle') {
  let result = PROJECTS.filter(p => {
    const levelOK =
      mode === 'alle' ? p.level === state.level : true;
    const savedOK =
      mode === 'gespeichert' ? isSaved(p.id) : true;
    const categoryOK =
      mode === 'gespeichert' ||
      state.category === 'Alle' ||
      p.category === state.category;
    const cityOK =
      mode === 'gespeichert' ||
      state.city === 'Alle' ||
      p.city === state.city;
    const searchable = `
      ${p.title} ${p.description}
      ${p.city} ${p.category}
      ${creator(p.creator).name}
    `.toLocaleLowerCase('de');
    const searchOK =
      mode === 'gespeichert' ||
      searchable.includes(
        state.query.trim().toLocaleLowerCase('de')
      );
    return levelOK &&
      savedOK &&
      categoryOK &&
      cityOK &&
      searchOK;
  });
  if (mode === 'beste') {
    return result.sort((a, b) =>
      hearts(b) - hearts(a) ||
      b.published.localeCompare(a.published)
    ).slice(0, 10);
  }
  if (mode === 'gespeichert') {
    return result.sort((a, b) =>
      b.published.localeCompare(a.published)
    );
  }
  if (state.sort === 'beliebt') {
    result.sort((a, b) => hearts(b) - hearts(a));
  } else if (state.sort === 'titel') {
    result.sort((a, b) =>
      a.title.localeCompare(b.title, 'de'));
  } else {
    result.sort((a, b) =>
      b.published.localeCompare(a.published));
  }
  return result;
}
// PROJEKTKARTEN
function projectCard(p) {
  const a = creator(p.creator);
  return `
    <article class="project-card">
      <div class="card-image">
        <a href="#/projekt/${p.id}">
          ${IMG(p.image, p.title)}
        </a>
        <span class="category-tag">
          ${esc(p.category)}
        </span>
        <button type="button"
          class="image-save ${isSaved(p.id) ? 'selected' : ''}"
          data-save="${p.id}"
          title="${isSaved(p.id) ? 'Entfernen' : 'Merken'}">
          ${icon('bookmark')}
        </button>
      </div>
      <div class="card-content">
        <h3>
          <a href="#/projekt/${p.id}">
            ${esc(p.title)}
          </a>
        </h3>
        <a class="card-author" href="#/profil/${a.id}">
          ${AVATAR(a, 'small')}
          ${esc(a.name)}
        </a>
        <div class="card-bottom">
          <span>${esc(p.city)}</span>
          <button type="button"
            class="count-btn ${isLiked(p.id) ? 'liked' : ''}"
            data-like="${p.id}"
            aria-label="Gefällt mir">
            ${icon('heart')}
            ${hearts(p)}
          </button>
          <a class="count-btn"
            href="#/projekt/${p.id}?kommentare"
            aria-label="Kommentare">
            ${icon('chat')}
            ${projectComments(p.id).length}
          </a>
        </div>
      </div>
    </article>
  `;
}
// PROJEKTÜBERSICHT UND STATISTIK
function listing(
  mode = 'alle',
  { heading = true, stats = false } = {}
) {
  const list = filtered(mode);
  const headingText =
    mode === 'beste' ? 'Top Picks' :
    mode === 'gespeichert' ? 'Merkliste' :
    'Aktuelle Projekte';
  const statMarkup = stats ? `
    <div class="home-stats-inline"
      aria-label="Plattformstatistik">
      <div>
        <b>${PROJECTS.length}</b>
        <small>Demo-Projekte</small>
      </div>
      <div>
        <b>3</b>
        <small>Standorte</small>
      </div>
      <div>
        <b>6</b>
        <small>Kategorien</small>
      </div>
    </div>
  ` : '';
  return `
    <section id="project-list" class="listing">
      <div class="listing-heading">
        ${heading
          ? `<h2 class="serif">${headingText}</h2>`
          : ''}
        ${mode === 'alle' ? levelSwitch() : ''}
        ${statMarkup}
        ${mode === 'alle' ? `
          <label class="sort-control">
            Sortieren
            <select id="sort-select">
              <option value="neu"
                ${state.sort === 'neu' ? 'selected' : ''}>
                Neueste
              </option>
              <option value="beliebt"
                ${state.sort === 'beliebt' ? 'selected' : ''}>
                Beliebteste
              </option>
              <option value="titel"
                ${state.sort === 'titel' ? 'selected' : ''}>
                A–Z
              </option>
            </select>
          </label>
        ` : ''}
      </div>
      <p class="result-count">
        ${list.length}
        ${list.length === 1 ? 'Projekt' : 'Projekte'}
        ${mode === 'beste'
          ? 'in den Top Picks'
          : 'gefunden'}
      </p>
      ${list.length ? `
        <div class="project-grid">
          ${list.map(projectCard).join('')}
        </div>
      ` : `
        <div class="empty">
          <h3>
            ${mode === 'gespeichert'
              ? 'Noch keine Projekte gespeichert'
              : 'Keine Projekte gefunden'}
          </h3>
          <p>
            ${mode === 'gespeichert'
              ? 'Speichere deine Lieblingsprojekte über das Lesezeichen-Symbol.'
              : 'Versuche eine andere Kategorie oder einen anderen Standort.'}
          </p>
          ${mode === 'gespeichert'
            ? `<a class="dark-btn" href="#/projekte">
                 Projekte entdecken →
               </a>`
            : `<button type="button"
                 data-reset="1" class="dark-btn">
                 Filter zurücksetzen
               </button>`}
        </div>
      `}
    </section>
  `;
}
// STARTSEITE
function home() {
  const p = PROJECTS[0];
  return `
    <main class="container home">
      ${filters()}
      <section class="hero-grid hero-grid-wide">
        <a class="hero" href="#/projekt/${p.id}"
          style="background-image:
            linear-gradient(90deg,#0a1517dd,#14181722),
            url('${p.image}')">
          <div class="hero-inner">
            <span class="eyebrow">
              FEATURED PROJECT
            </span>
            <h1 class="serif">
              Zwischen<br>zwei Welten
            </h1>
            <p>${esc(p.description)}</p>
            <span class="hero-watch">
              <b>▶</b>
              Projekt ansehen
            </span>
          </div>
        </a>
      </section>
      ${listing('alle', {
        heading: true,
        stats: true
      })}
    </main>
  `;
}
// PROJEKTE
function projectArchive() {
  return `
    <main class="container page">
      <header class="page-heading">
        <h1 class="serif">Projekte</h1>
      </header>
      ${filters()}
      ${listing('alle', { heading: false })}
    </main>
  `;
}
// TOP PICKS
function bestPage() {
  return `
    <main class="container page">
      <header class="page-heading">
        <h1 class="serif">Top Picks</h1>
        <p>
          Eure beliebtesten Projekte, nach Likes sortiert.
        </p>
      </header>
      ${filters()}
      ${listing('beste', { heading: false })}
    </main>
  `;
}
// MERKLISTE
function savedPage() {
  const list = filtered('gespeichert');
  return `
    <main class="container page saved-page">
      <h1 class="serif">Deine Merkliste</h1>
      <p class="result-count">
        ${list.length} gespeicherte
        ${list.length === 1 ? 'Arbeit' : 'Arbeiten'}
      </p>
      ${list.length ? `
        <div class="project-grid">
          ${list.map(projectCard).join('')}
        </div>
      ` : `
        <div class="empty">
          <h3>Noch keine Projekte gespeichert</h3>
          <p>
            Mit dem Lesezeichen auf einer Projektkarte
            kannst du interessante Arbeiten sammeln.
          </p>
          <a class="dark-btn" href="#/projekte">
            Projekte entdecken →
          </a>
        </div>
      `}
    </main>
  `;
}
// STUDENTS
function studentsGrid() {
  const q = state.studentQuery
    .trim()
    .toLocaleLowerCase('de');
  const people = CREATORS.filter(a =>
    `${a.name} ${a.city} ${a.bio} ${a.interests.join(' ')}`
      .toLocaleLowerCase('de')
      .includes(q)
  );
  return `
    <div class="student-grid">
      ${people.map(a => `
        <a class="student-card" href="#/profil/${a.id}">
          ${AVATAR(a, 'large')}
          <h2 class="serif">${esc(a.name)}</h2>
          <span>
            ${esc(a.city)} · ${esc(a.semester)}
          </span>
          <p>${esc(a.bio)}</p>
          <strong>
            ${PROJECTS.filter(p => p.creator === a.id).length}
            Projekte ansehen →
          </strong>
        </a>
      `).join('')}
    </div>
    ${people.length ? '' : `
      <div class="empty">
        <h3>Keine Studierenden gefunden</h3>
        <p>Versuche einen anderen Namen oder Standort.</p>
      </div>
    `}
  `;
}
function studentsPage() {
  return `
    <main class="container page">
      <header class="students-heading">
        <h1 class="serif">Students</h1>
        <label class="student-search">
          ⌕
          <input id="student-search"
            type="search"
            placeholder="Person suchen ..."
            aria-label="Studierende suchen"
            value="${esc(state.studentQuery)}">
        </label>
      </header>
      <div id="student-results">
        ${studentsGrid()}
      </div>
    </main>
  `;
}
// EINZELNES STUDIERENDENPROFIL
function profilePage(id) {
  const a = creator(id);
  if (!a) return notFound();
  const own = PROJECTS.filter(p => p.creator === id);
  return `
    <main class="container page">
      <a class="back" href="#/studierende">
        ← Alle Students
      </a>
      <div class="profile-cover">
        ${IMG('assets/profile_banner.jpg', 'Titelbild')}
      </div>
      <section class="profile-summary">
        ${AVATAR(a, 'huge')}
        <div class="profile-details">
          <h1 class="serif">${esc(a.name)}</h1>
          <p>${esc(a.city)} · ${esc(a.semester)}</p>
          <p>${esc(a.bio)}</p>
          <h3>Interessen</h3>
          <div class="interest-tags">
            ${a.interests.map(s => `
              <span>${esc(s)}</span>
            `).join('')}
          </div>
        </div>
        <button class="dark-btn profile-share"
          type="button"
          data-share-profile="${a.id}">
          Profil teilen ↗
        </button>
      </section>
      <section class="listing">
        <div class="listing-heading">
          <h2 class="serif">
            Projekte von ${esc(a.name)}
          </h2>
        </div>
        <div class="project-grid">
          ${own.map(projectCard).join('')}
        </div>
      </section>
    </main>
  `;
}

function footer() {
  return `
    <footer class="site-footer">

      <div class="footer-dashed-line"></div>

      <div class="footer-columns">

        <!-- SPALTE 1: ÜBER DAS PROJEKT -->
        <section class="footer-column">
          <h2>ÜBER DIGEZZ REVIEWED</h2>

          <p>
            Digezz Reviewed ist ein unabhängiger
            UX-Prototyp. Er zeigt, wie Projekte von
            Studierenden einfacher entdeckt,
            diskutiert und präsentiert werden könnten.
          </p>

          <div class="footer-top-picks">
            <span class="footer-award">TOP</span>

            <p>
              In den <a href="#/beste">Top Picks</a>
              erscheinen die beliebtesten Projekte,
              sortiert nach Likes.
            </p>
          </div>
        </section>

        <!-- SPALTE 2: KONTAKT -->
        <section class="footer-column">
          <h2>KONTAKT</h2>

          <p>
            Fragen oder Feedback zum Konzept?
            Ich freue mich über Anregungen und
            Verbesserungsvorschläge.
          </p>

          <p>
            <strong>Kontaktangaben</strong>
            <span class="footer-muted">
              Cedric.Hochreuter@students.fhgr.ch
            </span>
          </p>
        </section>

        <!-- SPALTE 3: IMPRESSUM -->
        <section class="footer-column">
          <h2>IMPRESSUM</h2>

          <p>
            <strong>Digezz Reviewed</strong>
            UX- und Designprojekt
          </p>

          <p class="footer-muted">
            Dieser Prototyp ist keine offizielle
            Website der FHGR oder der Betreiber
            von Digezz.
          </p>

          <p class="footer-muted">
            Die gezeigten Projekte und Personen
            sind fiktive Demoinhalte.
          </p>
        </section>

        <!-- SPALTE 4: LINKS -->
        <nav class="footer-column footer-links">
          <h2>WEITERE SEITEN</h2>

          <a href="#/">Entdecken</a>
          <a href="#/projekte">Projekte</a>
          <a href="#/beste">Top Picks</a>
          <a href="#/studierende">Students</a>
          <a href="#/gespeichert">Merkliste</a>
          <a href="#/ueber">Über das Projekt</a>
        </nav>

      </div>

      <div class="footer-bottom">
        <span>
          Digezz Reviewed · Unabhängiger UX-Konzeptprototyp
        </span>

        <span>
          Alle Projekte und Profile sind fiktive Demoinhalte.
        </span>
      </div>

    </footer>
  `;
}
// AUTOR-ANTWORTEN
function renderReplies(pid, cid, a) {
  const replies =
    ((state.replies[pid] || {})[cid] || []);
  const isOpen =
    state.openReply === pid + '|' + cid;
  return `
    <div class="replies">
      ${replies.map(r => `
        <article class="reply">
          ${AVATAR(a, 'small')}
          <div>
            <strong>
              ${esc(a.name)}
              <span class="author-mark">
                Autor:in
              </span>
            </strong>
            <small>${esc(r.date)}</small>
            <p>${esc(r.body)}</p>
            <button class="text-action delete-action"
              data-delete-reply="${pid}|${cid}|${r.id}">
              Antwort löschen
            </button>
          </div>
        </article>
      `).join('')}
    </div>
    ${isOpen ? `
      <form class="reply-form"
        data-reply-form="${pid}|${cid}">
        <label>
          Als ${esc(a.name)} antworten (Demo)
        </label>
        <textarea name="reply"
          maxlength="1000"
          minlength="2"
          required
          placeholder="Antwort auf den Kommentar ..."></textarea>
        <div>
          <button class="gold-btn" type="submit">
            Antwort veröffentlichen
          </button>
          <button class="text-action"
            type="button"
            data-close-reply="1">
            Abbrechen
          </button>
        </div>
      </form>
    ` : ''}
  `;
}
// KOMMENTARE
function commentsSection(p, a) {
  const comments = projectComments(p.id);
  return `
    <section class="comments" id="kommentare">
      <div class="section-heading">
        <h2 class="serif">
          Kommentare (${comments.length})
        </h2>
      </div>
      <form class="comment-form"
        id="comment-form"
        data-pid="${p.id}">
        <label for="comment-text">
          Dein Feedback zu diesem Projekt
        </label>
        <textarea id="comment-text"
          minlength="3"
          maxlength="1000"
          placeholder="Schreibe einen konstruktiven Kommentar ..."
          required></textarea>
        <button class="gold-btn" type="submit">
          Kommentieren
        </button>
        <small>
          Demo: Kommentare und Antworten werden
          nur in diesem Browser gespeichert.
        </small>
      </form>
      <div class="comment-list">
        ${comments.map(c => `
          <article class="comment">
            ${AVATAR(
              { name: c.name || 'Du' },
              'small'
            )}
            <div class="comment-body">
              <div class="comment-head">
                <b>${esc(c.name || 'Du (Demo)')}</b>
                <small>
                  ${esc(c.date || 'gerade eben')}
                </small>
                ${c.id.startsWith('demo-') ? '' : `
                  <button class="text-action delete-action"
                    data-delete-comment="${p.id}|${c.id}">
                    Löschen
                  </button>
                `}
              </div>
              <p>${esc(c.body)}</p>
              <button type="button"
                class="reply-toggle"
                data-reply="${p.id}|${c.id}">
                ${icon('chat')}
                Als Autor:in antworten
              </button>
              ${renderReplies(p.id, c.id, a)}
            </div>
          </article>
        `).join('')}
        ${comments.length ? '' : `
          <p class="result-count">
            Noch keine Kommentare – sei die erste Person!
          </p>
        `}
      </div>
    </section>
  `;
}
// BEITRAGSSEITE
function detailPage(id) {
  const p = byId(id);
  if (!p) return notFound();
  const a = creator(p.creator);
  const suggested = PROJECTS.filter(q =>
    q.id !== p.id &&
    (q.category === p.category || q.creator === p.creator)
  ).slice(0, 3);
  const hasMedia = [
    'Video', 'Audio', 'Animation'
  ].includes(p.category);
  return `
    <main class="container page detail">
      <a href="#/projekte" class="back">
        ← Zurück zu den Projekten
      </a>
      <div class="detail-layout">
        <div class="detail-main">
          <span class="eyebrow">
            ${esc(p.category)} · ${esc(p.city)}
          </span>
          <h1 class="serif">${esc(p.title)}</h1>
          <p class="lead">${esc(p.description)}</p>
          <div class="detail-cover">
            ${IMG(p.image, p.title)}
            ${hasMedia ? `
              <button type="button"
                class="media-play"
                data-media="1"
                aria-label="Medienvorschau">
                ▶
              </button>
            ` : ''}
          </div>
          <div class="actions">
            <button
              class="action-btn ${isLiked(p.id) ? 'liked' : ''}"
              data-like="${p.id}">
              ${icon('heart')}
              ${hearts(p)}
            </button>
            <a class="action-btn"
              href="#/projekt/${p.id}?kommentare">
              ${icon('chat')}
              ${projectComments(p.id).length}
            </a>
            <button class="action-btn"
              data-share="${p.id}">
              ↗ Teilen
            </button>
            <button
              class="action-btn ${isSaved(p.id) ? 'saved' : ''}"
              data-save="${p.id}">
              ${icon('bookmark')}
              ${isSaved(p.id) ? 'Gespeichert' : 'Merken'}
            </button>
          </div>
          <section class="article-copy">
            <h2 class="serif">Über das Projekt</h2>
            ${p.body.map(paragraph => `
              <p>${esc(paragraph)}</p>
            `).join('')}
          </section>
          <section class="reflection">
            <h2 class="serif">
              Kritik & Reflexion
            </h2>
            <p>
              Hier können die Studierenden den Produktionsprozess,
              die Herausforderungen und die gewonnenen
              Erkenntnisse dokumentieren.
            </p>
          </section>
          ${commentsSection(p, a)}
        </div>
        <aside class="detail-aside">
          <a class="creator-panel"
            href="#/profil/${a.id}">
            ${AVATAR(a)}
            <span>
              <strong>${esc(a.name)}</strong>
              <small>
                ${esc(a.city)} · ${esc(a.semester)}
              </small>
              <em>Zum Profil →</em>
            </span>
          </a>
          <div class="info-panel">
            <h2>Projektinfos</h2>
            <dl>
              <dt>Publiziert</dt>
              <dd>${dateCH(p.published)}</dd>
              <dt>Medienart</dt>
              <dd>${esc(p.category)}</dd>
              <dt>Bereich</dt>
              <dd>${esc(p.level)}</dd>
              <dt>Standort</dt>
              <dd>${esc(p.city)}</dd>
              <dt>Autor:in</dt>
              <dd>${esc(a.name)}</dd>
            </dl>
          </div>
          <h2 class="serif similar-title">
            Ähnliche Projekte
          </h2>
          ${suggested.map(q => `
            <a class="similar"
              href="#/projekt/${q.id}">
              ${IMG(q.image, q.title)}
              <span>
                <small>${esc(q.category)}</small>
                <strong>${esc(q.title)}</strong>
              </span>
            </a>
          `).join('')}
        </aside>
      </div>
    </main>
  `;
}
// ÜBER DIGEZZ REVIEWED
function aboutPage() {
  return `
    <main class="container page about">
      <span class="eyebrow">
        UX- UND DESIGNPROTOTYP
      </span>
      <h1 class="serif">
        Digezz Reviewed  Meine Kritik und Lösung
      </h1>
      <p class="lead">
        Digezz gibt unseren multimedialen Projekten eine Bühne.
        Doch sobald ein Beitrag veröffentlicht ist, fehlen aus
        meiner Sicht wichtige Möglichkeiten, ihn zu entdecken,
        zu diskutieren und als Studenten zu bewerten.
        Mit Digezz Reviewed möchte ich zeigen, wie sich die Plattform um so viel weiter entwickeln liesse.
      </p>
      <div class="about-grid">
        <article>
          <h2>01  Warum dieses Projekt?</h2>
          <p>
            Im MultimediaProduction Studium beschäftigen wir
            uns unter anderem mit Benutzerfreundlichkeit und
            Interaktivität. Gerade bei unserer eigenen
            Publikationsplattform sehe ich Potenzial:
            Statt einer reinen Sammlung von Arbeiten könnte
            Digezz auch ein Tool für Feedback und Austausch sein. Zusätzlich könnte die Plattform als Portfolio dienen, dass die Arbeiten der Studierenden von Firmen und Agenturen gefunden werden können.
          </p>
        </article>
        <article>
          <h2>02  Was ist anders?</h2>
          <p>
            Kategorien und Standortfilter vereinfachen die
            Suche. Likes, Kommentare und Antworten ermöglichen
            direkten Austausch. Ein Studium/Bachelor Button
            hilft bei der Orientierung; die Students Seite zeigt die einzelnen Projekte und Interessen der Studierenden.
          </p>
        </article>
        <article>
          <h2>03  Was soll passieren?</h2>
          <p>
            Dieser Prototyp soll einen Vorschlag für eine überarbeite Digezz Website sein.
            .Er ist ein konkreter Diskussionsanstoss:
            Was wäre technisch und organisatorisch möglich?
            Welche Funktionen wünschen sich Studierende?
            Und wer könnte die Plattform langfristig
            weiterentwickeln?
          </p>
        </article>
      </div>
      <section class="about-extra">
        <h2 class="serif">
          Vom digitalen Archiv zur Community
        </h2>
        <p>
          Besonders wichtig war mir die Möglichkeit, auf
          veröffentlichte Arbeiten direkt zu reagieren. Daher war ich verwirrt, dass die Kommentarfunktion auf Digezz noch nie ein Thema war.
          Wir reflektieren unsere eigenen Projekte bereits
          kritisch, warum sollten wir nicht auch voneinander
          lernen? Kommentare sollen deshalb konstruktiv sein,
          und Projektverantwortliche sollen auf Fragen
          antworten können.
        </p>
        <p>
          Die Rubrik <strong>Top Picks</strong> richtet sich
          in diesem Entwurf nach Likes der Studierenden statt
          nach einer redaktionellen Auswahl. Für eine reale
          Umsetzung bräuchte es dafür klare Regeln gegen
          Manipulation und transparente Moderation.
        </p>
        <p>
          Ich würde diesen Entwurf gerne als Ausgangspunkt
          für einen Austausch mit Studierenden und
          Verantwortlichen nutzen. Entscheidend ist nicht,
          ob jede Funktion exakt so übernommen wird,
          sondern dass die Plattform von den Verantwortlichen weiterentwickelt wird.
        </p>
      </section>
      <p class="disclaimer">
        <strong>Hinweis:</strong>
        Dies ist keine offizielle Website der FHGR oder
        von Digezz. Alle Personen, Beiträge, Daten,
        Like-Zahlen und Kommentare sind fiktive Demo-Inhalte.
        Likes und Kommentare werden nur im jeweiligen
        Browser gespeichert; die Autor-Antwort ist eine
        simulierte Funktion ohne Anmeldung.
      </p>
    </main>
  `;
}
// NICHT GEFUNDENE SEITE
function notFound() {
  return `
    <main class="container page empty">
      <h1>Diese Seite wurde nicht gefunden.</h1>
      <a href="#/" class="dark-btn">
        Zur Startseite →
      </a>
    </main>
  `;
}
// DIALOGFENSTER
function modal(title, url = '') {
  $('#modal-root').innerHTML = `
    <div class="modal-shade" data-modal-close="1">
      <section class="modal"
        role="dialog"
        aria-modal="true"
        aria-label="${esc(title)}">
        <button class="modal-close"
          type="button"
          data-modal-close="1"
          aria-label="Schliessen">
          ✕
        </button>
        <h2 class="serif">${esc(title)}</h2>
        ${url ? `
          <p>Hier kannst du den Link zur Demoseite kopieren.</p>
          <input id="share-url"
            readonly
            value="${esc(url)}">
          <button class="gold-btn"
            type="button"
            data-copy="1">
            Link kopieren
          </button>
        ` : `
          <p>
            Hier würde später das echte Video
            oder Audio abgespielt.
          </p>
        `}
      </section>
    </div>
  `;
}
// WEBSITE RENDERN
function render({ retainScroll = false } = {}) {
  const oldY = window.scrollY;
  const parts = route().split('/').filter(Boolean);
  let content;
  if (!parts.length) {
    content = home();
  } else if (parts[0] === 'projekte') {
    content = projectArchive();
  } else if (parts[0] === 'beste') {
    content = bestPage();
  } else if (parts[0] === 'gespeichert') {
    content = savedPage();
  } else if (parts[0] === 'studierende') {
    content = studentsPage();
  } else if (parts[0] === 'profil') {
    content = profilePage(parts[1]);
  } else if (parts[0] === 'projekt') {
    content = detailPage(parts[1]);
  } else if (parts[0] === 'ueber') {
    content = aboutPage();
  } else {
    content = notFound();
  }
  
$('#app').innerHTML = `
  <div class="site-shell">
    ${header()}
    ${content}
    ${footer()}
  </div>
`;

  const project = byId(parts[1]);
  document.title =
    (parts[0] === 'projekt' && project
      ? project.title
      : 'Digezz Reviewed') +
    ' | Digezz Reviewed';
  if (retainScroll) {
    window.scrollTo(0, oldY);
  } else if (location.hash.includes('?kommentare')) {
    setTimeout(() => {
      $('#kommentare')?.scrollIntoView();
    }, 0);
  }
}
// LOKALE LIKES UND MERKLISTE
function toggle(which, id) {
  state[which] = state[which].includes(id)
    ? state[which].filter(x => x !== id)
    : [...state[which], id];
  save(which, state[which]);
}
function reset() {
  state.category = 'Alle';
  state.city = 'Alle';
  state.query = '';
  state.sort = 'neu';
  render({ retainScroll: true });
}
// LISTE ERNEUERN, OHNE HEADER-SUCHFELD ZU VERLIEREN
function repaintList() {
  const section = $('#project-list');
  if (!section) return;
  const r = route();
  const mode = r === '/beste' ? 'beste' : 'alle';
  section.outerHTML = listing(mode, {
    heading: r === '/',
    stats: r === '/'
  });
}
function repaintStudents() {
  const target = $('#student-results');
  if (target) {
    target.innerHTML = studentsGrid();
  }
}
function nextId() {
  return String(Date.now()) + '-' +
    Math.random().toString(36).slice(2, 7);
}
// KLICK-EVENTS
document.addEventListener('click', async e => {
  const b = e.target.closest('button,[data-modal-close]');
  if (!b) return;
  if (b.dataset.modalClose) {
    if (
      e.target === b ||
      b.classList.contains('modal-close')
    ) {
      $('#modal-root').innerHTML = '';
    }
    return;
  }
  if (b.dataset.category) {
    state.category = b.dataset.category;
    render({ retainScroll: true });
    return;
  }
  if (b.dataset.city) {
    state.city =
      state.city === b.dataset.city ? 'Alle' : b.dataset.city;
    render({ retainScroll: true });
    return;
  }
  if (b.dataset.level) {
    state.level = b.dataset.level;
    render({ retainScroll: true });
    return;
  }
  if (b.dataset.reset) {
    reset();
    return;
  }
  if (b.dataset.like) {
    toggle('likes', b.dataset.like);
    render({ retainScroll: true });
    return;
  }
  if (b.dataset.save) {
    toggle('saved', b.dataset.save);
    render({ retainScroll: true });
    toast(
      isSaved(b.dataset.save)
        ? 'Zur Merkliste hinzugefügt'
        : 'Aus Merkliste entfernt'
    );
    return;
  }
  if (b.dataset.share || b.dataset.shareProfile) {
    const url = location.href.split('#')[0] + '#/' +
      (b.dataset.share
        ? 'projekt/' + b.dataset.share
        : 'profil/' + b.dataset.shareProfile);
    modal('Beitrag teilen', url);
    return;
  }
  if (b.dataset.media) {
    modal('Medienvorschau');
    return;
  }
  if (b.dataset.copy) {
    try {
      await navigator.clipboard.writeText(
        $('#share-url').value
      );
      toast('Link kopiert!');
    } catch {
      $('#share-url').select();
      toast('Link markieren und kopieren.');
    }
    return;
  }
  if (b.dataset.reply) {
    state.openReply =
      state.openReply === b.dataset.reply
        ? null
        : b.dataset.reply;
    render({ retainScroll: true });
    return;
  }
  if (b.dataset.closeReply) {
    state.openReply = null;
    render({ retainScroll: true });
    return;
  }
  if (b.dataset.deleteComment) {
    const [pid, cid] = b.dataset.deleteComment.split('|');
    state.comments[pid] =
      (state.comments[pid] || [])
        .filter(c => c.id !== cid);
    delete (state.replies[pid] || {})[cid];
    save('comments', state.comments);
    save('replies', state.replies);
    render({ retainScroll: true });
    return;
  }
  if (b.dataset.deleteReply) {
    const [pid, cid, rid] =
      b.dataset.deleteReply.split('|');
    if (state.replies[pid]?.[cid]) {
      state.replies[pid][cid] =
        state.replies[pid][cid]
          .filter(r => r.id !== rid);
    }
    save('replies', state.replies);
    render({ retainScroll: true });
    return;
  }
});
// SORTIERUNG
document.addEventListener('change', e => {
  if (e.target.id === 'sort-select') {
    state.sort = e.target.value;
    repaintList();
  }
});
// PROJEKTSUCHE UND PERSONENSUCHE
document.addEventListener('input', e => {
  if (e.target.id === 'global-search') {
    state.query = e.target.value;
    if (!['/', '/projekte', '/beste'].includes(route())) {
      location.hash = '/projekte';
    } else {
      repaintList();
    }
  }
  if (e.target.id === 'student-search') {
    state.studentQuery = e.target.value;
    repaintStudents();
  }
});
// KOMMENTARE UND AUTOR-ANTWORTEN
document.addEventListener('submit', e => {
  if (e.target.id === 'comment-form') {
    e.preventDefault();
    const pid = e.target.dataset.pid;
    const body = $('#comment-text').value.trim();
    if (body.length < 3) return;
    state.comments[pid] = [
      ...(state.comments[pid] || []),
      {
        id: nextId(),
        name: 'Du (Demo)',
        date: 'gerade eben',
        body
      }
    ];
    save('comments', state.comments);
    render({ retainScroll: true });
    toast('Kommentar gespeichert');
    return;
  }
  if (e.target.dataset.replyForm) {
    e.preventDefault();
    const [pid, cid] =
      e.target.dataset.replyForm.split('|');
    const body =
      e.target.elements.reply.value.trim();
    if (body.length < 2) return;
    state.replies[pid] ??= {};
    state.replies[pid][cid] ??= [];
    state.replies[pid][cid].push({
      id: nextId(),
      date: 'gerade eben',
      body
    });
    save('replies', state.replies);
    state.openReply = null;
    render({ retainScroll: true });
    toast('Antwort des Projekt-Autors gespeichert');
    return;
  }
});
// NAVIGATION UND START
window.addEventListener('hashchange', () => {
  state.openReply = null;
  render();
  window.scrollTo(0, 0);
  if (location.hash.includes('?kommentare')) {
    setTimeout(() => {
      $('#kommentare')?.scrollIntoView();
    }, 40);
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    $('#modal-root').innerHTML = '';
  }
});
render();
