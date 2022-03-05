<template>
  <v-card elevation="13" outlined @click="toggle(task)">
    <v-card-text>
      <div :class="task.isDone ? 'text-decoration' : 'task-text'">
        {{ task.taskContent }} = {{ task.encode }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'TaskItem',
  props: {
      task: Object,
  },
  methods: {
    ...mapMutations({
        toggle: 'toggle',
    })
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