const allMedals = [
    { id: 'medal-recycle',    icon: 'fa-recycle',         title: 'Reciclagem' },
    { id: 'medal-reuse',      icon: 'fa-bag-shopping',    title: 'Reutilizar' },
    { id: 'medal-repair',     icon: 'fa-hammer',          title: 'Reparar' },
    { id: 'medal-reduce',     icon: 'fa-cart-arrow-down', title: 'Reduzir' },
    { id: 'medal-rethink',    icon: 'fa-lightbulb',       title: 'Repensar' },
    { id: 'medal-reintegrate',icon: 'fa-puzzle-piece',    title: 'Reintegrar' },
    { id: 'medal-robotics',   icon: 'fa-robot',           title: 'Robótica' },
    { id: 'medal-inclusion',  icon: 'fa-people-arrows',   title: 'Inclusão' },
    { id: 'medal-shops',      icon: 'fa-tag',             title: 'Lojas Sustentáveis' },
    { id: 'medal-stage',      icon: 'fa-microphone',      title: 'Palco' }
];

function getCollectedMedals() {
    const collected = localStorage.getItem('collectedMedals');
    return collected ? JSON.parse(collected) : [];
}

function saveCollectedMedals(medalsArray) {
    localStorage.setItem('collectedMedals', JSON.stringify(medalsArray));
}

function renderMedalCase() {
    const medalCaseContainer = document.querySelector('.medal-case');
    const collectedMedals = getCollectedMedals();
    medalCaseContainer.innerHTML = '';

    allMedals.forEach(medalInfo => {
        const medalElement = document.createElement('div');
        medalElement.classList.add('medal');
        medalElement.id = medalInfo.id;
        if (collectedMedals.includes(medalInfo.id)) {
            medalElement.classList.add('collected');
        }
        const iconElement = document.createElement('i');
        iconElement.className = `fa-solid ${medalInfo.icon}`;
        iconElement.title = medalInfo.title;
        medalElement.appendChild(iconElement);
        medalCaseContainer.appendChild(medalElement);
    });

    updateProgress(collectedMedals.length, allMedals.length);
}

function updateProgress(collectedCount, totalCount) {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    const progressPercentage = totalCount > 0 ? (collectedCount / totalCount) * 100 : 0;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Você cultivou ${collectedCount} de ${totalCount} medalhas`;
}

function checkForNewCollection() {
    const params = new URLSearchParams(window.location.search);
    const newMedalId = params.get('collected');
    if (newMedalId) {
        const collectedMedals = getCollectedMedals();
        if (!collectedMedals.includes(newMedalId)) {
            collectedMedals.push(newMedalId);
            saveCollectedMedals(collectedMedals);
        }
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

checkForNewCollection();
renderMedalCase();