<template>
  <v-container>
    <v-row>
      <v-col cols="12">
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
              <v-btn
                block
                elevation="12"
                large
                color="#1E7C4B"
                @click="onClickSave"
              >
                Save
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" v-for="(task, i) in taskList" :key="i">
        <v-card elevation="13" outlined> 
          <v-card-text>
            <div :class="task.isDone ? ['text-decoration'] : ''">
              {{ task.content }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
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
    onClickSave() {
      if (this.taskContent !== "") {
        let task = {
          content: this.taskContent,
          isDone: false
        }
        this.taskList.push(task);
        this.taskContent = "";
      }
    },

    finishTask(idx) {
      this.taskList[idx].isDone = !this.taskList[idx].isDone;
    }
  },
};
</script>

<style scoped>
  .text-decoration {
    text-decoration: line-through;
  }
</style>