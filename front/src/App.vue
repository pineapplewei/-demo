<template>
  <div id="app">
    <Leftnav></Leftnav>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Leftnav from '@/components/common/Leftnav'
export default {
  name: 'App',
  components: {
    Leftnav
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
}
.main{
  float: left;
  width: 95%;
  background-color: #EFF2F7;
  height: 100%;
  overflow: hidden;
}
</style>
