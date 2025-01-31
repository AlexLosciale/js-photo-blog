
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const methodfetch = 'GET';
const row = document.querySelector('.board');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const closeOverlay = document.getElementById('closeOverlay');

fetch(endpoint, { method: methodfetch })
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const { date, title, url } = element;

            const polaroid = document.createElement('div');
            polaroid.classList.add('polaroid');
            polaroid.innerHTML = `
                <img src="${url}" alt="${title}">
                <p>${date}</p>
                <h3>${title}</h3>
            `;

            polaroid.addEventListener('click', () => {
                overlayImage.src = url;
                overlay.style.display = 'flex';
            });

            row.appendChild(polaroid);
        });
    })
    .catch(error => {
        console.error(error);
    });

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});