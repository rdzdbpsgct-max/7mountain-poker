export type Locale = "de" | "en";

export const translations = {
  de: {
    nav: {
      features: "Features",
      tvRemote: "TV & Remote",
      howItWorks: "So funktioniert's",
      quickStart: "Schnellstart",
      testimonials: "Stimmen",
      startNow: "Jetzt starten",
    },
    hero: {
      title: "Dein Pokerturnier.",
      titleAccent: "Perfekt getimed.",
      subtitle:
        "Der professionelle Turnier-Timer f\u00fcr deinen Pokerabend. Blindstruktur, Spielerverwaltung, Ligen und Serien \u2014 alles in einer App.",
      cta: "Turnier starten",
      ctaSecondary: "Features entdecken",
      badge: "Kostenlos & ohne Anmeldung",
    },
    features: {
      label: "FEATURES",
      title: "Alles, was du f\u00fcr dein Turnier brauchst",
      subtitle:
        "Von der schnellen Runde mit Freunden bis zum Liga-Turnier \u2014 7Mountain Poker hat dich abgedeckt.",
      advancedLabel: "ERWEITERTE FEATURES",
      timer: {
        title: "Turnier-Timer",
        description:
          "Pr\u00e4ziser Countdown mit automatischen Blind-Wechseln. Pausenfunktion und Sound-Alerts inklusive.",
      },
      blinds: {
        title: "Blindstruktur-Generator",
        description:
          "Automatische Generierung optimaler Blindstrukturen basierend auf Spieleranzahl und gew\u00fcnschter Turnierdauer.",
      },
      players: {
        title: "Spieler & Ligen",
        description:
          "Spielerverwaltung mit Punktesystem und automatischer Spieler\u00fcbernahme aus Liga-Spieltagen. Verwalte Ligen und tracke Ergebnisse \u00fcber mehrere Turniere.",
      },
      series: {
        title: "Serien-Modus",
        description:
          "Organisiere Turnierserien mit automatischer Punkte-Berechnung und Ranglisten.",
      },
      tv: {
        title: "TV-Modus",
        description:
          "Zeige den Timer auf TV oder Beamer. 4 Layouts und 8 rotierende Info-Screens f\u00fcr das ultimative Turnier-Erlebnis.",
      },
      remote: {
        title: "Fernbedienung",
        description:
          "Steuere das Turnier vom Smartphone. QR-Code scannen und per Touch Play/Pause, Levels und Spieler verwalten.",
      },
      voice: {
        title: "Sprachansagen",
        description:
          "590 professionelle Audio-Ansagen f\u00fcr Level-Wechsel, Pausen, Eliminierungen, Bubble und Gewinner.",
      },
      pwa: {
        title: "PWA & Offline",
        description:
          "Installiere die App auf jedem Ger\u00e4t. Funktioniert vollst\u00e4ndig offline mit Statusanzeige \u2014 alle Sounds inklusive.",
      },
    },
    tvRemote: {
      label: "TV & FERNBEDIENUNG",
      title: "Dein Turnier auf dem gro\u00dfen Bildschirm",
      subtitle:
        "Zeige den Timer auf dem Fernseher und steuere alles bequem vom Smartphone.",
      tv: {
        title: "TV-Modus",
        description:
          "Vollbild-Anzeige f\u00fcr TV, Beamer oder zweiten Monitor. 8 rotierende Info-Screens zeigen Timer, Blinds, Spieler, Auszahlungen, Liga und mehr.",
        layouts: ["Standard 55/45", "Kompakt 40/60", "Timer-Only", "Ultra Large 70/30"],
        screens: ["Timer", "Blinds", "Countdown", "Spieler", "Auszahlung", "Blindstruktur", "Sitzplan", "Liga"],
      },
      remote: {
        title: "Smartphone-Fernbedienung",
        description:
          "QR-Code scannen und dein Handy wird zur Fernbedienung. Gro\u00dfe Touch-Buttons f\u00fcr einfache Bedienung.",
        qrHint: "QR-Code scannen \u2014 fertig",
        controls: ["Play / Pause", "N\u00e4chstes Level", "Dealer wechseln", "Sound An/Aus", "Spieler verwalten"],
      },
    },
    proFeatures: {
      label: "PRO FEATURES",
      title: "Mehr als nur ein Timer",
      subtitle:
        "Professionelle Funktionen, die deinen Pokerabend auf das n\u00e4chste Level heben.",
      voiceItem: {
        title: "590 Sprachansagen",
        description:
          "Professionelle ElevenLabs-Stimmen (DE + EN) f\u00fcr Level-Wechsel, Pausen, Bubble, In The Money, Eliminierungen und Turniersieger. Mit Countdown-Beeps und Fanfaren.",
      },
      templates: {
        title: "Vorlagen & Templates",
        description:
          "Speichere deine Lieblings-Konfigurationen und lade sie jederzeit. JSON-Export und -Import f\u00fcr einfaches Teilen.",
      },
      keyboard: {
        title: "Tastatursteuerung",
        description:
          "Volle Tastenkürzel für Power-User. Steuere Timer, Levels, Sound und Spieler blitzschnell per Keyboard.",
      },
      currency: {
        title: "Multi-W\u00e4hrung",
        description:
          "Unterst\u00fctzt EUR, USD, GBP, CHF und SEK. Buy-In und Auszahlungen in deiner W\u00e4hrung.",
      },
      rebuy: {
        title: "Rebuy & Add-On",
        description:
          "Komplettes Rebuy-System mit Add-Ons und Bounties. Automatische Berechnung von Prizepool und Auszahlungen.",
      },
      history: {
        title: "Historie & Turnier-Klon",
        description:
          "Vollst\u00e4ndige Turnier-Historie mit Spielerstatistiken. Vergangene Turniere per Klick wiederholen \u2014 gleiche Blinds, Buy-In und Spieler.",
      },
    },
    powerTools: {
      label: "PROFI-WERKZEUGE",
      title: "Mehr Power unter der Haube",
      subtitle: "Fortgeschrittene Tools für Turnierleiter, die keine Kompromisse machen.",
      sidePot: {
        title: "Side Pot Calculator",
        description: "Interaktiver Rechner für Multi-Way All-In Situationen. Automatische Berechnung von Haupt- und Nebenpots mit Gewinner-Zuweisung.",
      },
      icm: {
        title: "ICM-Rechner",
        description: "Independent Chip Model Berechnung für faire Turnierequity. Deal-Verhandlungen auf professionellem Niveau.",
      },
      payoutSim: {
        title: "Auszahlungs-Simulator",
        description: "Dynamische Payout-Vorschau per Slider. Simuliere Auszahlungen basierend auf verbleibenden Spielern in Echtzeit.",
      },
      bounty: {
        title: "Bounty & Mystery Bounty",
        description: "Kopfgeld-Turniere mit Mystery-Bounty-Unterstützung. Automatische Bounty-Berechnung und Tracking.",
      },
      multiTable: {
        title: "Multi-Table Support",
        description: "Verwalte mehrere Tische gleichzeitig. Automatische Tischauflösung und Spieler-Umverteilung.",
      },
      autoSave: {
        title: "Auto-Save & Resume",
        description: "Turniere werden automatisch in IndexedDB gespeichert. Browser-Absturz oder langsame Verbindung? Kein Problem \u2014 Sicherheits-Timeout garantiert App-Start.",
      },
      tournamentLog: {
        title: "Turnier-Log",
        description: "Echtzeit-Eventprotokoll mit Filtern. Eliminierungen, Rebuys, Level-Wechsel — alles dokumentiert und kopierbar.",
      },
      themes: {
        title: "Themes & Hintergründe",
        description: "7+ Akzentfarben und 9 Hintergrundbilder — von Casino-Filz bis Dark Wood. Mach die App zu deiner.",
      },
      casting: {
        title: "AirPlay & Chromecast",
        description: "Streame den Timer kabellos auf jeden Bildschirm. Unterstützt AirPlay, Google Cast und HDMI.",
      },
      handForHand: {
        title: "Hand-for-Hand",
        description: "Bubble-Play Modus für synchrones Spielen an allen Tischen. Fair und professionell.",
      },
      lateReg: {
        title: "Late Registration",
        description: "Nachträgliche Anmeldung mit konfigurierbarem Zeitfenster. Automatische Prizepool-Anpassung.",
      },
      guidedTour: {
        title: "Einführungstour",
        description: "Interaktiver 5-Schritte Walkthrough für Erstnutzer. Setup-Wizard für schnelle Konfiguration.",
      },
    },
    demo: {
      label: "SO FUNKTIONIERT'S",
      title: "In 3 Schritten zum perfekten Turnier",
      screenshotNote: "",
      step1: {
        title: "Turnier konfigurieren",
        description:
          "W\u00e4hle Schnellstart oder konfiguriere Blindstruktur, Startchips und Auszahlung individuell.",
      },
      step2: {
        title: "Spieler hinzuf\u00fcgen",
        description:
          "F\u00fcge Spieler hinzu oder importiere sie aus deiner Liga. Jeder Spieler wird automatisch getrackt.",
      },
      step3: {
        title: "Spiel starten",
        description:
          "Dr\u00fccke Start und der Timer l\u00e4uft. Automatische Blind-Erh\u00f6hungen, Pausen und Sound-Alerts.",
      },
    },
    quickStart: {
      label: "SCHNELLSTART",
      title: "In 30 Sekunden startklar",
      subtitle:
        "W\u00e4hle einen Modus und starte sofort \u2014 keine Konfiguration n\u00f6tig.",
      startDirect: "Direkt starten",
      turbo: {
        title: "Turbo",
        duration: "~1 Stunde",
        details: "6 Min Levels \u00b7 10k Chips",
        description: "Schnelle Action f\u00fcr zwischendurch",
      },
      standard: {
        title: "Standard",
        duration: "~2,5 Stunden",
        details: "12 Min Levels \u00b7 20k Chips",
        description: "Der Klassiker f\u00fcr den Pokerabend",
      },
      deepStack: {
        title: "Deep Stack",
        duration: "~4 Stunden",
        details: "20 Min Levels \u00b7 40k Chips",
        description: "F\u00fcr echte Poker-Enthusiasten",
      },
    },
    testimonials: {
      label: "STIMMEN",
      title: "Was Pokerspieler sagen",
      items: [
        {
          quote:
            "Endlich ein Pokertimer, der einfach funktioniert. Setup in unter einer Minute, und die Blindstruktur passt immer perfekt.",
          author: "Marco K.",
          role: "Pokerabend-Organisator",
        },
        {
          quote:
            "Die Liga-Funktion ist genial. Wir tracken unsere monatlichen Turniere und die Rangliste motiviert alle enorm.",
          author: "Stefan W.",
          role: "Liga-Leiter",
        },
        {
          quote:
            "Kein Download, keine Anmeldung, einfach \u00f6ffnen und spielen. So muss ein modernes Tool sein.",
          author: "Lisa M.",
          role: "Gelegenheits-Spielerin",
        },
      ],
    },
    cta: {
      title: "Bereit f\u00fcr dein n\u00e4chstes Turnier?",
      subtitle:
        "Starte jetzt kostenlos \u2014 kein Account n\u00f6tig, keine Werbung, keine versteckten Kosten.",
      button: "Jetzt Turnier starten",
      features: [
        "100% kostenlos",
        "Keine Anmeldung",
        "Sofort einsatzbereit",
      ],
    },
    footer: {
      tagline: "Der professionelle Poker-Turnier-Timer.",
      product: "Produkt",
      legal: "Rechtliches",
      links: {
        features: "Features",
        quickStart: "Schnellstart",
        app: "App starten",
        imprint: "Impressum",
        privacy: "Datenschutz",
      },
      copyright: "\u00a9 2026 7Mountain Poker. Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      features: "Features",
      tvRemote: "TV & Remote",
      howItWorks: "How it works",
      quickStart: "Quick Start",
      testimonials: "Testimonials",
      startNow: "Start now",
    },
    hero: {
      title: "Your poker tournament.",
      titleAccent: "Perfectly timed.",
      subtitle:
        "The professional tournament timer for your poker night. Blind structure, player management, leagues and series \u2014 all in one app.",
      cta: "Start tournament",
      ctaSecondary: "Discover features",
      badge: "Free & no signup required",
    },
    features: {
      label: "FEATURES",
      title: "Everything you need for your tournament",
      subtitle:
        "From a quick round with friends to a league tournament \u2014 7Mountain Poker has you covered.",
      advancedLabel: "ADVANCED FEATURES",
      timer: {
        title: "Tournament Timer",
        description:
          "Precise countdown with automatic blind level changes. Pause function and sound alerts included.",
      },
      blinds: {
        title: "Blind Structure Generator",
        description:
          "Automatic generation of optimal blind structures based on player count and desired tournament duration.",
      },
      players: {
        title: "Players & Leagues",
        description:
          "Player management with point system and automatic player pre-fill from league game days. Manage leagues and track results across multiple tournaments.",
      },
      series: {
        title: "Series Mode",
        description:
          "Organize tournament series with automatic point calculation and rankings.",
      },
      tv: {
        title: "TV Mode",
        description:
          "Display the timer on TV or projector. 4 layouts and 8 rotating info screens for the ultimate tournament experience.",
      },
      remote: {
        title: "Remote Control",
        description:
          "Control the tournament from your smartphone. Scan QR code and manage play/pause, levels and players via touch.",
      },
      voice: {
        title: "Voice Announcements",
        description:
          "590 professional audio announcements for level changes, breaks, eliminations, bubble and winners.",
      },
      pwa: {
        title: "PWA & Offline",
        description:
          "Install the app on any device. Works fully offline with status indicator \u2014 all sounds included.",
      },
    },
    tvRemote: {
      label: "TV & REMOTE CONTROL",
      title: "Your tournament on the big screen",
      subtitle:
        "Display the timer on your TV and control everything from your smartphone.",
      tv: {
        title: "TV Mode",
        description:
          "Fullscreen display for TV, projector or second monitor. 8 rotating info screens show timer, blinds, players, payouts, league and more.",
        layouts: ["Standard 55/45", "Compact 40/60", "Timer-Only", "Ultra Large 70/30"],
        screens: ["Timer", "Blinds", "Countdown", "Players", "Payouts", "Blind Structure", "Seating", "League"],
      },
      remote: {
        title: "Smartphone Remote",
        description:
          "Scan QR code and your phone becomes a remote control. Large touch buttons for easy operation.",
        qrHint: "Scan QR code \u2014 done",
        controls: ["Play / Pause", "Next Level", "Change Dealer", "Sound On/Off", "Manage Players"],
      },
    },
    proFeatures: {
      label: "PRO FEATURES",
      title: "More than just a timer",
      subtitle:
        "Professional features that take your poker night to the next level.",
      voiceItem: {
        title: "590 Voice Announcements",
        description:
          "Professional ElevenLabs voices (DE + EN) for level changes, breaks, bubble, in the money, eliminations and winners. With countdown beeps and fanfares.",
      },
      templates: {
        title: "Templates & Presets",
        description:
          "Save your favorite configurations and load them anytime. JSON export and import for easy sharing.",
      },
      keyboard: {
        title: "Keyboard Shortcuts",
        description:
          "Full keyboard shortcuts for power users. Control timer, levels, sound and players instantly via keyboard.",
      },
      currency: {
        title: "Multi-Currency",
        description:
          "Supports EUR, USD, GBP, CHF and SEK. Buy-in and payouts in your currency.",
      },
      rebuy: {
        title: "Rebuy & Add-On",
        description:
          "Complete rebuy system with add-ons and bounties. Automatic calculation of prize pool and payouts.",
      },
      history: {
        title: "History & Tournament Cloning",
        description:
          "Complete tournament history with player statistics. Repeat past tournaments with one click \u2014 same blinds, buy-in and players.",
      },
    },
    powerTools: {
      label: "POWER TOOLS",
      title: "More power under the hood",
      subtitle: "Advanced tools for tournament directors who don't compromise.",
      sidePot: {
        title: "Side Pot Calculator",
        description: "Interactive calculator for multi-way all-in situations. Automatic calculation of main and side pots with winner assignment.",
      },
      icm: {
        title: "ICM Calculator",
        description: "Independent Chip Model calculation for fair tournament equity. Deal negotiations at a professional level.",
      },
      payoutSim: {
        title: "Payout Simulator",
        description: "Dynamic payout preview with slider. Simulate payouts based on remaining players in real-time.",
      },
      bounty: {
        title: "Bounty & Mystery Bounty",
        description: "Bounty tournaments with mystery bounty support. Automatic bounty calculation and tracking.",
      },
      multiTable: {
        title: "Multi-Table Support",
        description: "Manage multiple tables simultaneously. Automatic table balancing and player redistribution.",
      },
      autoSave: {
        title: "Auto-Save & Resume",
        description: "Tournaments are saved automatically to IndexedDB. Browser crash or slow connection? No problem \u2014 safety timeout guarantees app startup.",
      },
      tournamentLog: {
        title: "Tournament Log",
        description: "Real-time event log with filters. Eliminations, rebuys, level changes — everything documented and copyable.",
      },
      themes: {
        title: "Themes & Backgrounds",
        description: "7+ accent colors and 9 background images — from casino felt to dark wood. Make the app yours.",
      },
      casting: {
        title: "AirPlay & Chromecast",
        description: "Stream the timer wirelessly to any screen. Supports AirPlay, Google Cast and HDMI.",
      },
      handForHand: {
        title: "Hand-for-Hand",
        description: "Bubble play mode for synchronized play at all tables. Fair and professional.",
      },
      lateReg: {
        title: "Late Registration",
        description: "Late registration with configurable time window. Automatic prize pool adjustment.",
      },
      guidedTour: {
        title: "Guided Tour",
        description: "Interactive 5-step walkthrough for first-time users. Setup wizard for quick configuration.",
      },
    },
    demo: {
      label: "HOW IT WORKS",
      title: "3 steps to the perfect tournament",
      screenshotNote: "Screenshots show the German interface. The app fully supports English.",
      step1: {
        title: "Configure tournament",
        description:
          "Choose quick start or individually configure blind structure, starting chips and payout.",
      },
      step2: {
        title: "Add players",
        description:
          "Add players or import them from your league. Every player is automatically tracked.",
      },
      step3: {
        title: "Start the game",
        description:
          "Press start and the timer runs. Automatic blind increases, breaks and sound alerts.",
      },
    },
    quickStart: {
      label: "QUICK START",
      title: "Ready in 30 seconds",
      subtitle: "Choose a mode and start immediately \u2014 no setup needed.",
      startDirect: "Start now",
      turbo: {
        title: "Turbo",
        duration: "~1 hour",
        details: "6 min levels \u00b7 10k chips",
        description: "Quick action for in between",
      },
      standard: {
        title: "Standard",
        duration: "~2.5 hours",
        details: "12 min levels \u00b7 20k chips",
        description: "The classic for poker night",
      },
      deepStack: {
        title: "Deep Stack",
        duration: "~4 hours",
        details: "20 min levels \u00b7 40k chips",
        description: "For true poker enthusiasts",
      },
    },
    testimonials: {
      label: "TESTIMONIALS",
      title: "What poker players say",
      items: [
        {
          quote:
            "Finally a poker timer that just works. Setup in under a minute, and the blind structure always fits perfectly.",
          author: "Marco K.",
          role: "Poker night organizer",
        },
        {
          quote:
            "The league feature is brilliant. We track our monthly tournaments and the rankings motivate everyone enormously.",
          author: "Stefan W.",
          role: "League director",
        },
        {
          quote:
            "No download, no signup, just open and play. That's how a modern tool should be.",
          author: "Lisa M.",
          role: "Casual player",
        },
      ],
    },
    cta: {
      title: "Ready for your next tournament?",
      subtitle:
        "Start now for free \u2014 no account needed, no ads, no hidden costs.",
      button: "Start tournament now",
      features: ["100% free", "No signup", "Ready instantly"],
    },
    footer: {
      tagline: "The professional poker tournament timer.",
      product: "Product",
      legal: "Legal",
      links: {
        features: "Features",
        quickStart: "Quick Start",
        app: "Launch app",
        imprint: "Imprint",
        privacy: "Privacy",
      },
      copyright: "\u00a9 2026 7Mountain Poker. All rights reserved.",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
