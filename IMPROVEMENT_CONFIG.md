# Verbeterconfiguratie

Dit bestand stuurt de dagelijkse automatische verbeteringen aan het project.
Lees altijd eerst `VISION.md` voor de context van het project.

## Over het project

Autonomous is een text-based browser idle game die spelenderwijs een dagboek
opbouwt. De speler checkt dagelijks in, maakt keuzes voor hun karakter, en
bouwt zo ongemerkt een persoonlijk dagboek op.

## Prioriteiten voor verbeteringen

1. **Nieuwe game-content** - NPC-dialogen, locaties, verhaallijnen, events
2. **Gameplay balancing** - Zorg dat de wereld-progressie goed aanvoelt
3. **Dagboek-features** - Betere weergave, zoekfunctie, export
4. **Code kwaliteit** - Consistente stijl, geen duplicatie, duidelijke naamgeving
5. **UX verfijning** - Kleine verbeteringen die de ervaring warmer/leuker maken

## Regels voor wijzigingen

- Maximaal **1-2 bestanden** per verbetering
- Elke wijziging moet **backward compatible** zijn (bestaande saves niet breken!)
- Commit messages in het **Nederlands**
- Geen cosmetische wijzigingen zonder functionele waarde
- **Privacy first**: nooit externe calls, alles blijft lokaal

## Gebieden om te negeren

- Gegenereerde bestanden (build output)
- Externe dependencies toevoegen (het blijft vanilla JS)
- Complexe frameworks of build tools

## Huidige focus

> Pas dit aan om de dagelijkse verbeteringen te sturen naar wat nu het
> belangrijkst is voor het project.

- [ ] Meer NPC-dialogen en variatie in dagelijkse vragen
- [ ] Wereld-uitbreiding: nieuwe locaties na week 1
- [ ] Seizoenen-systeem (lente/zomer/herfst/winter)
- [ ] Dagboek teruglees-ervaring verbeteren
- [ ] Achievements / milestones voor lange streaks
