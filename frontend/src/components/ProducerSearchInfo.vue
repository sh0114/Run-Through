<template>
    <v-card>
        <v-form ref="form">
            <v-card-title>
                <span class="headline">공연 정보 작성</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 class="appData">
                            <v-select
                                :items="['연극', '뮤지컬', '오페라', '발레,춤', '희곡', '기티']"
                                label="공연 장르"
                                required
                                v-model="showCategory"
                                :rules="[v => !!v || '항목을 선택해 주세요']"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12 class="addData">
                            <v-select
                                :items="['30~50', '50~100', '100~200', '200~500', '500~1000', '이상']"
                                label="공연 규모"
                                required
                                v-model="showSize"
                                :rules="[v => !!v || '항목을 선택해 주세요']"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12 class="addData">
                            <v-menu
                                :close-on-content-click="false"
                                v-model="menu1"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                >
                                <v-text-field
                                    slot="activator"
                                    v-model="startDate"
                                    label="공연 시작일"
                                    prepend-icon="event"
                                    readonly
                                ></v-text-field>
                                <v-date-picker v-model="startDate" @input="menu1 = false" @change="change"></v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12>
                            <v-menu
                                :close-on-content-click="false"
                                v-model="menu2"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                >
                                <v-text-field
                                    slot="activator"
                                    v-model="endDate"
                                    label="공연 종료일"
                                    prepend-icon="event"
                                    readonly
                                ></v-text-field>
                                <v-date-picker v-model="endDate" @input="menu2 = false" :min = "startDate" @change="change"></v-date-picker>    
                            </v-menu>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue darken-1" flat @click="search">Search</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>
<script>

  import LinkFooter from '../components/LinkFooter'

  export default {
    name : 'ProducerSearchInfo',
    props:["data"],
    data(){
        return{
            startDate: null,
            endDate: null,
        }
    },
    methods:{
        
    },

  }
</script>

<style>

</style>
