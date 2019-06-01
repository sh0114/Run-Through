<template>
    <div id="pd_theater_info">
        <h1>공연장정보 페이지</h1>
        <v-flex xs16>
            <v-card dark color="indigo lighten-2">
            <v-card-text id="theater_name">공연장이름</v-card-text>
            </v-card>
        </v-flex>
       
        <v-card>
            <v-layout>
                <v-flex xs5>
                    <v-carousel 
                        cycle=false
                        delimiter-icon="stop"
                        prev-icon="keyboard_arrow_left"
                        next-icon="keyboard_arrow_right">
                            <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                            ></v-carousel-item>
                    </v-carousel>
                </v-flex>
                
                <v-flex xs7>
                    <v-card-title primary-title>
                        <div id="info">
                            <div>위치 : <span>{{theater_info.location}}</span></div>
                            <div>시간 : {{theater_info.time}}</div>
                            <div>대관가능일 : <span>{{theater_info.date}} </span></div>
                        </div>
                    </v-card-title>
                </v-flex>
            </v-layout>
                
            <v-divider light></v-divider>
            
            <v-card-actions id="register_btn_action">
                <v-dialog v-model="registerForm" persistent max-width="600px">
                    <v-btn absolute right id="register_btn" slot="activator" color="blue lighten-1">예약하기</v-btn>
                    <v-card>
                    <v-form ref="form">
                            <v-card-title>
                            <span class="headline">공연장 예약</span>
                            </v-card-title>
                            
                            <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>

                                <v-flex xs12 sm4>
                                    <v-autocomplete
                                    :items="['클래식','발레','판소리', '콘서트', '토크쇼', '뮤지컬', '연극', '오페라']"
                                    label="장르"
                                    v-model="theater_info.category"
                                    :rules="[v => !!v || '장르를 선택해 주세요']"
                                    color="red"
                                    required
                                    ></v-autocomplete>
                                </v-flex>

                                <v-flex xs12 sm4>
                                    <v-autocomplete
                                    :items="['서울특별시', '경기도', '인천광역시', '강원도', '대전광역시', '제주도', '광주광역시', '부산광역시', '울산광역시', '대구광역시']"
                                    label="지역"
                                    v-model="theater_info.area"
                                    :rules="[v => !!v || '지역을 선택해 주세요']"
                                    color="red"
                                    required
                                    ></v-autocomplete>
                                </v-flex>

                                <v-flex xs12 sm4>
                                    <v-autocomplete
                                    :items="['0~50석', '50~100석', '100~200석', '200~400석', '400~600석', '600~800석', '800~1000석', '1000석 이상']"
                                    label="규모"
                                    v-model="theater_info.size"
                                    :rules="[v => !!v || '규모를 선택해 주세요']"
                                    color="red"
                                    required
                                    ></v-autocomplete>
                                </v-flex>
                                <section id="date_picker">
                                <v-flex xs12 sm6 md4>
                                    <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="date"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on }">
                                        <v-text-field
                                            v-model="date"
                                            label="공연시작일"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="date" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </v-flex>
                                <section>
                                </v-layout>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="blue darken-1" flat v-on:click="registerForm = false">닫기</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat v-on:click="reset">초기화</v-btn>
                                <v-btn color="blue darken-1" flat v-on:click="submit">예약</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
            </v-card-actions>
            
        </v-card>


    </div>
</template>

<script>

  
  export default {
    components: {
    },

    methods :{
        onClickRegister(){
            alert("예약하기버튼");
        },
        
        submit () {
            if (this.$refs.form.validate()) {
                alert(this.$refs.form)      
            }
        },
        reset () {
            return this.$refs.form.reset()
        },
    },

    data () {
      return {

        picker: new Date().toISOString().substr(0, 10),

        registerForm: false,

        register_info: {
            category: '',
            term:'',
            size:'',
            area:'',
        },

        theater_info:{
            location : "위치",
            time: "날짜",
            date: "시간"
        },
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }

  }
</script>

<style>
#pd_theater_info{
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
}
#theater_name{
    font-size: 35px;
}

#info{
    font-size: 20px;
}

#register_btn_action{
    height: 155px;
    margin-top:-70px;
    margin-bottom: 10px
}

#register_btn{
    width:400px;
    height: 70px;
    font-size: 35px;
}

#date_picker{
    height: 270px;
}

</style>
