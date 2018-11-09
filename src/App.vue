<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
.body {
  background: #ecf0f1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #ecf0f1;
  margin: -8px;
  color: #2c3e50;
  height: 100vh;
  overflow-y: auto;
}

.logo {
  display: block;
  margin: auto;
  padding-top: 60px;
  height: 50px;
}
</style>
