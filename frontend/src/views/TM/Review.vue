<template>
    <div id="TMreview">
        <h1 style="height:100px">후기 페이지</h1>

        <div style="height:70px">
            <h3>극장 평점</h3>
            <v-rating
                v-model="getAvgRate"
                :half-increments="true"
                :readonly="true"
            />
        </div>
        
        <v-expansion-panel style="width:80%;margin: 0 auto;margin-bottom:30px">
            <v-expansion-panel-content
            v-for="review in reviews"
            :key="review.title"
            >
            <template v-slot:header>
                <div v-html="review.title"></div>
                <v-rating align="right"
                    v-model="review.rate" 
                    :half-increments="true"
                    :readonly="true"/>
            </template>
            <v-card>
                <v-card-text v-html="review.details"></v-card-text>
            </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>

    </div>
</template>

<script>


  export default {
    components: {
    },
    data() {
        return {
            reviews: [
                {
                    title: "너무 맘에 들어요",
                    details: "너무너무너무너무너무 맘에 들어요!! 끼아아악!",
                    rate: 4.5
                },
                {
                    title: "솔직히 좀 별로였습니다",
                    details: "생각보다 공연 시설이 낡아서 맘에 안들었어요. 공연장 사진도 최신으로 업데이트 해주세요ㅡㅡ",
                    rate: 1.5
                }
            ]
        }
    },
    computed: {
        getAvgRate(){
            var sum = 0;
            var array = this.reviews;
            for(var i=0;i<array.length;i++){
                sum += array[i].rate;
            }
            return sum/array.length;
        }
    },
    created: {
        // 후기 정보 받아오기
    }
  }
</script>

<style>

</style>

