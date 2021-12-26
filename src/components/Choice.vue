<template>
  <v-card
    class="d-flex align-start flex-column pa-10 mainFont"
    max-width="600"
    min-height="700"
    outlined
    style="text-align: center; border-radius: 10px;"
    @click="$emit('clicked', heading)"
    
  >
    <h1 class="mx-auto">{{ heading }}</h1>
    <v-icon class="mx-auto" style="font-size: 400px"> {{ icon }} </v-icon>
    <p>
      {{ description }}
    </p>
  </v-card>
</template>

<style lang="scss" scoped>

h1 {
    font-size: 40px;
}

</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Choice',

  props: {
    heading: String,
    icon: String,
    description: String,
  },

  data: () => ({}),
})
</script>
