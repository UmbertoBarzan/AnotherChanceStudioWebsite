import fs from "fs";
import path from "path";

const projectsRoot = path.join(process.cwd(), "public", "media", "projects");

const projectMetadata = {
  zensense: {
    title: "ZenSense",
    summary: {
      en: "Multisensory VR installation for FEFF, combining guided interaction, audiovisual content and scent delivery.",
      it: "Installazione VR multisensoriale per il FEFF, con interazione guidata, contenuti audiovisivi e diffusione olfattiva.",
    },
    intro: {
      en: "Presented at the Far East Film Festival in Udine, ZenSense turns a guided VR path into a multisensory installation for visitors and event audiences.",
      it: "Presentato al Far East Film Festival di Udine, ZenSense trasforma un percorso VR guidato in un'installazione multisensoriale pensata per pubblico ed eventi.",
    },
    description: {
      en: "ZenSense connects narrative flow, real-time interaction, audiovisual direction and an olfactory device integrated with the experience logic. The work focused on making scent part of the storytelling rather than a decorative effect, while keeping the Meta Quest experience stable and readable for a public festival setting.",
      it: "ZenSense collega flusso narrativo, interazione in tempo reale, direzione audiovisiva e un dispositivo olfattivo integrato con la logica dell'esperienza. Il lavoro si e' concentrato sul rendere il profumo parte del racconto, non un effetto decorativo, mantenendo l'esperienza Meta Quest stabile e leggibile in un contesto festival aperto al pubblico.",
    },
    role: {
      en: "Virtual Reality",
      it: "Virtual Reality",
    },
    tags: ["#VR", "#MetaQuest", "#Multisensory", "#Festival"],
    client: "Far East Film Festival",
    collaboration: {
      en: "Team project delivered for the Far East Film Festival in Udine, with specific work around sensory integration and final event setup.",
      it: "Progetto realizzato in team per il Far East Film Festival di Udine, con lavoro specifico sull'integrazione sensoriale e sulla preparazione per l'evento.",
    },
  },
  georisk: {
    title: "GeoRisk",
    summary: {
      en: "Educational VR experience for seismic risk communication, with guided content, 360 scenes and interactive levels.",
      it: "Esperienza VR educativa e divulgativa sul rischio sismico, con contenuti guidati, scene 360 e livelli interattivi.",
    },
    intro: {
      en: "GeoRisk uses VR to explain earthquakes, plate movement and seismic effects through a structured educational path.",
      it: "GeoRisk usa la VR per spiegare terremoti, movimento delle placche ed effetti sismici attraverso un percorso educativo strutturato.",
    },
    description: {
      en: "Developed for a seismic institute in the Gemona area, GeoRisk translates scientific content into immersive scenes and practical interactions. The experience includes language selection, guided explanations, level-based activities and visualizations that help visitors compare seismic scales, terrain behavior and core risk concepts.",
      it: "Sviluppato per un istituto sismico del Gemonese, GeoRisk traduce contenuti scientifici in scene immersive e interazioni pratiche. L'esperienza include selezione della lingua, spiegazioni guidate, attivita' a livelli e visualizzazioni che aiutano a confrontare scale sismiche, comportamento del terreno e concetti chiave legati al rischio.",
    },
    role: {
      en: "Virtual Reality",
      it: "Virtual Reality",
    },
    tags: ["#VR", "#MetaQuest", "#Education", "#ScienceCommunication"],
    client: "Seismic institute in the Gemona area",
    collaboration: {
      en: "Built as a team project for a seismic institute in the Gemona area.",
      it: "Realizzato in team per un istituto sismico del Gemonese.",
    },
    galleryLayout: "georisk",
    galleryGroups: [
      {
        title: {
          en: "Language selection",
          it: "Selezione della lingua",
        },
        description: {
          en: "Initial multilingual interface used to start the experience and make the educational path accessible to different visitors.",
          it: "Interfaccia iniziale multilingua usata per avviare l'esperienza e rendere il percorso educativo accessibile a visitatori diversi.",
        },
        images: ["0.png"],
      },
      {
        title: {
          en: "Seismic scales",
          it: "Scale sismiche",
        },
        description: {
          en: "Comparison between Richter magnitude, Mercalli intensity and observed effects, shown inside the immersive environment.",
          it: "Confronto tra magnitudo Richter, intensita' Mercalli ed effetti osservabili, mostrato dentro l'ambiente immersivo.",
        },
        images: ["1.png"],
      },
      {
        title: {
          en: "Interactive damage level",
          it: "Livello interattivo sul danno",
        },
        description: {
          en: "Interactive scene where users select seismic intensity levels and observe how the environment changes as damage increases.",
          it: "Scena interattiva in cui l'utente seleziona i livelli di intensita' sismica e osserva come cambia l'ambiente all'aumentare del danno.",
        },
        images: ["2.png"],
      },
      {
        title: {
          en: "Epicenter, hypocenter and seismic-resistant buildings",
          it: "Epicentro, ipocentro e edifici anti-sismici",
        },
        description: {
          en: "Didactic model used to explain the difference between seismic-resistant and non-resistant buildings, and the relationship between epicenter and hypocenter.",
          it: "Modello didattico usato per spiegare la differenza tra edifici anti-sismici e non anti-sismici, e il rapporto tra epicentro e ipocentro.",
        },
        images: ["4.png", "3.png"],
      },
    ],
    galleryCaptions: {
      "0.png": {
        en: "Language selection screen for Italian, English, Friulian and German.",
        it: "Schermata di selezione lingua per italiano, inglese, friulano e tedesco.",
      },
      "1.png": {
        en: "Table connecting Richter values, Mercalli intensity and observable earthquake effects.",
        it: "Tabella che collega valori Richter, intensita' Mercalli ed effetti osservabili di un terremoto.",
      },
      "2.png": {
        en: "Interactive level with selectable seismic intensity and visible damage progression.",
        it: "Livello interattivo con intensita' sismica selezionabile e progressione visibile del danno.",
      },
      "3.png": {
        en: "Animated transition of the model with descriptions.",
        it: "Transizione animata del modello con descrizioni.",
      },
      "4.png": {
        en: "Clean view of the terrain model used for the seismic explanation.",
        it: "Vista pulita del modello del terreno usato per la spiegazione sismica.",
      },
    },
  },
  "pw-airport": {
    title: "PW Airport",
    summary: {
      en: "Airport operations platform combining Unreal VR, Unity AR, Python backend, PostgreSQL and data visualization.",
      it: "Piattaforma per operazioni aeroportuali con VR in Unreal, AR in Unity, backend Python, PostgreSQL e visualizzazione dati.",
    },
    intro: {
      en: "PW Airport explores airport logistics and operations through connected VR/AR applications built for ITS Alto Adriatico.",
      it: "PW Airport esplora logistica e operazioni aeroportuali attraverso applicazioni VR/AR collegate, sviluppate per ITS Alto Adriatico.",
    },
    description: {
      en: "The project combines an Unreal-based VR simulator for Meta Quest with a Unity AR application for Android and Meta Quest. Beyond the immersive front end, the work also covers Python backend services, PostgreSQL data storage, technical documentation, data visualization and operational flows for managing airport-related information and scenarios.",
      it: "Il progetto combina un simulatore VR in Unreal per Meta Quest con un applicativo AR in Unity per Android e Meta Quest. Oltre alla parte immersiva, il lavoro comprende backend Python, database PostgreSQL, documentazione tecnica, visualizzazione dati e flussi operativi per gestire informazioni e scenari legati all'ambito aeroportuale.",
    },
    role: {
      en: "Virtual & Augmented Reality",
      it: "Virtual & Augmented Reality",
    },
    tags: ["#VR", "#AR", "#MetaQuest", "#Android", "#Python", "#PostgreSQL"],
    client: "ITS Alto Adriatico",
    collaboration: {
      en: "Built as a team project for ITS Alto Adriatico, our institute.",
      it: "Realizzato in team per ITS Alto Adriatico, il nostro istituto.",
    },
    coverFile: "PwAirport.png",
    galleryLayout: "pw-airport",
    galleryGroups: [
      {
        title: {
          en: "Airport layout and spline system",
          it: "Aeroporto e sistema di spline",
        },
        description: {
          en: "Views of the airport environment and the spline paths used to manage aircraft movement across the simulation.",
          it: "Viste dell'ambiente aeroportuale e delle spline usate per gestire il movimento degli aerei nella simulazione.",
        },
        images: ["0.jpg", "3.jpeg"],
      },
      {
        title: {
          en: "Visual environment",
          it: "Ambiente grafico",
        },
        description: {
          en: "Screens focused on the visual construction of the airport scene and its real-time presentation.",
          it: "Schermate dedicate alla costruzione grafica dell'aeroporto e alla resa in tempo reale della scena.",
        },
        images: ["1.png", "2.png", "8.png"],
      },
      {
        title: {
          en: "Schedules and aircraft details",
          it: "Schedule e dettagli aerei",
        },
        description: {
          en: "Operational data views, including scheduled aircraft and a detailed page for a specific B737.",
          it: "Viste sui dati operativi, tra cui gli aerei schedulati e la pagina dettagliata di un B737 specifico.",
        },
        images: ["4.jpg", "5.jpg"],
      },
      {
        title: {
          en: "Documentation and system pipeline",
          it: "Documentazione e pipeline del sistema",
        },
        description: {
          en: "Project documentation and the technical pipeline connecting the Unity client, backend services and supporting systems.",
          it: "Documentazione del progetto e pipeline tecnica tra client Unity, servizi backend e sistemi di supporto.",
        },
        images: ["6.jpg", "7.jpg"],
      },
    ],
    galleryCaptions: {
      "0.jpg": {
        en: "Spline paths and airport layout used for aircraft movement.",
        it: "Spline e layout aeroportuale usati per il movimento degli aerei.",
      },
      "1.png": {
        en: "Airport visual scene and environmental presentation.",
        it: "Scena grafica dell'aeroporto e resa dell'ambiente.",
      },
      "2.png": {
        en: "Additional visual work on the airport environment.",
        it: "Ulteriore lavoro grafico sull'ambiente aeroportuale.",
      },
      "3.jpeg": {
        en: "Airport view with spline-based operational routing.",
        it: "Vista dell'aeroporto con instradamento operativo tramite spline.",
      },
      "4.jpg": {
        en: "Schedule table with planned aircraft operations.",
        it: "Tabella con gli schedule degli aerei in programma.",
      },
      "5.jpg": {
        en: "Detailed aircraft page, shown here for a B737.",
        it: "Scheda dettagliata di un aereo, in questo caso un B737.",
      },
      "6.jpg": {
        en: "Technical documentation produced for the project.",
        it: "Documentazione tecnica prodotta per il progetto.",
      },
      "7.jpg": {
        en: "Pipeline diagram between Unity client, backend and supporting services.",
        it: "Grafico della pipeline tra client Unity, backend e servizi di supporto.",
      },
      "8.png": {
        en: "Aircraft presentation inside the real-time visual environment.",
        it: "Presentazione dell'aereo dentro l'ambiente grafico in tempo reale.",
      },
    },
    hardwareNote: {
      en: "The project also included Arduino-based physical feedback: LEDs reacting to takeoff and landing events, and a photoresistor input used to affect the time of day inside the Unreal experience. These interactions are visible in the trailers even without dedicated screenshots.",
      it: "Il progetto includeva anche feedback fisico con Arduino: LED collegati agli eventi di decollo e atterraggio, e un fotoresistore usato per modificare l'ora del giorno nell'esperienza Unreal. Queste interazioni sono visibili nei trailer anche senza screenshot dedicati.",
    },
    galleryExclude: ["PwAirport"],
    showTrailerSection: false,
  },
  zenvr: {
    title: "ZenVR",
    summary: {
      en: "Meta Quest VR hub presented at FEFF, with 360 video access and hand-tracking navigation.",
      it: "Hub VR per Meta Quest presentato al FEFF, con accesso a video 360 e navigazione tramite hand tracking.",
    },
    intro: {
      en: "ZenVR gives visitors a simple immersive hub for choosing 360 content inside a Meta Quest experience.",
      it: "ZenVR offre ai visitatori un hub immersivo semplice per scegliere contenuti 360 dentro un'esperienza Meta Quest.",
    },
    description: {
      en: "Presented at the Far East Film Festival in Udine, ZenVR focuses on direct navigation, hand tracking and clean audio/video integration. The experience was designed to stay immediate for event visitors: users enter an immersive hub, select one of the available scenes and access 360 content without complex menus.",
      it: "Presentato al Far East Film Festival di Udine, ZenVR si concentra su navigazione diretta, hand tracking e integrazione pulita di contenuti audio/video. L'esperienza e' stata pensata per restare immediata in un contesto evento: l'utente entra in un hub immersivo, seleziona una delle scene disponibili e accede a contenuti 360 senza menu complessi.",
    },
    role: {
      en: "Virtual Reality",
      it: "Virtual Reality",
    },
    tags: ["#VR", "#MetaQuest", "#HandTracking", "#360Video"],
    client: "Far East Film Festival",
    collaboration: {
      en: "Team project for the Far East Film Festival, with a colleague handling the audio/video side and the immersive flow integrated for Meta Quest.",
      it: "Progetto in team per il Far East Film Festival, con un collega che ha curato la parte audio/video e il flusso immersivo integrato per Meta Quest.",
    },
  },
};

