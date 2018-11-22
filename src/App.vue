<template>
  <div id="app">
    <img src="./assets/BUMP.png" class="logo">
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
  background: #2c3e50;
  margin: -8px;
  color: #ecf0f1;
  height: 100vh;
  overflow-y: auto;
}

.logo {
  display: block;
  margin: auto;
  padding-top: 60px;
  height: 100px;
}
</style>
