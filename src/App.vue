<template>
  <v-app>
    <v-container
      class="d-flex justify-center align-start pt-10"
      fill-height
      fluid
      :style="{ background: 'rgba(0, 0, 0, 0.01)' }"
    >
      <vue-particles
        style="position: absolute; left: 0; top: 0; width: 100%; height: 100vh;"
        color="#000000"
      ></vue-particles>
      <div v-if="page == 0">
        <v-row justify="center">
          <h1 class="text-h2">What brings you here?</h1></v-row
        >
        <v-row class="mt-10" justify="center">
          <Choice
            :heading="choices[0].heading"
            :description="choices[0].description"
            :icon="choices[0].icon"
            @clicked="chosen"
          ></Choice>
          <Choice
            style="margin-left: 10px"
            :heading="choices[1].heading"
            :description="choices[1].description"
            :icon="choices[1].icon"
            @clicked="chosen"
          ></Choice
        ></v-row>
      </div>
      <div v-if="page == 1">
        <v-row justify="center">
          <h1 class="text-h2">When did this happen?</h1></v-row
        >
        <v-row class="mt-10" justify="center">
          <v-date-picker v-model="picker"></v-date-picker>
        </v-row>
        <v-row class="mt-5" justify="center">
          <v-btn @click="pickedDate()"> Continue </v-btn>
        </v-row>
      </div>

      <div v-if="page == 2">
        <v-btn
          style="position: absolute; top: 10px; left: 10px"
          color="error"
          @click="back"
          ><v-icon>mdi-arrow-left</v-icon></v-btn
        >
        <v-row justify="center">
          <flip-countdown
            style="transform: scale(2); margin-top: 50px"
            :deadline="deadline"
          ></flip-countdown>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Choice from './components/Choice.vue'
import FlipCountdown from 'vue2-flip-countdown'

export default Vue.extend({
  name: 'App',

  components: {
    Choice,
    FlipCountdown,
  },

  data: () => ({
    choices: [
      {
        heading: 'Close Contact',
        description:
          'Close contact is defined as someone who was within 6 feet for a total of 15 minutes or more within 2 days prior to illness onset, regardless of whether the contact was wearing a mask.',
        icon: 'mdi-account-multiple',
      },
      {
        heading: 'Positive Test',
        description:
          'A test detected the virus, and you are very likely to have an infection and should stay home or isolate for 10 days, wear a mask if you could have contact with others, and avoid indoor gatherings to reduce the risk of spreading disease to someone else.',
        icon: 'mdi-account-plus',
      },
    ],
    reason: '',
    page: 0,
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),

  created() {
    if (localStorage.date) {
      this.picker = localStorage.date
      this.page = 2
      if (localStorage.reason) {
        this.reason = localStorage.reason
      }
    }
  },

  methods: {
    chosen(pick: string) {
      this.page++
      this.reason = pick
      localStorage.reason = this.reason
    },
    pickedDate() {
      this.page++
      localStorage.date = this.picker
    },
    back() {
      localStorage.clear()
      this.page = 0
    },
  },

  computed: {
    deadline() {
      var result = ''
      var date = new Date(this.picker + ' 00:00:00')
      if (this.reason === this.choices[0].heading) {
        date.setDate(date.getDate() + 14)
      } else {
        date.setDate(date.getDate() + 10)
      }
      result +=
        date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
      result += ' 00:00:00'
      return result
    },
  },
})
</script>
