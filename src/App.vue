<template>
  <div id="app">
    <mt-header fixed title="流光音乐盒"></mt-header>
    <mt-swipe :show-indicators="false" :auto="swipeAuto">
      <mt-swipe-item><img src="./assets/slide/1.jpg" style="height:290px;"></mt-swipe-item>
      <mt-swipe-item><img src="./assets/slide/2.jpg"></mt-swipe-item>
    </mt-swipe>
    <h3>顶部栏</h3>
    <router-link to="/home">个人主页</router-link>
    <router-link to="/login">登陆页面</router-link>
    <router-link to="/home/signout">退出登陆</router-link>
    <div id="main-container">
      <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <router-view></router-view>
      </transition>
    </div>
   
   <div id="bottom" style="display:none">
     <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="./assets/icon1.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/icon1.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/icon1.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/icon1.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
   </div>  
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      selected: 1,
      swipeAuto: 4000,
      msg: 'Welcome to Your Vue.js App'
      
    }
  },
  // computed: mapState([
  // // 映射 this.count 为 store.state.count
  // 'count', 'overCount'
  // ]),
  computed: {
    a(){
      return 111 + Date()
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
    },
    actAdd: function(){
      this.$store.dispatch('actIncrement', {amount: 1})
    }
  }
}
</script>

<style scope>
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
#pageContainer{
  border:1px solid #0ff;
}
.mint-swipe{
  height: 290px!important;
}
</style>
