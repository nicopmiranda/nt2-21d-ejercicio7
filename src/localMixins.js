export const localMixin = {
    mounted () {

    },
    methods: {
        inicializarColores(){
            this.$store.dispatch('resetColores');
            for(let i = 0; i < this.$store.state.quantity; i++){
                this.$store.dispatch('agregarColor', this.createRandomStringColor());
            }
            this.$store.dispatch('seleccionarIndiceGanador');
            this.$store.dispatch('cambiarMensajeHeader', "");
            this.$store.dispatch('cambiarColorHeader', 'steelblue');
            this.$store.dispatch('iniciarColorGanador');
        },
        createRandomStringColor(){
            var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")";
            return newColor;
        },
        randomInt(){
            return Math.floor(Math.random() * 256);
        }
        
    }
}