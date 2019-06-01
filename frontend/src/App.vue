<template>
  <v-app id="app">
    <img id="titleLogo" v-on:click="goMain" :src="require('@/assets/images/header logo.png')">
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
  margin-left: 13%;
  margin-top: 50px;
  margin-bottom: 20px;
  width: 10%;

}

</style>
