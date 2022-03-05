<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <todo-post />
      </v-col>
    </v-row>
      
    <v-row>
      <v-col cols="12" v-for="(task, i) in taskList" :key="i">
        <todo-item :task="task" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoPost from '../components/Todo/TodoPost.vue'
import TodoItem from '../components/Todo/TodoItem.vue'

export default {
  name: "IndexPage",
  components: {
    TodoPost,
    TodoItem,
  },
  data() {
    return {
      taskContent: "",
      taskList: [
        {content: "1st task to do", isDone: true},
        {content: "2nd task to do", isDone: false},
      ],
    };
  },
  methods: {

  },
};
</script>