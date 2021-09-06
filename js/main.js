// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Vue.config.devtools = true;

let root = new Vue ({
    el: '#root',
    data: {
        message: 'Ciao, mi chiamo Edoardo'
    }
})