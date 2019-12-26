<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span class="mr-1">hot-house</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/tarrow/hot-house/"
        target="_blank"
        text
      >
        <span class="mr-2">Source Code</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-layout
      text-center
      wrap
    >
      <v-flex>
        <div class="my-2">
          <v-btn x-large color="success" v-on:click="heatingOn" dark>Heating On</v-btn>
        </div>
        <div class="my-2">
          <v-btn x-large color="failure" v-on:click="heatingOff" dark>Heating Off</v-btn>
        </div>
      </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    heatingOn: () => {
      axios.get('http://192.168.1.127:8080/on');
    },
    heatingOff: () => {
      axios.get('http://192.168.1.127:8080/off');
    },
  }
};
</script>
