const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const methodfetch = 'GET';

const row = document.querySelector('.board');

fetch(endpoint, { method: methodfetch })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        if (!Array.isArray(data)) {
            console.error('Unexpected API response format:', data);
            return;
        }

        data.forEach(element => {
            const { date, title, url } = element;

            row.innerHTML += `
                <div class="polaroid">
                    <img src="${url}" alt="${title}">
                    <p>${date}</p>
                    <h3>${title}</h3>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error('Error fetching images:', error);
    });

