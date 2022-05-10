<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {},
  methods: {
    handleSleep() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    },
    handleSleep2() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#test {
  position: relative;
  right: 1px;
  left: 10%;
  align-self: baseline;
  width: 100px;
  line-height: 32px;

  .nest {
    position: relative;
    right: 1px;
    left: 10%;
    align-self: baseline;
    width: 100px;
    line-height: 32px;

  }
}
</style>
