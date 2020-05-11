<template>
<div>
    <div>
    <v-container fluid class="home_img" >
        <h1>MY DAY</h1>
        <p class="headline">{{ day }}, {{ date1 }}{{ ord }} {{ year }}</p>
        <div>
        <v-container>
            <tasksDetails v-bind:todos="todos"/>
            <template>              
                <div> 
                    <v-btn fab color="purple" dark large absolute bottom right @click="dialog = !dialog">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </div>
                
                <v-dialog  v-model="dialog" max-width="700px">
                    <v-card>
                        <v-toolbar color="pink darken-4">
                            <v-toolbar-title>ADD TASKS</v-toolbar-title>
                                <v-spacer></v-spacer>
                                    <v-btn small color="transparent" @click="dialog = false">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <v-row justify="center">
                                <v-col cols="12" sm="4">
                                    <v-text-field label="Task Id" v-model="id" solo outlined></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="8">
                                    <v-text-field label="Add Task" v-model="newTodos" solo outlined></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col cols="12" sm="10">
                                    <v-textarea label="task description"  v-model="descp" outlined auto-grow rows="2" row-height="20" solo></v-textarea>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col cols="12" sm="6">
                                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-model="date" label="Due Date" outlined readonly v-on="on"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="date" scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                        <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                                        </v-menu>
                                </v-col>  
                            </v-row>
                            <v-row justify="center">
                                <v-btn rounded color="primary" @click="addtodo">Add Task</v-btn>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </template>
        </v-container>
        </div>
    </v-container>
    </div>
</div>
</template>

<script>
import tasksDetails from '@/components/tasksDetails.vue'

export default {
        name: 'task', 
        components:{
          tasksDetails  
        },   
       data () {
     return {
         day: this.todoDay(),
        date1: new Date().getDate(),
        ord: this.nth(new Date().getDate()),
        year: new Date().getFullYear(),
       dialog: false, 
       date: new Date().toISOString().substr(0, 10),
        menu2: false,
        // todo:[],
        todos:[],
        newTodos:'',
        descp:'',
        id:'',
        // show:false
     }
   },
   methods:{
    addtodo(){
        this.todos.push({
            id: this.id,
            title: this.newTodos,
            description: this.descp,
            Due_Date: this.date,
            show: this.show
        });
        this.newTodos='';
        this.descp='';
        this.id='';
    },
    todoDay() {
      var d = new Date();
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      return days[d.getDay()];
    },
    nth(d) {
      if(d>3 && d<21) return 'th';
      switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    },  
}
}
</script>

<style scoped>
.home_img{
    background: url('../assets/home_img.webp');
    background-repeat:no-repeat;
    background-size: cover;
    width: 100%;
    height: 700px;
}
.text-center{
    margin-top:550px;
}
.done {
  text-decoration: line-through;
}
.headline{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
    font-size:20px;
    color:mediumblue;
    text-align: center;
}

h1{
    text-align: center;
    font-size: x-large;
    font-style: italic;
}

</style>