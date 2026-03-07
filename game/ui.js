/**
 * UI: alle DOM-interactie en scherm-management.
 */

const UI = {
    showScreen(screenId) {
        document.querySelectorAll('#screen > section').forEach(s => {
            s.classList.add('hidden');
        });
        document.getElementById(screenId).classList.remove('hidden');

        // Update nav active state
        const screenMap = {
            'game-screen': 'game',
            'diary-screen': 'diary',
        };
        const navKey = screenMap[screenId];
        if (navKey) {
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.screen === navKey);
            });
        }
    },

    showNav() {
        document.getElementById('nav').classList.remove('hidden');
    },

    updateLocationHeader(location, day) {
        document.getElementById('location-name').textContent = location.name;
        document.getElementById('day-counter').textContent = `Dag ${day}`;
    },

    setStory(text) {
        const storyArea = document.getElementById('story-area');
        storyArea.innerHTML = `<div class="story-text"><p>${text}</p></div>`;
        document.getElementById('choices-area').innerHTML = '';
        document.getElementById('text-input-area').classList.add('hidden');
    },

    setNpcMessage(npcName, text) {
        const storyArea = document.getElementById('story-area');
        storyArea.innerHTML = `
            <div class="npc-message">
                <div class="npc-name">${npcName}</div>
                <p>${text}</p>
            </div>
        `;
        document.getElementById('choices-area').innerHTML = '';
        document.getElementById('text-input-area').classList.add('hidden');
    },

    showChoices(choices, onSelect) {
        const container = document.getElementById('choices-area');
        container.innerHTML = choices.map(c =>
            `<button class="choice-btn" data-value="${c.value}">${c.label}</button>`
        ).join('');

        container.querySelectorAll('.choice-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                onSelect(btn.dataset.value);
            });
        });
    },

    showTextInput(onSubmit) {
        const area = document.getElementById('text-input-area');
        const input = document.getElementById('free-text');
        const btn = document.getElementById('submit-text');

        area.classList.remove('hidden');
        input.value = '';
        input.focus();

        const submit = () => {
            const text = input.value.trim();
            if (text) {
                area.classList.add('hidden');
                onSubmit(text);
            }
        };

        // Verwijder oude listeners door element te clonen
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', submit);

        input.onkeydown = (e) => {
            if (e.key === 'Enter') submit();
        };
    },

    showActivityPicker(activities, onConfirm) {
        const container = document.getElementById('choices-area');
        const selected = new Set();

        container.innerHTML = activities.map(a => `
            <label class="activity-option" data-id="${a.id}">
                <input type="checkbox" value="${a.id}">
                <span>${a.label}</span>
            </label>
        `).join('') + '<button class="btn-confirm" id="confirm-activities">Bevestig</button>';

        container.querySelectorAll('.activity-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT') return;
                const checkbox = opt.querySelector('input');
                checkbox.checked = !checkbox.checked;
                opt.classList.toggle('selected', checkbox.checked);
            });

            const checkbox = opt.querySelector('input');
            checkbox.addEventListener('change', () => {
                opt.classList.toggle('selected', checkbox.checked);
            });
        });

        document.getElementById('confirm-activities').addEventListener('click', () => {
            const checked = container.querySelectorAll('input:checked');
            const ids = Array.from(checked).map(cb => cb.value);
            onConfirm(ids);
        });
    },

    showDoneScreen(summary, playerName) {
        this.showScreen('done-screen');
        document.getElementById('done-summary').textContent = summary;
        document.getElementById('done-player-name').textContent = playerName;
    },
};
