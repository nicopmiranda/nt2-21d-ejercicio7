<template>
  <div id="app">
    <Juego/>

  </div>
</template>

<script>

  import Juego from './components/Juego.vue'


  export default {
    name: 'App',
    components: {
      Juego
    },

  }
</script>

<style>
#app {

}
body {
  background: #232323;
}
</style>
