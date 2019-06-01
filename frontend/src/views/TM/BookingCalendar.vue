<template>
    <div id="TMbooking">
        <v-container style="margin-top:100px" fluid grid-list-md>
            <v-layout row wrap justify-center>
                <v-flex d-flex xs6 sm6 md6>
                    <v-sheet height="600">
                        <h2>{{ month }}월</h2>
                        <v-calendar
                            ref="calendar"
                            v-model="selectedDate"
                            :type="type"
                            :end="end"
                            color="primary"
                            :short-months="false">
                            <template v-slot:day="{ date }">
                                <template v-for="day in impossibleMap[date]">
                                    <div :key="day" style="color:red">예약불가</div>
                                </template>
                                <template v-for="day in eventsMap[date]">
                                    <div :key="day" v-html="day.title"></div>
                                </template>
                            </template>
                            
                        </v-calendar>
                        <v-btn @click="showOtherMonths(0)">
                            <v-icon
                            dark
                            left
                            >
                            keyboard_arrow_left
                            </v-icon>
                            Prev
                        </v-btn>
                        <v-btn @click="showOtherMonths(1)">
                            Next
                            <v-icon
                            right
                            dark
                            >
                            keyboard_arrow_right
                            </v-icon>
                        </v-btn>
                    </v-sheet>
                </v-flex>
                <v-flex d-flex xs6 sm6 md4>
                    <!-- 대관일 조정 파트
                        - 예약 불가능 일자 선택
                     -->
                    <v-sheet>
                        <v-btn style="background-color:#F5695F;color:white;" v-on:click="chooseImpossibleDate">대관 가능일 설정</v-btn>
                        <v-btn style="background-color:#F5695F;color:white;" v-on:click="saveDate">저장</v-btn>
                        <v-date-picker 
                            v-if="showDatePicker"
                            multiple
                            v-model="impossible" 
                            :landscape="landscape" 
                            color="#2044AA"
                            :reactive="reactive">
                        </v-date-picker>
                    </v-sheet>
                </v-flex>
            </v-layout>
            <div style="width:80%;margin: 0 auto;margin-top:100px;">
                <v-data-table
                    :headers="eventHeaders"
                    :items="visibleEvents"
                    :pagination.sync="pagination"
                    hide-actions
                    class="eventsTable">
                    <template v-slot:items="props">    
                        <td>{{ props.item.title }}</td>
                        <td class="text-xs-right">{{ props.item.startDate }}</td>
                        <td class="text-xs-right">{{ props.item.endDate }}</td>
                        <td class="text-xs-right">{{ props.item.producer }}</td>
                        <td class="text-xs-right">{{ props.item.genre }}</td>
                    </template>
                </v-data-table>
                <div class="text-xs-center pt-2">
                    <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
                </div>
            </div>
        </v-container>
            
    </div>
</template>

<script>

  export default {
    components: {
    },
    created(){
        // 공연 정보 전부 받아오기

        this.getMonthEvents(this.selectedDate);
    },
    data(){
        
        return {
            landscape: false,
            reactive: false,
            showDatePicker: false,
            isChangeMonth: false,
            selectedDate: new Date().toISOString().substr(0, 10),
            impossible: [
                '2019-05-13',
                '2019-05-14',
                '2019-06-02',
                '2019-06-04',
            ],
            pagination: {
                sortBy: 'title'
            },
            eventHeaders: [
                {
                    text: '공연 제목',
                    align: 'left',
                    value: 'title'
                },
                {
                    text: '시작일',
                    value: 'startDate'
                },
                {
                    text: '종료일',
                    value: 'endDate'
                },
                {
                    text: '기획자',
                    value: 'producer'
                },
                {
                    text: '장르',
                    value: 'genre'
                }
            ],
            events: [
                {
                    title: "플라잉",
                    startDate: "2019-06-03",
                    endDate: "2019-06-31",
                    producer: "(주)페르소나",
                    genre: "뮤지컬"
                },
                {
                    title: "인싸이드",
                    startDate: "2019-05-23",
                    endDate: "2019-06-04",
                    producer: "극단 달팽이주파수",
                    genre: "연극"
                },
                {
                    title: "광대, 1894",
                    startDate: "2019-05-15",
                    endDate: "2019-05-27",
                    producer: "고창농악보존회",
                    genre: "국악"
                },
                {
                    title: "렌드미어 테너",
                    startDate: "2019-06-15",
                    endDate: "2019-07-27",
                    producer: "이매진디아츠팩토리",
                    genre: "연극"
                },
                {
                    title: "메피스토",
                    startDate: "2019-06-17",
                    endDate: "2019-07-15",
                    producer: "(주)메이커스프로덕션",
                    genre: "뮤지컬"
                },
            ],
            visibleEvents: []
        }
    },
    computed: {
        month(){
            return this.selectedDate.slice(5,7);
        },
        impossibleMap(){
            const map = {};
            this.impossible.forEach(day => (map[day] = map[day] || []).push(day));
            return map;
        },
        eventsMap () {
            const map = {};
            this.events.forEach(e => (map[e.startDate] = map[e.startDate] || []).push(e));
            return map;
        }
    },
    watch:{
        selectedDate: function(){
            if(!this.isChangeMonth)
                this.showDailyEvents();
            this.isChangeMonth = false;
        }
    },
    methods:{
        chooseImpossibleDate(){
            // datepicker 보여주기
            this.showDatePicker = !this.showDatePicker;
        },
        saveDate(){
            // 수정된 정보 저장
            alert("저장되었습니다.");

            if(this.showDatePicker)
                this.showDatePicker = false;
            
        },
        showOtherMonths(prevOrNext){
            this.isChangeMonth = true;
            if(prevOrNext == 0)
                this.$refs.calendar.prev();
            else if (prevOrNext == 1)
                this.$refs.calendar.next();
            this.getMonthEvents(this.selectedDate);
        },
        showDailyEvents(){
            this.visibleEvents = [];
            var events = this.events;
            var date = this.selectedDate;
            var startDate, endDate;
            for(var i=0;i<events.length;i++){
                startDate = events[i].startDate;
                endDate = events[i].endDate;
                if (startDate<= date && date <= endDate)
                    this.visibleEvents.push(events[i]);
            }
        },
        getMonthEvents(date){
            this.visibleEvents = [];
            var events = this.events;
            var startDate = date.substr(0,8) + "01";
            var endDate = date.substr(0,8) + "31";
            for(var i=0;i<events.length;i++){
                if ((startDate<=events[i].startDate&&events[i].startDate<=endDate)
                    ||(startDate<=events[i].endDate&&events[i].endDate<=endDate))
                    this.visibleEvents.push(events[i]);
            }
        }
    }
  }
</script>

<style>

</style>

