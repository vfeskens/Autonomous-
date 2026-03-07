/**
 * Diary: rendert het dagboek-overzicht.
 */

const Diary = {
    render(diaryEntries) {
        const container = document.getElementById('diary-entries');

        if (!diaryEntries || diaryEntries.length === 0) {
            container.innerHTML =
                '<p class="empty-state">Je dagboek is nog leeg. Speel een dag om je eerste herinnering te maken.</p>';
            return;
        }

        // Toon nieuwste eerst
        const sorted = [...diaryEntries].reverse();

        container.innerHTML = sorted.map(entry => {
            const date = new Date(entry.date);
            const dateStr = date.toLocaleDateString('nl-NL', {
                weekday: 'short',
                day: 'numeric',
                month: 'long',
            });

            const moodInfo = entry.mood ? MOODS[entry.mood] : null;
            const moodDisplay = moodInfo
                ? `${moodInfo.emoji} ${moodInfo.label}`
                : '';

            const tags = (entry.tags || [])
                .map(t => `<span class="diary-tag">${t}</span>`)
                .join('');

            const highlight = entry.highlight
                ? `<p class="diary-highlight">"${entry.highlight}"</p>`
                : '';

            const thought = entry.thought
                ? `<p class="diary-highlight">${entry.thought}</p>`
                : '';

            return `
                <div class="diary-day">
                    <div class="diary-day-header">
                        <span class="diary-date">${dateStr} — Dag ${entry.day}</span>
                        <span class="diary-mood">${moodDisplay}</span>
                    </div>
                    ${tags ? `<div class="diary-tags">${tags}</div>` : ''}
                    ${highlight}
                    ${thought}
                </div>
            `;
        }).join('');
    },
};
