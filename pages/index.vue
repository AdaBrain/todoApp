<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card elevation="13" outlined>
          <v-card-title>TodoApp by AdaBrain</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="app-description">
                "Please type your important tasks!"
              </div>
            </v-row>
            <v-row>
              <v-textarea
                filled
                name="input-7-4"
                label="Filled textarea"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
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
