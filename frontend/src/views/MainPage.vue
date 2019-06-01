<template>
    <div id="mainpage">
        <br>
     <div id="mainBg">
    </div>
        <v-btn color="blue darken-1" v-on:click="goPDSearch">공연기획자/제작자</v-btn>
        <v-btn color="blue darken-1" v-on:click="goTM">극장 관계자</v-btn>
    </div>
</template>

<script>

  export default {

    methods:{
        goPDSearch(){
            this.$router.push('/producerSearch')
        },
        goTM(){
            this.$router.push('/theater-manager')
        }
    },

    data () {
      return {
          data: ""
      }
    }
  }
</script>

<style>
#mainpage{
  text-align: center;
}

#mainBg {
  /* width: 1920px; */
  height: 500px;
  margin-left: -10%;
  margin-right: -10%;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: url(../assets/images/Layer1.png) center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* background-color: aqua; */
}


</style>

