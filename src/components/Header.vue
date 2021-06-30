<template>

  <section class="src-components-header" >
    <div id="header" :style="{'background-color': $store.state.colorHeader}">
      <h1>The Great <br>
      <span id="colorDisplay" >{{$store.state.pickedColor}}</span>
      <br>
      Guessing Game</h1>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-header',
    props: {
    },
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

  h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;

  }
  #colorDisplay {
    font-size: 350%;
  }
  #header {
    transition: all 0.3s;    
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;	
}
</style>
