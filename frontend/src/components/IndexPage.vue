<template>

<v-button v-on:click="OnEditBtnClick">hello</v-button>
</template>

<script>
export default {
    methods: {
        OnEditBtnClick (){
            return location.href="/login";
        },
    }
}
</script>

<style lang="css">
</style>