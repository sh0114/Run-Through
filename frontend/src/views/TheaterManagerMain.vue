<template>
    <div id="TMmainpage">
        <v-container fluid grid-list-md>
          <v-layout row wrap justify-center style="margin-top:100px">
            <v-flex d-flex xs6 sm6 md6>
              <!-- <v-sheet height="500" v-on:click="goBookingCalendar">
                <v-calendar
                  ref="calendar"
                  v-model="start"
                  :type="type"
                  :end="end"
                  color="primary"
                  :short-months="false"
                ></v-calendar>
              </v-sheet> -->
              <img style="height:500px;cursor:pointer;" v-on:click="goBookingCalendar" :src="require('@/assets/images/05/theater.png')"/>
            </v-flex>

            <v-flex d-flex xs6 sm6 md3>
              
              <img style="height:500px" :src="require('@/assets/images/05/memo.png')"/>
            </v-flex>
            <br><br>
          </v-layout>
          <v-layout wrap justify-center>
              <img style="width:80%;height:auto;cursor:pointer;" :src="require('@/assets/images/05/datavisualizing.png')" v-on:click="goStatistics"/>
          </v-layout>
          <v-layout wrap justify-center>
            <v-flex d-flex xs12 sm12 md6>

              <v-btn style="margin-top:30px;background-color:#2044AA;color:white;text-align:center;" v-on:click="goReview">Go to Review Page</v-btn>
            </v-flex>
          </v-layout>
        
        </v-container>
        
    </div>
</template>

<script>


  export default {
    components: {
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

