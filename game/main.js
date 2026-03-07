/**
 * Main: initialisatie en event binding.
 */

(function () {
    // Start knop (welkom scherm)
    document.getElementById('start-btn').addEventListener('click', () => {
        const nameInput = document.getElementById('player-name');
        const name = nameInput.value.trim();
        if (!name) {
            nameInput.focus();
            return;
        }
        Engine.startNewGame(name);
    });

    document.getElementById('player-name').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('start-btn').click();
        }
    });

    // Navigatie
    document.querySelectorAll('nav button').forEach(btn => {
        btn.addEventListener('click', () => {
            const screen = btn.dataset.screen;
            if (screen === 'diary') {
                Diary.render(Engine.state ? Engine.state.diary : []);
                UI.showScreen('diary-screen');
            } else if (screen === 'game') {
                if (Engine.state && Engine.state.todayCompleted) {
                    UI.showScreen('done-screen');
                } else {
                    UI.showScreen('game-screen');
                }
            }
        });
    });

    // Bekijk dagboek knop (klaar scherm)
    document.getElementById('view-diary-btn').addEventListener('click', () => {
        Diary.render(Engine.state ? Engine.state.diary : []);
        UI.showScreen('diary-screen');
        document.querySelector('nav button[data-screen="diary"]').classList.add('active');
        document.querySelector('nav button[data-screen="game"]').classList.remove('active');
    });

    // Start de game
    Engine.init();
})();
