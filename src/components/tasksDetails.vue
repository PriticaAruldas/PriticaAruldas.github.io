<template>
    <div>
        <v-dialog v-model="dialog1" max-width="600">
        <v-card class="mx-auto" max-width="600" raised>
            <v-system-bar class="top-bar" color="deep-purple darken-2">
                <v-spacer></v-spacer>
                <v-btn x-small color="grey" @click="dialog1=false"><v-icon>mdi-close</v-icon></v-btn>
            </v-system-bar>

            <v-card-title>
                <v-row>
                    <v-col>
                        <span>Task title: {{this.$route.params.title}} </span>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-row>
                    <v-col>
                        <span>The Id is: {{this.$route.params.id}}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn class="mx-2" fab x-small outlined color="indigo lighten-2">
                            <v-icon>mdi-information</v-icon>
                        </v-btn>
                        <span>Task Description: {{this.$route.params.description}}</span>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col>
                        <v-btn class="mx-2" fab x-small outlined color="indigo lighten-2">
                            <v-icon>mdi-calendar</v-icon>
                        </v-btn>
                        <span>Due Date: {{this.$route.params.Due_date}}</span>
                    </v-col>
                </v-row>
                <v-divider></v-divider> 
                <br>
            </v-card-text>
        </v-card>
        </v-dialog>

        <!---list of tasks--->
        <v-card class="mx-auto" max-width="600">
            <v-toolbar color="blue darken-4">
                <v-toolbar-title class="white--text">My Tasks</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>

            <v-list two-line subheader>
                <v-list-item v-for="todo in todos" :key="todo.title" link>
                    <v-row>
                        <v-col col="12" sm="2">
                            <v-checkbox v-model="todo.done"></v-checkbox>
                        </v-col>

                        <v-col col="12" sm="6" >
                             <v-list-item-content v-bind:class="{done: todo.done}" class="title">
                                     <v-list-item-title>{{ todo.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-col>

                        <v-col col="12" sm="2">
                            <v-list-item-action>
                                <router-link :to="{name:'details_pg', params:{id:todo.id, title:todo.title, description:todo.description, Due_date:todo.Due_Date}}">
                                    <v-btn icon @click="dialog1 = !dialog1">
                                        <v-icon color="blue">mdi-information</v-icon>
                                    </v-btn>
                                </router-link>
                            </v-list-item-action>
                        </v-col>

                        <v-col col="12" sm="2">
                        <v-list-item-action>
                            <v-btn icon v-if="todo.done" @click="removeTodo(i)">
                                <v-icon color="red">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
    
        

</template>

<script>

  

export default {
    props:['todos'],
    data () {
        return{
          dialog1:false  
        }
    },
    methods:{
         removeTodo(index){
        this.todos.splice(index, 1);
    }
    }
}
</script>

<style scoped>
    .mx-auto{
        margin-top: 60px;
    }
    .top-bar{
        height:50%;
    }
    h3{
        display:flex;
        flex:wrap;
    }
    .done {
  text-decoration: line-through;
}
    </style>
