<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <task-input></task-input>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" v-for="(task, i) in taskList" :key="i">
        <task-item :task="task"></task-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TaskInput from '../components/Task/TaskInput.vue';
export default {
  components: { TaskInput },
  name: "IndexPage",
  data() {
    return {
      taskContent: "",
    };
  },
  computed: {
    taskList() {
      return this.$store.state.taskList;
    }
  }
};
</script>