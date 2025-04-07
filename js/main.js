/**
 * define variables to get HTML elements
 * @type {HTMLElement}
 */
const container = document.querySelector('.container');
// console.log(card)

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
});