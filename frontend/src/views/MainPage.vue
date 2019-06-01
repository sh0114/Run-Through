<template>
    <div id="mainpage">
        <img :src="require('@/assets/images/run_through_title.jpg')">
        <br>
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
            this.$router.push('/theaterManager')
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

</style>

