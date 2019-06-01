<template>
  <v-app>
    <router-view/>
    <LinkFooter />
  </v-app>
</template>

<script>
import LinkFooter from './components/LinkFooter'

export default {
  name: 'App',
  components: {
      LinkFooter,

  },
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
</style>
