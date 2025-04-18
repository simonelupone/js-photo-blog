/**
 * define variables to get HTML elements
 * @type {HTMLElement}
 */
const container = document.querySelector('.container');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

/**
 * define endpoint
 * @type {string}
 */
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

/**
 * function to generate a card
 * 
 * @param {Object} - Oggetto con i dati della card.
 * @param {string} title - image title
 * @param {string} date - image date
 * @param {string} url - image URL
 * @returns {string} - HTML string
 */
const createCard = ({ title, date, url }) => {
    return `
            <div class="card" data-url="${url}">
                <div class="card-content">
                    <div class="pin">
                        <img src="./img/pin.svg" alt="">
                    </div>
                    <img src="${url}" alt="${title}">
                    <div class="card-info">
                        <div class="date">${date}</div>
                        <h4>${title}</h4>
                    </div>
                </div>
            </div>
    `;
}

/**
 * function to create modal content
 * 
 * @param {string} url - image url
 * @returns {string} - modal markup
 */
const createModalContent = (url) => {
    return `
            <button class="modal-btn">Chiudi</button>
            <img src="${url}">
    `;
}

axios.get(endpoint)
    .then((resp) => {
        /**
         * ajax call response
         * @type {Array<{id: number, title: string, date: string, url: string}>}
         */
        const items = resp.data;

        /**
         * 
         * 
         * @type {string} - .map loops items that recives destructured obj, than join every element in a single string
         */
        // same as -> items.map(item => createCard(item))
        const cardHtml = items.map(createCard).join('');

        container.innerHTML = cardHtml;


        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {

                const url = card.dataset.url;

                modalContent.innerHTML = createModalContent(url);
                modal.classList.add('is-visible');

            });
        });
    });

/**
 * delegation pattern instead to handle click events
 */
modalContent.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-btn')) {
        modal.classList.remove('is-visible');
    }
});