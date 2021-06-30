<template>

  <section class="src-components-nav-bar">
    <div id="navigator">
      <button id="reset" @click="inicializarColores"> New colors!</button>
      <span id="message">{{$store.state.message}} </span>
        
      <button 
        id="easy"
        @click="dificultadEasy"
        :style="{'background-color': coloresBotones.colorBotonEasy, 'color': coloresBotones.colorLetraEasy}">
          easy
      </button>
      <button 
        id="hard"
        class="selected"
        @click="dificultadHard"
        :style="{'background-color': coloresBotones.colorBotonHard, 'color': coloresBotones.colorLetraHard}">
          hard
      </button>
    </div>
  </section>

</template>

<script lang="js">

 import { localMixin } from '../localMixins'

  export default  {
    name: 'src-components-nav-bar',
    props: {
      dificultadHard:Function,
      dificultadEasy:Function,
      coloresBotones:Object
    },
    mixins: [localMixin],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {     


    },
    computed: {

    }
}


</script>

<style scoped lang="css">

  #navigator {
    background: #ffffff;
    height: 30px;
    text-align: center; 
    margin: 0;
    margin-top: -30px;

  }

  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }

  #message {
    color: black;
    display: inline-block;
    width: 20%; 
  }
</style>
