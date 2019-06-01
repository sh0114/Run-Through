<template>
  <v-card>
    <v-card-text>
      <v-data-table
        hide-actions
        :headers="headers"
        :items="items"
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
            headers: [
                { text: '글번호', sortable: false, value: 'postNumber', align: "center" },
                { text: '작성자', sortable: false, value: 'writer', align: "center" },
                { text: '내용', sortable: false, value: 'content', align: "center" },
                { text: '작성시간', sortable: false, value: 'createAt', align: "center" },
                { text: '별점', sortable: false, value: 'starRate', align: "center" },
            ],
            items:[
                {
                    postNumber:1,
                    writer:"sunghee",
                    content:"comment1",
                    createAt: "2019-06-01",
                    starRate:5
                },
                {
                    postNumber:2,
                    writer:"sunghee",
                    content:"comment1",
                    createAt: "2019-06-01",
                    starRate:5
                },
                {
                    postNumber:3,
                    writer:"sunghee",
                    content:"comment1",
                    createAt: "2019-06-01",
                    starRate:5
                },
                {
                    postNumber:4,
                    writer:"sunghee",
                    content:"comment1",
                    createAt: "2019-06-01",
                    starRate:5
                },
            ],

            pagination: {
                rowsPerPage: 10,
                totalItems: 4,
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