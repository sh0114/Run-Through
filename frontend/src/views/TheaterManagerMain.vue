<template>
    <div id="TMmainpage">
        <h1>극장관계자</h1>
        <v-container fluid grid-list-md>
          <v-layout row wrap justify-center>
            <v-flex d-flex xs6 sm6 md4>
              <v-sheet height="500" v-on:click="goBookingCalendar">
                <!-- <h3>{{ month }}월</h3> -->
                <v-calendar
                  ref="calendar"
                  v-model="start"
                  :type="type"
                  :end="end"
                  color="primary"
                  :short-months="false"
                ></v-calendar>
              </v-sheet>
            </v-flex>

            <v-flex d-flex xs6 sm6 md4>
              <v-card v-on:click="goStatistics">통계 요약</v-card>
            </v-flex>
            <br><br>
          </v-layout>
          <v-layout wrap justify-center>
            <v-flex d-flex xs12 sm12 md6>
              <v-card height="100" v-on:click="goReview">후기 보러가기</v-card>
            </v-flex>
          </v-layout>
        
        </v-container>
        
        <LinkFooter />
    </div>
</template>

<script>

  import LinkFooter from '../components/LinkFooter'

  export default {
    components: {
      LinkFooter,
    },
    props: {
      month: Number
    },
    methods:{
      goBookingCalendar(){
          this.$router.push('/theater-manager/bookingCalendar')
      },
      goStatistics(){
          this.$router.push('/theater-manager/statistics')
      },
      goReview(){
          this.$router.push('/theater-manager/review')
      }
    }

  }
</script>

<style>

</style>

