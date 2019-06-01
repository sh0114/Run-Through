<template>
  <v-app id="app">
    <p id="titleLogo" v-on:click="goMain">RunThrough</p>
    <Header />
    <router-view id="router"/>
    <LinkFooter />
  </v-app>
</template>

<script>
import LinkFooter from './components/LinkFooter'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
      LinkFooter,
      Header

  },
  methods:{
    goMain(){
      this.$router.push('/')
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
  
  margin-left: 10%;
  margin-right: 10%;
}

#titleLogo {
  text-align: left;
  font-size: 33px;
  color: #2044AA;
  margin-left: 13%;
  margin-top: 50px;
}

</style>
