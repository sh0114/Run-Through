<template>
<div id="header">
    <!-- <v-container> -->
        <v-header color="indigo lighten-5" class="pa-3">
            <v-toolbar-items>
                <v-btn class="white--text" flat href='/producerSearch'>공연 기획자/제작자</v-btn>
                <v-btn class="white--text" flat href='/theater-manager'>극장 관계자</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
        </v-header>
    <!-- </v-container> -->
</div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style>
#header {
    margin-left: 50px;
    margin-right: 50px;

    background: linear-gradient( to right, #2044AA, #F5695F );

    margin-bottom: -50px;
    z-index: 7;
}


</style>
