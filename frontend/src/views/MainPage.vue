<template>
    <div id="mainpage">
        <img :src="require('@/assets/images/run_through_title.jpg')">
        <br>
        <v-btn color="blue darken-1" v-on:click="goPD">공연기획자/제작자</v-btn>
        <v-btn color="blue darken-1" v-on:click="goTM">극장 관계자</v-btn>
        <LinkFooter />
    </div>
</template>

<script>

  import LinkFooter from '../components/LinkFooter'

  export default {
    components: {
      LinkFooter,
    },

    methods:{
        goPD(){
            this.$router.push('/producer')
        },
        goTM(){
            this.$router.push('/theater-manager')
        }
    },

    data () {
      return {
      }
    }
  }
</script>

<style>
#mainpage{
  text-align: center;
}

</style>

