<template>
    <div id="producerResultPage">
        <h1>기획자 공연장 검색 정보들</h1>
        <v-btn color="blue darken-1" v-on:click="goPDTheaterInfo">공연장 보기</v-btn>
        
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
        goPDTheaterInfo(){
            this.$router.push('/producerTheaterInfo')
        },
        
    },

  }
</script>

<style>

</style>

