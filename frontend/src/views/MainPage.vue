<template>
    <div id="mainpage">
        <img :src="require('@/assets/images/run_through_title.jpg')">
        <br>
        <v-btn color="blue darken-1" v-on:click="test">test</v-btn>
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
        test(){
            this.$http.get('http://www.kopis.or.kr/openApi/restful/pblprfr?service={d2e77e9e911447c1b0d90a3ed2a20dbb}').then((res)=>{
                alert(res.data.p);
            });
        },
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

