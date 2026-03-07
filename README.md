# Autonomous

Een project dat zichzelf elke dag een beetje beter maakt met behulp van Claude.

## Hoe het werkt

Een dagelijkse GitHub Actions workflow:

1. Draait elke dag om 08:00 UTC
2. Analyseert het project met Claude Code
3. Stelt gerichte verbeteringen voor via een pull request
4. Houdt zich aan de richtlijnen in `IMPROVEMENT_CONFIG.md`

## Setup

1. Voeg een `ANTHROPIC_API_KEY` toe als GitHub repository secret
2. De workflow draait automatisch elke dag
3. Je kunt de workflow ook handmatig starten via GitHub Actions

## Handmatig starten

Ga naar **Actions** > **Daily Improvement** > **Run workflow** en optioneel een specifiek verbetergebied opgeven.

## Configuratie

Pas `IMPROVEMENT_CONFIG.md` aan om te bepalen waar de dagelijkse verbeteringen zich op moeten richten.
