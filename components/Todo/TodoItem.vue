<template>
  <v-card elevation="13" outlined @click="finishTask(i)">
    <v-card-text>
      <div :class="task.isDone ? ['text-decoration'] : 'task-text'">
        {{ task.content }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["task"],
  methods: {
    finishTask(idx) {
      this.taskList[idx].isDone = !this.taskList[idx].isDone;
    },
  },
};
</script>

<style scoped>
.text-decoration {
  text-decoration: line-through;
  color: red;
}

.task-text {
  color: green;
}
</style>