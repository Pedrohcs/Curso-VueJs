new Vue({
    el: '#desafio',
    data: {
        nome: 'Pedro Henrique',
        idade: '21',
        imagem: "https://www.dccomics.com/sites/default/files/styles/featured_pane_square/public/featured_pane_images/298x250_HeroesInCrisis_5ba93248dc6448.79712580.jpg?itok=GewdnO-Z"
    },
    methods: {
        multiplicaIdade() {
            return this.idade * 3;
        },
        random() {
            return Math.random();
        }
    }
})