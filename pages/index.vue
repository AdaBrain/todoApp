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
              ></v-textarea>
            </v-row>
            <v-row>
              <v-btn
                block
                elevation="12"
                large
              >
                Save
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
