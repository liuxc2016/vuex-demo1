<template>
  <div id="app">

    <h1>{{ msg }}</h1>
    <hr>
    <label for="input">Computer绑定的A</label><input type="text" v-model="a"><br>
    <label for="inputb">Computer绑定的B</label><input type="text" v-model="b"><br>
    <input type="text" :value="count">
    <button @click="addIt">+++</button> <button @click="subIt">---</button>

    
    <hr>
    <input type="text" :value="overCount">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  },
  // computed: mapState([
  // // 映射 this.count 为 store.state.count
  // 'count', 'overCount'
  // ]),
  computed: {
    a(){
      return 111
    },
    b:{ 
      
        get(){
          return this.$store.state.twoSideCount
        },
        set(value){
         this.$store.commit('addTwoSideCount', value)
        }

    },
    ...mapState({
      overCount: state => state.overCount,
      count: state => state.count
    })
  },
  methods: {
    addIt: function(){
      this.$store.commit('increment')
      console.log(this.$store.state.count) // -> 1
    },
    subIt: function(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
