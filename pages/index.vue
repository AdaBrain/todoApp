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
          <v-card-subtitle>
            {{ taskContent }} <br />
            {{ taskList }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" v-for="(task, i) in taskList" :key="i">
        <v-card elevation="13" outlined> 
          <v-card-text>
            {{ task }}
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
      taskList: [],
    };
  },
  methods: {
    onClickSave() {
      if (this.taskContent !== "") {
        this.taskList.push(this.taskContent);
        this.taskContent = "";
      }
    },
  },
};
</script>
