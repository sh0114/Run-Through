<template>
    <div id="TMmainpage">
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
              <img :src="require('@/assets/images/03/graph_1.png')" v-on:click="goStatistics"/>
            </v-flex>
            <br><br>
          </v-layout>
          <v-layout wrap justify-center>
            <v-flex d-flex xs12 sm12 md6>

              <h2 style="margin-top:30px;curser:pointer;" v-on:click="goReview">Go to Review Page</h2>
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