const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".avif"];
const videoExtensions = [".mp4", ".webm", ".mov", ".ogg"];

function findFirst(files, exts) {
  return files.find((f) => exts.includes(path.extname(f).toLowerCase()));
}

function findByPattern(files, pattern) {
  return files.find((f) => pattern.test(f));
}

function toPublicProjectPath(slug, file) {
  return `/media/projects/${slug}/${file}`;
}

function getVideoPriority(file) {
  if (/unreal/i.test(file)) {
    return 0;
  }

  if (/unity/i.test(file)) {
    return 1;
  }

  return 2;
}

function getVideoTitle(file) {
  if (/unreal/i.test(file)) {
    return "Unreal trailer";
  }

  if (/unity/i.test(file)) {
    return "Unity trailer";
  }

  return file
    .replace(path.extname(file), "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ");
}

function readMediaFiles(slug) {
  const folder = path.join(projectsRoot, slug);

  if (!fs.existsSync(folder)) {
    return {};
  }

  const files = fs.readdirSync(folder);

  const logo = findByPattern(files, /logo/i);
  const configuredCover = projectMetadata[slug].coverFile;
  const cover =
    (configuredCover && files.includes(configuredCover) && configuredCover) ||
    findByPattern(files, /cover|hero/i);
  const galleryExclude = projectMetadata[slug].galleryExclude || [];
  const imageFiles = files
    .filter((f) => imageExtensions.includes(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const coverImageFiles = imageFiles.filter((f) => !/logo/i.test(f));
  const galleryFiles = imageFiles.filter(
    (f) =>
      !/logo/i.test(f) &&
      !galleryExclude.some((excluded) =>
        f.toLowerCase().includes(excluded.toLowerCase())
      )
  );

  const image = cover || logo || findFirst(coverImageFiles, imageExtensions);

  const videoFiles = files
    .filter((f) => videoExtensions.includes(path.extname(f).toLowerCase()))
    .sort((a, b) => {
      const priorityDiff = getVideoPriority(a) - getVideoPriority(b);
      return priorityDiff || a.localeCompare(b, undefined, { numeric: true });
    });
  const video = findByPattern(videoFiles, /trailer|demo/i) || findFirst(videoFiles, videoExtensions);

  return {
    logo: logo ? toPublicProjectPath(slug, logo) : null,
    image: image ? toPublicProjectPath(slug, image) : null,
    video: video ? toPublicProjectPath(slug, video) : null,
    videos: videoFiles.map((file) => ({
      src: toPublicProjectPath(slug, file),
      title: getVideoTitle(file),
    })),
    gallery: galleryFiles.map((file) => toPublicProjectPath(slug, file)),
    files,
  };
}

export function getProjectSlugs() {
  return Object.keys(projectMetadata).filter((slug) =>
    fs.existsSync(path.join(projectsRoot, slug))
  );
}

export function getProjects() {
  return getProjectSlugs().map((slug) => ({
    slug,
    ...projectMetadata[slug],
    ...readMediaFiles(slug),
  }));
}

export function getProjectBySlug(slug) {
  const project = getProjects().find((item) => item.slug === slug);
  return project || null;
}
