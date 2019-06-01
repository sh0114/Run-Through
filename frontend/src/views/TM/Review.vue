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
                    details: "제가 기획한 공연과 매우 적합한 공연장이었습니다",
                    rate: 4.5
                },
                {
                    title: "별로였습니다",
                    details: "생각보다 공연 시설이 낡아서 실망했습니다. 공연장 사진도 최신으로 업데이트 해주셨으면 좋겠습니다.",
                    rate: 1.5
                },
                {
                    title: "그럭저럭",
                    details: "그럭저럭 공연을 잘 마친 것 같아 다행입니다. 다음에는 더 적합한 극장으로 추천해주세요",
                    rate: 3.5
                },
                {
                    title: "마케팅에 많은 도움이 되었습니다",
                    details: "제시해주신 마케팅 솔루션으로 정말 성공적으로 공연을 마무리했어요. 너무 감사합니다!",
                    rate: 5.0
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

