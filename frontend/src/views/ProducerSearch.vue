<template>
    <div id="mainpage">
        <h1>기획자_검색</h1>
        <v-btn color="blue darken-1" v-on:click="goPDResult">검색</v-btn>
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
        goPDResult(){
            this.$router.push('/producerResult')
        },
        
    },

  }
</script>

<style>

</style>

