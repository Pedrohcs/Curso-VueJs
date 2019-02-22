new Vue({
    el: '#app',
    data: {
        valor: 0,
    },
    computed: {
        resultado(){
            return this.valor == 37 ?
            'Igual a 37' : 'Diferente de 37'
        }
    }, 
    watch: {
        valor(novo, antigo){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
    methods: {
        aumentar1(){
            this.valor ++
        },
        aumentar5(){
            this.valor = this.valor + 5
        }   
    }
})