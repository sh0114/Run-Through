<template>
    <div id="producerSearch">
      
        <v-layout class="psc" column>
        <h1>기획자_검색</h1>
          <v-layout row>
            <v-flex xs12>
              <v-card dark tile flat color="error">
                <v-card-text>원하는 공연장을 선택하세요</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-form ref="form" >
            <v-layout row>
              <v-flex xs6 class="appData">
                <v-select
                  :items="['클래식', '발레', '판소리', '콘서트', '토크쇼', '뮤지컬', '연극', '오페라']"
                  label="어떤 장르의 공연인가요?"
                  required
                  v-model="event_info.category"
                  :rules="[v => !!v || '항목을 선택해 주세요']"
                ></v-select>
              </v-flex>
              <v-flex xs6 class="addData">
                <v-select
                  :items="['0~50석', '50~100석', '100~200석', '200~400석', '400~600석', '600~800석', '800~1000석', '1000석 이상']"
                  label="예상 좌석 수는 몇석인가요?"
                  required
                  v-model="event_info.size"
                  :rules="[v => !!v || '항목을 선택해 주세요']"
                ></v-select>
              </v-flex>
            </v-layout>  
            <v-layout row>
                <v-flex xs6 class="appData">
                  <v-select
                    :items="['하루', '2-3일', '3-5일', '일주일 이상', '한달 이상']"
                    label="예상 공연기간은 며칠인가요?"
                    required
                    v-model="event_info.term"
                    :rules="[v => !!v || '항목을 선택해 주세요']"
                  ></v-select>
                </v-flex>
                <v-flex xs6 class="addData">
                  <v-select
                    :items="['서울특별시', '경기도', '인천광역시', '강원도', '대전광역시', '제주도', '광주광역시', '부산광역시', '울산광역시', '대구광역시']"
                    label="어느 도시에서 공연하실 예정인가요?"
                    required
                    v-model="event_info.location"
                    :rules="[v => !!v || '항목을 선택해 주세요']"
                  ></v-select>
                </v-flex>
            </v-layout> 
          </v-form>
          <v-btn color="green darken-1" flat @click="search">검색하기</v-btn>
          <v-btn color="green darken-1" flat @click="goPDTheaterInfo">공연장 정보 보기</v-btn>        
        <!-- </v-container>

        <v-container class="psc" pa-0> -->
          <v-layout row>
            <v-flex xs6>
              <v-card dark tile flat>
                <v-card-text>추천 공연장</v-card-text>
              </v-card>
                <v-layout row wrap>
                  <!-- style="height: 300px" class="scroll-y" -->
                  <v-flex >
                  
                    <v-card v-for="theater in theaters" class="theater">
                      <router-link
                        class="li"
                        :to="{name:'ProducerTheaterInfo', params:{theaterId:theater.id}}"
                        @click="go">
                        <v-layout>       
                            <v-flex xs6>
                              <v-img
                                :src= "theater.img"
                                height="150px"
                                @click="goPDTheaterInfo"
                              ></v-img>
                            </v-flex>
                            <v-flex xs6>
                              <v-card-title primary-title>
                                <div>
                                  <div class="headline">{{theater.name}}</div>
                                  <div>위치: {{theater.location}}</div>
                                </div>
                              </v-card-title>
                            </v-flex>
                          <v-layout>
                        </router-link>
                      </v-card>
                  </v-flex>
                </v-layout>
            </v-flex>
           
            <v-flex xs6>
              <v-card dark tile flat>
                <v-card-text>유사 공연 통계 자료</v-card-text>
              </v-card>
                <v-layout column>
                  <v-card class="theater">
                      <v-img
                          :src= "require('@/assets/images/03/graph_1.png')"
                        ></v-img>
                  </v-card>
                  <v-card class="theater">
                      <v-img
                          :src= "require('@/assets/images/03/graph_2.png')"
                        ></v-img>
                      
                  </v-card>
                </v-layout>
            </v-flex>
          </v-layout>
        </v-layout>
    </div>
</template>

<script>

  import LinkFooter from '../components/LinkFooter'
  import producerSearchInfo from '../components/ProducerSearchInfo' 
  export default {
    components: {
      LinkFooter,
      producerSearchInfo
    },
    methods:{
        reset(){
          this.$refs.form.reset()
        },
        goPDTheaterInfo(){
            
            this.$router.push('/producerTheaterInfo')

        },
        search(){
          if(this.$refs.form.validate()){
            if(this.event_info.size=="0~50석") {
              this.event_info.min_size=0;
              this.event_info.max_size=50;
            }
            else if(this.event_info.size=="50~100석") {
              this.event_info.min_size=50;
              this.event_info.max_size=100;
            }
            else if(this.event_info.size=="100~200석") {
              this.event_info.min_size=100;
              this.event_info.max_size=200;
            }
            else if(this.event_info.size=="200~400석") {
              this.event_info.min_size=200;
              this.event_info.max_size=400;
            }
            else if(this.event_info.size=="400~600석") {
              this.event_info.min_size=400;
              this.event_info.max_size=600;
            }
            else if(this.event_info.size=="600~1000석") {
              this.event_info.min_size=600;
              this.event_info.max_size=800;
            }
            else if(this.event_info.size=="1000석 이상") {
              this.event_info.min_size=1000;
              this.event_info.max_size=999999999;
            }

            alert(this.event_info.location+""+this.event_info.term+""+this.event_info.category+""+this.event_info.min_size+""+this.event_info.max_size);
          
            this.$http.get('/api/search/'+this.event_info.location+'/'+this.event_info.min_size+'/'+this.event_info.max_size)
            .then((result)=>{
              this.theaters = result.data
              console.log(this.theaters)
            })
            .cathch((err)=>{
              console.log(err)
            })
          }
          else{
            alert("항목을 다 채워주세요!")
          }
        },
        go(){
          alert("go")
        }
        
    },
    props:["data"],
    data(){
        return{
            event_info: {
              location:null,
              term:null,
              category:null,
              size:null,
              min_size:null,
              max_size:null,
            },
            startDate: null,
            endDate: null,
            theaters:[
              {
                img: require('@/assets/images/theater1.png'),
                name: "대학로 창조 소극장",
                location: "서울특별시 종로구 창경궁로 259 2층 창조소극장",
                id: 1,
              },
              {
                img: require('@/assets/images/theater2.png'),
                name: "명보 아트홀",
                location: "서울특별시 종로구 을지로동 마른내로 47",
                id: 2,
              },
              {
                img: require('@/assets/images/theater3.png'),
                name: "두산아트센터",
                location: "서울특별시 종로구 연지동 270",
                id: 3,
              },
              {
                img: require('@/assets/images/theater4.png'),
                name: "강동아트센터",
                location: "서울특별시 강동구 상일동 동남로 870",
                id: 4,
              },            
            ]

        }
    },
    created(){
      this.reset()
    }

  }
</script>

<style>
#producerSearch {
    margin-left: 50px;
    margin-right: 50px;
}
.theater{
  margin:10px;
  color:#AB47BC;
  padding:10px;
  text-align: center
}
.li{
    text-decoration: none;
    color:black;
}
.psc{
    margin-left: 50px;
    margin-right: 50px;
    vertical-align: middle;
    margin-top: 50px;
}
</style>

