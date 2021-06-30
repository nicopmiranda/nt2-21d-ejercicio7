<template>

  <section class="src-components-cuadrado">
      <div class="square" 
          :style="{'background-color': color}"
          @click="verificarGanador"
      >
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-cuadrado',
    props: {      
      color:String,
      index:Number
    },
    mixins: [],
    mounted () {    
      console.log('mounted cuadrado')
    },
    data () {
      return { 
      }
    },
    methods: {
      verificarGanador(){ 
        if(this.$store.state.pickedColor != this.color){
          this.$store.dispatch('volverColorInvicible', this.index); 
          this.$store.dispatch('cambiarMensajeHeader', "Intentalo de nuevo!");
        }else{
          this.$store.dispatch('cambiarMensajeHeader', "Ganaste!");
          this.$store.dispatch('cambiarColoresAGanador');
          this.$store.dispatch('cambiarColorHeader', this.$store.state.pickedColor);
        }        
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-cuadrado {

  }
  .square {
    width: 30%;    
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;

  }

  pre {
    color: white;
  }
</style>
