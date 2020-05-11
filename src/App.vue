<template>
  <v-app>
    <v-content>
      <tasks/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import hello from '@/components/HelloWorld'
import tasks from '@/components/task.vue'
export default {
  name: 'App',

  components: {
    tasks
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
