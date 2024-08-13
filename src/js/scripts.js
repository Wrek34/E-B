document.addEventListener('DOMContentLoaded', function() {
    loadEpisodes();
    loadResources();
});

function loadEpisodes() {
    fetch('data/episodes.json')
    .then(response => response.json())
    .then(episodes => {
        const episodesContainer = document.getElementById('episodes-list');
        episodes.forEach(episode => {
            const episodeElement = document.createElement('div');
            episodeElement.innerHTML = `
                <h3>${episode.title}</h3>
                <p>${episode.description}</p>
                <audio controls src="${episode.audioPath}"></audio>
            `;
            episodesContainer.appendChild(episodeElement);
        });
    })
    .catch(error => console.error('Error loading episodes:', error));
}

function loadResources() {
    fetch('data/resources.json')
    .then(response => response.json())
    .then(resources => {
        const resourcesContainer = document.getElementById('resources-list');
        resources.forEach(resource => {
            const resourceElement = document.createElement('div');
            resourceElement.innerHTML = `
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <a href="${resource.link}" target="_blank">Learn More</a>
            `;
            resourcesContainer.appendChild(resourceElement);
        });
    })
    .catch(error => console.error('Error loading resources:', error));
}
