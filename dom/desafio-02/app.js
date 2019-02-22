new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaClicado(){
            alert('Voce clicou no botao')
        },
        escrever(palavra){
            console.log("ABRIU A FUNCAO");
            this.valor = palavra;
        }
    }
})