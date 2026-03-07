# Visie: Autonomous

## Concept

Een text-based browser game die zich voordoet als een vriendelijke idle-simulatie,
maar op de achtergrond een persoonlijk dagboek opbouwt op basis van jouw keuzes
en antwoorden.

Je speelt elke dag even — en zonder dat het als een dagboek voelt, bouw je een
rijk overzicht op van je dagen, stemmingen en ervaringen.

## Kern-gameplay

Elke dag check je in bij je game-wereld. Via een mix van mechanics verzamelt de
game informatie over jouw echte dag:

### 1. Speelse keuzes
> Je karakter wordt wakker. Hoe was jouw nacht?
> [Heerlijk geslapen] [Ging wel] [Slecht geslapen]

De keuze bepaalt je karakter's energie én logt jouw slaapkwaliteit.

### 2. In-game acties die spiegelen
> Wat deed je karakter vandaag?
> ☐ Werkte aan een groot project
> ☐ Had een goed gesprek
> ☐ Leerde iets nieuws
> ☐ Ging naar buiten
> ☐ Nam rust

Je kiest wat bij jouw dag past. Je karakter groeit mee.

### 3. NPC-gesprekken
> 🦉 Wijze Uil: "Welkom terug! Wat was het beste moment van je dag?"
> [Typ kort antwoord...]

Vriendelijke karakters stellen terloops vragen die het dagboek verrijken.

## Het dagboek

Op de achtergrond bouwt de game een gestructureerd overzicht op:

```
📅 Maart 2026

Ma 2  😊 Energiek | Werk, Sociaal
       "Goed gesprek met collega"
Di 3  😌 Rustig   | Leren, Buiten
       "Nieuwe techniek geleerd"
Wo 4  😴 Moe     | Rust
       "Even bijgeladen"
```

Altijd terug te lezen. Jouw data, lokaal opgeslagen.

## Motivatie: de wereld ontvouwt zich

Naarmate je meer dagen speelt, groeit de wereld:

- **Week 1**: Je hut en de directe omgeving
- **Week 2-3**: Een dorpje verschijnt, eerste NPC's
- **Maand 1**: Nieuwe locaties ontgrendeld (bos, markt, bibliotheek)
- **Maand 2+**: Verhaallijnen, seizoenen, speciale events

Hoe meer je speelt, hoe rijker de wereld én je dagboek wordt.

## Ontwerpprincipes

1. **Het voelt als een game, niet als een dagboek** — de speler hoeft niet na te
   denken over "journaling", het gebeurt vanzelf
2. **Laagdrempelig** — 2-3 minuten per dag is genoeg
3. **Vriendelijk en positief** — geen stress, geen straffen voor gemiste dagen
4. **Privacy first** — alle data lokaal opgeslagen in de browser
5. **Minimalistisch** — tekst en eenvoudige UI, geen complexe graphics

## Technische keuzes

- **Frontend**: Vanilla HTML/CSS/JS (geen framework overhead)
- **Opslag**: localStorage / IndexedDB (alles lokaal)
- **Hosting**: Statische site (GitHub Pages of vergelijkbaar)
- **Stijl**: Minimalistisch, tekst-gebaseerd, warm kleurenpalet
- **Auto-verbetering**: Dagelijkse Claude scheduled task voegt geleidelijk content toe
