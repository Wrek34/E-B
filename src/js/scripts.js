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

function filterEpisodes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const episodesContainer = document.getElementById('episodes-list');
    const episodes = episodesContainer.getElementsByClassName('episode');
    
    for (let episode of episodes) {
        const title = episode.getElementsByTagName('h3')[0].innerText;
        if (title.toLowerCase().indexOf(searchInput) > -1) {
            episode.style.display = "";
        } else {
            episode.style.display = "none";
        }
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('server_endpoint/contact', {  // Replace 'server_endpoint/contact' with your actual server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => alert('Message sent successfully'))
    .catch(error => console.error('Error:', error));
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail').value;

    fetch('server_endpoint/subscribe', {  // Replace 'server_endpoint/subscribe' with your actual server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => alert('Thank you for subscribing!'))
    .catch(error => console.error('Error:', error));
});
