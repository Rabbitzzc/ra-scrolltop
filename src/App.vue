<template>
  <div id="app">
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <li style="height:300px;">ad</li>
      <ra-scrolltop speed="fast-to-slow"></ra-scrolltop>
  </div>
</template>

<script>

import RaScrolltop from './packages/ra-scrolltop'
export default {
  name: 'app',
  components: {
      RaScrolltop
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
