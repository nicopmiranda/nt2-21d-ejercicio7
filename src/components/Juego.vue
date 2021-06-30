<template >

  <section class="src-components-juego">
    <div id="body">
      <Header />
      <NavBar 
        :coloresBotones="coloresBotones"
        :dificultadEasy="dificultadEasy" 
        :dificultadHard="dificultadHard"
      />

      <Body />
    </div>



  </section>

</template>

<script lang="js">

 import Header from './Header.vue'
 import NavBar from './NavBar.vue'
 import Body from './Body.vue'
 import { localMixin } from '../localMixins'

  export default  {
    name: 'src-components-juego',
    props: [],
    mixins: [localMixin],
    components: {
      Header,
      NavBar,
      Body
    },
    mounted () {
      this.inicializarColores()   
    },
    data () {
      return {
        coloresBotones : {
          colorBotonEasy: "rgb(251,251,251)",
          colorLetraEasy: "rgb(70, 130, 180)",
          colorBotonHard: "rgb(251,251,251)",
          colorLetraHard: "rgb(70, 130, 180)"
        }
      }
    },
    methods: {
      dificultadEasy(){      
        this.$store.dispatch('cambiarCantidadColores', 3);
        this.inicializarColores()
        this.coloresBotones.colorBotonEasy = "rgb(70, 130, 180)"
        this.coloresBotones.colorLetraEasy = "rgb(251,251,251)"
        this.coloresBotones.colorBotonHard = "rgb(251,251,251)"
        this.coloresBotones.colorLetraHard = "rgb(70, 130, 180)"
      },
      dificultadHard(){        
        this.$store.dispatch('cambiarCantidadColores', 6);   
        this.inicializarColores()
        this.coloresBotones.colorBotonHard = "rgb(70,130,180)"
        this.coloresBotones.colorLetraHard = "rgb(251, 251, 251)"
        this.coloresBotones.colorBotonEasy = "rgb(251,251,251)"
        this.coloresBotones.colorLetraEasy = "rgb(70, 130, 180)"
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
  .src-components-juego {
    background: #232323;

  }

  #body {
    background: #232323;
    margin: 0;
    font-family: "Montserrat", "Avenir";
  }

  pre {
    color: yellow;
  }

</style>
