<template>
    <div id="mainpage">
        <br>
     <div id="mainBg">
       <img class="mainBtn" v-on:click="goPDSearch"
       style="margin-right:40px"
       :src="require('@/assets/images/01/planner.png')">
      <img class="mainBtn" v-on:click="goTM"
       :src="require('@/assets/images/01/theater.png')">
    </div>
     <img style="width:100%" 
     :src="require('@/assets/images/01/main_under.png')"/>
      <v-btn v-on:click="getApi"></v-btn>
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
        },
        getApi(){
          this.$http.get('/api').then((result)=>{
                this.$http.get('/api/list').then((result)=>{
              });
          }).catch((err)=>{
            console.log(err);
          });
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
  height: 500px;
  margin-bottom: 300px;

  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   background: url(../assets/images/01/main_banner.png) center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* background-color: aqua; */
}
.mainBtn {
  width: 20%;
  margin-top: 350px;
  cursor : pointer;
}


</style>

