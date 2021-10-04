Vue.component('booking',{
    template:`

                <li class="booking" v-bind:class="time" v-bind:style="prioritized ? 'backgroundColor: red': ''">
                    <p class="timeInBooking">{{time}}</p>
                    <button class="buttonTitle" v-on:click="changeOptions"><p>{{title}}</p></button>
                    <div class="option" v-if="options == true">
                      <button v-on:click="$emit('delete')">Ta bort</button>
                      <button v-on:click="changePrioritized">Prioritera</button>
                    </div>
                </li>
              `,
    methods: {
        changeOptions: function (){
            if(this.options == false){
                this.options = true
            }else{
                this.options = false
            }
        },
        changePrioritized: function (){
            if(this.prioritized == false){
                this.prioritized = true
            }else{
                this.prioritized = false
            }
        }
    },
    props: ['title', 'time', 'options', 'prioritized']
})
new Vue({
    el: '#app',
    data: {
        newTitle:'',
        newTime:'',
        newDay:'',
        nextId: 5,
        bookings:[
            {
                id: 1,
                time: '07',
                day: 'monday',
                title: 'Att Göra',
                options: false,
                prioritized: false
            },
            {
                id: 2,
                time: '06',
                day: 'friday',
                title: 'Att Göra',
                options: false,
                prioritized: false
            },
            {
                id: 3,
                time: '08',
                day: 'friday',
                title: 'Att Göra',
                options: false,
                prioritized: false
            },        {
                id: 4,
                time: '07',
                day: 'friday',
                title: 'Att Göra',
                options: true,
                prioritized: false
            }
        ],
        times: ['06','07','08','09','10','11','12','13','14','15','16','17','18'],
        days:['time', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        dayInWeek:'',
        userName:'',
        newUserName:''
    },
    methods:{
        addBooking: function (){
            this.bookings.push({
                id: this.nextId++,
                time: this.newTime,
                day: this.newDay,
                title: this.newTitle,
                options: false,
                prioritized: false
            })
            this.newTime='',
                this.newDay='',
                this.newTitle=''
        },
        setUserName: function (){
            this.userName = this.newUserName
        }

    }
})