/**
 * define variables to get HTML elements
 * @type {HTMLElement}
 */
const container = document.querySelector('.container');
// console.log(card)
const modal = document.querySelector('.modal');

const modalContent = document.querySelector('.modal-content');

/**
 * define endpoint
 * @type {string}
 */
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

axios.get(endpoint).then((resp) => {
    /**
     * ajax call response
     * @type {Array<{id: number, title: string, date: string, url: string}>}
     */
    const items = resp.data
    console.log(items);

    items.forEach(item => {
        /**
         * element destructuring
         */
        const { title, date, url } = item;

        const element = `
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

        container.innerHTML += element;
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const url = card.dataset.url;

            modal.style.display = 'flex';

            const newItem = `
            <button class="modal-btn">Chiudi</button>
            <img src="${url}">
            `;

            modalContent.innerHTML = newItem;

            const modalBtn = document.querySelector('.modal-btn')
            modalBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });
});