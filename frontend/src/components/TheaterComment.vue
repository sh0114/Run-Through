<template>
  <v-card>
    <v-card-text>
      <v-data-table
        hide-actions
        :headers="headers"
        :items="reviews"
        :pagination.sync="pagination"
        rows-per-page-text
        class="elevation-1"
      >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.postNumber }}</td>
        <td class="text-xs-center">{{ props.item.writer }}</td>
        <td class="text-xs-center">{{ props.item.content }}</td>
        <td class="text-xs-center">{{ props.item.createAt }}</td>
        <v-rating readonly v-model="props.item.starRate"></v-rating>
      </template>
      </v-data-table>

      <v-card-text class="text-xs-center">
        <v-pagination color="cyan darken-1" v-model="pagination.page" :length="pages"></v-pagination>
      </v-card-text>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    name: "TheaterComment",
    data: function(){
        return{
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
            headers: [
                { text: '글번호', sortable: false, value: 'postNumber', align: "center" },
                { text: '작성자', sortable: false, value: 'writer', align: "center" },
                { text: '내용', sortable: false, value: 'content', align: "center" },
                { text: '작성시간', sortable: false, value: 'createAt', align: "center" },
                { text: '별점', sortable: false, value: 'starRate', align: "center" },
            ],
            reviews:[
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
            ],

            pagination: {
                rowsPerPage: 10,
                totalItems: 5,
                page: 1,
                sortBy:'postNumber',
                descending: true
            }
        }
    },

    computed: {
        pages() {
            if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null)
                return 0;
            return Math.ceil(
                this.pagination.totalItems / this.pagination.rowsPerPage
            );
        }
    }

}
</script>

<style>
</style>