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

// scripts.js: Fetch episodes dynamically from a headless CMS API
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://your-cms.com/api/episodes')
    .then(response => response.json())
    .then(episodes => {
        const episodesContainer = document.getElementById('episodes-list');
        episodes.forEach(episode => {
            const episodeElement = document.createElement('div');
            episodeElement.innerHTML = `
                <h3>${episode.title}</h3>
                <p>${episode.description}</p>
                <audio controls src="${episode.audioUrl}"></audio>
            `;
            episodesContainer.appendChild(episodeElement);
        });
    })
    .catch(error => console.error('Error loading episodes:', error));
});

<!-- episode.html: Add a comments section -->
<div id="comments-container"></div>
<script src="src/js/comments.js"></script>

// comments.js: Initialize and manage user comments
document.getElementById('submit-comment').addEventListener('click', function() {
    const userComment = document.getElementById('comment-input').value;
    // Assuming Firebase or another backend service handles comments
    firebase.database().ref('comments').push().set({
        username: "user", // This should be dynamic based on logged-in user
        comment: userComment,
        timestamp: new Date().toISOString()
    });
});
