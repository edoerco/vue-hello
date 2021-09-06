// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Vue.config.devtools = true;

let root = new Vue ({
    el: '#root',
    data: {
        message: 'Ciao, mi chiamo',
        nome: 'Edoardo',
        pic: 'https://images.corsidia.com/schools/logos/000/000/263/original/boolean-logo.png?1615392366'
    }
})