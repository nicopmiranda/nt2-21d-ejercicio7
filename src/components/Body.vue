<template>

  <section class="src-components-body">
    <div id="container" >
      <div v-for="(color,index) in $store.state.colors" :key="index"> 
        <Cuadrado
          :color="color"
          :index="index"
        />
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import Cuadrado from './Cuadrado.vue'

  export default  {
    name: 'src-components-body',
    props: {
      mostrar:Function
    },
    components: {
      Cuadrado      
    },
    mounted () {
        console.log('mounted body')
    },
    updated() {
      console.log('updated body')
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
  .src-components-body {
    background: #232323;

  }

  #container {
    background: #232323;
    margin: 20px auto;
    max-width: 600px;
  }

  pre {
    color: white;
  }

</style>
