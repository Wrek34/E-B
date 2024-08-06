document.addEventListener('DOMContentLoaded', function() {
    // Example function: Load episodes dynamically from JSON
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
});
