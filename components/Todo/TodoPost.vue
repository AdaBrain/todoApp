<template>
  <v-card elevation="13" outlined>
    <v-card-title>TodoApp by AdaBrain</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-textarea
          filled
          name="input-7-4"
          label="Please type your important tasks!"
          value=""
          v-model="taskContent"
        ></v-textarea>
      </v-row>
      <v-row>
        <v-btn block elevation="12" large color="#1E7C4B" @click="onClickSave">
          Save
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TodoPost',
  data: () => ({
      taskContent: ''
  }),
  methods: {
    onClickSave() {
      if (this.taskContent !== '') {
        let task = {
          content: this.taskContent,
          isDone: false,
        };
        this.taskList.push(task);
        this.taskContent = '';
      }
    },
  },
};
</script>

<style>
</style>